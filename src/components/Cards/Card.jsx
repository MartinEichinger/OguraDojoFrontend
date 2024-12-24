/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);

    // BREAKPOINTS, debug
    this.mq = this.props.mq;

    this.debug = false;

    this.state = {
      width: 1280,
      height: 340,
    };

    // STYLES
    this.bgGrey = this.props.color?.bgGrey;
    this.bgWhite = this.props.color?.bgWhite;
    this.bgRed = this.props.color?.bgRed;
    this.typoRed = this.props.color?.typoRed;
    this.typoGrey = this.props.color?.typoGrey;
    this.typoGreen = this.props.color?.typoGreen;
    this.shadowGrey = this.props.color?.shadowGrey;

    this.keys = this.props.keys;

    this.styleCard = {
      width: '1280px',
      height: '340px',
      boxShadow: `10px 10px 25px 0px ${this.shadowGrey}`,
      borderRadius: '5px',
      margin: '20px 20px',
      padding: '0px',
      fontFamily: 'Lato, cursive',
      backgroundColor: this.bgWhite,
      border: 'none',
      outline: 'none',

      [this.mq[2]]: {
        height: '300px',
      },

      [this.mq[1]]: {
        height: '250px',
        margin: '15px 10px',
      },

      [this.mq[0]]: {
        height: '200px',
        minWidth: '390px',
        margin: '10px 0px',
      },

      '& .bold': {
        fontWeight: 'bold',
      },

      '&:active': {
        transform: 'scale(0.98)',
        boxShadow: `0px 0px 5px 0px ${this.shadowGrey}`,
      },

      '& .img': {
        top: '0px',
        backgroundImage: 'url(xxx)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 20%',
        backgroundSize: 'cover',
        borderRadius: '5px 0px 0px 5px',
        minWidth: '420px',
        height: '340px',
        margin: '0px',
        padding: '0px',

        [this.mq[2]]: {
          width: '35vw',
          minWidth: '35vw',
          height: '300px',
        },

        [this.mq[1]]: {
          height: '250px',
        },

        [this.mq[0]]: {
          width: '130px',
          minWidth: '130px',
          height: '200px',
        },
      },

      '& .cardBody': {
        padding: '20px',
        height: '340px',
        boxSizing: 'border-box',

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

        '& .card-rows': {
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto 1fr auto',
          '& .tab1': {
            gridColumn: '1',
          },
          '& .tab2': {
            gridColumn: '3',
          },
          '& .tab3': {
            gridColumn: '5',
          },
        },
      },

      '& h1': {
        color: this.typoGrey,
        textAlign: 'left',
      },

      '& h3': {
        color: this.typoRed,
        textAlign: 'left',
        paddingBottom: '20px',
        margin: '0px',

        [this.mq[2]]: {
          paddingBottom: '10px',
        },
      },

      '& p': {
        margin: '0px',
        color: this.typoGrey,
        textAlign: 'justify',

        [this.mq[2]]: {
          maxHeight: '135px',
          paddingBottom: '5px',
          overflow: 'auto',
        },

        [this.mq[1]]: {
          maxHeight: '97px',
          overflow: 'auto',
        },

        [this.mq[0]]: {
          maxHeight: '85px',
          overflow: 'auto',
        },
      },

      '& h5': {
        color: this.typoGreen,
        textAlign: 'left',

        [this.mq[1]]: {
          maxHeight: '28px',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
        },

        [this.mq[0]]: {
          display: 'none',
        },
      },
    };
  }

  updateDimensions = () => {
    this.setState({
      width: document.querySelector('.Cards').offsetWidth,
      height: document.querySelector('.Cards').offsetHeight,
    });
    if (this.debug)
      console.log(
        document.querySelector('.Cards').offsetWidth,
        document.querySelector('.Cards').offsetHeight
      );
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  renderPara = (para, table) => {
    if (para !== undefined) {
      return <p>{para}</p>;
    } else if (table !== undefined) {
      return table.map((line, j) => {
        return (
          <div className="card-rows" key={j}>
            <p className="bold">{line.head}</p>
            <p>{line.day}</p>
            <p>{line.time}</p>
          </div>
        );
      });
    }
  };

  render() {
    var { img, modal, heading, headingTwo, para, table, keywords, pos } = this.props.props;
    this.styleCard['& .img'].backgroundImage = `url(${img})`;
    this.styleCard['& .img'].backgroundPosition = `${pos}`;
    //console.log('Card/render');

    return (
      <button
        className="Cards d-flex flex-row"
        data-bs-toggle="modal"
        data-bs-target={modal}
        css={this.styleCard}
        id="modalCard"
        key={this.keys}
      >
        <div className="img" id="modalCard"></div>
        <div className="cardBody d-flex flex-column justify-content-between" id="modalCard">
          <div>
            <h1>{heading}</h1>
            <h3>{headingTwo}</h3>
            {/* {this.renderPara(para, table)} */}
            {para !== undefined ? <p>{para}</p> : ''}
            {table !== undefined ? (
              <div className="card-rows scroll_">
                {table.map((line, j) => {
                  return (
                    <React.Fragment key={j}>
                      <p className="tab1 bold">{line.head}</p>
                      <p className="tab2">{line.day}</p>
                      <p className="tab3">{line.time}</p>
                    </React.Fragment>
                  );
                })}
              </div>
            ) : (
              ''
            )}
          </div>
          <h5>{keywords}</h5>
        </div>
      </button>
    );
  }
}

export default Card;
