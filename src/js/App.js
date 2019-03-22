// Main dependencies
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { Router } from '@reach/router';

// Store/Helpers
import store from 'Store';
import lazyLoad from 'Helpers/lazyLoad';

// Common Components
import GlobalStyled from 'Styled/GlobalStyled';
import MsgStyled from 'Styled/MsgStyled';

// Pages - lazyloaded
const Home = lazyLoad('Home');
const About = lazyLoad('About');

const App = () => (
  <Provider store={store}>
    <GlobalStyled />
    <Suspense fallback={<MsgStyled type="global">Loading...</MsgStyled>}>
      <Router>
        <Home path="/" />
        <About path="/about" />
      </Router>
    </Suspense>
  </Provider>
);

export default App;
