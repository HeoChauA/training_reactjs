import TodoItem from "./TodoItem";
import { Todo } from "./Types";

interface TodoListProps {
  todos: Todo[],
}

function TodoList({todos}: TodoListProps) {
  return (
    <>
    <ul className="todo-list">
    {todos.map((todo, index) => (
      <TodoItem key={index} todo={todo} />
    ))}
    </ul>
    </>
  );
}

export default TodoList;