import React from "react";
import { render, screen } from "@testing-library/react";
import CardTeam from "../../components/CardTeam";

describe("CardTeam component", () => {
  test("should be able to render a CardTeam", () => {
    render(
      <CardTeam
        description="BRUTO"
        img="nada"
        link="LinkedIn"
        name="Vilsão"
        role="Facilitador"
        roleInitial="Aluno"
      />
    );

    expect(screen.getByText("Vilsão")).toBeTruthy();
  });
});
