import { Link } from '@reach/router';
import styled from 'styled-components';

import { COLORS } from './themes';

const LinkStyled = styled(Link)`
  color: ${COLORS.RED};
  font-size: 14px;
  font-weight: 500;

  &:hover {
    text-decoration: none;
  }
`;

export default LinkStyled;
