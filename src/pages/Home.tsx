
import TodoList from '../components/TodoList';

const todos = [
  {
  title: "Todo title 1",
  desc: "Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Fusce fermentum. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Suspendisse feugiat.",
  completed: false
  },
  {
  title: "Todo title 2",
  desc: "Praesent nec nisl a purus blandit viverra. Maecenas vestibulum mollis diam. In consectetuer turpis ut velit. Sed in libero ut nibh placerat accumsan. Integer tincidunt.",
  completed: false
  },
  {
  title: "Todo title 3",
  desc: "Vivamus in erat ut urna cursus vestibulum. Vestibulum suscipit nulla quis orci. Donec venenatis vulputate lorem. Vivamus euismod mauris. Fusce vel dui.",
  completed: true
  },
  {
  title: "Todo title 4",
  desc: "Donec vitae sapien ut libero venenatis faucibus. Vivamus elementum semper nisi. Aliquam erat volutpat. Suspendisse feugiat. In hac habitasse platea dictumst.",
  completed: true
  },
  {
  title: "Todo title 5",
  desc: " Donec posuere vulputate arcu. Suspendisse feugiat. Nulla sit amet est. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo.",
  completed: false
  }
];

function Home() {
  return (
    <div className='container'>
      <h1>Todo List</h1>
      <TodoList todos={todos}/>
    </div>
  );
}

export default Home;