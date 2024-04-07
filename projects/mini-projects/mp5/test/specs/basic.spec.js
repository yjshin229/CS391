describe("E2E basics", () => {
  it("should open the homepage and verify the title", async () => {
    await browser.url("http://localhost:3000/");
    expect(await browser.getTitle()).toBe("Hotel Reviews");
  });
});
