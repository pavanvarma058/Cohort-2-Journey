import "./App.css";
import { useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import { useEffect } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/todos").then(async (res) => {
      const data = await res.json();
      setTodos(data);
    });
  }, []);
  return (
    <div>
      <h1>Todo App</h1>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
