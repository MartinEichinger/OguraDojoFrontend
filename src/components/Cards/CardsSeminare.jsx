/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import $ from 'jquery';
import React, { Component } from 'react';
import CardContent from './CardContent';
import './Cards.css';

class CardsSeminare extends Component {
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
      img: 'main_publikationen.png',
      modal: '#exModalTraining',
      heading: 'Seminare / Publikationen',
      pos: '50% 50%',
      cont1Heading: ['Karate', 'Qi Gong'],
      cont1Body: [
        {
          cont: [
            'Bücher und Veröffent- lichungen von Soke Roland Habersetzer auf Palisander',
          ],
          body: [''],
        },
        {
          cont: ['Bücher von Prof. Ding HongYu auf Lilium'],
          body: [''],
        },
      ],
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
        <CardContent props={this.propsCard} />
      </React.Fragment>
    );
  }
}

export default CardsSeminare;
