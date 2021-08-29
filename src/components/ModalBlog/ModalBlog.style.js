import { Component } from 'react';

class ModalClassBasis extends Component {
  constructor(props) {
    super(props);

    this.mq = this.props.mq;
    this.colors = this.props.colors;

    this.style = {
      width: '100vw',
      maxWidth: '1440px',
      height: 'calc(100vh)',
      zIndex: '1051',
      overflow: 'hidden',
      margin: '0 auto',

      '& .modal-content': {
        backgroundColor: 'rgba(0,0,0,0)',
        border: 'none',

        '& .modal-row': {
          height: 'calc(100vh - 4px)',
          margin: '2px',
          display: 'grid',
          gridColumnGap: '2px',
          gridTemplateColumns: '1fr 50px',
          gridTemplateRows: '1fr 7fr 1fr',

          [this.mq[2]]: {
            // bis 960 px
            gridTemplateColumns: '1fr 39px',
          },

          [this.mq[1]]: {
            // bis 600 px
            gridTemplateColumns: '1fr 34px',
          },

          [this.mq[0]]: {
            // bis 400px
            gridTemplateColumns: '1fr 29px',
          },

          '& .inNavigation': {
            gridColumn: '2',
            gridRow: '2',
          },

          '& .modal-col': {
            gridRow: '2',
            gridColumn: '1',
            height: '100%',
            backgroundColor: 'white',
            borderRadius: '5px',
            display: 'grid',
            gridTemplateRows: 'auto 1fr auto 1fr auto',
            gridTemplateColumns: '1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 1fr',
            [this.mq[2]]: {
              // bis 960 px
              gridTemplateColumns: '0.5fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 0.5fr',
            },
            [this.mq[1]]: {
              // bis 600 px
              gridTemplateColumns: '0.2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 0.2fr',
            },
            [this.mq[0]]: {
              // bis 400px
              gridTemplateColumns: '0.1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 0.1fr',
            },

            '& h1': {
              gridColumn: '2/-1',
              gridRow: '1',
              maxHeight: 'calc(20vh - 4px)',
              boxSizing: 'border-box',
              fontSize: 'calc(5rem + 2.5vw)',
              marginBottom: '1vh',
              color: this.colors.bgGrey,
              textShadow: `2px 0 0 ${this.colors.bgRed}, 0 2px 0 ${this.colors.bgRed}, -2px 0 0 ${this.colors.bgRed}, 0 -2px 0 ${this.colors.bgRed}`,
            },

            '& .modal-in-nav': {
              maxHeight: '10vh',
              boxSizing: 'border-box',
              gridColumn: '2/12',
              gridRow: '3',
              display: 'grid',
              justifyContent: 'space-evenly',
              gridTemplateColumns: 'repeat(auto-fit, minmax(175px, 1fr))',

              [this.mq[2]]: {
                // bis 960px
                maxHeight: '12vh',
              },

              [this.mq[0]]: {
                // bis 400px
                gridTemplateColumns: 'repeat(auto-fit, minmax(125px, 1fr))',
              },

              '& .buttons': {
                padding: '0 15px',
                margin: '1vh 1vw',
                borderRadius: '25px',
                fontSize: 'calc(1rem + 0.75vw)',
                border: `0px`,

                '&.active': {
                  backgroundColor: this.colors.bgRed,
                  color: this.colors.bgWhite,
                },
              },
            },

            '& .table': {
              maxHeight: 'calc(70vh - 4px)',
              gridColumn: '2/12',
              gridRow: '5',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',

              [this.mq[2]]: {
                // bis 960px
                maxHeight: 'calc(68vh - 4px)',
              },

              [this.mq[1]]: {
                // bis 600px
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              },

              '& .blog-card': {
                fontFamily: 'Lato, sans-serif',
                padding: '1vw',

                [this.mq[1]]: {
                  // bis 600px
                  width: '100%',
                },

                '& h2': {
                  // 16px to 24px
                  fontSize: '1.5rem',

                  [this.mq[3]]: {
                    // bis 1280
                    fontSize: 'calc(1rem + 0.625vw)',
                  },
                },

                '& h4': {
                  // 12px to 16px
                  fontSize: '1rem',

                  [this.mq[3]]: {
                    // bis 1280
                    fontSize: 'calc(0.75rem + 0.3125vw)',
                  },
                },

                '& h5': {
                  // 10px to 14px
                  fontSize: '0.875rem',

                  [this.mq[3]]: {
                    // bis 1280
                    fontSize: 'calc(0.625rem + 0.3125vw)',
                  },
                },

                '& p': {
                  // 12px to 16px
                  fontSize: '1rem',

                  [this.mq[3]]: {
                    // bis 1280
                    fontSize: 'calc(0.75rem + 0.3125vw)',
                  },
                },

                '& .body': {
                  backgroundColor: this.colors.bgGrey,
                  borderRadius: '5px',
                  height: '250px', //1'25vh',
                  maxHeight: '250px',

                  '.image': {
                    backgroundRepeat: 'no-repeat',
                    width: '50%',
                    backgroundSize: 'cover',
                    borderRadius: '5px 0 0px 5px',

                    [this.mq[0]]: {
                      // bis 400px
                      display: 'none',
                    },
                  },

                  '& .text': {
                    margin: '1vw',
                    padding: '0',
                    width: '50%',

                    [this.mq[0]]: {
                      // bis 400px
                      width: '100%',
                    },
                    '.linie': {
                      borderTop: '1px solid black',
                      width: '30px',
                      margin: '5px auto',
                    },
                  },
                },

                '& .button': {
                  margin: '-16px auto 0',
                  textDecoration: 'none',

                  '& Button': {
                    width: '150px',
                    fontSize: '12px',
                    borderRadius: '25px',
                    backgroundColor: this.colors.bgRed,
                    color: this.colors.bgWhite,

                    '&:hover': {
                      backgroundColor: this.colors.bgRed,
                      color: this.colors.bgWhite,
                      boxShadow: `10px 10px 25px 0px ${this.colors.shadowGrey}`,
                    },

                    '&:active': {
                      transform: 'scale(0.98)',
                      boxShadow: `0px 0px 5px 0px ${this.colors.shadowGrey}`,
                    },
                  },
                },
              },
            },
          },
        },
      },
    };
  }
}

export default ModalClassBasis;
