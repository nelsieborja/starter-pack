import styled from 'styled-components';

import { COLORS, SPACINGS } from './themes';

const TitleStyled = styled.h1`
  color: ${COLORS.DARK_GREY};
  font-size: 30px;
  text-align: center;
  margin-bottom: ${SPACINGS.M};
  text-shadow: 0 1px 1px ${COLORS.WHITE};
`;

export default TitleStyled;
