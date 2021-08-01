import { Component } from 'react';

class ModalClassStyle extends Component {
  constructor(props) {
    super(props);
    this.mq = this.props.mq;
    this.colors = this.props.colors;
    this.debug = true;

    // Generell
    this.styleAll = {
      width: '100vw',
      maxWidth: '1440px',
      height: '100vh', //'calc(100vh - 3.5vh)', // 2rem
      zIndex: '1051',
      //position: 'relative',
      overflow: 'hidden',
      margin: '0 auto', //'1.75vh auto',

      '& .span_vis': {
        display: 'block',

        [this.mq[1]]: {
          display: 'none',
        },
      },

      '& .modal-content': {
        //width: '100%',
        //height: '100vh',
        backgroundColor: 'rgba(0,0,0,0)',
        border: 'none',

        '& .modal-row': {
          //width: '100%',
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
            //display: 'grid',
            //gridTemplateColumns: 'auto',
            //gridTemplateRows: '6fr',

            '& .Training, .Wir': {
              height: '100%',
              gridRow: '1',
              gridColumn: '1',
              display: 'grid',
              gridTemplateColumns: 'auto',
              gridTemplateRows: '6fr',

              '& .modal-col': {
                '& h1': {
                  fontSize: '10vh',
                  color: 'white',
                  textShadow: `0px 0px 5px ${this.colors.bgRed}`,
                  position: 'relative',
                  paddingLeft: '2vh',
                },

                '& h2': {
                  fontSize: '2vh',
                  fontWeight: 'bold',
                  color: this.colors.typoRed,
                  marginBottom: '0.5vh',
                  position: 'relative',
                  textAlign: 'center',
                  textShadow: '0 0 2px white',
                },

                '& h5': {
                  fontSize: '1.25vh',
                  fontWeight: 'bold',
                  color: this.colors.bgWhite,
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
      },
    };

    // WIR
    this.styleWir = {
      '& .Wir': {
        '& .modal-col': {
          '& .modal-up': {
            backgroundColor: 'white',
            borderRadius: '5px',

            '& .bg-training': {
              backgroundImage: 'url(./training_pic_1.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              borderRadius: '5px',
              boxShadow: 'inset 0px 25px 30px 30px white',
              filter: 'blur(4px)',
              position: 'absolute',

              [this.mq[2]]: {
                //width: 'calc(100% - 39px)',
              },

              [this.mq[1]]: {
                //width: 'calc(100% - 34px)',
              },

              [this.mq[0]]: {
                //width: 'calc(100% - 29px)',
              },
            },

            '& .table_': {
              padding: '0 2vh 2vh',
              height: 'calc(90vh - 12vh)',

              [this.mq[1]]: { padding: '0.5vh' },

              '& .rect': {
                position: 'relative',
                marginLeft: '2vh',
                width: 'calc(100% - 2vh)',
                backgroundColor: 'rgba(255,255,255,0.7)',
                borderRadius: '5px',
                padding: '1vh',
                overflow: 'auto',

                [this.mq[2]]: {
                  width: 'calc(100%)',
                  padding: '1vh',
                  margin: '0',
                },

                [this.mq[1]]: {
                  width: 'calc(100%)',
                  padding: '1vh',
                  margin: '0',
                },
              },

              '& .cards': {
                position: 'relative',
                marginLeft: '2vh',
                width: 'calc(100% - 2vh)',
                backgroundColor: 'rgba(255,255,255,0.7)',
                borderRadius: '5px',
                padding: '1vh',
                overflow: 'auto',

                [this.mq[2]]: {
                  width: 'calc(100%)',
                  padding: '1vh',
                  margin: '0',
                },

                [this.mq[1]]: {
                  width: 'calc(100%)',
                  padding: '1vh',
                  margin: '0',
                },

                '& .body': {
                  height: '320px',
                  width: '250px',
                  borderRadius: '5px',
                  position: 'relative',
                  margin: '5px',

                  '& .image': {
                    width: '100%',
                    height: '55%',
                    borderRadius: '5px',
                    backgroundSize: 'cover',
                    //backgroundImage: 'url(./training_pic_2.png)',
                  },

                  '& .text': {
                    width: '100%',
                    height: '40%',
                    borderRadius: '5px',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                  },
                },
              },
            },
          },
        },
      },
    };

    // TRAINING
    this.styleTraining = {
      '& .Training': {
        '& .modal-col': {
          height: '100%',
          backgroundColor: 'white',
          borderRadius: '5px',
          display: 'grid',
          gridTemplateColumns: 'auto',
          gridTemplateRows: 'auto 1fr auto 1fr auto 1fr auto 1fr auto',

          '& .bg-training': {
            gridColumn: '1',
            gridRow: '1 / 10',
            backgroundImage: 'url(./training_pic_1.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '5px',
            boxShadow: 'inset 0px 25px 30px 30px white',
            filter: 'blur(4px)',
          },

          '.big': {
            gridColumn: '1',
            gridRow: '1',
          },

          '.item:nth-child(3)': {
            gridColumn: '1',
            gridRow: '3',
          },

          '.item:nth-child(4)': {
            gridColumn: '1',
            gridRow: '5',
          },

          '.item:nth-child(5)': {
            gridColumn: '1',
            gridRow: '7',
          },

          '.item:nth-child(6)': {
            gridColumn: '1',
            gridRow: '9',
          },

          '& .circle': {
            position: 'relative',
            height: '15vh',
            width: '15vh',
            backgroundColor: 'rgba(255,255,255,0.7)',
            borderRadius: '125px',

            [this.mq[2]]: {
              height: '11vh',
              width: '11vh',
              '& img, p': {
                padding: '3px',
                margin: '0px',
              },
            },

            [this.mq[1]]: {
              height: '3vh',
              //width: '3vh',
              margin: '1vh 0vh',
              padding: '1vh',
            },
          },

          '& .rect': {
            position: 'relative',
            marginLeft: '2vh',
            width: 'calc(100% - 125px - 2vh)',
            height: '15vh',
            backgroundColor: 'rgba(255,255,255,0.7)',
            borderRadius: '5px',
            padding: '1vh',
            overflow: 'auto',

            [this.mq[2]]: {
              width: 'calc(100% - 13vh)',
            },

            [this.mq[1]]: {
              width: '100%',
              margin: '0px',
            },

            '& .frameless': {
              marginTop: '-1.25vh',
              marginBottom: '-1.25vh',
            },

            '& .tab-row': {
              padding: '3px',
            },
          },
        },
      },
    };

    // Sum
    this.style = { ...this.styleAll, ...this.styleWir, ...this.styleTraining };

    if (this.debug) console.log('ModalTraining.style: ', this.style);
  }
}

export default ModalClassStyle;
