import { useState } from "react";


export const TodoAdd = ({imprimirTodo}) => {


    const [description, setDescription] = useState("")    

    const handleInputChange = ({target})=>{
        setDescription(target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description
        }
        imprimirTodo(newTodo);
    
        setDescription("")
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="¿Que hay que hacer?"
                className="form-control"
                name = "todo"
                value={description}
                onChange={handleInputChange}
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-1">
                Agregar
            </button>
        </form>
    )
}
