import React from "react";

function App() {
  const [firstTitle, setTitle] = React.useState("My name is Yeswanth");

  function changeTitle() {
    setTitle("My name is " + Math.random());
  }
  return (
    <>
      <button onClick={changeTitle}>Click here to change title</button>
      <Header title={firstTitle} />
      <Header title="Hello React" />
    </>
  );
}

function Header({ title }) {
  return <div>{title}</div>;
}

export default App;
