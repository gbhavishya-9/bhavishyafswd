import React from 'react';

function App() {
  const name = "Gaddi Bhavishya";
  const date = new Date().toLocaleDateString();
  const a = 10;
  const b = 20;

  return (
    <div>
      <h1>Student Details</h1>
      <p>Name: {name}</p>
      <p>Today's Date: {date}</p>
      <p>Sum: {a + b}</p>
    </div>
  );
}

export default App;
