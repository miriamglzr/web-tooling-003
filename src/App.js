import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello World! I am Miriam. This is a simple counting app.</p>
        <p>Count: {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </header>
    </div>
  );
}

export default App;
