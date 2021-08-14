import React, { useRef, useImperativeHandle } from 'react';

import classes from './TaskForm.module.css';

const TaskForm = React.forwardRef((props, ref) => {
  const taskInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredValue = taskInputRef.current.value;

    if (enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue);
    }
  };

  useImperativeHandle(ref, () => {
    return {
      clear: clearForm
    }
  })
  
  const clearForm = () => {
    taskInputRef.current.value = '';
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type='text' ref={taskInputRef} />
      <button>{props.loading ? 'Sending...' : 'Add Task'}</button>
    </form>
  );
});

export default TaskForm;
