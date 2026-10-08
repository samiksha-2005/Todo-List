import { useState } from "react";
import { useTodos } from "../store/TodosContext";

const AddToDo = () => {
    const [todo, setTodo] = useState("");
    const { handleAddTodo } = useTodos();

    const handleFormSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!todo.trim()) return;

        handleAddTodo(todo);
        setTodo("");
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddToDo;