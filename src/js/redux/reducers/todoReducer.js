// TODO Reducer

import uuidv1 from 'uuid';
import {
  ADD_TODO,
  DELETE_TODO,
  ERR_DUPLICATE_TODO,
  FOUND_BAD_WORD,
  TOGGLE_TODO
} from '../action-types';

const initialState = {
  todos: [],
  error: ''
};

const getNewTodoObj = text => ({
  id: uuidv1(),
  done: false,
  text
});

const todo = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        error: '', // reset error state
        todos: [getNewTodoObj(payload), ...state.todos]
      };

    case ERR_DUPLICATE_TODO:
      return {
        ...state,
        error: 'That todo is already added.'
      };

    case FOUND_BAD_WORD:
      return {
        ...state,
        error: 'That would be inappropriate!'
      };

    case DELETE_TODO:
    case TOGGLE_TODO:
      return {
        ...state,
        todos: payload
      };

    default:
      return state;
  }
};

export default todo;
