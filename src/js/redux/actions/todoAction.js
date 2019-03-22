// TODO Actions

import {
  ADD_TODO,
  DELETE_TODO,
  ERR_DUPLICATE_TODO,
  TOGGLE_TODO
} from '../action-types';

export const addTodo = todo => (dispatch, getState) => {
  const {
    todo: { todos }
  } = getState();

  const isAlreadyExists = todos.some(({ text }) => text === todo);
  if (isAlreadyExists) {
    return dispatch({ type: ERR_DUPLICATE_TODO });
  }

  return dispatch({ type: ADD_TODO, payload: todo });
};

export const deleteTodo = todoID => (dispatch, getState) => {
  const {
    todo: { todos }
  } = getState();

  const newTodos = todos.filter(todo => todo.id !== todoID);

  dispatch({ type: DELETE_TODO, payload: newTodos });
};

export const toggleTodo = todoID => (dispatch, getState) => {
  const {
    todo: { todos }
  } = getState();

  const newTodos = todos.map(todo => {
    if (todo.id !== todoID) return todo;

    const selectedTodo = { ...todo };
    selectedTodo.done = !selectedTodo.done;
    return selectedTodo;
  });

  dispatch({ type: TOGGLE_TODO, payload: newTodos });
};
