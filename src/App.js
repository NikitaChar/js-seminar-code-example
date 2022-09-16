import { useState, useEffect } from 'react';
import './App.css';
import Todo from './components/Todo';

const DUMMY_TODOS = ['Learn React', 'Master React', 'Explore the full react course'];

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(
      'https://dummy-todos-default-rtdb.firebaseio.com/todos.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((requestedTodos) => {
       setTodos(requestedTodos);
      });
  }
  , []);

  return (
    <div>
      <h1>My Todos</h1>
      {/* <div className='card'>
        <h2>TITLE</h2>
        <div className='actions'>
          <button className='btn'>Delete</button>
        </div>
      </div> */}

      {/* <Todo text='Learn React'/>
      <Todo text='Master React'/>
      <Todo text='Explore the full react course'/> */}

       {todos.map((todo) => <Todo key={todo} text={todo}/>)} 
    </div>
  );
}

export default App;