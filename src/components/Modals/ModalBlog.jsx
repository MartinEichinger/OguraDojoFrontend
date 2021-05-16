/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React, { Component } from 'react';
import ModalInNavigation from './ModalInNavigation';
import ModalComp_L1_Blog from './ModalComp_L1_Blog';
import '../animation.css';

class ModalBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 1440,
      height: 1200,
    };

    this.form = React.createRef();
    this.stats = {
      allPages: ['1', '2'],
      page: this.props.page,
      animated: 0,
    };

    console.log('ModalBlog/constructor', this.stats);

    // BREAKPOINTS
    this.breakpoints = [424, 767, 1023, 1280];
    this.mq = this.breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

    // STYLES
    this.bgGrey = this.props.colors?.bgGrey;
    this.bgWhite = this.props.colors?.bgWhite;
    this.bgRed = this.props.colors?.bgRed;
    this.typoRed = this.props.colors?.typoRed;
    this.typoGrey = this.props.colors?.typoGrey;
    this.typoGreen = this.props.colors?.typoGreen;
    this.shadowGrey = this.props.colors?.shadowGrey;

    this.styleMisc = {
      '& .red': {
        color: this.typoRed,
      },

      '& .white': {
        color: this.bgWhite,
      },

      '& .center': {
        textAlign: 'center',
      },

      '& .small': {
        fontSize: '1.5vh !important',
      },

      '& .bold': {
        fontWeight: 'bold',
      },

      '& .underline': {
        textDecoration: 'underline',
      },

      '& .span_vis': {
        display: 'block',

        [this.mq[1]]: {
          display: 'none',
        },
      },
    };

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

    this.contentBlog = {
      title: 'Wir',
      text:
        'Der Name unseres Dojo OGURA nimmt Bezug auf Ogura Tsuneyoshi(* 1928; † 2007), japanischer Karatemeister (Shotokan, Goju ryu) aus Kofu, 10. Dan. Dieser war ab dem Jahr 1973 der Lehrer des französischen Kampfkunstexperten Roland Habersetzer. Der Name unseres Dojo soll die Wertschätzung für den Menschen Ogura und seinen „Schüler“ Habersetzer zum Ausdruck bringen. Die Karateka des OGURA DOJO sind Mitglied im Budoforschungszentrum Tengu Institut von Shihan Roland Habersetzer und betreiben die Stilrichtung Tengu ryu. Neben dem Karate bieten wir in unserem Dojo TaiJi und QiGong an. Im TaiJi trainieren wir Faust, Fächer und Schwertformen – Schwerpunktmäßig aus dem Yang-Stil. Die Formen die wir im QiGong üben stammen überwiegend von dem chinesichen Professor Ding HongYu. Das OGURA DOJO ist organisatorisch beim Turn- und Sportverein Traunreut angegliedert. Unsere Abteilungsleiter ist Hans-Jürgen Groiß.',
      tabs: [
        {
          head1: 'Alex Callegari',
          head2: 'Trainer Karate.Taiji.Qigong',
          head3: '6. DAN Tengu Ryu',
          img: 'url(./training_pic_2.png)',
        },
        {
          head1: 'Ulrike Geuder',
          head2: 'Trainerin Karate',
          head3: '5. DAN Tengu Ryu',
          img: 'url(./training_pic_3.png)',
        },
      ],
    };

    this.styleContentBlog = {
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
            //backgroundImage: 'url(./training_pic_2.png)',
          },

          '& .text': {
            width: '100%',
            height: '40%',
            borderRadius: '5px',
            backgroundColor: 'rgba(0,0,0,0.7)',
          },
        },
      },
    };

    this.configNav = {
      upDown: 0,
      pagItems: 4,
      navItems: [],
    };

    this.content = {
      title: 'Tengu Blog',
      filterProps: ['Alle', 'Tengu.fr', 'Taiji/Qigong', 'Bücher'],
      blog: [
        {
          date: '07.04.2018',
          cat: 'Tengu.fr',
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
          img: 'main_panzigong.png',
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
          cat: 'Tengu.fr',
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

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    document
      .getElementById('idModalTraining')
      .addEventListener('shown.bs.modal', this.onShowModal);
    document
      .getElementById('idModalTraining')
      .addEventListener('hidden.bs.modal', this.onHideModal);
    document
      .querySelector(`.Training`)
      .addEventListener('animationend', this.onAnimationEnd);
    document
      .querySelector(`.Wir`)
      .addEventListener('animationend', this.onAnimationEnd);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
    document
      .getElementById('idModalTraining')
      .removeEventListener('shown.bs.modal', this.onShowModal);
    document
      .getElementById('idModalTraining')
      .removeEventListener('hidden.bs.modal', this.onHideModal);
    document
      .querySelector(`.Training`)
      .removeEventListener('animationend', this.onAnimationEnd);
    document
      .querySelector(`.Wir`)
      .removeEventListener('animationend', this.onAnimationEnd);
  }

  clickUpDown = (dir) => {};

  nextItem = (button) => {};

  render() {
    console.log('ModalBlog/render', this.stats, this.props);

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
                />
                {/* eslint-disable-next-line */}
                <ModalComp_L1_Blog
                  colors={this.props.colors}
                  content={this.content}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ModalBlog;
