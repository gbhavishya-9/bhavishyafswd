import React from 'react';

const StudentInfo = ({ name, rollNo, branch }) => {
  const message = `Welcome ${name}`;

  return (
    <div>
      <h2>Student Information</h2>
      <p>{message}</p>
      <p>Roll Number: {rollNo}</p>
      <p>Branch: {branch}</p>
    </div>
  );
};

function App() {
  const student = {
    name: "bhavishya",
    rollNo: "123",
    branch: "CSE"
  };

  const updatedStudent = {
    ...student,
    branch: "Computer Science Engineering"
  };

  return <StudentInfo {...updatedStudent} />;
}

export default App;
