/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authStatus } from './store/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './components/Navigation/Navigation';
import CardsKarate from './components/Cards/CardsKarate';
import ModalKarate from './components/Modals/ModalKarate';
import ModalTraining from './components/Modals/ModalTraining';
import ModalBlog from './components/Modals/ModalBlog';
import ModalEvents from './components/ModalEvents/ModalEvents';
import ModalLogin from './components/ModalLogin/ModalLogin';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.debug = true;
    this.authStatus = this.props.authStatus;

    // BREAKPOINTS
    this.breakpoints = [430, 576, 678, 1023, 1320];
    this.mq = this.breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

    this.state = {
      pageTraining: 'Training',
      pageKarate: 'TenguRyu',
    };
    this.styleApp = {
      height: '100vh',
      marginBottom: '100px',

      '& .bg': {
        zIndex: '1030',
        backgroundColor: 'white',
      },

      '& .fg': {
        //zIndex: '1041',
        //backgroundColor: 'rgba(0,0,0,0)',
      },

      '& .Frame': {
        marginTop: '40px',
        marginBottom: '300px',
        minWidth: '390px',

        '& .Content': {
          maxWidth: '1440px',
          margin: '0px auto',
        },
      },
    };

    this.colors = {
      bgGreen50: 'rgba(19, 73, 0, 0.5)',
      bgGreen: 'rgba(19, 73, 0, 1)',
      bgGrey: 'rgba(232, 232, 232, 1)',
      bgWhite: 'rgba(255,255,255,1)',
      bgRed: 'rgba(121, 0, 0, 1)',
      typoGrey: 'rgba(64, 64, 64, 1)',
      typoGreen: 'rgba(19, 73, 0, 1)',
      typoRed: 'rgba(121, 0, 0, 1)',
      shadowGrey: 'rgba(122,122,122,1)',
    };

    this.contentCards = [
      {
        img: 'main_karate.png',
        modal: '#idModalKarate',
        heading: 'Tengu Ryu Karate',
        headingTwo: '„Es ablehnen zu kämpfen, es ablehnen zu unterliegen...“',
        para: 'Ein vollständiger Weg der Kriegskunst oder der Geist einer Tradition. Lernen und Verbessern des Verhaltens eines freien Individuums unter Einhaltung der Achtung vor dem Leben, den Anderen, dem Gesetz ...',
        keywords:
          'Roland Habersetzer - Kampfkunst im 21.Jh. - Selbstverteidigung - Waffen - Koshiki Kata',
        pos: '50% 20%',
      },
      {
        img: 'main_panzigong.png',
        modal: '#idModalPanziGong',
        heading: 'Panzi Gong',
        headingTwo: '„Gesundheitsübung mit der Tellerdrehung“',
        para: 'Der menschliche Körper wird mit zunehmendem Alter immer schwächer und anfälliger. Dies ist ein Naturgesetz, das man nicht ändern kann. Aber man kann den Alterungsprozess nach hinten verschieben und somit die Geschwindigkeit des Alterns verlangsamen.',
        keywords: 'Prof. Ding Hongyu - Tellerdrehung - Gesundheitsübung',
        pos: '50% 20%',
      },
      {
        img: 'main_taiji.png',
        modal: '#idModalTaiji',
        heading: 'Taiji Quan',
        headingTwo:
          '„Je höher der Grad  der Entspannung, desto höher ist die Kampfkunst“',
        para: 'Aus sanften und weichen Übungen entsteht Härte; aus langsamen Übungen entsteht Schnelligkeit; aus Entspannung entsteht Kraft. Das kann nicht jeder so akzeptieren. Mit anderen Worten: Sanft zähmt hart; aus langsam entsteht schnell; mit Schwäche das Stärkere bewältigen.',
        keywords: 'Yang Taiji - Chen Taiji - Faust - Schwert - Fächer',
        pos: '50% 20%',
      },
      {
        img: 'main_qigong.png',
        modal: '#idModalQigong',
        heading: 'Qigong',
        headingTwo: '„Wenn man leben will, muss man sich auch bewegen.“',
        para: 'Nicht nur die Bewegung ist ein untrennbarer Teil des Lebens, sondern die Gesundheit überhaupt ist das Fundament unseres Lebens. Ohne Bewegung könnten wir nur schwer existieren und ohne Gesundheit hätten wir keine Lebensqualität.',
        keywords: 'Prof. Ding Hongyu',
        pos: '65% 40%',
      },
      {
        img: 'main_training.png',
        modal: '#idModalTraining',
        heading: 'Training',
        headingTwo: '- Beginn / Probetraining jederzeit möglich -',
        table: [
          { head: 'Taiji', day: 'Montag', time: '18:20 - 20:00' },
          { head: 'Karate', day: 'Montag', time: '20:00 - 22:00' },
          { head: 'Karate', day: 'Mittwoch', time: '17:00 - 18:30' },
          { head: 'Karate', day: 'Freitag', time: '20:00 - 22:00' },
        ],
        keywords:
          'Sonnenschule Traunreut - Martin-Luther-Straße - 83301 Traunreut',
        pos: '65% 40%',
      },
    ];
  }

  componentDidMount() {
    this.authStatus();
  }

  selectpage = (page, param) => {
    if (this.debug) console.log('App/selectpage', page, param);
    this.setState({ [param]: page });
  };

  renderCards = () => {
    if (this.debug) console.log('App/renderCards');
    return this.contentCards.map((cont, i) => {
      return <CardsKarate para={cont} colors={this.colors} key={i} />;
    });
  };

  render() {
    if (this.debug) console.log('App/render');

    return (
      <div className="App d-flex flex-column" css={this.styleApp}>
        <ToastContainer />
        <Navigation
          colors={this.colors}
          select={this.selectpage}
          mq={this.mq}
        />
        <ModalKarate
          colors={this.colors}
          page={this.state.pageKarate}
          mq={this.mq}
        />
        <ModalTraining
          colors={this.colors}
          page={this.state.pageTraining}
          mq={this.mq}
        />
        <ModalBlog colors={this.colors} mq={this.mq} />
        <ModalEvents colors={this.colors} mq={this.mq} />
        <ModalLogin />
        <div className="Frame bg">
          <div className="Content d-flex flex-row flex-wrap justify-content-center">
            {this.renderCards()}
          </div>
        </div>
        <div className="Placeholder">p</div>
        <Footer colors={this.colors} select={this.selectpage} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authStatus: () => dispatch(authStatus()),
    dispatch,
  };
};

export default connect(null, mapDispatchToProps)(App);
