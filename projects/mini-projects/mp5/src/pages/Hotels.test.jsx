import React from "react";
import { test, describe, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Hotels from "./Hotels";
import HotelsContext from "../context/HotelsContext";

describe("Hotels component tests", () => {
  test("The Hotels component should render", async () => {
    const mockFunction = vi.fn();

    const wrapper = ({ children }) => (
      <HotelsContext.Provider
        value={{
          loading: true,
          error: "",
          hotels: [],
          fetchHotels: mockFunction,
        }}
      >
        {children}
      </HotelsContext.Provider>
    );

    render(<Hotels />, { wrapper });

    const loadingElement = await screen.findByText("Loading...");
    expect(loadingElement).to.exist;
    await waitFor(() => expect(mockFunction).toHaveBeenCalledOnce());
  });
});

test("The Hotels component should render a list of hotels", async () => {
  const wrapper = ({ children }) => (
    <BrowserRouter>
      <HotelsContext.Provider
        value={{
          loading: false,
          error: null,
          hotels: [
            { id: 1, title: "Test hotel 1", thumbnail: "" },

            { id: 2, title: "Test hotel 2", thumbnail: "" },
          ],
          fetchHotels: vi.fn(),
        }}
      >
        {children}
      </HotelsContext.Provider>
    </BrowserRouter>
  );

  render(<Hotels />, { wrapper });

  const hotel1Element = screen.queryByText("Test hotel 1");
  expect(hotel1Element).to.be.ok;
  expect(screen.getAllByRole("link").length).toBe(2);
});
