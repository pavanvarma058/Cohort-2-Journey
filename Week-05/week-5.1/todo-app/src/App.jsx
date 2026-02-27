import './App.css'
import { useState } from 'react'
function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym at 6:00 PM",
    completed: false
  },{
    title: "Study DSA",
    description: "Study DSA at 8:00 PM",
    completed: false
  },{
    title: "Study Android Development",
    description: "Study Android Development at 9:00 PM",
    completed: false
  }])

  function addTodo(){
    setTodos([...todos, {
      title: "Go for a walk",
      description: "Go for a walk at 7:00 AM",
      completed: false
    }])
  }

  return (
    <div>
      {/* <Todo title={todos[0].title} description={todos[0].description} />
      <Todo title={todos[1].title} description={todos[1].description} /> */}
      <button onClick={addTodo}>Add a random todo</button>
      {todos.map((todo)=>{
        return <Todo title={todo.title} description={todo.description} />
      })}
    </div>
  )
}

function Todo(props){
  return <div>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
  </div>
}

export default App
