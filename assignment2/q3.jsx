import React, { useState } from 'react';

function App() {
  const [dark, setDark] = useState(false);

  const items = ["HTML", "CSS", "JavaScript", "React"];

  const style = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    minHeight: "100vh",
    padding: "20px"
  };

  return (
    <div style={style}>
      <h2>Technology List</h2>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
