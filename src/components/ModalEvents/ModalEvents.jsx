/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../../store/events';
import ModalInNavigation from '../ModalInNavigation/ModalInNavigation';
import ModalComp_L1_Events from './ModalComp_L1_Events';
import ModalClassBasis from './ModalEvents.style';
import '../animation.css';
//import { loadJSON } from '../../script/saveLoad.js';

class ModalEvents extends ModalClassBasis {
  constructor(props) {
    super(props);

    this.content = {
      title: 'Termine',
    };

    this.state = {
      width: 1440,
      height: 1200,
      content: this.content,
      rerender: false,
    };

    this.form = React.createRef();
    this.stats = {
      allPages: ['1', '2'],
      page: this.props.page,
      animated: 0,
    };

    // Debugging
    this.debug = true;

    this.configNav = {
      upDown: 0,
      pagItems: 4,
      navItems: [],
    };
  }

  async componentDidMount() {
    if (this.debug) console.log('ModalEvents/compDidMount');
    document.getElementById('idModalEvents').addEventListener('shown.bs.modal', this.onShowModalME);
    document.getElementById('idModalEvents').addEventListener('hidden.bs.modal', this.onHideModalME);
    this.props.getEvents();
  }

  componentWillUnmount() {
    if (this.debug) console.log('ModalEvents/compWillUnMount');
    document.getElementById('idModalEvents').removeEventListener('shown.bs.modal', this.onShowModalME);
    document.getElementById('idModalEvents').removeEventListener('hidden.bs.modal', this.onHideModalME);
  }

  onShowModalME = () => {
    if (this.debug) console.log('ModalEvents/onShowModal');
    this.setState({ rerender: true });
  };

  render() {
    this.isAuthenticated = this.props.isAuthenticated;
    if (this.debug)
      console.log('ModalEvents/render', this.stats, this.props, this.content, this.isAuthenticated);

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
            css={this.style}
          >
            <div className="modal-content">
              <div className="modal-row">
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
