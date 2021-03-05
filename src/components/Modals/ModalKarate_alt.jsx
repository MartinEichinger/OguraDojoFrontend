/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import $ from 'jquery';
import React, { Component } from 'react';
import '../animation.css';

class ModalKarate extends Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.stats = {
      status: 0,
      page: 'TenguRyu',
    };

    // BREAKPOINTS
    this.breakpoints = [576, 678, 1023, 1280];
    this.mq = this.breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

    // STYLES
    this.styleModalDialog = {
      width: '100vw',
      maxWidth: '1440px',
      height: 'calc(100vh - 80px)',
      marginTop: '20px',
      zIndex: '1051',
      position: 'relative',

      '& .btn-close': {
        width: '100%',
        height: '46px',
        padding: '3px',
        margin: '0px',
        borderRadius: '25px',
        lineHeight: '0',
        position: 'relative',
        right: '0px',
        //right: 'calc(-1 * (100vw - 1440px) / 2 + 20px )',
        top: '0px',
        backgroundColor: 'rgba(0,0,0,0)',
        border: 'none',
        outline: 'none',
        zIndex: '1100',
      },

      '& .modal-content': {
        width: '100%',
        height: '90vh',
        backgroundColor: 'rgba(0,0,0,0)',
        border: 'none',

        '& .modal-row': {
          width: '100%',

          '& .TenguRyu, .Lehrer': {
            width: '100%',
            position: 'absolute',

            '& .modal-col': {
              width: 'calc(100% - 220px)',

              '& h1': {
                fontSize: '4vh',
              },

              '& h2': {
                fontSize: '2vh',
                color: 'rgba(83,0,0,1)',
                margin: '15px 0px',
              },

              '& p': {
                fontSize: '1.8vh',
                margin: '15px 15px 15px 0px',
                textAlign: 'justify',
              },

              '& .modal-up': {
                height: '35vh',
                backgroundColor: 'white',
                borderRadius: '5px',
                boxShadow: '0px 0px 30px 0px white',
                padding: '2vh',

                '& .scroll': {
                  overflowY: 'auto',
                  height: '25vh',

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
                backgroundColor: 'rgba(83,0,0,1)',
                margin: '15px 0px',
                boxShadow: '0px 0px 30px 0px white',
                position: 'relative',
                overflow: 'hidden',

                '& .pics': {
                  height: '100%',
                  //width: '2000px',
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
                  backgroundImage: 'url(karate_pic_8.png)',
                },
                '& .num3': {
                  backgroundImage: 'url(karate_pic_9.png)',
                },
              },

              '& .modal-down': {
                height: '35vh',
                backgroundColor: 'white',
                borderRadius: '5px',
                boxShadow: '0px 0px 30px 0px white',
                padding: '2vh',

                '& .scroll': {
                  overflowY: 'auto',
                  height: '27vh',

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
            },
          },

          '& .frameC9': {
            position: 'absolute',
            width: '220px',
            height: '10vh',
            zIndex: '1052',
            right: '0px',
            paddingLeft: '20px',

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

            '& .form1': {
              transform: 'translate3d(0px, 0px, 0px)',
              backgroundColor: 'rgba(255, 255, 255, 1)',
              color: 'rgba(83, 0, 0, 1)',
            },

            '& .form2': {
              transform: 'translate3d(0px, -90px, -20px)',
              backgroundColor: 'rgba(175, 175, 175, 1)',
              color: 'rgba(100, 100, 100, 1)',
            },

            '& .form3': {
              transform: 'translate3d(0px, -180px, -40px)',
              backgroundColor: 'rgba(175, 175, 175, 1)',
              color: 'rgba(100, 100, 100, 1)',
            },

            '& .form4': {
              transform: 'translate3d(0px, -120px, -60px)',
              backgroundColor: 'rgba(175, 175, 175, 1)',
              color: 'rgba(100, 100, 100, 0)',
            },

            '& .form5': {
              transform: 'translate3d(0px, -60px, -80px)',
              backgroundColor: 'rgba(175, 175, 175, 1)',
              color: 'rgba(100, 100, 100, 0)',
            },

            '& .form6': {
              transform: 'translate3d(0px, 0px, -80px)',
              backgroundColor: 'rgba(175, 175, 175, 1)',
              color: 'rgba(100, 100, 100, 0)',
            },

            '& .form7': {
              transform: 'translate3d(0px, 60px, -60px)',
              backgroundColor: 'rgba(175, 175, 175, 1)',
              color: 'rgba(100, 100, 100, 0)',
            },

            '& .form8': {
              transform: 'translate3d(0px, 180px, -40px)',
              backgroundColor: 'rgba(175, 175, 175, 1)',
              color: 'rgba(100, 100, 100, 1)',
            },

            '& .form9': {
              transform: 'translate3d(0px, 90px, -20px)',
              backgroundColor: 'rgba(175, 175, 175, 1)',
              color: 'rgba(100, 100, 100, 1)',
            },
          },
        },
      },
    };
  }

  componentDidMount() {
    console.log('ModalKarate/compDidMount');
    window.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    console.log('ModalKarate/compWillUnmount');
    window.removeEventListener('scroll', this.handleClick);
  }

  componentDidUpdate() {
    console.log('ModalKarate/did update');
    if (this.stats.status !== 0) {
      setTimeout(() => {
        this.nextItem(this.stats.event);
      }, 400);
    }
  }

  nextItem = (e, button) => {
    console.log('CardsKarate/nextItem', e, button);
    // check if there is a current run / if not, check number of necessary steps
    if (this.stats.status === 0) {
      // calculate how many steps to rotate
      var step = parseInt(
        e.target.parentElement.classList[1].replace('form', '')
      );

      if (step === 1) {
        this.stats.status = 0;
        this.stats.event = e;
        return 0;
      } else if (step === 2) {
        this.stats.status = 4;
        this.stats.event = e;
      } else if (step === 3) {
        this.stats.status = 3;
        this.stats.event = e;
      } else if (step === 4 || step === 5 || step === 6 || step === 7) {
        return 0;
      } else if (step === 8) {
        this.stats.status = 2;
        this.stats.event = e;
      } else if (step === 9) {
        this.stats.status = 1;
        this.stats.event = e;
      }

      // identify the page to be shown
      document
        .querySelector(`.${this.stats.page}`)
        .classList.remove('slide-in-bottom');
      document
        .querySelector(`.${this.stats.page}`)
        .classList.add('slide-out-top');

      this.stats.page = e.target.innerHTML;

      document
        .querySelector(`.${this.stats.page}`)
        .classList.remove('slide-out-top');
      document
        .querySelector(`.${this.stats.page}`)
        .classList.add('slide-in-bottom');
    }

    // find all .form items and toggle class with next higher class
    var f = this.form.current;
    for (var x of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
      this['f' + x] = $(f).children(`.form${x}`);
    }

    for (x of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
      var num = x === 9 ? 0 : x;
      this['f' + x].addClass(`form${num + 1}`).removeClass(`form${x}`);

      // exchange top text with bottom text
      if (x === 3) {
        this.f7.children('p.heading')[0].innerText = this.f3.children(
          'p.heading'
        )[0].innerText;
        this.f3.children('p.heading')[0].innerText = '.';
      }
    }

    this.stats.status -= 1;
    // set state to trigger re-render
    this.setState({ run: 1 });
  };

  handleClick = (e) => {
    var tar = e.target.attributes['id']?.value;
    console.log('Cardskarate/handleClick', e.currentTarget, e.target, tar);

    if (tar === 'modalCard') {
      //document.querySelector('.Frame').classList.remove('bg');
      //document.querySelector('.Frame').classList.add('fg');
    } else if (tar === 'modalCardEx') {
      //document.querySelector('.Frame').classList.remove('fg');
      //document.querySelector('.Frame').classList.add('bg');
    }
  };

  render() {
    console.log('render');
    return (
      <React.Fragment>
        <div
          className="modal fade"
          id="exModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          data-bs-backdrop="static"
        >
          <div
            className="modal-dialog d-flex flex-row-reverse align-items-center"
            id="modalDialog"
            css={this.styleModalDialog}
          >
            <div className="modal-content">
              <button
                type="button"
                className="btn-close d-flex flex-row align-items-start justify-content-end"
                data-bs-dismiss="modal"
                id="modalCardEx"
              >
                <img src="./CancelButton.png" alt="" id="modalCardEx" />
              </button>
              <div className="modal-row d-flex flex-row h-100 align-items-center">
                <div className="frameC9">
                  <div className="center" ref={this.form}>
                    <div
                      className="form form1"
                      onClick={(e) => this.nextItem(e, '.page1')}
                    >
                      <p className="heading">TenguRyu</p>
                    </div>
                    <div
                      className="form form2"
                      onClick={(e) => this.nextItem(e, '.page2')}
                    >
                      <p className="heading">Lehrer</p>
                    </div>
                    <div
                      className="form form3"
                      onClick={(e) => this.nextItem(e, '.page3')}
                    >
                      <p className="heading">Formen</p>
                    </div>
                    <div
                      className="form form4"
                      onClick={(e) => this.nextItem(e, '')}
                    >
                      <p className="heading">.</p>
                    </div>
                    <div
                      className="form form5"
                      onClick={(e) => this.nextItem(e, '')}
                    >
                      <p className="heading">.</p>
                    </div>
                    <div
                      className="form form6"
                      onClick={(e) => this.nextItem(e, '')}
                    >
                      <p className="heading">.</p>
                    </div>
                    <div
                      className="form form7"
                      onClick={(e) => this.nextItem(e, '')}
                    >
                      <p className="heading">.</p>
                    </div>
                    <div
                      className="form form8"
                      onClick={(e) => this.nextItem(e, '.page4')}
                    >
                      <p className="heading">Training</p>
                    </div>
                    <div
                      className="form form9"
                      onClick={(e) => this.nextItem(e, '.page5')}
                    >
                      <p className="heading">Blog</p>
                    </div>
                  </div>
                </div>
                <div className="TenguRyu slide-in-bottom">
                  <div className="modal-col d-flex flex-column h-100">
                    <div className="modal-up">
                      <h1>karate-do</h1>
                      <h2>
                        „Es ablehnen zu kämpfen, es ablehnen zu unterliegen...“
                      </h2>
                      <div className="scroll">
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
                        <div className="img num2"></div>
                        <div className="img num3"></div>
                      </div>
                    </div>
                    <div className="modal-down">
                      <h1>tengu-ryu</h1>
                      <div className="scroll">
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
                <div className="Lehrer slide-out-top">
                  <div className="modal-col d-flex flex-column h-100">
                    <div className="modal-up">
                      <h1>Roland Habersetzer</h1>
                      <div className="scroll">
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
                      <div className="pics d-flex flex-row">
                        <div className="img num1"></div>
                        <div className="img num2"></div>
                        <div className="img num3"></div>
                        <div className="img num4"></div>
                        <div className="img num5"></div>
                        <div className="img num6"></div>
                        <div className="img num7"></div>
                        <div className="img num8"></div>
                        <div className="img num9"></div>
                      </div>
                    </div>
                    <div className="modal-down">
                      <div className="scroll">
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
