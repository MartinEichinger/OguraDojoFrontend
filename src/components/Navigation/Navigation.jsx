/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx, keyframes } from '@emotion/react';
import '../animation.css';
import React, { Component } from 'react';

class Navigation extends Component {
  constructor(props) {
    super(props);

    // BREAKPOINTS
    this.breakpoints = [576, 678, 1023, 1320];
    this.mq = this.breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

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
      backgroundColor: this.colorCard.bgGrey,
      fontFamily: 'Lato, cursive',
      zIndex: '1032',

      [this.mq[3]]: {
        width: 'calc(100vw - 40px)',
        margin: '20px 20px',
      },

      [this.mq[0]]: {
        minWidth: '390px',
      },

      '& img': {
        width: '480px',

        [this.mq[2]]: {
          width: '50%',
          height: '30%',
        },
      },

      '& .text': {
        margin: '48px',

        [this.mq[3]]: {
          margin: '24px',
        },

        [this.mq[2]]: {
          margin: '12px',
        },

        '& h1': {
          fontSize: '48px',
          fontWeight: 'bold',
          textAlign: 'left',
          color: this.colorCard.typoGrey,

          [this.mq[2]]: {
            fontSize: '24px',
          },
        },

        '& h2': {
          fontSize: '36px',
          fontWeight: 'bold',
          textAlign: 'left',
          color: this.colorCard.typoGrey,

          [this.mq[2]]: {
            fontSize: '16px',
            textAlign: 'center',
          },
        },
      },
    };

    this.styleNav = {
      backgroundColor: this.colorCard.bgGrey,
      boxShadow: `10px 10px 25px 0px ${this.colorCard.shadowGrey}`,
      zIndex: '1032',

      '& .block': {
        height: '100px',
        width: '100vw',

        '& a': {
          '& img': {
            width: '200px',
          },
        },

        '& .center': {
          fontFamily: 'Lato, cursive',

          '& h1': {
            fontSize: '36px',
            textAlign: 'center',
            fontWeight: 'bold',
            color: this.colorCard.typoGrey,

            [this.mq[0]]: {
              fontSize: '24px',
            },
          },

          '& h2': {
            fontSize: '18px',
            fontWeight: 'bold',

            textAlign: 'center',
            color: this.colorCard.typoGrey,

            [this.mq[0]]: {
              display: 'none',
            },
          },
        },
      },
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    console.log(window.scrollY);
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

  render() {
    return (
      <React.Fragment>
        <div
          className="navbar navbar-dark fixed-top invisible d-flex flex-column"
          css={this.styleNav}
        >
          <div className="block d-flex flex-row justify-content-between">
            <a href="http://www.tengu.fr" target="_blank" rel="noreferrer">
              <img src="./tengu.png" alt="" />
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
            <img src="./tengu.png" alt="" />
            <div className="text d-flex flex-column justify-content-center">
              <h1>Willommen im Ogura Dojo</h1>
              <h2>Tengu Ryu Karate-Do, PanZi Gong, TaiJi Quan, QiGong</h2>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navigation;
