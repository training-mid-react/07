import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { vi } from "vitest";
import { PLAYER1 } from "../../../../src/app/core/constants/constants";
import { IPlayer } from "../../../../src/app/core/interfaces/player.interface";
import Player from "../../../../src/app/ui/components/Player";

describe("Test de Player", () => {
    const mockHandleChangeInput = vi.fn();
    const mockHandleBlurInput = vi.fn();
    const player: IPlayer = PLAYER1;
    const newValue = "Cristian";

    test("Snapshot del Player", () => {
        const { asFragment } = render(<Player player={player} value={newValue} onChangeInput={mockHandleChangeInput} handleBlurInput={mockHandleBlurInput} />)
        expect(asFragment).toMatchSnapshot();
    })

    test("Renderiza el Nombre del Player correctamente", () => {
        render(<Player player={player} value={newValue} onChangeInput={mockHandleChangeInput} handleBlurInput={mockHandleBlurInput} />)
        const playerName = screen.getByText("Player 1");
        expect(playerName).toBeTruthy();
        
    })

    test("Renderiza el Player con el color correcto", () => {
        const { container } = render(<Player player={player} value={newValue} onChangeInput={mockHandleChangeInput} handleBlurInput={mockHandleBlurInput} />)        
        const input = container.querySelector(".player input");
        const color = input?.getAttribute("value");
        expect(color).toBe(player.color);
    })
    test("Llamar al metodo onChangeInput cuando el input cambia", () => {
        render(
            <Player
              player={player}
              value={newValue}
              onChangeInput={mockHandleChangeInput}
              handleBlurInput={mockHandleBlurInput}
            />
          );
      
          // Simula un cambio en el input
          const inputField = screen.getByPlaceholderText("Escribe tu nombre");
          
          fireEvent.change(inputField, { target: { value: "Nuevo nombre del jugador" } });
      
          // Verifica que onChangeInput haya sido llamado con el nuevo valor
          expect(mockHandleChangeInput).toHaveBeenCalledWith('Nuevo nombre del jugador');
          expect(mockHandleChangeInput).toHaveBeenCalledTimes(1);
    })
})