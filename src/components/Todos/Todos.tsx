import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";

const todos = [
  {
    title: "Todo title 1",
    desc: "Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Fusce fermentum. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Suspendisse feugiat."
  },
  {
    title: "Todo title 2",
    desc: "Praesent nec nisl a purus blandit viverra. Maecenas vestibulum mollis diam. In consectetuer turpis ut velit. Sed in libero ut nibh placerat accumsan. Integer tincidunt."
  },
  {
    title: "Todo title 3",
    desc: "Vivamus in erat ut urna cursus vestibulum. Vestibulum suscipit nulla quis orci. Donec venenatis vulputate lorem. Vivamus euismod mauris. Fusce vel dui."
  },
  {
    title: "Todo title 4",
    desc: "Donec vitae sapien ut libero venenatis faucibus. Vivamus elementum semper nisi. Aliquam erat volutpat. Suspendisse feugiat. In hac habitasse platea dictumst."
  },
  {
    title: "Todo title 5",
    desc: " Donec posuere vulputate arcu. Suspendisse feugiat. Nulla sit amet est. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo."
  }
];

type TodoItemType = {
  title: string;
  desc: string;
};

const TodoItem = ({title, desc}: TodoItemType) => {
  return (
    <li>
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

const Todos = () => {
  return (
    <div className="todos">
      <div className="todos__inner">
        <button className="todos__button">Add Todo</button>
        <ul className="todos__list">
          {todos.map((todo) => (
            <TodoItem title={todo.title} desc={todo.desc} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Todos;