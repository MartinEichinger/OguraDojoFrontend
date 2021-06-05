/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React, { Component } from 'react';
import ModalInNavigation from './ModalInNavigation';
import ModalComp_L1_Events from './ModalComp_L1_Events';
import '../animation.css';
import { loadJSON } from '../../script/saveLoad.js';

class ModalEvents extends Component {
  constructor(props) {
    super(props);

    this.content = {
      title: '',
      events: [
        {
          title: ['Seminar', 'Tengu-Ryu Karate'],
          date: ['Datum', '09.12.2021'],
          location: ['Ort', 'Strassburg'],
          organisator: ['Ausrichter / Trainer', 'Roland Habersetzer'],
          authorized: ['Berechtigt', 'nur CRB Mitglieder'],
          time: ['Zeit', '12.09.21, 9:00 bis 13.09.21, 13:00'],
          details: [
            'Weitere Infos',
            'Ausrüstung: Karate-Gi, Taschenlampe, Bokken',
          ],
          email: ['E-Mail', '...deine E-Mail...'],
          name: ['Name', '...dein Name...'],
        },
      ],
    };

    this.state = {
      width: 1440,
      height: 1200,
      content: this.content,
    };

    this.form = React.createRef();
    this.stats = {
      allPages: ['1', '2'],
      page: this.props.page,
      animated: 0,
    };

    // Debugging
    this.debug = true;

    // BREAKPOINTS
    this.breakpoints = [424, 767, 1023, 1280];
    this.mq = this.breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

    // STYLES
    this.bgGrey = this.props.colors?.bgGrey;
    this.bgWhite = this.props.colors?.bgWhite;
    this.bgRed = this.props.colors?.bgRed;
    this.bgGreen = this.props.colors?.bgGreen;
    this.typoRed = this.props.colors?.typoRed;
    this.typoGrey = this.props.colors?.typoGrey;
    this.typoGreen = this.props.colors?.typoGreen;
    this.shadowGrey = this.props.colors?.shadowGrey;

    this.styleMisc = {
      '& .red': {
        color: this.typoRed,
      },

      '& .bgRed': {
        backgroundColor: this.bgRed,
      },

      '& .green': {
        color: this.typoGreen,
      },

      '& .bgGreen': {
        backgroundColor: this.bgGreen,
      },

      '& .white': {
        color: this.bgWhite,
      },

      '& .center': {
        textAlign: 'center',
      },

      '& .small': {
        fontSize: '1.5vh !important',
      },

      '& .bold': {
        fontWeight: 'bold',
      },

      '& .underline': {
        textDecoration: 'underline',
      },

      '& .span_vis': {
        display: 'block',

        [this.mq[1]]: {
          display: 'none',
        },
      },
      '& .h15': {
        height: '15vh',
      },

      '& .h22': {
        height: '22vh',
      },

      '& .h26': {
        height: '26vh',
      },

      '& .h31': {
        height: '31vh !important',
      },

      '& .h40': {
        height: '40vh !important',
      },

      '& .w20': {
        width: '20%',
      },

      '& .w25': {
        width: '25%',
      },

      '& .w30': {
        width: '30%',
      },

      '& .w33': {
        width: '33%',
      },

      '& .w50': {
        width: '50%',
      },

      '& .w66': {
        width: '66%',
      },
    };

    this.styleModalDialog = {
      width: '100vw',
      maxWidth: '1440px',
      height: 'calc(100vh - 3.5vh)', // 2rem
      zIndex: '1051',
      position: 'relative',
      overflow: 'hidden',
      margin: '1.75vh auto',

      '& .modal-content': {
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0)',
        border: 'none',

        '& .modal-row': {
          width: '100%',
        },
      },
    };

    this.styleContent = {
      '& .cards': {
        marginLeft: '2vh',
        padding: '1vh',

        '& .body': {
          height: '300px',
          width: '250px',
          borderRadius: '5px',
          position: 'relative',
          margin: '5px',

          '& .image': {
            width: '100%',
            height: '55%',
            borderRadius: '5px',
            //backgroundImage: "url(./training_pic_2.png)",
          },

          '& .text': {
            width: '100%',
            height: '40%',
            borderRadius: '5px',
            backgroundColor: 'rgba(0,0,0,0.7)',
          },
        },
      },
    };

    this.configNav = {
      upDown: 0,
      pagItems: 4,
      navItems: [],
    };
  }

  async componentDidMount() {
    if (this.debug) console.log('ModalEvents/compDidMount');
    var content = await loadJSON();
    this.setState({ content: content });
    if (this.debug)
      console.log('ModalEvents/compDidMount: ', this.state.content);
  }

  componentWillUnmount() {}

  clickUpDown = (dir) => {};

  nextItem = (button) => {};

  render() {
    this.isAuthenticated = this.props.isAuthenticated;
    if (this.debug)
      console.log(
        'ModalEvents/render',
        this.stats,
        this.props,
        this.content,
        this.isAuthenticated
      );

    return (
      <React.Fragment>
        <div
          className="modal fade"
          id="idModalEvents"
          tabIndex="-1"
          aria-labelledby="ModalEventsLabel"
          aria-hidden="true"
          data-bs-backdrop="static"
          onScroll={() => this.handleScroll()}
        >
          <div
            className="modal-dialog d-flex flex-row-reverse align-items-center"
            id="modalDialog"
            css={this.styleModalDialog}
          >
            <div className="modal-content">
              <div className="modal-row d-flex flex-row h-100 align-items-center">
                <ModalInNavigation
                  clickUpDown={this.clickUpDown}
                  nextItem={this.nextItem}
                  colors={this.props.colors}
                  config={this.configNav}
                  mq={this.mq}
                />
                {/* eslint-disable-next-line */}
                <ModalComp_L1_Events
                  colors={this.props.colors}
                  styleMisc={this.styleMisc}
                  content={this.state.content}
                  mq={this.mq}
                  isAuthenticated={this.isAuthenticated}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ModalEvents;
