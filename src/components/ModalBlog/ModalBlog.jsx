/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';
import ModalInNavigation from '../ModalInNavigation/ModalInNavigation';
import ModalComp_L1_Blog from './ModalComp_L1_Blog';
import ModalClassBasis from './ModalBlog.style';
import '../animation.css';

class ModalBlog extends ModalClassBasis {
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
          img: 'karate_pic_1.jpg',
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
          img: 'blog_pic_1.jpg',
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
          img: 'blog_pic_2.jpg',
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
