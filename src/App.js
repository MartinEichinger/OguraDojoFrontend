/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import Navigation from './components/Navigation/Navigation';
import Cards from './components/Cards/Cards';
import CardsKarate from './components/Cards/CardsKarate';
import Footer from './components/Footer/Footer';

function App() {
  const styleApp = {
    height: '100vh',
    marginBottom: '100px',

    '& .bg': {
      zIndex: '1030',
      backgroundColor: 'white',
    },

    '& .fg': {
      zIndex: '1041',
      backgroundColor: 'rgba(0,0,0,0)',
    },

    '& .Frame': {
      marginTop: '40px',
      marginBottom: '300px',
      '& .Content': {
        maxWidth: '1440px',
        margin: '0px auto',
      },

      //'& .Placeholder': {
      //  height: '3px',
      //  marginTop: '350px',
      //  width: '100%',
      //},
    },
  };

  return (
    <div className="App d-flex flex-column" css={styleApp}>
      <Navigation />
      <div className="Frame bg">
        <div className="Content d-flex flex-row flex-wrap justify-content-center">
          <CardsKarate />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
      <div className="Placeholder">p</div>
      <Footer />
    </div>
  );
}

export default App;
