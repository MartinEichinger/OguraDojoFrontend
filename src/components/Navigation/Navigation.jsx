/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx, keyframes } from '@emotion/react';
import './navigation.css';
import React, { Component } from 'react';

class Navigation extends Component {
  constructor(props) {
    super(props);

    // BREAKPOINTS
    this.breakpoints = [576, 678, 1023, 1280];
    this.mq = this.breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

    // STYLES
    this.styleNavCard = {
      top: '40px',
      position: 'relative',
      width: '1320px',
      minWidth: '340px',
      height: '300px',
      border: '1px solid black',
      borderRadius: '5px',
      margin: '20px auto',
      backgroundColor: 'rgba(52,58,64,1)',
      fontFamily: 'Ribeye, cursive',
      zIndex: '1032',

      [this.mq[3]]: {
        width: '1012px',
        margin: '10px auto',
      },

      [this.mq[2]]: {
        width: '640px',
        margin: '20px auto',
      },

      [this.mq[1]]: {
        width: '100%',
        margin: '20px auto',
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
          textAlign: 'center',
          color: 'rgba(191,191,191,1)',

          [this.mq[2]]: {
            fontSize: '24px',
          },
        },

        '& h2': {
          fontSize: '24px',
          textAlign: 'left',
          color: 'rgba(191,191,191,1)',

          [this.mq[2]]: {
            fontSize: '16px',
            textAlign: 'center',
          },
        },
      },
    };

    this.styleNav = {
      zIndex: '1032',
      boxShadow: '0px 0px 25px 0px rgba(255,255,255,1)',

      '& .block': {
        height: '100px',
        width: '100vw',

        '& a': {
          '& img': {
            width: '200px',
            //position: 'absolute',
          },
        },

        '& .center': {
          //width: 'calc(100% - 200px)',
          fontFamily: 'Ribeye, cursive',
          //position: 'absolute',

          '& h1': {
            fontSize: '36px',
            textAlign: 'center',
            color: 'rgba(191,191,191,1)',

            [this.mq[0]]: {
              fontSize: '24px',
            },
          },

          '& h2': {
            fontSize: '18px',
            textAlign: 'center',
            color: 'rgba(191,191,191,1)',

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
          className="navbar navbar-dark fixed-top bg-dark-o invisible d-flex flex-column"
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

        <div
          className="navbarCard bg-dark-o slide-in-top"
          css={this.styleNavCard}
        >
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
