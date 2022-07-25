import {screen, render } from "@testing-library/react";
import { UserContext } from "../../09-useContext/context/UserContext";
import { HomePage } from "../../09-useContext/HomePage";


describe('HomePage', () => {

    const user = {
        id: 1,
        name: "hernan"
    }
    test('debe de mostrar el componente sin el usuario', () => {
        
        render(
            <UserContext.Provider value={{user:null}}>
                <HomePage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText("pre");
        expect(preTag.innerHTML).toBe("null")
    });

    test('debe de mostrar el componente sin el usuario', () => {
        
        render(
            <UserContext.Provider value={{user}}>
                <HomePage />
            </UserContext.Provider>
        );
        //screen.debug();
        const preTag = screen.getByLabelText("pre");
        expect(preTag.innerHTML).toContain("hernan");
        expect(preTag.innerHTML).toContain(user.id.toString());
    });
})