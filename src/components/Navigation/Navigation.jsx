/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx, keyframes } from '@emotion/react';
import '../animation.css';
import React, { Component } from 'react';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.debug = false;

    // BREAKPOINTS
    this.mq = this.props.mq;

    // STYLES
    this.colorCard = this.props.colors;

    this.styleNavCard = {
      top: '40px',
      position: 'relative',
      width: '1280px',
      minWidth: '340px',
      height: '300px',
      boxShadow: `10px 10px 25px 0px ${this.colorCard.shadowGrey}`,
      border: 'none',
      outline: 'none',
      borderRadius: '5px',
      margin: '20px auto',
      //backgroundColor: this.colorCard.bgGrey,
      backgroundImage: 'url(nav_white_bg.png)',
      backgroundSize: 'cover',
      fontFamily: 'Lato, cursive',
      zIndex: '1032',

      [this.mq[4]]: {
        width: 'calc(100vw - 40px)',
        margin: '20px 20px',
      },

      [this.mq[0]]: {
        minWidth: '390px',
        marginLeft: 'calc((100vw - 390px) / 2)',
        marginRight: 'calc((100vw - 390px) / 2)',
      },

      '& button': {
        width: '145px',
        position: 'relative',
        backgroundColor: this.colorCard.bgWhite,
        color: this.colorCard.bgRed,
        border: `1px solid ${this.colorCard.bgRed}`,
        borderRadius: '25px',
        fontSize: '1.75vh',

        '&:hover': {
          backgroundColor: 'rgba(121,0,0,0.5)',
        },

        '&:active': {
          fontWeight: 'bold',
          backgroundColor: this.colorCard.bgRed,
          color: this.colorCard.bgWhite,
          border: `1px solid ${this.colorCard.bgWhite}`,
        },
      },

      '& img': {
        width: '420px',

        [this.mq[3]]: {
          width: '50%',
          height: '30%',
        },
      },

      '& .text': {
        margin: '0px 20px',
        height: '265px',

        [this.mq[4]]: {
          margin: '24px',
        },

        [this.mq[3]]: {
          margin: '2% 2%',
          width: '46%',
        },

        [this.mq[2]]: {
          height: '200px',
        },

        [this.mq[2]]: {
          height: '160px',
        },

        '& h1': {
          fontSize: '48px',
          fontWeight: 'bold',
          textAlign: 'left',
          color: this.colorCard.typoGrey,

          [this.mq[3]]: {
            fontSize: '24px',
          },
        },

        '& h2': {
          fontSize: '36px',
          fontWeight: 'bold',
          textAlign: 'left',
          color: this.colorCard.typoGrey,

          [this.mq[3]]: {
            fontSize: '16px',
            textAlign: 'center',
          },
        },
      },
    };

    this.styleNav = {
      //backgroundColor: this.colorCard.bgGrey,
      backgroundImage: 'url(nav_bar_bg.png)',
      boxShadow: `10px 10px 25px 0px ${this.colorCard.shadowGrey}`,
      zIndex: '1032',

      '& .block': {
        height: '100px',
        width: '100vw',

        '& a': {
          '& img': {
            width: '170px',
          },
        },

        '& .center': {
          fontFamily: 'Lato, cursive',

          '& h1': {
            fontSize: '36px',
            textAlign: 'center',
            fontWeight: 'bold',
            color: this.colorCard.typoGrey,

            [this.mq[1]]: {
              fontSize: '24px',
            },
          },

          '& h2': {
            fontSize: '18px',
            fontWeight: 'bold',

            textAlign: 'center',
            color: this.colorCard.typoGrey,

            [this.mq[1]]: {
              display: 'none',
            },
          },
        },
      },
    };
  }

  componentDidMount() {
    if (this.debug) console.log('Navigation/compDidMount');
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    if (this.debug) console.log('Navigation/componentWillUnmount');
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 150) {
      document.querySelector('.navbar').classList.add('slide-in-top');
      document
        .querySelector('.navbar')
        .classList.remove('slide-out-top', 'invisible');
      document.querySelector('.navbarCard').classList.add('slide-out-top');
      document.querySelector('.navbarCard').classList.remove('slide-in-top');
    } else {
      document.querySelector('.navbar').classList.remove('slide-in-top');
      document.querySelector('.navbar').classList.add('slide-out-top');
      document.querySelector('.navbarCard').classList.remove('slide-out-top');
      document.querySelector('.navbarCard').classList.add('slide-in-top');
    }
  };

  selectpage = (page) => {
    if (this.debug) console.log('Navigation/selectpage', page);
    this.props.select(page);
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="navbar navbar-dark fixed-top invisible d-flex flex-column"
          css={this.styleNav}
        >
          <div className="block d-flex flex-row justify-content-between">
            <a href="http://www.tengu.fr" target="_blank" rel="noreferrer">
              <img src="./OguraDojoLogo.png" alt="" />
            </a>
            <div className="center d-flex flex-column justify-content-center">
              <h1>Ogura Dojo</h1>
              <h2>Tengu Ryu Karate-Do, PanZi Gong, TaiJi Quan, QiGong</h2>
            </div>
            <div></div>
          </div>
        </div>

        <div className="navbarCard slide-in-top" css={this.styleNavCard}>
          <div className="d-flex flex-row">
            <img src="./OguraDojoLogo.png" alt="" />
            <div className="text d-flex flex-column justify-content-around">
              <h1>Willommen im Ogura Dojo</h1>
              <h2>Tengu Ryu Karate-Do, PanZi Gong, TaiJi Quan, QiGong</h2>
              <div className="btnNav d-flex flex-row justify-content-around">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#idModalTraining"
                  onClick={() => this.selectpage('Training')}
                >
                  Training
                </button>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#idModalTraining"
                  onClick={() => this.selectpage('Wir')}
                >
                  Wir
                </button>
                <button data-bs-toggle="modal" data-bs-target="#idModalBlog">
                  Blog
                </button>
                <button data-bs-toggle="modal" data-bs-target="#idModalEvents">
                  Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navigation;
