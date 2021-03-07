/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React, { Component } from 'react';
import '../animation.css';

class ModalKarate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 1340,
      height: 300,
    };

    this.form = React.createRef();
    this.stats = {
      allPages: ['TenguRyu', 'Lehrer'],
      page: 'TenguRyu',
      animated: 0,
    };

    // BREAKPOINTS
    this.breakpoints = [576, 678, 1023, 1280];
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
      height: 'calc(100vh - 2vh)', // 3.5rem
      zIndex: '1051',
      position: 'relative',
      overflow: 'hidden',
      margin: '3vh auto',

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

      '& .center': {
        textAlign: 'center',
      },

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

            '& .modal-col': {
              width: 'calc(100% - 51px)',

              '& h1': {
                fontSize: '4vh',
                marginBottom: '1vh',
                fontWeight: 'bold',
              },

              '& h2': {
                fontSize: '2vh',
                fontWeight: 'bold',
                color: this.typoRed,
                marginBottom: '2vh',
              },

              '& p': {
                fontSize: '1.8vh',
                margin: '0vh 15px 0vh 0px',
                textAlign: 'justify',
              },

              '& .modal-up': {
                height: '35vh',
                backgroundColor: 'white',
                borderRadius: '5px',
                //boxShadow: '0px 0px 30px 0px white',
                padding: '2vh',

                '& .scroll': {
                  overflowY: 'auto',
                  //height: '22vh',

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

              '& .modal-strip': {
                height: '20vh',
                backgroundColor: this.bgRed,
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
                  backgroundImage: 'url(karate_pic_1.png)',
                },
                '& .num2': {
                  backgroundImage: 'url(karate_pic_2.png)',
                },
                '& .num3': {
                  backgroundImage: 'url(karate_pic_3.png)',
                },
                '& .num4': {
                  backgroundImage: 'url(karate_pic_4.png)',
                },
                '& .num5': {
                  backgroundImage: 'url(karate_pic_5.png)',
                },
                '& .num6': {
                  backgroundImage: 'url(karate_pic_6.png)',
                },
                '& .num7': {
                  backgroundImage: 'url(karate_pic_7.png)',
                },
                '& .num8': {
                  backgroundImage: 'url(karate_pic_8.png)',
                },
                '& .num9': {
                  backgroundImage: 'url(karate_pic_9.png)',
                },
              },

              '& .modal-down': {
                height: '35vh',
                backgroundColor: 'white',
                borderRadius: '5px',
                padding: '2vh',

                '& .scroll': {
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

              '& .h22': {
                height: '22vh',
              },

              '& .h26': {
                height: '26vh',
              },

              '& .h31': {
                height: '31vh',
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
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.updateDimensions);
    document
      .getElementById('exModal')
      .addEventListener('shown.bs.modal', this.onShowModal);
    document
      .getElementById('exModal')
      .addEventListener('hidden.bs.modal', this.onHideModal);
    document
      .querySelector(`.TenguRyu`)
      .addEventListener('animationend', this.onAnimationEnd);
    document
      .querySelector(`.Lehrer`)
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
    document.querySelector('.modal').scrollTo(0, 4);
  };

  onHideModal = () => {
    // reset single pages
    document.querySelector('.TenguRyu').classList.remove('slide-out-top');
    document.querySelector('.TenguRyu').classList.remove('slide-in-bottom');
    document.querySelector('.Lehrer').classList.remove('slide-out-top');
    document.querySelector('.Lehrer').classList.remove('slide-in-bottom');
    document.querySelector('.Lehrer').classList.add('d-none');

    // reset stored value for active page
    this.stats.page = 'TenguRyu';

    // reset navigation
    document.querySelector('.TenguRyuBtn').classList.add('active');
    document.querySelector('.LehrerBtn').classList.remove('active');
  };

  handleScroll = () => {
    var st = document.querySelector('.modal').scrollTop;
    console.log('ModalKarate/scroll', st, this.stats.animated);
    if (st < 3 && this.stats.animated === 0) {
      this.stats.animated = 1;
      this.clickUpDown('up');
      document.querySelector('.modal').scrollTo(0, 4);
    } else if (st > 5 && this.stats.animated === 0) {
      this.stats.animated = 1;
      this.clickUpDown('down');
      document.querySelector('.modal').scrollTo(0, 4);
    }
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
      document.querySelector(`.upArrow`).classList.remove('active');
      document.querySelector(`.downArrow`).classList.add('active');
    } else if (idx === this.stats.allPages.length - 1) {
      document.querySelector(`.upArrow`).classList.add('active');
      document.querySelector(`.downArrow`).classList.remove('active');
    } else {
      document.querySelector(`.upArrow`).classList.add('active');
      document.querySelector(`.downArrow`).classList.add('active');
    }
  };

  updateHx = () => {
    console.log('ModalKarate/updateHx');
    // H1
    this.styleModalDialog['& .modal-content']['& .modal-row'][
      '& .TenguRyu, .Lehrer'
    ]['& .modal-col']['& h1'].fontSize =
      20 * (((this.state.width / 1340) * this.state.height) / 300) + 18 + 'px';

    // H2
    this.styleModalDialog['& .modal-content']['& .modal-row'][
      '& .TenguRyu, .Lehrer'
    ]['& .modal-col']['& h2'].fontSize =
      8 * (((this.state.width / 1340) * this.state.height) / 300) + 12 + 'px';

    // p
    this.styleModalDialog['& .modal-content']['& .modal-row'][
      '& .TenguRyu, .Lehrer'
    ]['& .modal-col']['& p'].fontSize =
      6 * (((this.state.width / 1340) * this.state.height) / 300) + 14 + 'px';
  };

  updateDimensions = () => {
    var w = document.querySelector('.scroll').offsetWidth;
    var h = document.querySelector('.scroll').offsetHeight;
    if (w !== 0)
      this.setState({
        width: w,
        height: h,
      });
    console.log('ModalKarate/updateDimensions', w, h);
  };

  render() {
    //console.log('ModalKarate/render', this.state.width, this.state.height);
    this.updateHx();

    return (
      <React.Fragment>
        <div
          className="modal fade"
          id="exModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
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
                    className="arrow upArrow d-flex align-items-center justify-content-center"
                    onClick={(e) => this.clickUpDown('up')}
                  >
                    <img src="arrow_white_up.png" alt="" />
                  </div>
                  <div
                    className="navItem TenguRyuBtn active d-flex align-items-center justify-content-center"
                    onClick={(e) => this.nextItem('TenguRyu')}
                  >
                    <h1>TenguRyu</h1>
                  </div>
                  <div
                    className="navItem LehrerBtn d-flex align-items-center justify-content-center"
                    onClick={(e) => this.nextItem('Lehrer')}
                  >
                    <h1>Lehrer</h1>
                  </div>
                  <div
                    className="arrow downArrow d-flex align-items-center justify-content-center active"
                    onClick={(e) => this.clickUpDown('down')}
                  >
                    <img src="arrow_white_down.png" alt="" />
                  </div>
                </div>
                <div className="TenguRyu">
                  <div className="modal-col d-flex flex-column h-100">
                    <div className="modal-up">
                      <h1>karate-do</h1>
                      <h2>
                        „Es ablehnen zu kämpfen, es ablehnen zu unterliegen...“
                      </h2>
                      <div className="scroll h22">
                        <p>
                          Ursprüngliches Ziel von Karate war es eine bedrohliche
                          Situation zu überstehen. Dazu war es notwendig seine
                          vorhandenen körperlichen und geistigen Fähigkeiten
                          optimal zu nutzen. Von entscheidender Bedeutung war
                          sicher ein gutes Selbstbewußtsein und die nötige
                          Entschlossenheit. Bewegungen im Karate basieren auf
                          physikalischen Grundgesetzen, dies sollte man bei
                          seinen Techniken optimal für sich ausnutzen. Geistig
                          sollte man konzentriert und trotzdem flexibel sein.
                          Optimalen Erfolg verspricht wahrscheinlich nur das
                          harmonische Zusammenspiel sehr vieler physischer,
                          psychischer und mentaler Faktoren. Daher ist absolute
                          Perfektion nicht zu erreichen.
                        </p>
                      </div>
                    </div>
                    <div className="modal-strip">
                      <div className="pics d-flex flex-row justify-content-center">
                        <div className="img num1"></div>
                        <div className="img num8"></div>
                        <div className="img num9"></div>
                      </div>
                    </div>
                    <div className="modal-down">
                      <h1>tengu-ryu</h1>
                      <div className="scroll h26">
                        <p>
                          Im Karate gibt es unterschiedliche Schulen (ryu's).
                          Tengu-Ryū oder Tengu-no-michi (wörtlich: „Weg des
                          Tengu“) ist ein rein defensiver Stil der klassischen
                          japanischen Kampfkünste (Budo). Initiiert wurde dieser
                          Stil 1995 von dem französischen Kampfkunst- experten
                          Roland Habersetzer. Er umfasst drei Kompetenzbereiche:
                          Tengu-Ryū Karatedo (ohne Waffen), Tengu-Ryū Kobudo
                          (traditionelle Waffen), Tengu-Ryū Hojutsu (moderne
                          Waffen). 2006 wurde dieser Stil in Japan durch die
                          japanische Karatemeister Ogura Tsuneyoshi und Ōtsuka
                          Tadahiko anerkannt. Das heißt, Hanshi Habersetzer ist
                          der erste Soke dieses Stils. Tengu-Ryū ist eine
                          Synthese der traditionellen japanischen Kriegskünste,
                          die auf kulturellen und nicht auf wettkämpferischen
                          Kriterien beruhen, mit dem Ziel der persönlichen
                          Verwirklichung im körperlichen Bereich (Techniken) wie
                          im mentalen Bereich (Ethik). Dieser Stil der
                          Kriegskunst integriert sowohl die klassischen als auch
                          die modernen Entwicklungen mit oder ohne Waffen.
                          Tengu-Ryū ist der Versuch, die Kampfkunst im 21.
                          Jahrhundert neu zu definieren.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Lehrer d-none">
                  <div className="modal-col d-flex flex-column h-100">
                    <div className="modal-up">
                      <h1 className="red center">Roland Habersetzer</h1>
                      <div className="scroll h26">
                        <p>
                          <span>Roland Habersetzer</span> praktiziert seit 1957
                          die Kampfkünste und wurde 1961 einer der ersten
                          Karate-Schwarzgurte Frankreichs. Zu Recht gilt er als
                          Spezialist der Kampfkünste Japans (Bude) und Chinas
                          (Wushu). Er ist Inhaber ver- schiedener französischer,
                          japanischer und chinesischer Diplome. 1992 erhielt er
                          in Japan vom O-Sensei Ogura Tsune- yoshi (geb. 1921,
                          vom Gembunkan-Dojo; Ogura Sensei war Schüler von
                          Yamaguchi Gogen, 1909-1989, und von Gima Makoto,
                          1897-1998) den 8. Dan-Grad und den Titel „Shihan". Im
                          April 2006 wurde dann zum „Hanshi" mit dem Titel eines
                          „Soke" (Gründungsmeister) ernannt für seinen eigenen
                          Stil „Tengu-no-michi". Diese Grade und Titel wurden
                          bestätigt von Otsuka Tadahiko vom Gojukensha in Tokyo,
                          eines anderen Meisters, mit Beziehungen zu Goju-ryu,
                          Naha-te und Shuri-te und direkter Schüler von Higa
                          Yuchoku (1910-1994), der ihn zum „Hanshi" ernannte.
                          Das geschah als Anerkennung und Belohnung seiner
                          einzigartigen Missionsarbeit und der sicheren Wirkung,
                          womit auch die Bedeutung betont wird, die Roland
                          Habersetzer den 49 Jahren seiner Kampfkunstpraxis und
                          seines Einsatzes für die echte Tradition geben wollte,
                          indem er die drei Stufen „Shu", „Ha", „Li"
                          respektierte.
                        </p>
                      </div>
                    </div>
                    <div className="modal-strip">
                      <div className="pics d-flex flex-row justify-content-center">
                        <div className="img num4"></div>
                        <div className="img num5"></div>
                        <div className="img num6"></div>
                      </div>
                    </div>
                    <div className="modal-down">
                      <div className="scroll h31">
                        <p>
                          Und damit wird, letztendlich, auch sein eigenes,
                          praktisches Konzept in den Kampfkünsten, sein
                          „Tengu-Weg („Tengu-no-michi"), legitimiert. Bereits
                          1968 hat er mit seiner außergewöhlichen
                          Verbreitungsarbeit begonnen. Mit ungefähr 70
                          Veröffentlichungen bis heute (*), ist er wohl der
                          Autor des wichtigsten Werkes der Welt über die Kampf-
                          künste, eine Quelle der Geschichte, der Technik und
                          der Pädagogik in allen französisch sprechenden Ländern
                          und in vielen anderen. Nachdem er 10 Jahre lang eine
                          der Triebfedern des jungen französischen
                          Karateverbandes war, zu- ständig für den ganzen
                          östlichen Teil des Landes, gründete er 1974 das
                          Budoforschungszentrum (CRB), ein inter- nationales und
                          unabhängiges Organ für zahllose Budokas, die sich vor
                          allem um die geistige Zukunft der Kampf- künste des
                          fernen Ostens sorgen, denn er war schnell und tief
                          enttäuscht von der sportlichen Entwicklung einer
                          Sache, die er als eine Kunst und einen kulturellen
                          Ausdruck betrachtete. In diesem Rahmen und in einer
                          Vielzahl von Lehrgängen und Konferenzen in der ganzen
                          Welt, als auch in einer Serie von technischen
                          Handbüchern und ge- schichtlichen Veröffentlichungen,
                          die er als Pionierwerke verfaßt hat, hat er einen
                          starken Weg geschaffen, der zurück führt zu den
                          traditionellen Werten dieser Künste, ohne jemals von
                          seiner Überzeugung abzuweichen.
                        </p>
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
