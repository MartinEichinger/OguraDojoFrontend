/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx, keyframes } from '@emotion/react';
import '../animation.css';
import React, { Component } from 'react';
import { logOut } from '../../store/auth';
import { connect } from 'react-redux';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.debug = false;

    this.logout = this.props.logout;

    // BREAKPOINTS
    this.mq = this.props.mq;
    this.state = {
      viewWidth: 1600,
      width: 1280,
      height: 300,
    };

    // STYLES
    this.colorCard = this.props.colors;

    this.styleNavCard = {
      top: '40px',
      position: 'relative',
      width: 'calc(100vw - 40px)',
      maxWidth: '1280px',
      height: '300px',
      boxShadow: `10px 10px 25px 0px ${this.colorCard.shadowGrey}`,
      border: 'none',
      outline: 'none',
      borderRadius: '5px',
      margin: '20px 20px',
      marginLeft: this.state.viewWidth > 1340 ? `${(this.state.viewWidth - 1280) / 2}px` : '20px',
      marginRight: this.state.viewWidth > 1340 ? `calc((100vw - 1280px) / 2)` : '20px',
      backgroundColor: 'white',
      backgroundSize: 'cover',
      fontFamily: 'Lato, cursive',
      zIndex: '1032',

      [this.mq[3]]: {
        height: '300px',
        margin: '20px 20px',
      },

      [this.mq[1]]: {
        height: '250px',
        margin: '15px 10px',
      },

      [this.mq[0]]: {
        width: 'calc(100vw)',
        height: '200px',
        minWidth: '390px',
        margin: '10px 0px',
        boxShadow: `5px 5px 15px 0px ${this.colorCard.shadowGrey}`,
      },

      '& button': {
        width: '145px',
        position: 'relative',
        backgroundColor: this.colorCard.bgWhite,
        color: this.colorCard.bgRed,
        borderLeft: `1px solid white`,
        borderRight: `1px solid white`,
        borderTop: `1px solid white`,
        borderBottom: `1px solid ${this.colorCard.bgRed}`,
        borderRadius: '25px',
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',
        fontSize: '1.75vh',
        padding: '1px 6px',
        textAlign: 'center',

        [this.mq[3]]: {
          width: '100px',
          padding: '1px 6px',
        },

        [this.mq[2]]: {
          width: '70px',
          padding: '1px 3px',
        },

        [this.mq[1]]: {
          width: '55px',
          padding: '1px 3px',
        },

        '&:hover': {
          backgroundColor: 'rgba(121,0,0,0.5)',
          border: `1px solid ${this.colorCard.bgRed}`,
          borderBottomLeftRadius: '25px',
          borderBottomRightRadius: '25px',
        },

        '&:active': {
          fontWeight: 'bold',
          backgroundColor: this.colorCard.bgRed,
          color: this.colorCard.bgWhite,
          border: `1px solid ${this.colorCard.bgWhite}`,
          borderBottomLeftRadius: '25px',
          borderBottomRightRadius: '25px',
        },
      },

      '& img': {
        width: '420px',

        [this.mq[2]]: {
          width: '35vw',
          height: '30vw',
        },

        [this.mq[0]]: {
          width: '130px',
          height: '110px',
        },
      },

      '& hr': {
        height: '300px',
        border: `1px solid ${this.colorCard.typoGrey}`,
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        opacity: '1',

        [this.mq[1]]: {
          height: '250px',
        },

        [this.mq[0]]: {
          height: '200px',
        },
      },

      '& .text': {
        height: '300px',
        padding: '20px',

        [this.mq[2]]: {
          height: '300px',
          padding: '15px',
        },

        [this.mq[1]]: {
          height: '250px',
        },

        [this.mq[0]]: {
          height: '200px',
          padding: '10px',
        },

        '& h1': {
          fontWeight: 'bold',
          textAlign: 'left',
          color: this.colorCard.typoGrey,
        },

        '& h2': {
          fontWeight: 'bold',
          textAlign: 'left',
          color: this.colorCard.typoGrey,
        },
      },
    };

    this.styleNav = {
      backgroundColor: 'white',
      boxShadow: `10px 10px 25px 0px ${this.colorCard.shadowGrey}`,
      zIndex: '1032',

      '& .block': {
        height: '100px',
        width: 'calc(100vw - 40px)',

        '& button': {
          backgroundColor: 'rgba(0,0,0,0)',
          border: 'none',
          outline: 'none',
        },

        '& a': {
          '& img': {
            width: '170px',
          },
        },

        '& .center': {
          fontFamily: 'Lato, cursive',

          '& h1': {
            textAlign: 'center',
            fontWeight: 'bold',
            color: this.colorCard.typoGrey,

            [this.mq[1]]: {
              fontSize: '24px',
            },
          },

          '& h3': {
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
    window.addEventListener('resize', this.updateDimensions);
    this.updateDimensions();
  }

  componentWillUnmount() {
    if (this.debug) console.log('Navigation/componentWillUnmount');
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.updateDimensions);
  }

  handleScroll = () => {
    if (window.scrollY > 150) {
      document.querySelector('.navbar').classList.add('slide-in-top');
      document.querySelector('.navbar').classList.remove('slide-out-top', 'invisible');
      document.querySelector('.navbarCard').classList.add('slide-out-top');
      document.querySelector('.navbarCard').classList.remove('slide-in-top');
    } else {
      document.querySelector('.navbar').classList.remove('slide-in-top');
      document.querySelector('.navbar').classList.add('slide-out-top');
      document.querySelector('.navbarCard').classList.remove('slide-out-top');
      document.querySelector('.navbarCard').classList.add('slide-in-top');
    }
  };

  updateDimensions = () => {
    this.setState({
      viewWidth: document.querySelector('.App')?.offsetWidth,
      width: document.querySelector('.Cards')?.offsetWidth,
      height: document.querySelector('.navbarCard')?.offsetHeight,
    });
    if (this.debug)
      console.log(
        'Navigation/updateDimensions',
        this.state.viewWidth,
        document.querySelector('.Cards')?.offsetWidth,
        document.querySelector('.navbarCard')?.offsetHeight
      );
  };

  updateHx = () => {
    if (this.state.viewWidth > 1280) {
      this.styleNavCard.width = `${this.state.viewWidth - 40}px`;
    } else if (this.state.viewWidth > 600) {
      this.styleNavCard.width = `${this.state.viewWidth - 40}px`;
    } else if (this.state.viewWidth > 400) {
      this.styleNavCard.width = `${this.state.viewWidth - 20}px`;
    } else if (this.state.viewWidth <= 400) {
      this.styleNavCard.width = `${this.state.viewWidth}px`;
    }

    this.styleNavCard.marginLeft =
      this.state.viewWidth > 1320 ? `${(this.state.viewWidth - 1280) / 2}px` : '20px';
    this.styleNavCard.marginRight =
      this.state.viewWidth > 1320 ? `${(this.state.viewWidth - 1280) / 2}px` : '20px';
    // Debug
    if (this.debug)
      console.log(
        'Navigation/updateHx - h1: ',
        this.styleNavCard['& .text']['& h1'].fontSize,
        ' h2: ',
        this.styleNavCard['& .text']['& h2'].fontSize,
        ' button: ',
        this.styleNavCard['& button'].fontSize
      );
  };

  selectpage = (page) => {
    if (this.debug) console.log('Navigation/selectpage', page);
    this.props.select(page, 'pageTraining');
  };

  render() {
    this.isAuthenticated = this.props.isAuthenticated;
    this.updateHx();
    if (this.debug) console.log('Navigation/render: ', this.isAuthenticated);

    return (
      <React.Fragment>
        <div className="navbar navbar-dark fixed-top invisible d-flex flex-column" css={this.styleNav}>
          <div className="block d-flex flex-row justify-content-between">
            <a href="http://www.tengu.fr" target="_blank" rel="noreferrer">
              {/* <img src="./OguraDojoLogo.png" alt="" /> */}
            </a>
            <div className="center d-flex flex-column justify-content-center">
              <h1>Ogura Dojo</h1>
              <h3>Karate, Panzi Gong, Taiji, Qigong im Herzen des Chiemgaus</h3>
            </div>

            {!this.isAuthenticated && (
              <button title="Login" data-bs-toggle="modal" data-bs-target="#idModalLogin">
                <TablerIconLogin stroke={'green'} />
              </button>
            )}
          </div>
        </div>

        <div className="navbarCard slide-in-top" css={this.styleNavCard}>
          <div className="d-flex flex-row ">
            <img className="align-self-center" src="./OguraDojoLogo.png" alt="" />
            <hr />
            <div className="text d-flex flex-column justify-content-around">
              <h1 className="title">Willkommen im Ogura Dojo</h1>
              <h2>Tengu Ryu Karate, Panzi Gong, Taiji Quan, Qigong</h2>
              <div className="btnNav d-flex flex-row justify-content-around flex-wrap">
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
                  Termine
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const TablerIconLogin = ({ stroke = 'black', fill = 'white' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-login-2"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
      <path d="M3 12h13l-3 -3" />
      <path d="M13 15l3 -3" />
    </svg>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logOut()),
    dispatch,
  };
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
