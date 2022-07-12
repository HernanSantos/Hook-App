
const initialState = [{
    id:1,
    todo:"Recolectar la piedra del alma",
    done: false
}];

const todoReducer = (state = initialState, action = {}) =>{
    //si el action.type es igual a ... entonces copiar el anterior todo y agregar el newTodo
    //dentro del payload se encuentra el newTodo
    if (action.type === "[TODO] add  todo"){
        return [...state,action.payload]; //evita la mutacion al copiar el anterior
    }

    return state;//en caso de no encontrar la accion devuelve el initialState
}
let todos = todoReducer();

// el todo nuevo a agregar dentro del inicial
const newTodo = {
    id:2,
    todo:"Recolectar la piedra del tiempo",
    done:false
}

// la accion que indica que hacer con el nuevo todo
const addTodoAction = {
    type: "[TODO] add  todo",
    payload: newTodo
}

// se envia el valor inicial + accion a realizar
todos = todoReducer(todos,addTodoAction);

console.log(todos)