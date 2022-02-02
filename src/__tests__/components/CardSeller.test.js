import React from "react";
import { render, screen } from "@testing-library/react";
import CardSeller from "../../components/CardSeller";

describe("CardSeller component", () => {
  test("should be able to render a CardSeller", () => {
    render(<CardSeller city="Floripa" name="Zoraide" state="Santa Catarina" />);

    expect(screen.getByText("Floripa")).toBeTruthy();
  });
});
