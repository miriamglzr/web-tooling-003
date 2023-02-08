import { useState } from "react";
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
        <p data-testid="counter-number">{count}</p>
        <button onClick={increment} data-testid="button-increase">
          +
        </button>
        <button onClick={decrement} data-testid="button-decrease">
          -
        </button>
      </header>
    </div>
  );
}

export default App;
