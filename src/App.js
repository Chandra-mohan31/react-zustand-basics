import React from 'react';
import "./App.css";
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';

function App() {
  return (
    <div className='main-container'>
      <CourseForm />

      <h1 style={{
        fontSize:"2.5rem",
        marginBottom: "2 rem"
      }}>My course List</h1>
      <CourseList />
    </div>
  )
}

export default App