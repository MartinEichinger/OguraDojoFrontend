/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React, { Component } from 'react';

class CardContent extends Component {
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
        borderRadius: '5px',
        width: '100%',
        height: '300px',
        margin: '0px',
        padding: '0px',
      },

      '& .content': {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.75)',
        height: '300px',
        borderRadius: '5px',
        width: '640px',
        minWidth: '340px',

        [this.mq[3]]: {
          width: '500px',
        },

        [this.mq[2]]: {
          width: '640px',
        },

        [this.mq[0]]: {
          minWidth: '390px',
          width: '100%',
        },

        '& h1': {
          padding: '20px',
          fontSize: '36px',

          [this.mq[1]]: {
            fontSize: '32px',
          },

          [this.mq[0]]: {
            fontSize: '24px',
          },
        },

        '& h3': {
          fontSize: '24px',

          [this.mq[1]]: {
            fontSize: '20px',
          },

          [this.mq[0]]: {
            fontSize: '16px',
          },
        },

        '& h4': {
          fontSize: '18px',
          paddingLeft: '20px',
          textAlign: 'left',

          [this.mq[1]]: {
            fontSize: '16px',
          },

          [this.mq[0]]: {
            fontSize: '14px',
          },
        },

        '& .day': {
          width: '100px',

          [this.mq[1]]: {
            width: '80px',
          },

          [this.mq[0]]: {
            width: '80px',
          },
        },
      },
    };
  }

  renderTable = (contHeading, contBody) => {
    return contHeading?.map((heading, i) => {
      var content = contBody[i]['cont'].map((content, j) => {
        return (
          <div className="d-flex flex-row">
            <h4 className="day">{content}</h4>
            <h4>{contBody[i]['body'][j]}</h4>
          </div>
        );
      });

      return (
        <div className="d-flex flex-column  w-50">
          <h3>{heading}</h3>
          {content}
        </div>
      );
    });
  };

  render() {
    var {
      img,
      modal,
      heading,
      pos,
      cont1Heading,
      cont1Body,
      cont2Heading,
    } = this.props.props;
    this.styleCard['& .img'].background = `url(${img}) no-repeat ${pos}`;
    if (cont1Body[0]['body'][0] === '') {
      this.styleCard['& .content']['& .day'].width = '100%';
      this.styleCard['& .content']['& .day'][
        '@media (max-width: 576px)'
      ].width = '100%';
      this.styleCard['& .content']['& .day'][
        '@media (max-width: 678px)'
      ].width = '100%';
    }

    return (
      <button
        className="Cards d-flex flex-column bg-dark-o"
        data-bs-toggle="modal"
        data-bs-target={modal}
        css={this.styleCard}
        id="modalCard"
      >
        <div className="img" id="modalCard"></div>
        <div className="content d-flex flex-column align-items-start justify-content-between">
          <h1 id="modalCard w-100">{heading}</h1>
          <div className="d-flex flex-row w-100">
            {this.renderTable(cont1Heading, cont1Body)}
          </div>
          <h4>{cont2Heading}</h4>
        </div>
      </button>
    );
  }
}

export default CardContent;
