import { BsFillClipboard2CheckFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

interface Todo {
    title: string;
    desc: string;
    completed: boolean;
} 

function TodoItem({todo}: { todo: Todo }) {
    const itemCompleted = todo.completed ? `completed` : `incomplete`;
    
    return (
        <li className="todo-items">
            <div className={`todo-content ${itemCompleted}`}>
                <h3 className="todo-title">{todo.title}</h3>
                <p className="todo-desc">{todo.desc.length > 75 ? todo.desc.substring(0, 75) + "..." : todo.desc}</p>
            </div>
            <div className="todo-icon-actions">
                <button className="icon"><BsFillClipboard2CheckFill /></button>
                <button className="icon"><FaEdit /></button>
                <button className="icon"><FaTrash /></button>
                <button className="icon"><FaEye /></button>
            </div>
        </li>
    )
};

export default TodoItem;