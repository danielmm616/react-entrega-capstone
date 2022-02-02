import React from "react";
import { render, screen } from "@testing-library/react";
import CartC from "../../components/CartC";

describe("CartC component", () => {
  test("should be able to render a CartC", () => {
    render(<CartC>{"Teste"}</CartC>);

    expect(screen.getByText("Teste")).toBeTruthy();
  });
});
