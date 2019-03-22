// Main dependencies
import React from 'react';

// Styled Components
import LayoutStyled from 'Styled/LayoutStyled';
import TitleStyled from 'Styled/TitleStyled';
import LinkStyled from 'Styled/LinkStyled';

const About = () => {
  return (
    <LayoutStyled>
      <TitleStyled>About</TitleStyled>

      <LinkStyled to="/">BACK TO HOME</LinkStyled>
    </LayoutStyled>
  );
};

export default About;
