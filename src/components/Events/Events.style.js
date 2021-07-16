export const useCustomStyles = ({ mq, colors }) => {
  const debug = false;

  if (debug) console.log('Events.style: ', mq, colors);

  return {
    width: '45%',
    height: '100%',
    fontFamily: 'Lato, sans-serif',
    paddingTop: '3vh',
    overflow: 'auto',

    [mq[2]]: {
      width: '90%',
      marginBottom: '1vh',
      height: '50%',
    },

    '&.schedule': {
      borderRadius: '5px',
      backgroundColor: 'rgba(255,255,255,0.5)',

      '& .block': {
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginBottom: '2vh',
        borderRadius: '5px',
        position: 'relative',
        cursor: 'pointer',

        '&:hover, &:active, &:focus, &.active': {
          backgroundColor: colors.bgGreen50,
        },

        '& .date': {
          marginLeft: '5%',
          width: '25%',
          //backgroundColor: colors.bgRed,
        },

        '& .details': {
          height: '100%',
          width: '70%',
          padding: '1vh',

          '& h3': {
            fontSize: '2.1vh',
            fontWeight: 'bold',
          },

          '& h4': {
            fontSize: '1vh',
            fontWeight: 'bold',
            margin: '1vh',
          },
        },

        '& h1': {
          fontSize: '6vh',
          color: 'rgba(255,255,255,1)',
          lineHeight: '4vh',
          marginBottom: '0px',
          padding: '1vh 1vh 0.25vh 1vh',
          textAlign: 'center',
          textShadow: 'none',
        },
        '& h2': {
          fontSize: '4vh',
          color: 'rgba(255,255,255,1)',
          lineHeight: '3vh',
          marginBottom: '0px',
          padding: '0.25vh 1vh 1vh 1vh',
          textAlign: 'center',
        },
      },

      '& button': {
        position: 'absolute',
        bottom: '3.5vh',
        left: '3.5vh',
      },
    },

    '&.detail': {
      borderRadius: '5px',
      backgroundColor: 'rgba(255,255,255,0.5)',
      padding: '2vh',

      '& h3': {
        textDecoration: 'underline',
        margin: '1vh 0vh',
      },

      '& i': {
        cursor: 'pointer',
      },

      '& button': {
        cursor: 'pointer',
        borderRadius: '5px',
        padding: '3px',
        '&.red': {
          border: `1px solid ${colors.bgRed}`,
          color: 'white',
        },
        '&.green': {
          border: `1px solid ${colors.bgGreen}`,
          color: 'white',
        },
      },
    },
  };
};
