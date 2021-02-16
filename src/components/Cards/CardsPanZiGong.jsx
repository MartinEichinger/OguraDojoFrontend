/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import $ from 'jquery';
import React, { Component } from 'react';
import Card from './Card';
import './Cards.css';

class CardsPanZiGong extends Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.stats = {
      status: 0,
    };

    // BREAKPOINTS
    this.breakpoints = [576, 678, 1023, 1280];
    this.mq = this.breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

    // STYLES
    this.propsCard = {
      img: 'main_panzigong.png',
      modal: '#exModalPanziGong',
      heading: 'PanZi Gong',
      pos: '50% 20%',
    };

    this.styleModalDialog = {
      width: '100vw',
      maxWidth: '1440px',
      height: 'calc(100vh - 80px)',
      marginTop: '50px',
      zIndex: '1051',
      position: 'relative',

      '& .btn-close': {
        width: '20px',
        height: '20px',
        padding: '3px',
        margin: '0px',
        borderRadius: '25px',
        lineHeight: '0',
        position: 'absolute',
        right: 'calc(-1 * (100vw - 1440px) / 2 + 20px )',
        top: '0px',
        backgroundColor: 'rgba(0,0,0,0)',
        border: 'none',
        outline: 'none',
      },

      '& .modal-content': {
        width: '100%',
        height: '90vh',
        backgroundColor: 'rgba(0,0,0,0)',

        '& .modal-row': {
          width: '100%',

          '& .modal-col': {
            width: 'calc(100% - 220px)',

            '& h1': {
              fontSize: '48px',
              fontFamily: 'Ribeye, cursive',
            },

            '& h2': {
              fontSize: '24px',
              fontFamily: 'Ribeye, cursive',
              color: 'rgba(83,0,0,1)',
              margin: '15px 0px',
            },

            '& p': {
              fontSize: '22px',
              margin: '15px 0px',
              fontFamily: 'Roboto',
              textAlign: 'justify',
            },

            '& .modal-up': {
              height: '40%',
              backgroundColor: 'white',
              borderRadius: '5px',
              boxShadow: '0px 0px 30px 0px white',
              padding: '25px',
            },

            '& .modal-strip': {
              height: '20%',
              backgroundColor: 'rgba(83,0,0,1)',
              margin: '15px 0px 15px -250px',
              boxShadow: '0px 0px 30px 0px white',
              position: 'relative',
            },

            '& .modal-down': {
              height: '40%',
              backgroundColor: 'white',
              borderRadius: '5px',
              boxShadow: '0px 0px 30px 0px white',
              padding: '25px',
            },
          },

          '& .frameC9': {
            position: 'relative',
            width: '220px',
            height: '10vh',
            zIndex: '1052',
            marginLeft: '20px',

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
                //top: '140px',
                //left: '125px',
                height: '54px',
                width: '200px',
                //backgroundColor: 'rgba(255, 255, 255, 1)',
                boxShadow: '0px 0px 15px 0px rgba(255, 255, 255, 1)',
                borderRadius: '3px',
                border: '1px solid grey',
                cursor: 'pointer',
                transition: 'transform 0.4s linear',

                '& .heading': {
                  margin: '0px',
                  fontSize: '36px',
                  textAlign: 'center',
                },
              },
            },

            '& .form1': {
              transform: 'translate3d(0px, 0px, 0px)',
              backgroundColor: 'rgba(255, 255, 255, 1)',
              color: 'rgba(100, 100, 100, 1)',
            },

            '& .form2': {
              transform: 'translate3d(0px, -90px, -20px)',
              backgroundColor: 'rgba(175, 175, 175, 1)',
              color: 'rgba(100, 100, 100, 1)',
            },

            '& .form3': {
              transform: 'translate3d(0px, -180px, -40px)',
              backgroundColor: 'rgba(175, 175, 175, 0.75)',
              color: 'rgba(100, 100, 100, 1)',
            },

            '& .form4': {
              transform: 'translate3d(0px, -120px, -60px)',
              backgroundColor: 'rgba(175, 175, 175, 0.5)',
              color: 'rgba(100, 100, 100, 0)',
            },

            '& .form5': {
              transform: 'translate3d(0px, -60px, -80px)',
              backgroundColor: 'rgba(175, 175, 175, 0.5)',
              color: 'rgba(100, 100, 100, 0)',
            },

            '& .form6': {
              transform: 'translate3d(0px, 0px, -80px)',
              backgroundColor: 'rgba(175, 175, 175, 0.5)',
              color: 'rgba(100, 100, 100, 0)',
            },

            '& .form7': {
              transform: 'translate3d(0px, 60px, -60px)',
              backgroundColor: 'rgba(175, 175, 175, 0.5)',
              color: 'rgba(100, 100, 100, 0)',
            },

            '& .form8': {
              transform: 'translate3d(0px, 180px, -40px)',
              backgroundColor: 'rgba(175, 175, 175, 0.75)',
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
    window.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleClick);
  }

  componentDidUpdate() {
    console.log('did update');
    if (this.stats.status !== 0) {
      setTimeout(() => {
        this.nextItem(this.stats.event);
      }, 400);
    }
  }

  nextItem = (e) => {
    // check if there is a current run / if not, check number of necessary steps
    if (this.stats.status === 0) {
      var step = parseInt(
        e.target.parentElement.classList[1].replace('form', '')
      );

      if (step === 1) {
        this.stats = { status: 0, event: e };
        return 0;
      } else if (step === 2) {
        this.stats = { status: 4, event: e };
      } else if (step === 3) {
        this.stats = { status: 3, event: e };
      } else if (step === 4 || step === 5 || step === 6 || step === 7) {
        return 0;
      } else if (step === 8) {
        this.stats = { status: 2, event: e };
      } else if (step === 9) {
        this.stats = { status: 1, event: e };
      }
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
    return 1;
    // eslint-disable-next-line
    var tar = e.target.attributes['id']?.value;
    console.log('Cardskarate/handleClick', e.currentTarget, e.target, tar);

    if (tar === 'modalCard') {
      document.querySelector('.Frame').classList.remove('bg');
      document.querySelector('.Frame').classList.add('fg');
      //document
      //  .querySelector('.modal')
      //  .classList.add('d-flex', 'flex-row-reverse', 'align-items-center');
    } else if (tar === 'modalCardEx') {
      document.querySelector('.Frame').classList.remove('fg');
      document.querySelector('.Frame').classList.add('bg');
      //document
      //  .querySelector('.modal')
      //  .classList.remove('d-flex', 'flex-row-reverse', 'align-items-center');
    }
  };

  render() {
    console.log('render');
    return (
      <React.Fragment>
        <Card props={this.propsCard} />

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
                className="btn-close"
                data-bs-dismiss="modal"
                id="modalCardEx"
              >
                <img src="./CancelButton.png" alt="" id="modalCardEx" />
              </button>
              <div className="modal-row d-flex flex-row h-100 align-items-center">
                <div className="modal-col d-flex flex-column h-100">
                  <div className="modal-up">
                    <h1>karate-do</h1>
                    <h2>
                      „Es ablehnen zu kämpfen, es ablehnen zu unterliegen...“
                    </h2>
                    <p>
                      Ursprüngliches Ziel von Karate war es eine bedrohliche
                      Situation zu überstehen. Dazu war es notwendig seine
                      vorhandenen körperlichen und geistigen Fähigkeiten optimal
                      zu nutzen. Von entscheidender Bedeutung war sicher ein
                      gutes Selbstbewußtsein und die nötige Entschlossenheit.
                      Bewegungen im Karate basieren auf physikalischen
                      Grundgesetzen, dies sollte man bei seinen Techniken
                      optimal für sich ausnutzen. Geistig sollte man
                      konzentriert und trotzdem flexibel sein. Optimalen Erfolg
                      verspricht wahrscheinlich nur das harmonische
                      Zusammenspiel sehr vieler physischer, psychischer und
                      mentaler Faktoren. Daher ist absolute Perfektion nicht zu
                      erreichen.
                    </p>
                  </div>

                  <div className="modal-strip">...</div>
                  <div className="modal-down">
                    <h1>tengu-ryu</h1>
                    <p>
                      Im Karate gibt es unterschiedliche Schulen (ryu's).
                      Tengu-Ryū oder Tengu-no-michi (wörtlich: „Weg des Tengu“)
                      ist ein rein defensiver Stil der klassischen japanischen
                      Kampfkünste (Budo). Initiiert wurde dieser Stil 1995 von
                      dem französischen Kampfkunst- experten Roland Habersetzer.
                      Er umfasst drei Kompetenzbereiche: Tengu-Ryū Karatedo
                      (ohne Waffen), Tengu-Ryū Kobudo (traditionelle Waffen),
                      Tengu-Ryū Hojutsu (moderne Waffen). 2006 wurde dieser Stil
                      in Japan durch die japanische Karatemeister Ogura
                      Tsuneyoshi und Ōtsuka Tadahiko anerkannt. Das heißt,
                      Hanshi Habersetzer ist der erste Soke dieses Stils.
                      Tengu-Ryū ist eine Synthese der traditionellen japanischen
                      Kriegskünste, die auf kulturellen und nicht auf
                      wettkämpferischen Kriterien beruhen, mit dem Ziel der
                      persönlichen Verwirklichung im körperlichen Bereich
                      (Techniken) wie im mentalen Bereich (Ethik). Dieser Stil
                      der Kriegskunst integriert sowohl die klassischen als auch
                      die modernen Entwicklungen mit oder ohne Waffen. Tengu-Ryū
                      ist der Versuch, die Kampfkunst im 21. Jahrhundert neu zu
                      definieren.
                    </p>
                  </div>
                </div>
                <div className="frameC9">
                  <div className="center" ref={this.form}>
                    <div className="form form1" onClick={this.nextItem}>
                      <p className="heading">Tengu Ryu</p>
                    </div>
                    <div className="form form2" onClick={this.nextItem}>
                      <p className="heading">Lehrer</p>
                    </div>
                    <div className="form form3" onClick={this.nextItem}>
                      <p className="heading">Formen</p>
                    </div>
                    <div className="form form4" onClick={this.nextItem}>
                      <p className="heading">.</p>
                    </div>
                    <div className="form form5" onClick={this.nextItem}>
                      <p className="heading">.</p>
                    </div>
                    <div className="form form6" onClick={this.nextItem}>
                      <p className="heading">.</p>
                    </div>
                    <div className="form form7" onClick={this.nextItem}>
                      <p className="heading">.</p>
                    </div>
                    <div className="form form8" onClick={this.nextItem}>
                      <p className="heading">Training</p>
                    </div>
                    <div className="form form9" onClick={this.nextItem}>
                      <p className="heading">Blog</p>
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

export default CardsPanZiGong;
