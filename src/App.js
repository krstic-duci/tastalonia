import React from 'react';
import { Global, css } from '@emotion/core';
import Routes from './app/routes';
import Footer from './components/Footer';
import { primaryColor } from './utils/customStyles';

function App() {
  return (
    <>
      <Global
        styles={css`
          *,
          ::after,
          ::before {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            font-family: 'Rowdies', cursive;
            ${primaryColor};
          }
          a {
            ${primaryColor};
          }
          img,
          svg {
            vertical-align: middle;
          }
        `}
      />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
