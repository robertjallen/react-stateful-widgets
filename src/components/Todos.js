import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
/*
* form: input, submit button
* component to display list items
* object to hold todos [{id: <todos.id>, name: <todos.name>
* status:<complete/incomplete>}]
* way to delete todos items click to strike through
*  */
// declare an initial value for the todo
const initialTodoList = [
  {
    id: uuidv4(),
    description: 'Yo MTV Raps',
    complete: false,
  }
]
const initialTodo = {
    id: '',
    description: '',
    complete: false,
  }
const Todos = () => {
  // todos will be an array of todo objects
  const [todos, setTodos] = useState(initialTodoList)
  const [todo, setTodo] = useState(initialTodo)
  // change handler for the text area setting what we input to be the
  // description of the todo
  const handleChange = (e) => {
    setTodo({
      // spreading in any values already existing
      ...todo,
      description: e.target.value
    })
  }
  const submitHandler = (e) => {
    e.preventDefault();
    // add the new todo to the todo list
    setTodos([
      // spread in any existing todos so we dont overwrite them
      ...todos,
      {
        // spread in existing values of todo object
        ...todo,
        // create a random id 
        id: uuidv4(),
      }
    ])
    // reset the todo back to the initial values
    setTodo(initialTodo)
  }
  console.log('outside func:', {todos})
  return (
    <div>
      <form
        className={'todo-form'}
        onSubmit={submitHandler}
      >
        <textarea
          rows={3}
          className={'todo-input'}
          name={'Todo'}
          onChange={handleChange}
          value={todo.description}
        />
        <button
          type={'submit'}
          className={'todo-submit-btn'}
        >
          Add Todo
        </button>
      </form>
      <div className={'todo-list'}>
        {todos.map(todo => {
          return <p>{todo.description}</p>
        })}
      </div>
    </div>
  );
};
export default Todos;