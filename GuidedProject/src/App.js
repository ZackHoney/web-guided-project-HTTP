import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { getTodos, postTodo } from './actions/todos';
const todos = [
  {
    id:1,
    description: 'say hello',
    isDone: false
  }, 
  {
    id:2,
    description: 'say hello again',
    isDone: true
  }
]

function App() {
  const [todo, setTodos] = useState(''); 

  useEffect(() => {
    getTodos();
  }, [])

 

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
