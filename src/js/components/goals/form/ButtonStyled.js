import styled from 'styled-components';

import { COLORS, SPACINGS } from 'Styled/themes';

const ButtonStyled = styled.button`
  background: ${COLORS.DARK_GREY};
  border: 0;
  border-radius: 3px;
  color: ${COLORS.WHITE};
  font-size: 18px;
  font-weight: 500;
  margin-left: ${SPACINGS.S};
  padding: ${SPACINGS.S};
`;

export default ButtonStyled;
