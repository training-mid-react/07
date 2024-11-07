import React from "react";
import { render } from "@testing-library/react";
import Board from '../../../../src/app/ui/components/Board';
import { describe, expect, vi } from "vitest";
import { COLS, ROWS } from '../../../../src/app/core/constants/constants';

describe("Test de Board", () => {
    const grid = Array(ROWS).fill(Array(COLS).fill(null))
    const mockHandleClick = vi.fn();

    test("Test snapshot del Board", () => {
        const { asFragment } = render(<Board grid={grid} handleClick={mockHandleClick} />)
        expect(asFragment).toMatchSnapshot();
    })

    // Renderiza el grid con el numero de columnas y filas correctas
    test("Renderiza el grid con el numero de columnas y filas correctas", () => {
        const { container } = render(<Board grid={grid} handleClick={mockHandleClick} />)
        expect(container.querySelectorAll(".board__row").length).toBe(ROWS);
        expect(container.querySelectorAll(".board__row").length).toBe(ROWS);
    })

})