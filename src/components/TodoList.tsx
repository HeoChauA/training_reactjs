import TodoItem from "./TodoItem";

interface Todo {
    title: string;
    desc: string;
    completed: boolean;
  }
  
  const TodoList = ({ todos }: { todos: Todo[] }) => {
    return (
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
      </ul>
    );
  };
  

export default TodoList;