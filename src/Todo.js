import React, { useState } from 'react';
import { ListItem, ListItemText, IconButton } from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons';
import './Todo.css';

import db from './firebase/firebase';
import TransitionsModal from './TransitionsModal';

const Todo = ({ todo, id }) => {
  const [input, setInput] = useState(todo);

  const updateTodo = () => {
    // set over right all but
    // merge:true : not over right the whole doc , just specified property
    db.collection('todos').doc(id).set({ todo: input }, { merge: true });

    // it just the specified doc property: todo
    // db.collection('todos').doc(id).update({ todo: input });
  };
  return (
    <>
      <ListItem className='todo__list'>
        <ListItemText primary={todo} secondary='! important' />
        <IconButton onClick={(e) => db.collection('todos').doc(id).delete()}>
          <DeleteForever fontSize='2rem' />
        </IconButton>
        <TransitionsModal
          btnName='Update Todo'
          input={input}
          setInput={setInput}
          todo={todo}
          updateTodo={updateTodo}
        />
      </ListItem>
    </>
  );
};

export default Todo;
