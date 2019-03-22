// Main dependencies
import React, { Fragment } from 'react';
import { func, string } from 'prop-types';

// Hooks
import useInput from 'Hooks/useInput';

// Common Components
import MsgStyled from 'Styled/MsgStyled';

// Internal Components
import FormStyled from './FormStyled';
import InputStyled from './InputStyled';
import ButtonStyled from './ButtonStyled';

const onSubmitHandler = (onChange, param) => event => {
  event.preventDefault();
  if (param) onChange(param);
};

const GoalsFormComponent = ({ error, onAddTodo }) => {
  const goal = useInput();

  return (
    <Fragment>
      <FormStyled onSubmit={onSubmitHandler(onAddTodo, goal.value)}>
        <InputStyled placeholder="Type your goal here..." {...goal} />
        <ButtonStyled>ADD GOAL</ButtonStyled>
      </FormStyled>

      {error && (
        <MsgStyled type="error" topMargin>
          {error}
        </MsgStyled>
      )}
    </Fragment>
  );
};

GoalsFormComponent.propTypes = {
  error: string,
  onAddTodo: func.isRequired
};

GoalsFormComponent.defaultProps = {
  error: false
};

export default GoalsFormComponent;
