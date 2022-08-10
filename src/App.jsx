import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function CircleGroup(props) {
  let a = [];
  for (let i = 0; i < props.count; i++) {
    a[i] = i;
  }

  // a.map((c) => console.log("hello"));
  console.log("hello from CircleGroup");
  return (
    <div className="circles">
      {a.map((key) => (
        <Circle key={key} />
      ))}
    </div>
  );
}

function Circle() {
  return <div className="circle"></div>;
}

function App() {
  const [count, setCount] = useState(0);

  // setCount(5)
  function decreaseCount() {
    console.log("will decrease the counter");
    let newCount = count - 1;
    setCount(newCount);
  }

  function increaseCount() {
    setCount((count) => count + 1);
  }

  return (
    <div className="App">
      <div className="card">
        <h1>{count}</h1>
        <button onClick={() => increaseCount()}>count is {count}</button>
        <button onClick={() => decreaseCount()}>decrease</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>

        <CircleGroup count={count} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
