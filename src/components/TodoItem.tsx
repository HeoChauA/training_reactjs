import { Todo } from "./Types";

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({todo}: TodoItemProps) {
  const itemClass = todo.completed ? 'completed' : 'incomplete';

  return (
    <li className="todo-item">
      <div className="todo-item-left">
        <h3 className={`${itemClass}`}>{todo.title}</h3>
        <p>{todo.desc.length > 100 ? todo.desc.slice(0, 100) + "..." : todo.desc}</p>
      </div>
      <div className="todo-item-right">
        <ul className="todo-actions">
          <li>{itemClass}</li>
          <li>edit</li>
          <li>delete</li>
          <li>view</li>
        </ul>
      </div>
    </li>
  );
}

export default TodoItem;