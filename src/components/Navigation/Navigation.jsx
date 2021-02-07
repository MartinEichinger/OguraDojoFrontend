/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx, keyframes } from '@emotion/react';
import './navigation.css';
import React, { Component } from 'react';

class Navigation extends Component {
  constructor(props) {
    super(props);

    // STYLES
    this.styleNavCard = {
      top: '100px',
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

      '& img': {
        width: '480px',
      },

      '& h1': {
        fontSize: '48px',
        textAlign: 'center',
        color: 'rgba(191,191,191,1)',
      },

      '& h2': {
        fontSize: '24px',
        textAlign: 'left',
        color: 'rgba(191,191,191,1)',
      },
    };

    this.styleNav = {
      zIndex: '1032',
      boxShadow: '0px 0px 25px 0px rgba(255,255,255,1)',

      '& .container-fluid': {
        height: '100px',

        '& a': {
          '& img': {
            width: '200px',
            //position: 'absolute',
          },
        },

        '& .center': {
          width: '100%',
          fontFamily: 'Ribeye, cursive',
          position: 'absolute',

          '& h1': {
            fontSize: '36px',
            textAlign: 'center',
            color: 'rgba(191,191,191,1)',
          },

          '& h2': {
            fontSize: '18px',
            textAlign: 'center',
            color: 'rgba(191,191,191,1)',
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
    if (window.scrollY > 120) {
      document.querySelector('.navbar').classList.add('slide-in-top');
      document.querySelector('.navbar').classList.remove('slide-out-top');
      document.querySelector('.navbarCard').classList.add('slide-out-top');
      document.querySelector('.navbarCard').classList.remove('slide-in-top');
    } else {
      document
        .querySelector('.navbar')
        .classList.remove('slide-in-top', 'invisible');
      document.querySelector('.navbar').classList.add('slide-out-top');
      document.querySelector('.navbarCard').classList.remove('slide-out-top');
      document.querySelector('.navbarCard').classList.add('slide-in-top');
    }
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="navbar navbar-dark fixed-top bg-dark-o invisible"
          css={this.styleNav}
        >
          <div className="container-fluid">
            <a href="http://www.tengu.fr" target="_blank" rel="noreferrer">
              <img src="./tengu.png" alt="" />
            </a>
            <div className="center">
              <h1>Ogura Dojo</h1>
              <h2>Tengu Ryu Karate-Do, PanZi Gong, TaiJi Quan, QiGong</h2>
            </div>
          </div>
        </div>

        <div className="navbarCard bg-dark-o" css={this.styleNavCard}>
          <div className="d-flex flex-row">
            <img src="./tengu.png" alt="" />
            <div className="d-flex flex-column justify-content-center m-5">
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
