import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { vi } from "vitest";
import { PLAYER1 } from "../../../../src/app/core/constants/constants";
import { CELL } from '../../../../src/app/core/interfaces/game.interface';
import { rgbaToHex } from '../../../../src/app/core/utils/tests';
import Box from "../../../../src/app/ui/components/Box";


describe("Test de Box", () => {
    // const grid = Array(ROWS).fill(Array(COLS).fill(null))
    const mockHandleClick = vi.fn();
    const value: CELL = null;

    test("Snapshot del Box", () => {
        const { asFragment } = render(<Box value={value} onClick={mockHandleClick} />)
        expect(asFragment).toMatchSnapshot();
    })
    test("Renderiza el Box correctamente", () => {
        const { container } = render(<Box value={value} onClick={mockHandleClick} />)
        expect(container.querySelectorAll(".box").length).toBe(1);
    })
    test("Renderiza el Box con el color correcto", () => {
        const value: CELL = PLAYER1
        const { container } = render(<Box value={value} onClick={mockHandleClick} />)
        const box = container.querySelector(".box__chip");
        const styles = window.getComputedStyle(box!);
        const color = rgbaToHex(styles.backgroundColor);

        expect(color).toBe(value.color);
    })
    test("Llama al método de click del Box", () => {
        const value: CELL = PLAYER1;
        render(<Box value={value} onClick={mockHandleClick} />)
        const box = screen.getByTestId('box')
        fireEvent.click(box!);
        expect(mockHandleClick).toHaveBeenCalledTimes(1);
    })
})
