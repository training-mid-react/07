import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { vi } from "vitest";
import Modal from "../../../../src/app/ui/components/Modal";

describe("Test de Modal", () => {
    const mockPlayAgain = vi.fn();

    test("Snapshot del Modal", () => {
        const { asFragment } = render(<Modal title="Título" subtitle="Subtítulo" playAgain={mockPlayAgain} />)
        expect(asFragment).toMatchSnapshot();
    })

    test("Renderiza el Modal correctamente", () => {
        const { container } = render(<Modal title="Título" subtitle="Subtítulo" playAgain={mockPlayAgain} />)
        expect(container.querySelectorAll(".modal").length).toBe(1);
    })

    test("Renderiza el Modal con el título correcto", () => {
        render(<Modal title="Título" subtitle="Subtítulo" playAgain={mockPlayAgain} />)

         expect(screen.getByText('Título')).toBeTruthy();
    })

    test("Renderiza el Modal con el subtítulo correcto", () => {
        render(<Modal title="Título" subtitle="Subtítulo" playAgain={mockPlayAgain} />)
        expect(screen.getByText('Subtítulo')).toBeTruthy();
    })

    test("Llama al método de click del Modal", () => {
        render(<Modal title="Título" subtitle="Subtítulo" playAgain={mockPlayAgain} />)
        const buttton = screen.getByTestId('modal_button');
        fireEvent.click(buttton);
        expect(mockPlayAgain).toHaveBeenCalledTimes(1);
    })
})