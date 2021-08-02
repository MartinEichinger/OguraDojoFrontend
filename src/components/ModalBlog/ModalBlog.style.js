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
            gridTemplateColumns: 'auto',
            gridTemplateRows: 'auto 1fr auto 1fr auto',

            '& h1': {
              gridColumn: '1',
              gridRow: '1',
              maxHeight: '20vh',
              fontSize: '10vh',
              marginBottom: '1vh',
              color: this.colors.bgGrey,
              textShadow: `2px 0 0 ${this.colors.bgRed}, 0 2px 0 ${this.colors.bgRed}, -2px 0 0 ${this.colors.bgRed}, 0 -2px 0 ${this.colors.bgRed}`,
              //position: 'relative',
              paddingTop: '2vh',
              paddingLeft: '2vh',
            },

            '& .modal-in-nav': {
              maxHeight: '10vh',
              gridColumn: '1',
              gridRow: '3',

              '& .buttons': {
                padding: '0 15px',
                margin: '1vh 0',
                borderRadius: '25px',
                fontSize: '2.5vh',
                border: `0px`,

                '&.active': {
                  backgroundColor: this.colors.bgRed,
                  color: this.colors.bgWhite,
                },
              },
            },

            '& .table': {
              maxHeight: '70vh',
              gridColumn: '1',
              gridRow: '5',
              overflow: 'auto',

              '& .blog-card': {
                width: '550px',
                fontFamily: 'Lato, sans-serif',
                padding: '1vh',

                [this.mq[1]]: {
                  // bis 600px
                  width: '100%',
                },

                '& h2': {
                  fontSize: '1.75vh',
                },

                '& h4': {
                  fontSize: '1.2vh',
                },

                '& h5': {
                  fontSize: '1.2vh',
                },

                '& p': {
                  fontSize: '1.3vh',
                },

                '& .body': {
                  backgroundColor: this.colors.bgGrey,
                  borderRadius: '5px',
                  height: '25vh',
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
                    margin: '15px',
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
