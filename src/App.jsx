import React, { useState } from "react";
import "./App.css";

function App() {
  const numbers = [1, 2, 3];

  const [selectedNumber, setSelectedNumber] = useState(numbers[0]);
  const [showButtons, setShowButtons] = useState(false);

  const toggleShow = () => setShowButtons(!showButtons);

  return (
    <div className="App">
      <button onClick={toggleShow}>{selectedNumber}</button>

      {showButtons && (
        <ul>
          {numbers.map((number) => (
            <li key={number}>
              <button
                class={selectedNumber === number ? 'selected' : ''}
                onClick={() => {
                  setSelectedNumber(number);
                  toggleShow();
                }}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
