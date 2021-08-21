/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';
import ModalInNavigation from '../ModalInNavigation/ModalInNavigation';
import ModalComp_L1_Impressum from './ModalComp_L1_Impressum';
import ModalClassBasis from './ModalImpressum.style';
import '../animation.css';
//import { loadJSON } from '../../script/saveLoad.js';

class ModalImpressum extends ModalClassBasis {
  constructor(props) {
    super(props);

    this.state = {
      width: 1440,
      height: 1200,
      content: {
        title: 'Impressum',
      },
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
    if (this.debug) console.log('ModalImpressum/compDidMount');
    document.getElementById('idModalImpressum').addEventListener('shown.bs.modal', this.onShowModal);
    document.getElementById('idModalImpressum').addEventListener('hidden.bs.modal', this.onHideModal);
  }

  componentWillUnmount() {
    if (this.debug) console.log('ModalImpressum/compWillUnMount');
    document.getElementById('idModalImpressum').removeEventListener('shown.bs.modal', this.onShowModal);
    document.getElementById('idModalImpressum').removeEventListener('hidden.bs.modal', this.onHideModal);
  }

  onShowModal = () => {
    if (this.debug) console.log('ModalImpressum/onShowModal');
  };

  render() {
    this.isAuthenticated = this.props.isAuthenticated;
    if (this.debug)
      console.log('ModalImpressum/render', this.stats, this.props, this.content, this.isAuthenticated);

    return (
      <React.Fragment>
        <div
          className="modal fade"
          id="idModalImpressum"
          tabIndex="-1"
          aria-labelledby="ModalImpressumLabel"
          aria-hidden="true"
          data-bs-backdrop="static"
        >
          <div
            className="modal-dialog d-flex flex-row-reverse align-items-center"
            id="modalDialog"
            css={this.style}
          >
            <div className="modal-content">
              <div className="modal-row">
                <ModalInNavigation colors={this.props.colors} config={this.configNav} mq={this.mq} />
                {/* eslint-disable-next-line */}
                <ModalComp_L1_Impressum
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

export default ModalImpressum;
