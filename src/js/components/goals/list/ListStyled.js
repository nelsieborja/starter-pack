import styled, { keyframes } from 'styled-components';

import { COLORS, SPACINGS } from 'Styled/themes';

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

const ListStyled = styled.ul`
  list-style: none;
  margin-top: ${SPACINGS.M};
  max-height: 284px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    cursor: grab;
    background: ${COLORS.LIGHT_SHADE};
  }

  li {
    display: flex;
    align-items: center;

    animation: ${slideDown} 0.3s;
    padding: 10px 18px;
  }

  li + li {
    border-top: 1px solid ${COLORS.LIGHT_SHADE};
  }

  p {
    flex: 1;
    font-size: 20px;
    margin-right: ${SPACINGS.S};
  }
`;

export default ListStyled;
