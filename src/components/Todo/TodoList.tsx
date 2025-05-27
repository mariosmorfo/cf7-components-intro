import { Trash2 } from "lucide-react";

type Todo = {
    text: string;
    id: number;
};

type TodoListProps = {
    todos: Todo[];
    dispatch: React.Dispatch<{ type: "DELETE"; payload: number }>;
};

const TodoList = ({ todos, dispatch }: TodoListProps) => {
    const handleDelete = (id: number) => {
        dispatch({ type: "DELETE", payload: id });
    };

    return (
        <ul className="space-y-2">
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    className="flex justify-between bg-gray-100 p-2 rounded"
                >
                    <span>{todo.text}</span>
                    <button
                        onClick={() => handleDelete(todo.id)}
                        className="text-cf-dark-red hover:underline flex items-center gap-1"
                    >
                        Delete <Trash2 size={16} />
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
