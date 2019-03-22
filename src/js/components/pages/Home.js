// Main dependencies
import React from 'react';

// Helpers
import { getMonthYear } from 'Helpers/utils';

// Styled Components
import LayoutStyled from 'Styled/LayoutStyled';
import TitleStyled from 'Styled/TitleStyled';
import LinkStyled from 'Styled/LinkStyled';

// Containers
import GoalsContainer from 'Components/goals/GoalsContainer';

const Home = () => {
  const { month, year } = getMonthYear();
  return (
    <LayoutStyled>
      <TitleStyled>
        {month} {year} Goals
      </TitleStyled>

      <GoalsContainer />

      <LinkStyled to="/about">GO TO ABOUT</LinkStyled>
    </LayoutStyled>
  );
};

export default Home;
