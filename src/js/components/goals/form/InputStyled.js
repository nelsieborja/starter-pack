import styled from 'styled-components';

import { COLORS, SPACINGS } from 'Styled/themes';

const InputStyled = styled.input`
  border: 3px solid ${COLORS.LIGHT_SHADE};
  border-radius: 3px;
  flex: 1;
  font-size: 18px;
  padding: ${SPACINGS.S};
`;

export default InputStyled;
