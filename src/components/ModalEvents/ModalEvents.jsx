/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../../store/events';
import ModalInNavigation from '../ModalInNavigation/ModalInNavigation';
import ModalComp_L1_Events from './ModalComp_L1_Events';
import '../animation.css';
//import { loadJSON } from '../../script/saveLoad.js';

class ModalEvents extends Component {
  constructor(props) {
    super(props);

    this.content = {
      title: 'Termine',
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
    this.debug = false;

    // BREAKPOINTS
    this.mq = this.props.mq;

    // STYLES
    this.colors = this.props.colors;

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

    /* this.styleContent = {
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
    }; */

    this.configNav = {
      upDown: 0,
      pagItems: 4,
      navItems: [],
    };
  }

  async componentDidMount() {
    if (this.debug) console.log('ModalEvents/compDidMount');
    this.props.getEvents();
  }

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

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEvents: () => dispatch(getEvents()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEvents);
