/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React, { Component } from 'react';
import ModalInNavigation from './ModalInNavigation';
import ModalCompTabRoundRect from './ModalCompTabRoundRect';
import ModalCompTextTabs from './ModalCompTextTabs';
import '../animation.css';

class ModalKarate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 1440,
      height: 1200,
    };

    this.form = React.createRef();
    this.stats = {
      allPages: ['Training', 'Wir'],
      page: this.props.page,
      animated: 0,
    };

    console.log('ModalTraining/constructor', this.stats);

    // BREAKPOINTS
    this.breakpoints = [424, 767, 1023, 1280];
    this.mq = this.breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

    // STYLES
    this.bgGrey = this.props.colors?.bgGrey;
    this.bgWhite = this.props.colors?.bgWhite;
    this.bgRed = this.props.colors?.bgRed;
    this.typoRed = this.props.colors?.typoRed;
    this.typoGrey = this.props.colors?.typoGrey;
    this.typoGreen = this.props.colors?.typoGreen;
    this.shadowGrey = this.props.colors?.shadowGrey;

    this.styleModalDialog = {
      width: '100vw',
      maxWidth: '1440px',
      height: 'calc(100vh - 3.5vh)', // 2rem
      zIndex: '1051',
      position: 'relative',
      overflow: 'hidden',
      margin: '1.75vh auto',

      '& .red': {
        color: this.typoRed,
      },

      '& .white': {
        color: this.bgWhite,
      },

      '& .center': {
        textAlign: 'center',
      },

      '& .small': {
        fontSize: '1.5vh !important',
      },

      '& .bold': {
        fontWeight: 'bold',
      },

      '& .underline': {
        textDecoration: 'underline',
      },

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
            width: '100%',
            position: 'absolute',

            '& .modal-col': {
              width: 'calc(100% - 51px)',

              [this.mq[0]]: {
                width: 'calc(100% - 29px)',
              },

              '& .bg-heading': {
                position: 'absolute',
                zIndex: '0',
                fontSize: '15vh',
                color: this.bgGrey,
              },

              '& big': {
                fontSize: '10vh',
              },

              '& h1': {
                fontSize: '10vh',
                marginBottom: '1vh',
                color: 'white',
                textShadow: `0px 0px 5px ${this.bgRed}`,
                position: 'relative',
                paddingTop: '2vh',
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

              '& .modal-up': {
                height: '90vh',
                backgroundColor: 'white',
                borderRadius: '5px',

                '& .bg-training': {
                  height: '90vh',
                  width: 'calc(100% - 51px)',
                  backgroundImage: 'url(./training_pic_1.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '5px',
                  boxShadow: 'inset 0px 25px 30px 30px white',
                  filter: 'blur(4px)',
                  position: 'absolute',

                  [this.mq[0]]: {
                    width: 'calc(100% - 29px)',
                  },
                },

                '& .table': {
                  padding: '2vh',
                  height: 'calc(90vh - 10vh - 6vh)',

                  [this.mq[1]]: { padding: '0.5vh' },
                },

                '& .rect_var2': {
                  position: 'relative',
                  marginLeft: '2vh',
                  width: 'calc(100% - 2vh)',
                  backgroundColor: 'rgba(255,255,255,0.7)',
                  borderRadius: '5px',
                  padding: '1vh',

                  [this.mq[1]]: {
                    width: 'calc(100% - 2vh)',
                    padding: '1vh',
                    margin: '0',
                  },

                  overflowY: 'auto',

                  '&::-webkit-scrollbar': {
                    width: '10px',
                  },

                  '&::-webkit-scrollbar-track': {
                    background: '#f1f1f1',
                  },

                  '&::-webkit-scrollbar-thumb': {
                    background: '#888',
                  },

                  '&::-webkit-scrollbar-thumb:hover': {
                    background: '#555',
                  },
                },
              },

              '& .h15': {
                height: '15vh',
              },

              '& .h22': {
                height: '22vh',
              },

              '& .h26': {
                height: '26vh',
              },

              '& .h31': {
                height: '31vh !important',
              },

              '& .h40': {
                height: '40vh !important',
              },

              '& .w20': {
                width: '20%',
              },

              '& .w25': {
                width: '25%',
              },

              '& .w30': {
                width: '30%',
              },

              '& .w33': {
                width: '33%',
              },

              '& .w50': {
                width: '50%',
              },

              '& .w66': {
                width: '66%',
              },

              '& .frameless': {
                marginTop: '-1vh',
                marginBottom: '-1vh',
              },
            },
          },
        },
      },
    };

    this.contentWir = {
      title: 'Wir',
      text: `Der Name unseres Dojo OGURA nimmt Bezug auf Ogura Tsuneyoshi(* 1928; † 2007), japanischer Karatemeister (Shotokan, Goju ryu) aus Kofu, 10. Dan. Dieser war ab dem Jahr 1973 der Lehrer des französischen Kampfkunstexperten Roland Habersetzer. Der Name unseres Dojo soll die Wertschätzung für den Menschen Ogura und seinen „Schüler“ Habersetzer zum Ausdruck bringen. Die Karateka des OGURA DOJO sind Mitglied im Budoforschungszentrum Tengu Institut von Shihan Roland Habersetzer und betreiben die Stilrichtung Tengu ryu. Neben dem Karate bieten wir in unserem Dojo TaiJi und QiGong an. Im TaiJi trainieren wir Faust, Fächer und Schwertformen – Schwerpunktmäßig aus dem Yang-Stil. Die Formen die wir im QiGong üben stammen überwiegend von dem chinesichen Professor Ding HongYu. Das OGURA DOJO ist organisatorisch beim Turn- und Sportverein Traunreut angegliedert. Unsere Abteilungsleiter ist Hans-Jürgen Groiß.`,
      tabs: [
        {
          head1: 'Alex Callegari',
          head2: 'Trainer Karate.Taiji.Qigong',
          head3: '6. DAN Tengu Ryu',
          img: 'url(./training_pic_2.png)',
        },
        {
          head1: 'Ulrike Geuder',
          head2: 'Trainerin Karate',
          head3: '5. DAN Tengu Ryu',
          img: 'url(./training_pic_3.png)',
        },
      ],
    };

    this.styleContentWir = {
      '& .cards': {
        marginLeft: '2vh',
        padding: '1vh',

        '& .body': {
          height: '300px',
          width: '250px',
          borderRadius: '5px',
          position: 'relative',
          margin: '5px',

          '& .image': {
            width: '100%',
            height: '55%',
            borderRadius: '5px',
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
    };

    this.contentNav = {
      upDown: 1,
      navItems: ['Training', 'Wir'],
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    document
      .getElementById('idModalTraining')
      .addEventListener('shown.bs.modal', this.onShowModal);
    document
      .getElementById('idModalTraining')
      .addEventListener('hidden.bs.modal', this.onHideModal);
    document
      .querySelector(`.Training`)
      .addEventListener('animationend', this.onAnimationEnd);
    document
      .querySelector(`.Wir`)
      .addEventListener('animationend', this.onAnimationEnd);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
    document
      .getElementById('idModalTraining')
      .removeEventListener('shown.bs.modal', this.onShowModal);
    document
      .getElementById('idModalTraining')
      .removeEventListener('hidden.bs.modal', this.onHideModal);
    document
      .querySelector(`.Training`)
      .removeEventListener('animationend', this.onAnimationEnd);
    document
      .querySelector(`.Wir`)
      .removeEventListener('animationend', this.onAnimationEnd);
  }

  onAnimationEnd = () => {
    this.stats.animated = 0;
    //document.querySelector('.modal').scrollTo(0, 4);
    console.log('ModalKarate/onAnimationEnd', this.stats.animated);
  };

  onShowModal = () => {
    this.updateDimensions();
    this.updateHx();
    this.stats.page = this.props.page;
    var page = this.stats.page;
    console.log('ModalTraining/onShowModal', this.stats);
    if (page === 'Wir') {
      document.querySelector('.Training').classList.add('d-none');
      document.querySelector('.Wir').classList.remove('d-none');
      document.querySelector(`.upArrowTrain`).classList.add('active');
      document.querySelector(`.downArrowTrain`).classList.remove('active');
      document.querySelector(`.WirBtn`).classList.add('active');
      document.querySelector(`.TrainingBtn`).classList.remove('active');
    } else if (page === 'Training') {
      document.querySelector('.Training').classList.remove('d-none');
      document.querySelector('.Wir').classList.add('d-none');
      document.querySelector(`.upArrowTrain`).classList.remove('active');
      document.querySelector(`.downArrowTrain`).classList.add('active');
      document.querySelector(`.WirBtn`).classList.remove('active');
      document.querySelector(`.TrainingBtn`).classList.add('active');
    }
  };

  onHideModal = () => {
    // reset single pages
    document.querySelector('.Training').classList.remove('slide-out-top');
    document.querySelector('.Training').classList.remove('slide-in-bottom');
    document.querySelector('.Wir').classList.remove('slide-out-top');
    document.querySelector('.Wir').classList.remove('slide-in-bottom');
    document.querySelector('.Wir').classList.add('d-none');

    // reset stored value for active page
    this.stats.page = 'Training';

    // reset navigation
    document.querySelector('.TrainingBtn').classList.add('active');
    document.querySelector('.WirBtn').classList.remove('active');
  };

  clickUpDown = (dir) => {
    console.log('ModalTraining/clickUpDown', dir);

    // find index of current page
    var idx = this.stats.allPages.findIndex((item) => {
      return item === this.stats.page;
    });

    // trigger nextItem with requested page
    if (idx === 0 && dir === 'down') {
      this.nextItem(this.stats.allPages[idx + 1]);
    } else if (idx === 0 && dir === 'up') {
      this.stats.animated = 0;
      return 0;
    } else if (idx === this.stats.allPages.length - 1 && dir === 'up') {
      this.stats.animated = 1;
      this.nextItem(this.stats.allPages[idx - 1]);
    } else if (idx === this.stats.allPages.length - 1 && dir === 'down') {
      this.stats.animated = 0;
      return 0;
    } else if (dir === 'up') {
      this.stats.animated = 1;
      this.nextItem(this.stats.allPages[idx - 1]);
    } else if (dir === 'down') {
      this.stats.animated = 1;
      this.nextItem(this.stats.allPages[idx + 1]);
    }
  };

  nextItem = (button) => {
    console.log('CardsKarate/nextItem', button);
    // identify the page to be shown
    document
      .querySelector(`.${this.stats.page}`)
      .classList.remove('slide-in-bottom');
    document.querySelector(`.${this.stats.page}Btn`).classList.remove('active');
    document
      .querySelector(`.${this.stats.page}`)
      .classList.add('slide-out-top');

    this.stats.page = button;

    try {
      document.querySelector(`.${this.stats.page}`).classList.remove('d-none');
    } catch (e) {}

    document
      .querySelector(`.${this.stats.page}`)
      .classList.remove('slide-out-top');
    document.querySelector(`.${this.stats.page}Btn`).classList.add('active');
    document
      .querySelector(`.${this.stats.page}`)
      .classList.add('slide-in-bottom');

    // check if end of list start or end -> in case reset arrow from active
    var idx = this.stats.allPages.findIndex((item) => {
      return item === this.stats.page;
    });

    if (idx === 0) {
      document.querySelector(`.upArrowTrain`).classList.remove('active');
      document.querySelector(`.downArrowTrain`).classList.add('active');
    } else if (idx === this.stats.allPages.length - 1) {
      document.querySelector(`.upArrowTrain`).classList.add('active');
      document.querySelector(`.downArrowTrain`).classList.remove('active');
    } else {
      document.querySelector(`.upArrowTrain`).classList.add('active');
      document.querySelector(`.downArrowTrain`).classList.add('active');
    }
  };

  updateHx = () => {
    //this.updateDimensions();
    console.log('ModalTraining/updateHx');
    // H1
    this.styleModalDialog['& .modal-content']['& .modal-row'][
      '& .Training, .Wir'
    ]['& .modal-col']['& h1'].fontSize =
      120 * (this.state.width / 1440) * (this.state.height / 1200) + 18 + 'px';

    // H2
    this.styleModalDialog['& .modal-content']['& .modal-row'][
      '& .Training, .Wir'
    ]['& .modal-col']['& h2'].fontSize =
      8 * (this.state.width / 1440) * (this.state.height / 1200) + 12 + 'px';

    // p
    this.styleModalDialog['& .modal-content']['& .modal-row'][
      '& .Training, .Wir'
    ]['& .modal-col']['& p'].fontSize =
      8 * (this.state.width / 1440) * (this.state.height / 1200) + 12 + 'px';
  };

  updateDimensions = () => {
    var w = document.querySelector('.Training')?.offsetWidth;
    var h = document.querySelector('.Training')?.offsetHeight;
    if (w !== 0)
      this.setState({
        width: w,
        height: h,
      });
    console.log('ModalTraining/updateDimensions', w, h);
  };

  render() {
    console.log('ModalTraining/render', this.stats, this.props);
    //this.updateHx();

    return (
      <React.Fragment>
        <div
          className="modal fade"
          id="idModalTraining"
          tabIndex="-1"
          aria-labelledby="ModalTrainingLabel"
          aria-hidden="true"
          data-bs-backdrop="static"
          onScroll={() => this.handleScroll()}
        >
          <div
            className="modal-dialog d-flex flex-row-reverse align-items-center"
            id="modalDialog"
            css={this.styleModalDialog}
          >
            <div className="modal-content">
              <div className="modal-row d-flex flex-row h-100 align-items-center">
                <ModalInNavigation
                  clickUpDown={this.clickUpDown}
                  nextItem={this.nextItem}
                  colors={this.props.colors}
                  config={this.contentNav}
                  mq={this.mq}
                />
                <ModalCompTabRoundRect mq={this.mq} />
                <ModalCompTextTabs
                  contentWir={this.contentWir}
                  style={this.styleContentWir}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ModalKarate;
