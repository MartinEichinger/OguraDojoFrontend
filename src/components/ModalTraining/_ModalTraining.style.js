/* export const useCustomStyles = ({ mq, colors }) => {
  const debug = false;

  if (debug) console.log('Events.style: ', mq, colors);

  return {
    width: '100vw',
    maxWidth: '1440px',
    height: 'calc(100vh - 3.5vh)', // 2rem
    zIndex: '1051',
    position: 'relative',
    overflow: 'hidden',
    margin: '1.75vh auto',

    '& .span_vis': {
      display: 'block',

      [this.mq[1]]: {
        display: 'none',
      },
    },

    '& .modal-content': {
      width: '100%',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0)',
      border: 'none',

      '& .modal-row': {
        width: '100%',

        '& .Training, .Wir': {
          //width: '100%',
          //position: 'absolute',

          '& .modal-col': {
            '& h1': {
              fontSize: '10vh',
              color: 'white',
              textShadow: `0px 0px 5px ${this.bgRed}`,
              position: 'relative',
              paddingLeft: '2vh',
            },

            '& h2': {
              fontSize: '2vh',
              fontWeight: 'bold',
              color: this.typoRed,
              marginBottom: '0.5vh',
              position: 'relative',
              textAlign: 'center',
              textShadow: '0 0 2px white',
            },

            '& h5': {
              fontSize: '1.25vh',
              fontWeight: 'bold',
              color: this.bgWhite,
              marginBottom: '0.5vh',
              position: 'relative',
              textAlign: 'center',
            },

            '& p': {
              fontSize: '1.8vh',
              margin: '0vh 15px 0vh 0px',
              textAlign: 'justify',
              position: 'relative',
              zIndex: '1',
            },
          },
        },
      },
    },
  };
};
 */
