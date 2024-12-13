import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";


type TodoItemType = {
  title: string;
  desc: string;
  isCompleted: boolean;
};

type TodosType = {
  todos: TodoItemType[];
};


const TodoItem = ({title, desc, isCompleted}: TodoItemType) => {
  let isCompletedClasses;

  if (isCompleted) {
    isCompletedClasses = 'green-bg';
  }

  return (
    <li className={isCompletedClasses}>
      <div className="todo-content">
        <h3 className="todo-title">{title}</h3>
        <p className="todo-desc">{desc}</p>
      </div>
      <div className="todo-actions">
        <button><FaEdit /></button>
        <button><MdDelete /></button>
        <button><FaEye /></button>
      </div>
    </li>
  )
}

const Todos = ({ todos }: TodosType) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>My todo list</h1>
      <div className="todos">
        <div className="container">
        <button className="todos__button">Add Todo</button>
        <ul className="todos__list">
          {todos.map((todo) => (
            <TodoItem title={todo.title} desc={todo.desc} isCompleted={todo.isCompleted}/>
          ))}
        </ul>
      </div>
    </div>
    </>
  )
}

export default Todos;