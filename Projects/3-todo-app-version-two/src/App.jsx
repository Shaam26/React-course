import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";

import "./App.css";
import TodoItems from "./Components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Like this vedio",
      dueDate: "right now",
    },
  ];

  return (
    <center id="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
