/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);

    // BREAKPOINTS
    this.breakpoints = [576, 678, 1023, 1280];
    this.mq = this.breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

    // STYLES
    this.styleCard = {
      width: '640px',
      minWidth: '340px',
      height: '300px',
      border: '1px solid black',
      borderRadius: '5px',
      margin: '20px 20px',
      padding: '0px',
      fontFamily: 'Ribeye, cursive',
      backgroundColor: 'rgba(52,58,64,1)',
      color: 'rgba(191,191,191,1)',

      [this.mq[3]]: {
        width: '500px',
        margin: '10px 6px',
      },

      [this.mq[2]]: {
        width: '640px',
        margin: '20px auto',
      },

      [this.mq[0]]: {
        minWidth: '390px',
      },

      '& .img': {
        top: '0px',
        background: 'url(xxx) no-repeat 50% 20%',
        borderRadius: '5px 5px 0px 0px',
        width: '100%',
        height: '200px',
        margin: '0px',
        padding: '0px',
      },

      '& h1': {
        padding: '20px',
        fontSize: '40px',

        [this.mq[1]]: {
          fontSize: '36px',
        },

        [this.mq[0]]: {
          fontSize: '24px',
        },
      },
    };
  }

  render() {
    var { img, modal, heading, pos } = this.props.props;
    this.styleCard['& .img'].background = `url(${img}) no-repeat ${pos}`;

    return (
      <button
        className="Cards d-flex flex-column bg-dark-o"
        data-bs-toggle="modal"
        data-bs-target={modal}
        css={this.styleCard}
        id="modalCard"
      >
        <div className="img" id="modalCard"></div>
        <h1 id="modalCard">{heading}</h1>
      </button>
    );
  }
}

export default Card;
