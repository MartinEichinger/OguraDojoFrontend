/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React, { Component } from 'react';
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
      page: 'Training',
      animated: 0,
    };

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

      '& .btn-close': {
        width: '45px',
        height: '45px',
        margin: '1px',
        borderRadius: '45px',
        lineHeight: '0',
        position: 'relative',
        right: '0px',
        top: '0px',
        backgroundColor: this.typoGrey,
        border: 'none',
        outline: 'none',
        zIndex: '1100',
      },

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
                //fontWeight: 'bold',
                color: 'white',
                textShadow: `0px 0px 5px ${this.bgRed}`,
                position: 'relative',
                //zIndex: '1',
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
                },

                '& .table': {
                  padding: '2vh',
                  height: 'calc(90vh - 10vh - 6vh)',

                  [this.mq[1]]: { padding: '0.5vh' },
                },

                '& .circle': {
                  position: 'relative',
                  aspectRatio: '1 / 1',
                  height: '100%',
                  backgroundColor: 'rgba(255,255,255,0.7)',
                  borderRadius: '125px',

                  [this.mq[1]]: {
                    height: '3vh',
                    margin: '1vh 0vh',
                    padding: '1vh',
                  },
                },

                '& .item': {
                  //height: '20%',
                },

                '& .rect': {
                  position: 'relative',
                  marginLeft: '2vh',
                  width: 'calc(100% - 125px - 2vh)',
                  //height: '100%', //'140px',
                  backgroundColor: 'rgba(255,255,255,0.7)',
                  borderRadius: '5px',
                  padding: '1vh',

                  [this.mq[1]]: {
                    width: 'calc(100% - 2vh)',
                    padding: '1vh',
                    margin: '0',
                  },

                  '& .tab': { overflow: 'hidden' },

                  '& iframe': {
                    border: '0px',
                  },
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

                '& .cards': {
                  marginLeft: '2vh',
                  padding: '1vh',

                  '& .body': {
                    height: '300px',
                    width: '250px',
                    borderRadius: '5px',
                    position: 'relative',

                    '& .image': {
                      width: '100%',
                      height: '55%',
                      borderRadius: '5px',
                      backgroundImage: 'url(./training_pic_2.png)',
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

          '& .inNavigation': {
            position: 'absolute',
            width: '47px',
            height: 'calc(90vh + 30px)',
            zIndex: '1052',
            right: '2px',
            backgroundColor: this.bgWhite,
            borderRadius: '45px',

            '& .navItem': {
              width: '145px',
              position: 'relative',
              transform: 'rotate(90deg)',
              color: this.bgGrey,
              border: `1px solid ${this.bgWhite}`,
              borderRadius: '25px',

              '& h1': {
                fontSize: '28px',
                cursor: 'pointer',
                fontWeight: 'normal',
              },

              '&.active': {
                color: this.typoRed,
                border: `1px solid ${this.bgRed}`,

                '& h1': {
                  fontWeight: 'bold',
                },
              },
            },

            '& .arrow': {
              position: 'relative',
              width: '45px',
              height: '45px',
              borderRadius: '45px',
              backgroundColor: this.bgGrey,
              margin: '1px',

              '&.active': {
                backgroundColor: this.bgRed,
                cursor: 'pointer',
              },
            },

            '& .center': {
              position: 'relative',
              width: '100%',
              height: '100%',
              transform: 'perspective(180px)',
              transformStyle: 'preserve-3d',
              zIndex: '1053',

              '& .form': {
                zIndex: '1054',
                position: 'absolute',
                height: '48px',
                width: '200px',
                boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 1)',
                borderRadius: '5px',
                border: '1px solid grey',
                cursor: 'pointer',
                transition: 'transform 0.4s linear',

                '& .heading': {
                  margin: '0px',
                  fontSize: '36px',
                  textAlign: 'center',
                  lineHeight: '1.2',
                },
              },
            },
          },
        },
      },
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
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.updateDimensions);
    document
      .getElementById('exModal')
      .removeEventListener('shown.bs.modal', this.onShowModal);
    document
      .getElementById('exModal')
      .removeEventListener('hidden.bs.modal', this.onHideModal);
    document
      .querySelector(`.TenguRyu`)
      .removeEventListener('animationend', this.onAnimationEnd);
    document
      .querySelector(`.Lehrer`)
      .removeEventListener('animationend', this.onAnimationEnd);
  }

  onAnimationEnd = () => {
    this.stats.animated = 0;
    document.querySelector('.modal').scrollTo(0, 4);
    console.log('ModalKarate/onAnimationEnd', this.stats.animated);
  };

  onShowModal = () => {
    this.updateDimensions();
    this.updateHx();
    //document.querySelector('.modal').scrollTo(0, 4);
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
    //console.log('ModalKarate/clickUpDown', dir);

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
    //console.log('ModalKarate/render', this.state.width, this.state.height);
    this.updateHx();

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
                <div className="inNavigation d-flex flex-column justify-content-between align-items-center">
                  <button
                    type="button"
                    className="btn-close d-flex flex-row align-items-center justify-content-center"
                    data-bs-dismiss="modal"
                    id="modalCardEx"
                  >
                    <img src="./clear_white.png" alt="" id="modalCardEx" />
                  </button>
                  <div
                    className="arrow upArrowTrain d-flex align-items-center justify-content-center"
                    onClick={(e) => this.clickUpDown('up')}
                  >
                    <img src="arrow_white_up.png" alt="" />
                  </div>
                  <div
                    className="navItem TrainingBtn active d-flex align-items-center justify-content-center"
                    onClick={(e) => this.nextItem('Training')}
                  >
                    <h1>Training</h1>
                  </div>
                  <div
                    className="navItem WirBtn d-flex align-items-center justify-content-center"
                    onClick={(e) => this.nextItem('Wir')}
                  >
                    <h1>Wir</h1>
                  </div>
                  <div
                    className="arrow downArrowTrain d-flex align-items-center justify-content-center active"
                    onClick={(e) => this.clickUpDown('down')}
                  >
                    <img src="arrow_white_down.png" alt="" />
                  </div>
                </div>
                <div className="Training">
                  <div className="modal-col d-flex flex-column h-100">
                    <div className="modal-up">
                      <div className="bg-training"></div>
                      <h1 className="big">Training</h1>
                      <div className="table d-flex flex-column justify-content-between">
                        <div className="item align-items-center d-flex flex-md-row flex-column">
                          <div className="circle d-flex flex-row align-items-center justify-content-center">
                            <img src="wann_24px_outlined.svg" alt="" />
                            <p className="red bold">WANN?</p>
                          </div>
                          <div className="rect d-flex flex-column justify-content-around h15">
                            <div className="tab-row d-flex flex-row">
                              <div className="tab w20">
                                <p>Montag</p>
                              </div>
                              <div className="tab w30">
                                <p>18.20 - 20.00</p>
                              </div>
                              <div className="tab w50">
                                <p>Taiji</p>
                              </div>
                            </div>
                            <div className="tab-row d-flex flex-row">
                              <div className="tab w20"> </div>
                              <div className="tab w30">
                                <p>20.00 - 22.00</p>
                              </div>
                              <div className="tab w50">
                                <p>Karate (Erwachsene)</p>
                              </div>
                            </div>
                            <div className="tab-row d-flex flex-row">
                              <div className="tab w20">
                                <p>Mittwoch</p>
                              </div>
                              <div className="tab w30">
                                <p>17.00 - 18.30</p>
                              </div>
                              <div className="tab w50">
                                <p>Karate (Kinder / Jugendliche)</p>
                              </div>
                            </div>
                            <div className="tab-row d-flex flex-row">
                              <div className="tab w20">
                                <p>Freitag</p>
                              </div>
                              <div className="tab w30">
                                <p>20.00 - 22.00</p>
                              </div>
                              <div className="tab w50">
                                <p>Karate (Erwachsene)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item align-items-center d-flex flex-md-row flex-column">
                          <div className="circle d-flex flex-row align-items-center justify-content-center">
                            <img src="wo_24px_outlined.svg" alt="" />
                            <p className="red bold">Wo?</p>
                          </div>
                          <div className="rect d-flex flex-row h15">
                            <div className="tab w50 d-flex align-items-center">
                              <p>
                                Sonnenschule Traunreut - Martin-Luther-Straße -
                                83301 Traunreut
                              </p>
                            </div>
                            <div className="tab w50 frameless">
                              <iframe
                                title="training"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1335.8346718413309!2d12.594938976177742!3d47.96211779084314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDU3JzQzLjYiTiAxMsKwMzUnNDUuNyJF!5e0!3m2!1sen!2sde!4v1616311641244!5m2!1sen!2sde"
                                width="100%"
                                height="100%"
                                allowFullScreen=""
                                loading="lazy"
                              ></iframe>
                            </div>
                          </div>
                        </div>
                        <div className="item align-items-center d-flex flex-md-row flex-column">
                          <div className="circle d-flex flex-row align-items-center justify-content-center">
                            <img src="was_24px_outlined.svg" alt="" />
                            <p className="red bold">WAS?</p>
                          </div>
                          <div className="rect d-flex align-items-center h15">
                            <p>
                              Zum Kennenlernen gibt es natürlich die Möglichkeit
                              eines kostenlosen Probetrainings. Zum Training am
                              Besten in lockerer Sportbekleidung erscheinen.
                              Sportanzüge und Equipment kann bei Bedarf vor Ort
                              bestellt werden.
                            </p>
                          </div>
                        </div>
                        <div className="item align-items-center d-flex flex-md-row flex-column">
                          <div className="circle d-flex flex-row align-items-center justify-content-center">
                            <img src="geld_24px_outlined.svg" alt="" />
                            <p className="red bold">BEITRAG?</p>
                          </div>
                          <div className="rect h15">
                            <div className="tab-row d-flex flex-row">
                              <div className="tab w33">
                                <p className="bold underline">
                                  TuS Traunreut
                                  <span className="span_vis">
                                    (Karate und Taiji)
                                  </span>
                                </p>
                              </div>
                              <div className="tab w33">
                                <p className="bold underline">
                                  Verband CRB
                                  <span className="span_vis"> (Tengu Ryu)</span>
                                </p>
                              </div>
                              <div className="tab w33">
                                <p className="bold underline">
                                  Verband DKV
                                  <span className="span_vis"> (Karate)</span>
                                </p>
                              </div>
                            </div>
                            <div className="tab-row d-flex flex-row">
                              <div className="tab w33">
                                <p>unter 18 Jahren: 60€/Jahr</p>
                              </div>
                              <div className="tab w33">
                                <p>Neuaufnahme: 31€/Jahr</p>
                              </div>
                              <div className="tab w33">
                                <p>18€/Jahr für Kinder (bis 13)</p>
                              </div>
                            </div>
                            <div className="tab-row d-flex flex-row">
                              <div className="tab w33">
                                <p>über 18 Jahren: 120€/Jahr</p>
                              </div>
                              <div className="tab w33">
                                <p>Verlängerung: 22€/Jahr</p>
                              </div>
                              <div className="tab w33">
                                <p>23€/Jahr für Jugendl. & Erwachsene</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Wir d-none">
                  <div className="modal-col d-flex flex-column h-100">
                    <div className="modal-up">
                      <div className="bg-training"></div>
                      <h1 className="big">Wir</h1>
                      <div className="table d-flex flex-column justify-content-around">
                        <div className="rect_var2 h31">
                          <p className="mb-2">
                            Der Name unseres Dojo OGURA nimmt Bezug auf Ogura
                            Tsuneyoshi(* 1928; † 2007), japanischer
                            Karatemeister (Shotokan, Goju ryu) aus Kofu, 10.
                            Dan. Dieser war ab dem Jahr 1973 der Lehrer des
                            französischen Kampfkunstexperten Roland Habersetzer.
                            Der Name unseres Dojo soll die Wertschätzung für den
                            Menschen Ogura und seinen „Schüler“ Habersetzer zum
                            Ausdruck bringen.
                          </p>
                          <p className="mb-2">
                            Die Karateka des OGURA DOJO sind Mitglied im
                            Budoforschungszentrum Tengu Institut von Shihan
                            Roland Habersetzer und betreiben die Stilrichtung
                            Tengu ryu.
                          </p>
                          <p className="mb-2">
                            Neben dem Karate bieten wir in unserem Dojo TaiJi
                            und QiGong an. Im TaiJi trainieren wir Faust, Fächer
                            und Schwertformen – Schwerpunktmäßig aus dem
                            Yang-Stil. Die Formen die wir im QiGong üben stammen
                            überwiegend von dem chinesichen Professor Ding
                            HongYu.
                          </p>
                          <p>
                            Das OGURA DOJO ist organisatorisch beim Turn- und
                            Sportverein Traunreut angegliedert. Unsere
                            Abteilungsleiter ist Hans-Jürgen Groiß.
                          </p>
                        </div>
                        <div className="cards d-flex flex-row">
                          <div className="body d-flex flex-column justify-content-between">
                            <div className="image"></div>
                            <div className="text d-flex flex-column align-items-center">
                              <h2>Alex Callegari</h2>
                              <h5>Trainer Karate.Taiji.Qigong</h5>
                              <p className="white text-center mb-2 small">
                                6. DAN Tengu Ryu
                              </p>
                              <img src="email_24px_outlined.png" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ModalKarate;
