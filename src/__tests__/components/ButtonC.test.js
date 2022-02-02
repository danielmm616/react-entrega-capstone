import React from "react";
import { render, screen } from "@testing-library/react";
import ButtonC from "../../components/ButtonC";

describe("ButtonC component", () => {
  test("should be able to render a Button", () => {
    render(<ButtonC bg="green.300" text="Test" />);

    expect(screen.getByText("Test")).toBeTruthy();
  });
});
