import styled from 'styled-components';

import { COLORS, SPACINGS } from './themes';

const MsgStyled = styled.div`
  font-size: 13px;
  padding: 10px ${SPACINGS.S};

  ${({ topMargin }) => (topMargin ? `margin-top: 10px` : '')};

  ${({ type }) => {
    switch (type) {
      case 'error':
        return `
        background: rgba(238, 37, 39, 0.04);
        color: ${COLORS.RED};
        `;
      case 'global':
        return `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        background: rgba(0, 174, 66, 0.04);
        color: ${COLORS.GREEN};
        `;
      default:
        return `
        background: rgba(0, 174, 66, 0.04);
        color: ${COLORS.GREEN};
        `;
    }
  }}
`;

export default MsgStyled;
