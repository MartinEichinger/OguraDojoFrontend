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

    console.log('Cardskarate');

    // BREAKPOINTS
    this.breakpoints = [576, 678, 1023, 1280];
    this.mq = this.breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

    // STYLES
    this.colorCard = this.props.colors;

    this.propsCard = this.props?.para;

    this.key = this.props.key;
  }

  handleClick = (e) => {
    var tar = e.target.attributes['id']?.value;
    console.log('Cardskarate/handleClick', e.currentTarget, e.target, tar);

    if (tar === 'modalCard') {
      //document.querySelector('.Frame').classList.remove('bg');
      //document.querySelector('.Frame').classList.add('fg');
    } else if (tar === 'modalCardEx') {
      //document.querySelector('.Frame').classList.remove('fg');
      //document.querySelector('.Frame').classList.add('bg');
    }
  };

  render() {
    //console.log('render');
    return (
      <React.Fragment>
        <Card props={this.propsCard} color={this.colorCard} key={this.key} />
      </React.Fragment>
    );
  }
}

export default CardsKarate;
