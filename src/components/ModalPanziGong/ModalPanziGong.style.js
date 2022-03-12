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
            height: '100%',
            gridColumn: '1',
            gridRow: '2',
            display: 'grid',
            gridTemplateColumns: 'auto',
            gridTemplateRows: '6fr',

            '& .csPanziGongPG, .csLehrerPG, .csFormPG': {
              gridRow: '1',
              gridColumn: '1',
              display: 'grid',
              gridTemplateColumns: 'auto',
              gridTemplateRows: '6fr',

              '& .navLeft, .navRight': {
                cursor: 'pointer',
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
                  marginBottom: '1vh',
                  position: 'relative',
                  zIndex: '1',
                },

                '& h2': {
                  color: this.colors.typoGreen,
                  marginBottom: '2vh',
                  position: 'relative',
                  zIndex: '1',
                },

                '& p': {
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

                  '& .videos': {
                    position: 'relative',
                    paddingBottom: '25%',
                    height: 0,
                    maxHeight: '36vh',

                    [this.mq[2]]: {
                      paddingBottom: '56.25%' /* 16:9 */,
                    },

                    '& iframe': {
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      maxHeight: '36vh',
                    },
                  },
                },

                '& .modal-strip': {
                  boxSizing: 'border-box',
                  backgroundColor: this.colors.bgGreen,
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
                      backgroundImage: 'url(panzigong_pic_1.jpg)',
                      backgroundPosition: '75% 35%',
                    },
                    '& .num2': {
                      backgroundImage: 'url(panzigong_pic_2.jpg)',
                      backgroundPosition: '50% 5%',
                    },
                    '& .num3': {
                      backgroundImage: 'url(panzigong_pic_3.jpg)',
                      backgroundPosition: '50% 50%',
                    },
                    '& .num4': {
                      backgroundImage: 'url(panzigong_pic_4.jpg)',
                      backgroundPosition: '12% 75%',
                    },
                    '& .num5': {
                      backgroundImage: 'url(panzigong_pic_5.jpg)',
                      backgroundPosition: '50% 65%',
                    },
                    '& .num6': {
                      backgroundImage: 'url(panzigong_pic_6.jpg)',
                      backgroundPosition: '50% 5%',
                    },
                    '& .num7': {
                      backgroundImage: 'url(panzigong_pics_7.jpg)',
                      backgroundPosition: '50% 30%',
                    },
                    '& .num8': {
                      backgroundImage: 'url(panzigong_pics_8.jpg)',
                      backgroundPosition: '50% 30%',
                    },
                    '& .num9': {
                      backgroundImage: 'url(panzigong_pics_9.jpg)',
                      backgroundPosition: '50% 30%',
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
