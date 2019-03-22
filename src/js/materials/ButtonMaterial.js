// Simple Button Material

import styled from 'styled-components';

import { ELEMENTS, SPACINGS } from 'Styled/themes';

const ButtonMaterial = styled.button`
  height: ${ELEMENTS.HEIGHT};

  border: 1px solid;
  border-radius: ${ELEMENTS.BORDER_RADIUS};
  font-size: 12px;
  padding: ${SPACINGS.XS};
  transition: 0.3s;

  ${({ marginRight }) => (marginRight ? `margin-right: ${SPACINGS.XS}` : '')};
`;
export default ButtonMaterial;
