/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import $ from 'jquery';
import React, { Component } from 'react';

import './Cards.css';

class CardsKarate extends Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.stats = {
      status: 0,
    };

    // STYLES
    this.styleCard = {
      width: '640px',
      minWidth: '340px',
      height: '300px',
      border: '1px solid black',
      borderRadius: '5px',
      margin: '20px 20px',
      padding: '0px',
      fontFamily: 'Ribeye, cursive',
      backgroundColor: 'rgba(52,58,64,1)',
      color: 'rgba(191,191,191,1)',

      '& .img': {
        top: '0px',
        background: 'url(main_karate.png) no-repeat 50% 20%',
        borderRadius: '5px 5px 0px 0px',
        width: '100%',
        height: '200px',
        margin: '0px',
        padding: '0px',
      },

      '& h1': {
        padding: '20px',
      },
    };

    this.styleModal = {
      width: '100vw',
      maxWidth: '1440px',
      height: '80vh',
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

      '& .modal-dialog': {
        zIndex: '1052',
        position: 'relative',

        '& .modal-content': {
          height: '80vh',
          backgroundColor: 'rgba(0,0,0,0)',

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
            height: '408px',
            backgroundColor: 'white',
            borderRadius: '5px',
            boxShadow: '0px 0px 30px 0px white',
            padding: '25px',
          },

          '& .modal-strip': {
            height: '200px',
            backgroundColor: 'rgba(83,0,0,1)',
            margin: '15px 0px 15px -250px',
            boxShadow: '0px 0px 30px 0px white',
            position: 'relative',
          },

          '& .modal-down': {
            height: '408px',
            backgroundColor: 'white',
            borderRadius: '5px',
            boxShadow: '0px 0px 30px 0px white',
            padding: '25px',
          },
        },
      },
    };

    this.styleNavigation = {
      '& .form': {
        transition: 'transform 0.5s ease-in-out',
      },

      '& .form1': {
        transform: 'translate3d(0px, 0px, 0px)',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        color: 'rgba(100, 100, 100, 1)',
      },

      '& .form2': {
        transform: 'translate3d(0px, -120px, -20px)',
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
        color: 'rgba(100, 100, 100, 1)',
      },

      '& .form5': {
        transform: 'translate3d(0px, -60px, -80px)',
        backgroundColor: 'rgba(175, 175, 175, 0.5)',
        color: 'rgba(100, 100, 100, 1)',
      },

      '& .form6': {
        transform: 'translate3d(0px, 0px, -100px)',
        backgroundColor: 'rgba(175, 175, 175, 0.5)',
        color: 'rgba(100, 100, 100, 1)',
      },

      '& .form7': {
        transform: 'translate3d(0px, 60px, -80px)',
        backgroundColor: 'rgba(175, 175, 175, 0.5)',
        color: 'rgba(100, 100, 100, 1)',
      },

      '& .form8': {
        transform: 'translate3d(0px, 120px, -60px)',
        backgroundColor: 'rgba(175, 175, 175, 0.5)',
        color: 'rgba(100, 100, 100, 1)',
      },

      '& .form9': {
        transform: 'translate3d(0px, 180px, -40px)',
        backgroundColor: 'rgba(175, 175, 175, 0.75)',
        color: 'rgba(100, 100, 100, 1)',
      },

      '& .form10': {
        transform: 'translate3d(0px, 120px, -20px)',
        backgroundColor: 'rgba(175, 175, 175, 1)',
        color: 'rgba(100, 100, 100, 1)',
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
      this.nextItem(this.stats.event);
    }
  }

  nextItem = (e) => {
    console.log('nextItem', e.target.parentElement.classList[1]);
    if (this.stats.status === 0) {
      var step = parseInt(
        e.target.parentElement.classList[1].replace('form', '')
      );

      this.stats = {
        status: 11 - step,
        event: e,
      };
    }

    // find all .form items and toggle class with next higher class
    var f = this.form.current;
    for (var x of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
      this['f' + x] = $(f).children(`.form${x}`);
    }

    for (x of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
      var num = x === 10 ? 0 : x;
      this['f' + x].addClass(`form${num + 1}`).removeClass(`form${x}`);
    }

    this.stats.status -= 1;
    // set state to trigger re-render
    this.setState({ run: 1 });
  };

  handleClick = (e) => {
    var tar = e.target.attributes['id']?.value;
    console.log('Cardskarate/handleClick', e.currentTarget, e.target, tar);

    if (tar === 'modalCard') {
      document.querySelector('.Frame').classList.remove('bg');
      document.querySelector('.Frame').classList.add('fg');
    } else if (tar === 'modalCardEx') {
      document.querySelector('.Frame').classList.remove('fg');
      document.querySelector('.Frame').classList.add('bg');
    }
  };

  render() {
    console.log('render');
    return (
      <React.Fragment>
        <button
          className="Cards d-flex flex-column bg-dark-o"
          data-bs-toggle="modal"
          data-bs-target="#exModal"
          css={this.styleCard}
          id="modalCard"
        >
          <div className="img" id="modalCard"></div>
          <h1 id="modalCard">TenguRyu Karate-Do</h1>
        </button>

        <div
          className="modal fade"
          id="exModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          data-bs-backdrop="static"
        >
          <div className="frameC9">
            <div className="center" css={this.styleNavigation} ref={this.form}>
              <div className="form form1" onClick={this.nextItem}>
                <p className="heading">Home</p>
              </div>
              <div className="form form2" onClick={this.nextItem}>
                <p className="heading">Training</p>
              </div>
              <div className="form form3" onClick={this.nextItem}>
                <p className="heading">Seminare</p>
              </div>
              <div className="form form4" onClick={this.nextItem}>
                <p className="heading">Aktuelles</p>
              </div>
              <div className="form form5" onClick={this.nextItem}>
                <p className="heading">Kontakt</p>
              </div>
              <div className="form form6" onClick={this.nextItem}>
                <p className="heading">Lehrer</p>
              </div>
              <div className="form form7" onClick={this.nextItem}>
                <p className="heading">Trainer</p>
              </div>
              <div className="form form8" onClick={this.nextItem}>
                <p className="heading">Bücher</p>
              </div>
              <div className="form form9" onClick={this.nextItem}>
                <p className="heading">Publikationen</p>
              </div>
              <div className="form form10" onClick={this.nextItem}>
                <p className="heading">Videos</p>
              </div>
            </div>
          </div>
          <div className="modal-dialog" css={this.styleModal}>
            <div className="modal-content">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                id="modalCardEx"
              >
                <img src="./CancelButton.png" alt="" id="modalCardEx" />
              </button>
              <div className="modal-up">
                <h1>karate-do</h1>
                <h2>„Es ablehnen zu kämpfen, es ablehnen zu unterliegen...“</h2>
                <p>
                  Ursprüngliches Ziel von Karate war es eine bedrohliche
                  Situation zu überstehen. Dazu war es notwendig seine
                  vorhandenen körperlichen und geistigen Fähigkeiten optimal zu
                  nutzen. Von entscheidender Bedeutung war sicher ein gutes
                  Selbstbewußtsein und die nötige Entschlossenheit. Bewegungen
                  im Karate basieren auf physikalischen Grundgesetzen, dies
                  sollte man bei seinen Techniken optimal für sich ausnutzen.
                  Geistig sollte man konzentriert und trotzdem flexibel sein.
                  Optimalen Erfolg verspricht wahrscheinlich nur das harmonische
                  Zusammenspiel sehr vieler physischer, psychischer und mentaler
                  Faktoren. Daher ist absolute Perfektion nicht zu erreichen.
                </p>
              </div>

              <div className="modal-strip">...</div>
              <div className="modal-down">
                <h1>tengu-ryu</h1>
                <p>
                  Im Karate gibt es unterschiedliche Schulen (ryu's). Tengu-Ryū
                  oder Tengu-no-michi (wörtlich: „Weg des Tengu“) ist ein rein
                  defensiver Stil der klassischen japanischen Kampfkünste
                  (Budo). Initiiert wurde dieser Stil 1995 von dem französischen
                  Kampfkunst- experten Roland Habersetzer. Er umfasst drei
                  Kompetenzbereiche: Tengu-Ryū Karatedo (ohne Waffen), Tengu-Ryū
                  Kobudo (traditionelle Waffen), Tengu-Ryū Hojutsu (moderne
                  Waffen). 2006 wurde dieser Stil in Japan durch die japanische
                  Karatemeister Ogura Tsuneyoshi und Ōtsuka Tadahiko anerkannt.
                  Das heißt, Hanshi Habersetzer ist der erste Soke dieses Stils.
                  Tengu-Ryū ist eine Synthese der traditionellen japanischen
                  Kriegskünste, die auf kulturellen und nicht auf
                  wettkämpferischen Kriterien beruhen, mit dem Ziel der
                  persönlichen Verwirklichung im körperlichen Bereich
                  (Techniken) wie im mentalen Bereich (Ethik). Dieser Stil der
                  Kriegskunst integriert sowohl die klassischen als auch die
                  modernen Entwicklungen mit oder ohne Waffen. Tengu-Ryū ist der
                  Versuch, die Kampfkunst im 21. Jahrhundert neu zu definieren.
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CardsKarate;
