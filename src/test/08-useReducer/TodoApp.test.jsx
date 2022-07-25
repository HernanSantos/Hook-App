import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../08-useReducer/TodoApp";
import { useTodo } from "../../hooks/useTodo";

jest.mock("../../hooks/useTodo");

describe('pruebas en TodoApp', () => {

    useTodo.mockReturnValue({
        todos: [
            {id:1, description: "todo #1",done:false},
            {id:2, description: "todo #2",done:true}
        ],
        todosCount:2,
        pendingTodosCount:1,
        handleDeleteTodo: jest.fn(),
        handleNewTodo: jest.fn(),
        handleToggleTodo: jest.fn()
    });

    test('debe de mostrar el componente correctamente', () => {
        
        render(<TodoApp/>)

        expect(screen.getByText("todo #1")).toBeTruthy();
        expect(screen.getByText("todo #2")).toBeTruthy();
        expect(screen.getByRole("textbox")).toBeTruthy();

    });
})