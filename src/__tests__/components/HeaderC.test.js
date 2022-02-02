import React from "react";
import { render, screen } from "@testing-library/react";
import HeaderC from "../../components/HeaderC";

describe("HeaderC component", () => {
  test("should be able to render a HeaderC", () => {
    render(<HeaderC />);

    expect(screen.getByTestId("header-element")).toBeInTheDocument();
  });
});
