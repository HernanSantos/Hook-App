import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../03-examples/MultipleCustomHooks";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

jest.mock("../../hooks/useFetch");
jest.mock("../../hooks/useCounter");

describe('pruebas en MultipleCustomHooks', () => {

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(()=>{
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null 
        });

        render (<MultipleCustomHooks/>);
        expect(screen.getByText("Loading..."))
        expect(screen.getByText("BreakingBad Quotes"))
        
        const nextButton = screen.getByRole("button", {name:"Next quote"});
        expect(nextButton.disabled).toBeTruthy();
    });
    test('debe de mostrar un quote', () => {
        useFetch.mockReturnValue({
            data: [{author: "hernan", quote:"hola mundo"}],
            isLoading: false,
            hasError: null 
        });

        render (<MultipleCustomHooks/>);
        expect(screen.getByText("hola mundo")).toBeTruthy();
        expect(screen.getByText("hernan")).toBeTruthy();

        const nextButton = screen.getByRole("button", {name:"Next quote"});
        expect(nextButton.disabled).toBeFalsy();
    });

    test('debe de llamar a la funcion incrementar', () => {

        useFetch.mockReturnValue({
            data: [{author: "hernan", quote:"hola mundo"}],
            isLoading: false,
            hasError: null 
        });

        render (<MultipleCustomHooks/>);
        const nextButton = screen.getByRole("button", {name:"Next quote"});
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
    });
});