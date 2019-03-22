import { createGlobalStyle } from 'styled-components';
import { COLORS } from './themes';

const GlobalStyled = createGlobalStyle`
  body {
    background: ${COLORS.LIGHT_SHADE};
    color: ${COLORS.BLACK};
    font: 400 14px/1 'Poppins', sans-serif;
    font-smoothing: antialiased;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-COLORS: transparent;
    useTranslate3d: true;


  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }

  button,
  input {
    appearance: none;
    border: 0;
    cursor: pointer;
    font: inherit;
    outline: none;
  }
`;
export default GlobalStyled;
