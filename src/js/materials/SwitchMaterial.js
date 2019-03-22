// Simple Switch Material

import React, { Fragment } from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';
import uuidv1 from 'uuid';

import { COLORS, ELEMENTS } from 'Styled/themes';

const tickGutter = '2px';
const tickSize = '30px';

const LabelStyled = styled.label`
  height: ${ELEMENTS.HEIGHT};
  width: 54px;

  background: ${COLORS.DARK_GREY};
  border-radius: ${ELEMENTS.BORDER_RADIUS};
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: background 0.3s;

  &:after {
    position: absolute;
    left: ${tickGutter};
    top: ${tickGutter};

    height: ${tickSize};
    width: ${tickSize};

    background: ${COLORS.LIGHT_SHADE};
    border-radius: ${tickSize};
    content: '';
    transition: 0.2s ease;
  }

  &:active:after {
    width: 40px;
  }

  input:checked ~ & {
    background: ${COLORS.GREEN};

    &:after {
      left: calc(100% - 2px);
      transform: translateX(-100%);
    }
  }
`;

const CheckboxStyled = styled.input.attrs(() => ({
  type: 'checkbox'
}))`
  height: 0;
  width: 0;

  visibility: hidden;
`;

const onChangeHandler = onChange => event => {
  onChange(event.target.checked);
};

const SwitchMaterial = ({ checked, onChange, ...rest }) => {
  const checkboxID = rest.id || uuidv1();

  return (
    <Fragment>
      <CheckboxStyled
        id={checkboxID}
        checked={checked}
        onChange={onChangeHandler(onChange)}
        {...rest}
      />
      <LabelStyled htmlFor={checkboxID} />
    </Fragment>
  );
};

SwitchMaterial.propTypes = {
  checked: bool,
  onChange: func
};

SwitchMaterial.defaultProps = {
  checked: false,
  onChange: null
};

export default SwitchMaterial;
