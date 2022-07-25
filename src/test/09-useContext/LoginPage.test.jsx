import {screen, render,fireEvent} from "@testing-library/react";
import { UserContext } from "../../09-useContext/context/UserContext";
import { LoginPage } from "../../09-useContext/LoginPage";


describe('pruebas en LoginPage', () => {

    test('debe de mostrar el componente sin el usuario', () => {
        
        render(
            <UserContext.Provider value = {{user:null}}>
                <LoginPage/>
            </UserContext.Provider>
        );
        //screen.debug();
        const preLabel = screen.getByLabelText("pre");
        expect(preLabel.innerHTML).toBe("null")
    });

    test('debe de llamar el setUser cuando se hace click', () => {

        const setUserMock = jest.fn();
        render(
            <UserContext.Provider value = {{user:null, setUser: setUserMock}}>
                <LoginPage/>
            </UserContext.Provider>
        );
        const buttonElement = screen.getByRole("button");
        fireEvent.click(buttonElement);

        expect(setUserMock).toHaveBeenCalledWith({
            id: 123,
            name: "hernan santos",
            mail: "hernan@gmail.com"
        });
    });
})