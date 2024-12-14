import { Component } from 'react';

class ModalClassStyle extends Component {
  constructor(props) {
    super(props);
    this.mq = this.props.mq;
    this.colors = this.props.colors;

    this.style = {
      width: '100vw',
      maxWidth: '1440px',
      height: '100vh',
      zIndex: '1051',
      overflow: 'hidden',
      margin: '0 auto',

      '& .modal-content': {
        //width: '100%',
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

          '& .content': {
            //position: 'relative',
            height: '100%',
            gridColumn: '1',
            gridRow: '2',
            display: 'grid',
            gridTemplateColumns: 'auto',
            gridTemplateRows: '6fr',

            '& .csTenguRyuKT, .csLehrerKT': {
              //position: 'absolute',
              gridRow: '1',
              gridColumn: '1',
              //height: '100%',
              display: 'grid',
              gridTemplateColumns: 'auto',
              gridTemplateRows: '6fr',

              '& .navLeft, .navRight': {
                cursor: 'pointer',
                backgroundColor: 'rgba(255,255,255,0.5)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

                '&:hover': {
                  '& svg': {
                    stroke: 'rgba(200,200,200,1)',
                  },
                },
              },

              '& .modal-col': {
                gridRow: '1',
                gridColumn: '1',
                height: '100%',
                display: 'grid',
                gridTemplateColumns: 'auto',
                gridTemplateRows: 'auto 1.5vh minmax(17vh, 1fr) 1.5vh auto',

                '&.d-out': {
                  transform: 'translateX(-2000px)',
                  opacity: '0',
                },

                '& .bg-heading': {
                  position: 'absolute',
                  zIndex: '0',
                  fontSize: '15vh',
                  color: this.colors.bgGrey,
                },

                '& h1': {
                  //fontSize: '4vh',
                  marginBottom: '1vh',
                  //fontWeight: 'bold',
                  position: 'relative',
                  zIndex: '1',
                },

                '& h2': {
                  //fontSize: '2vh',
                  //fontWeight: 'bold',
                  color: this.colors.typoRed,
                  marginBottom: '2vh',
                  position: 'relative',
                  zIndex: '1',
                },

                '& p': {
                  //fontSize: '1.8vh',
                  margin: '0vh 15px 0vh 0px',
                  textAlign: 'justify',
                  position: 'relative',
                  zIndex: '1',
                },

                '& .modal-up': {
                  boxSizing: 'border-box',
                  maxHeight: 'calc(40vh - 2px)',
                  backgroundColor: 'white',
                  borderRadius: '5px',
                  padding: '2vh 0.5vh 2vh 2vh',
                  gridRow: '1',
                },

                '& .modal-strip': {
                  boxSizing: 'border-box',
                  backgroundColor: this.colors.bgRed,
                  margin: '5px 0px',
                  gridRow: '3',
                  overflow: 'hidden',

                  '& .pics': {
                    height: '100%',
                    overflow: 'hidden',

                    '& .img': {
                      height: 'calc(100% - 2vh)',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      margin: '0px 0.5vh',
                      width: '330px',
                    },

                    '& .num1': {
                      backgroundImage: 'url(karate_pic_1.jpg)',
                      backgroundPosition: '77% 10%',
                    },
                    '& .num2': {
                      backgroundImage: 'url(karate_pic_2.jpg)',
                      backgroundPosition: '50% 50%',
                    },
                    '& .num3': {
                      backgroundImage: 'url(karate_pic_3.jpg)',
                      backgroundPosition: '50% 50%',
                    },
                    '& .num4': {
                      backgroundImage: 'url(karate_pic_4.jpg)',
                      backgroundPosition: '12% 5%',
                    },
                    '& .num5': {
                      backgroundImage: 'url(karate_pic_5.jpg)',
                      backgroundPosition: '50% 25%',
                    },
                    '& .num6': {
                      backgroundImage: 'url(karate_pic_6.jpg)',
                      backgroundPosition: '50% 5%',
                    },
                    '& .num7': {
                      backgroundImage: 'url(karate_pic_7.jpg)',
                      backgroundPosition: '50% 50%',
                    },
                    '& .num8': {
                      backgroundImage: 'url(karate_pic_8.jpg)',
                      backgroundPosition: '50% 30%',
                    },
                    '& .num9': {
                      backgroundImage: 'url(karate_pic_9.jpg)',
                      backgroundPosition: '29% 40%',
                    },
                    '& .num10': {
                      backgroundImage: 'url(karate_pic_10.jpg)',
                      backgroundPosition: '50% 50%',
                    },
                    '& .num11': {
                      backgroundImage: 'url(karate_pic_11.jpg)',
                      backgroundPosition: '50% 31%',
                    },
                    '& .num12': {
                      backgroundImage: 'url(karate_pic_12.jpg)',
                      backgroundPosition: '50% 10%',
                    },
                    '& .num13': {
                      backgroundImage: 'url(karate_pic_13.jpg)',
                      backgroundPosition: '65% 27%',
                    },
                    '& .num14': {
                      backgroundImage: 'url(karate_pic_14.jpg)',
                      backgroundPosition: '30% 15%',
                    },
                    '& .num15': {
                      backgroundImage: 'url(karate_pic_15.jpg)',
                      backgroundPosition: '50% 10%',
                    },
                  },
                },

                '& .modal-down': {
                  boxSizing: 'border-box',
                  maxHeight: 'calc(40vh - 2px)',
                  backgroundColor: 'white',
                  borderRadius: '5px',
                  padding: '2vh 0.5vh 2vh 2vh',
                  gridRow: '5',
                },
              },
            },
          },
        },
      },
    };
  }
}

export default ModalClassStyle;
