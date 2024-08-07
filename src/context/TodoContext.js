import {useContext,createContext} from "react"

export const Todocontext = createContext({
    todos: {
        id: 1,
        todo: "Todo msg",
        completed: false,
    },
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},


});

export const useTodo = () => {
    return useContext(Todocontext);
}

export const TodoProvider = Todocontext.Provider;