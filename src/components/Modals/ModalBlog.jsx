/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React, { Component } from 'react';
import ModalInNavigation from '../ModalInNavigation/ModalInNavigation';
import ModalComp_L1_Blog from './ModalComp_L1_Blog';
import '../animation.css';

class ModalBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 1440,
      height: 1200,
    };

    this.debug = false;

    this.form = React.createRef();
    this.stats = {
      allPages: ['1', '2'],
      page: this.props.page,
      animated: 0,
    };

    // BREAKPOINTS
    this.mq = this.props.mq;

    // STYLES
    this.bgGrey = this.props.colors?.bgGrey;
    this.bgWhite = this.props.colors?.bgWhite;
    this.bgRed = this.props.colors?.bgRed;
    this.typoRed = this.props.colors?.typoRed;
    this.typoGrey = this.props.colors?.typoGrey;
    this.typoGreen = this.props.colors?.typoGreen;
    this.shadowGrey = this.props.colors?.shadowGrey;

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

    this.configNav = {
      upDown: 0,
      pagItems: 4,
      navItems: [],
    };

    this.content = {
      title: 'Blog',
      filterProps: ['Alle', 'Tengu', 'Taiji/Qigong', 'Bücher'],
      blog: [
        {
          date: '07.04.2018',
          cat: 'Tengu',
          tags: 'Sensei Habersetzer, CRB, Tradition',
          header: 'Interview mit Sensei Habersetzer',
          detail:
            'Interview mit Sensei Habersetzer. Der französische Verlag BUDO Editions hat ein wahres Sammlerstück veröffentlicht.',
          img: 'karate_pic_1.png',
          imgPos: '70% 0%',
          link: '/blog/Rep_Interview_RolandHabersetzer_2018.pdf',
        },
        {
          date: '07.04.2018',
          cat: 'Taiji/Qigong',
          tags: 'Prof. Ding, Panzi Gong, Gesundheitsübung',
          header: 'Rezension Gesundheitsübung mit der Tellerdrehung',
          detail: 'Rezension erschienen im TAIJIQUAN & QIGONG JOURNAL.',
          img: 'main_panzigong.jpg',
          imgPos: '10% 0%',
          link: '/blog/Rep_Rezension_PanZiGong.pdf',
        },
        {
          date: '07.04.2018',
          cat: 'Taiji/Qigong',
          tags: 'Prof. Ding, Lungen Qigong, Gesundheitsübung',
          header: 'Lungen Qigong',
          detail:
            'Das Qigong, um das Qi zu stärken und die Lunge zu pflegen, wirkt sich vorbeugend und heilend auf Erkrankungen der Atmungsorgane aus.',
          img: 'blog_pic_1.png',
          imgPos: '50% 0%',
          link: '/blog/Pub_LungenQiGong.pdf',
        },
        {
          date: '07.04.2018',
          cat: 'Tengu',
          tags: 'Roland Habersetzer, Budo, Prinzipien',
          header: 'Ideen des Budos',
          detail:
            'Ideen des Budo, die von jedem wahren Meister der Kampfkunst studiert werden sollten...',
          img: 'blog_pic_2.png',
          imgPos: '60% 0%',
          link: '/blog/TenguRyu_IdeenBudo.pdf',
        },
      ],
    };
  }

  render() {
    if (this.debug) console.log('ModalBlog/render', this.stats, this.props);

    return (
      <React.Fragment>
        <div
          className="modal fade"
          id="idModalBlog"
          tabIndex="-1"
          aria-labelledby="ModalBlogLabel"
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
                <ModalComp_L1_Blog colors={this.props.colors} content={this.content} mq={this.mq} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ModalBlog;
