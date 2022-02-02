import React from "react";
import { render, screen } from "@testing-library/react";
import CardCartC from "../../components/CardCartC";

const product = {
  name: "Abacate",
  category: "Fruta",
  price: 1,
  quantity: 1,
  img: "nada",
};

describe("CardCartC component", () => {
  test("should be able to render a CardCart", () => {
    render(<CardCartC product={product} />);

    expect(screen.getByText("Abacate")).toBeTruthy();
  });
});
