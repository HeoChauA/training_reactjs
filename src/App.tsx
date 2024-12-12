import React from 'react';
import "./App.css";
import Todos from './components/Todos/Todos';
import Profile from './components/Profile/Profile';

import Header from './components/Header/Header';
import { Link, Routes, Route } from "react-router";

const todos = [
  {
    title: "Todo title 1",
    desc: "Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Fusce fermentum. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Suspendisse feugiat.",
    isCompleted: true
  },
  {
    title: "Todo title 2",
    desc: "Praesent nec nisl a purus blandit viverra. Maecenas vestibulum mollis diam. In consectetuer turpis ut velit. Sed in libero ut nibh placerat accumsan. Integer tincidunt.",
    isCompleted: true
  },
  {
    title: "Todo title 3",
    desc: "Vivamus in erat ut urna cursus vestibulum. Vestibulum suscipit nulla quis orci. Donec venenatis vulputate lorem. Vivamus euismod mauris. Fusce vel dui.",
    isCompleted: false
  },
  {
    title: "Todo title 4",
    desc: "Donec vitae sapien ut libero venenatis faucibus. Vivamus elementum semper nisi. Aliquam erat volutpat. Suspendisse feugiat. In hac habitasse platea dictumst.",
    isCompleted: false
  },
  {
    title: "Todo title 5",
    desc: " Donec posuere vulputate arcu. Suspendisse feugiat. Nulla sit amet est. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo.",
    isCompleted: false
  }
];

function App() {
  return (
    <div className='main'>
      <Header />
      <Routes>
        <Route path='/' element={<Todos todos={todos}/>}/>
        <Route 
          path='/profile' 
          element={
            <Profile 
              name = "Le Nhung"
              email = "nhung.cntt.19a3@gmail.com"
              age = {18}
              adress = "Ninh Binh city"
          />}/>
      </Routes>
    </div>
  );
}

export default App;
