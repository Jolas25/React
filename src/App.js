import { useState } from "react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="counter">
        <h1 className="count">{count}</h1>
        <div className="buttons">
          <button
            className="button minus"
            onClick={() => {
              setCount(count - 1);
            }}
          >
            Minus
          </button>
          <button
            className="button plus"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Plus
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
