// Main dependencies
import React from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';

// Common Components
import ButtonMaterial from 'Materials/ButtonMaterial';
import SwitchMaterial from 'Materials/SwitchMaterial';

// Internal Components
import ListStyled from './ListStyled';

const customHandler = (onChange, param) => () => onChange(param);

const GoalsListComponent = ({ onDeleteTodo, onToggleTodo, todos }) =>
  todos.length ? (
    <ListStyled>
      {todos.map(({ id, done, text }) => (
        <li key={`todo-${id}`}>
          <p>{text}</p>
          <ButtonMaterial onClick={customHandler(onDeleteTodo, id)} marginRight>
            DELETE
          </ButtonMaterial>
          <span>
            <SwitchMaterial
              name={id}
              checked={done}
              onChange={customHandler(onToggleTodo, id)}
            />
          </span>
        </li>
      ))}
    </ListStyled>
  ) : null;

GoalsListComponent.propTypes = {
  onDeleteTodo: func.isRequired,
  onToggleTodo: func.isRequired,
  todos: arrayOf(
    shape({
      done: bool,
      text: string
    })
  ).isRequired
};

export default GoalsListComponent;
