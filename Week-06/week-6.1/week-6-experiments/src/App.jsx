import React from "react";

function App() {
  const [firstTitle, setTitle] = React.useState("My name is Yeswanth");

  function changeTitle() {
    setTitle("My name is " + Math.random());
  }
  return (
    <div>
      <button onClick={changeTitle}>Click here to change title</button>
      <Header2 title={firstTitle}></Header2>
      {/* <HeaderWithButton /> */}
      <Header2 title="Hello React"></Header2>
      <Header2 title="Hello React"></Header2>
      <Header2 title="Hello React"></Header2>
      <Header2 title="Hello React"></Header2>
    </div>
  );
}

// function HeaderWithButton() {
//   const [firstTitle, setTitle] = React.useState("My name is Yeswanth");

//   function changeTitle() {
//     setTitle("My name is " + Math.random());
//   }
//   return (
//     <>
//       <button onClick={changeTitle}>Click here to change title</button>
//       <Header title={firstTitle} />
//     </>
//   );
// }

function Header({ title }) {
  return <div>{title}</div>;
}

const Header2 = React.memo(({ title }) => {
  return <div>{title}</div>;
});

export default App;
