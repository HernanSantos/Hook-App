import { useForm } from "../../hooks/useForm";
import {renderHook} from "@testing-library/react"
import { act } from "react-dom/test-utils";

describe('pruebas en useForm', () => {
    const initialForm = {
        name: "hernan",
        email: "hernan@gmail.com"
    }
    
    test('debe de regresar la info por defecto', () => {
        
        const {result} = renderHook(()=> useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        })
    });

    test('debe de cambiar el nombre del formulario', () => {

        const newValue = "pepe";
        const {result} = renderHook(()=> useForm(initialForm));
        const {onInputChange} = result.current;

        act(()=>{
            onInputChange({target:{name:"name",value:newValue}});
        });

        expect(result.current.name).toBe(newValue);

    });
});