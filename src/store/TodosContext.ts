import { createContext, useContext } from "react";

export type Todo = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
};

export type TodosContext = {
    todos: Todo[];
    handleAddTodo: (task: string) => void;
    toggleTodoAsCompleted: (id: string) => void;
    handleDeleteTodo: (id: string) => void;
};

export const todosContext = createContext<TodosContext | null>(null);

export const useTodos = () => {
    const todosConsumer = useContext(todosContext);

    if (!todosConsumer) {
        throw new Error("useTodos used outside of Provider");
    }

    return todosConsumer;
};