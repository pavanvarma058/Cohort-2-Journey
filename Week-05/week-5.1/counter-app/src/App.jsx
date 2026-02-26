import './App.css'
import { useState } from 'react';
// state - a js object that holds the data of the app. Whenever the state changes,
//  the app re-renders and shows the updated data on the screen.
// state variables always defined inside the component.

// component - a function that returns some JSX code. 
// It is a reusable piece of code that can be used to build the UI of the app.
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )
}

function CustomButton(props){
  function onClickHandler(){
    props.setCount(props.count + 1);
  }
  return <button onClick={onClickHandler}>Counter : {props.count}</button>
}

export default App
