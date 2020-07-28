import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import EditIcon from '@material-ui/icons/Edit';
import {
  IconButton,
  FormControl,
  Input,
  Button,
  InputLabel,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal({
  btnName,
  input,
  setInput,
  todo,
  updateTodo,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const update = (e) => {
    e.preventDefault();
    updateTodo();
    setOpen(false);
  };

  return (
    <div>
      <IconButton type='button' onClick={handleOpen}>
        <EditIcon fontSize='2rem' />
      </IconButton>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id='transition-modal-title'>Update your todo</h2>
            <form>
              <FormControl>
                <InputLabel>✔ Your todo</InputLabel>
                <Input
                  type='text'
                  value={input}
                  placeholder={todo}
                  onChange={(e) => setInput(e.target.value)}
                />
              </FormControl>
              <Button
                type='submit'
                disabled={!input}
                onClick={update}
                variant='contained'
                color='primary'>
                {btnName}
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
