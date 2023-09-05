import React from 'react';
import { useState } from 'react';
import './App.css';

const todos = [
  {
    id:1,
    description: 'say hello',
    isDone: false
  }, 
  {
    id:2,
    description: 'say hello again',
    isDone: false
  }
]

function App() {
  const [todo, setTodos] = useState(''); 
  return (
    <div className="App">
      <input value={todo} onChange={(e) => setTodos(e.target.value)} />
      <button>Submit</button>
      {todos.map((todo, index) => (
        <div key={index}>
          <span className={todo.isDone ? 'done' : ''}>{todo.description}</span>
          <span>
            <button>{todo.isDone ? 'Delete' : 'Complete'}</button>
          </span>
        </div>
      ))}
    </div>
  );
}

export default App;
