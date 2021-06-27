/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';
import '../animation.css';

import React, { Component } from 'react';
import Card from './Card';
import '../animation.css';

class CardsKarate extends Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.stats = {
      status: 0,
      page: 'TenguRyu',
    };

    this.debug = false;
  }

  handleClick = (e) => {
    var tar = e.target.attributes['id']?.value;
    if (this.debug)
      console.log('Cardskarate/handleClick', e.currentTarget, e.target, tar);
  };

  render() {
    const { props, colors, mq, keys } = this.props;

    return (
      <React.Fragment>
        <Card props={props} color={colors} mq={mq} keys={keys} />
      </React.Fragment>
    );
  }
}

export default CardsKarate;
