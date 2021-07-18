import { Component } from 'react';

class ModalClassStyle extends Component {
  constructor(props) {
    super(props);
    this.mq = this.props.mq;
    this.colors = this.props.colors;

    this.style = {
      width: '100vw',
      maxWidth: '1440px',
      height: 'calc(100vh - 3.5rem)', // 2rem
      zIndex: '1051',
      position: 'relative',
      overflow: 'hidden',
      margin: '1.75vh auto',

      '& .modal-content': {
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0)',
        border: 'none',

        '& .modal-row': {
          width: '100%',

          '& .TenguRyu, .Lehrer': {
            width: '100%',
            position: 'absolute',

            '& .Habersetzer': {
              top: 'calc( 96vh - 1.75rem)',
              position: 'relative',
            },

            '& .Ogura': {
              top: '0vh',
              position: 'relative',
            },

            '& .Otsuka': {
              top: 'calc( -1 * (96vh - 1.75rem))',
              position: 'relative',
            },

            '& .d-out': {
              transform: 'translateX(-2000px)',
            },

            '& .navLeft, .navRight': {
              cursor: 'pointer',
            },

            '& .modal-col': {
              width: 'calc(100% - 51px)',

              [this.mq[2]]: {
                width: 'calc(100% - 39px)',
              },

              [this.mq[1]]: {
                width: 'calc(100% - 34px)',
              },

              [this.mq[0]]: {
                width: 'calc(100% - 29px)',
              },

              '& .bg-heading': {
                position: 'absolute',
                zIndex: '0',
                fontSize: '15vh',
                color: this.colors.bgGrey,
              },

              '& h1': {
                fontSize: '4vh',
                marginBottom: '1vh',
                fontWeight: 'bold',
                position: 'relative',
                zIndex: '1',
              },

              '& h2': {
                fontSize: '2vh',
                fontWeight: 'bold',
                color: this.colors.typoRed,
                marginBottom: '2vh',
                position: 'relative',
                zIndex: '1',
              },

              '& p': {
                fontSize: '1.8vh',
                margin: '0vh 15px 0vh 0px',
                textAlign: 'justify',
                position: 'relative',
                zIndex: '1',
              },

              '& .modal-up': {
                height: '35vh',
                backgroundColor: 'white',
                borderRadius: '5px',
                padding: '2vh',
              },

              '& .modal-strip': {
                height: '20vh',
                backgroundColor: this.colors.bgRed,
                margin: '2vh 0px',
                position: 'relative',
                overflow: 'hidden',

                '& .pics': {
                  height: '100%',
                  overflow: 'hidden',
                },

                '& .img': {
                  height: 'calc(100% - 10px)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  margin: '5px 2.5px',
                  width: '330px',
                },

                '& .num1': {
                  backgroundImage: 'url(karate_pic_1.jpg)',
                  backgroundPosition: '50% 50%',
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
                  backgroundPosition: '50% 50%',
                },
                '& .num5': {
                  backgroundImage: 'url(karate_pic_5.jpg)',
                  backgroundPosition: '50% 50%',
                },
                '& .num6': {
                  backgroundImage: 'url(karate_pic_6.jpg)',
                  backgroundPosition: '50% 50%',
                },
                '& .num7': {
                  backgroundImage: 'url(karate_pic_7.jpg)',
                  backgroundPosition: '50% 50%',
                },
                '& .num8': {
                  backgroundImage: 'url(karate_pic_8.jpg)',
                  backgroundPosition: '50% 50%',
                },
                '& .num9': {
                  backgroundImage: 'url(karate_pic_9.jpg)',
                  backgroundPosition: '50% 50%',
                },
                '& .num10': {
                  backgroundImage: 'url(karate_pic_10.jpg)',
                  backgroundPosition: '50% 50%',
                },
                '& .num11': {
                  backgroundImage: 'url(karate_pic_11.jpg)',
                  backgroundPosition: '50% 50%',
                },
                '& .num12': {
                  backgroundImage: 'url(karate_pic_12.jpg)',
                  backgroundPosition: '50% 50%',
                },
                '& .num13': {
                  backgroundImage: 'url(karate_pic_13.jpg)',
                  backgroundPosition: '65% 50%',
                },
                '& .num14': {
                  backgroundImage: 'url(karate_pic_14.jpg)',
                  backgroundPosition: '30% 50%',
                },
                '& .num15': {
                  backgroundImage: 'url(karate_pic_15.jpg)',
                  backgroundPosition: '50% 10%',
                },
              },

              '& .modal-down': {
                height: '35vh',
                backgroundColor: 'white',
                borderRadius: '5px',
                padding: '2vh',
              },
            },
          },
        },
      },
    };
  }
}

export default ModalClassStyle;
