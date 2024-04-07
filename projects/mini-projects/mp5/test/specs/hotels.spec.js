import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function loadFixture(fixturePath) {
  const filePath = path.join(__dirname, "fixtures", fixturePath);
  const fileContent = await fs.readFile(filePath, "utf-8");
  return JSON.parse(fileContent); // Assuming JSON format for your fixtures
}

describe("WebdriverIO", () => {
  beforeEach(async () => {
    // Load fixture data
    const hotelsData = await loadFixture("../fixtures/hotels.json");
    const hotelData = await loadFixture("../fixtures/hotel.json");

    // Mocking the network requests
    const hotelsMock = await browser.mock(
      "**/PacktPublishing/React-Projects-Second-Edition/hotels",
      {
        method: "get",
      }
    );
    await hotelsMock.respond(hotelsData);

    const hotelMock = await browser.mock(
      "**/PacktPublishing/React-Projects-Second-Edition/hotels/*",
      {
        method: "get",
      }
    );
    await hotelMock.respond(hotelData);

    const reviewsMock = await browser.mock(
      "**/PacktPublishing/React-Projects-Second-Edition/hotels/*/reviews",
      {
        method: "get",
      }
    );
    await reviewsMock.respond([]);
  });
});

describe("E2E Tests for Hotels App", () => {
  it("opens the app and clicks on the first hotel", async () => {
    await browser.url("http://localhost:3000");
    const firstHotelLink = await $("a");
    await firstHotelLink.click();

    await expect(browser).toHaveUrlContaining("hotel");
  });

  it("navigates to the form to add a review", async () => {
    const addReviewButton = await $("[data-cy=addReview]");
    await addReviewButton.click();

    await expect(browser).toHaveUrlContaining("new");
  });

  it("fills in and submits the form", async () => {
    const titleInput = await $('input[name="title"]');
    await titleInput.setValue("Test review");

    const descriptionInput = await $('input[name="description"]');
    await descriptionInput.setValue("Is a test review by WebdriverIO");

    const ratingInput = await $('input[name="rating"]');
    await ratingInput.setValue(4);

    const submitButton = await $("button*=Add Review");
    await submitButton.click();
  });

  it("verifies if the review is added", async () => {
    await browser.pause(600);

    const reviewTitles = await $$("h3");
    let titleFound = false;

    for (const title of reviewTitles) {
      if ((await title.getText()).includes("Test review")) {
        titleFound = true;
        break;
      }
    }

    expect(titleFound).toBe(true);

    const reviewDescriptions = await $$("div");
    let descriptionFound = false;
    for (const description of reviewDescriptions) {
      if (
        (await description.getText()).includes(
          "Is a test review by WebdriverIO"
        )
      ) {
        descriptionFound = true;
        break;
      }
    }
    expect(descriptionFound).toBe(true);
  });
});
