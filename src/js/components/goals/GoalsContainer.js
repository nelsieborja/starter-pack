// Main dependencies
import React from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import { addTodo, deleteTodo, toggleTodo } from 'Actions/todoAction';

// Internal Components
import GoalsStyled from './GoalsStyled';
import GoalsFormComponent from './form';
import GoalsListComponent from './list';

const GoalsContainer = ({
  onAddTodo,
  onDeleteTodo,
  onToggleTodo,
  todo: { error, todos }
}) => {
  return (
    <GoalsStyled>
      <GoalsFormComponent
        key={todos.length} // This is to reset the textfield once todo is added
        onAddTodo={onAddTodo}
        error={error}
      />
      <GoalsListComponent
        onDeleteTodo={onDeleteTodo}
        onToggleTodo={onToggleTodo}
        todos={todos}
      />
    </GoalsStyled>
  );
};

GoalsContainer.propTypes = {
  onAddTodo: func.isRequired,
  onDeleteTodo: func.isRequired,
  onToggleTodo: func.isRequired,
  todo: shape({
    // TODO: Save as Fragment for reusability
    todos: arrayOf(
      shape({
        done: bool,
        text: string
      })
    ),
    error: string
  }).isRequired
};

// Connect selected Store's state to the Component props
const mapStateToProps = ({ todo }) => ({ todo });

// Connect actions to the Component props
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onAddTodo: todo => addTodo(todo),
      onDeleteTodo: todo => deleteTodo(todo),
      onToggleTodo: todoID => toggleTodo(todoID)
    },
    dispatch
  );

// Connect Redux Store to the Component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoalsContainer);
