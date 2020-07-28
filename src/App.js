import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import {
  Button,
  Input,
  FormControl,
  InputLabel,
  List,
} from '@material-ui/core';
import Todo from './Todo';

import db from './firebase/firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([
    // 'do a backend course',
    // 'build react app',
    // 'play football',
  ]);
  const [input, setInput] = useState('');

  // we add a listener to keep track of changes of firebase db
  useEffect(() => {
    db.collection('todos')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapShot) => {
        console.log(snapShot);
        // snapShot.docs : it's an array of objects
        setTodos(
          snapShot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
        // doc.data() : an object and inside all the property { todo: "play football"}
      });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };

  return (
    <div className='App'>
      <h1>Hello</h1>

      <form>
        <FormControl>
          <InputLabel>✔ Your todo</InputLabel>
          <Input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </FormControl>
        <Button
          type='submit'
          disabled={!input}
          onClick={addTodo}
          variant='contained'
          color='primary'>
          Add Todo
        </Button>
      </form>

      <List>
        {todos.map(({ id, todo }) => (
          <Todo key={id} id={id} todo={todo} />
        ))}
      </List>
    </div>
  );
}

export default App;
