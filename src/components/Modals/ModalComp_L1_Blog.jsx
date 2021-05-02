/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';
import BlogNav from '../BlogNav/BlogNav';
import BlogEntry from '../BlogEntry/BlogEntry';

const content = {
  title: 'Tengu Blog',
  filterProps: ['Alle', 'Tengu.fr', 'Taiji/Qigong', 'Bücher'],
  blog: [
    {
      date: '07.04.2018',
      cat: 'Tengu.fr',
      tags: 'Sensei Habersetzer, Centre de Recherche Budo, Tradition',
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

const ModalComp_L1_Blog = ({ blog, style, colors, mq, filter }) => {
  const styleMisc = {
    '& .h15': {
      height: '15vh',
    },

    '& .h22': {
      height: '22vh',
    },

    '& .h26': {
      height: '26vh',
    },

    '& .h31': {
      height: '31vh !important',
    },

    '& .h40': {
      height: '40vh !important',
    },

    '& .w20': {
      width: '20%',
    },

    '& .w25': {
      width: '25%',
    },

    '& .w30': {
      width: '30%',
    },

    '& .w33': {
      width: '33%',
    },

    '& .w50': {
      width: '50%',
    },

    '& .w66': {
      width: '66%',
    },
  };

  const styleCompL1 = {
    '&.comp_l1': {
      width: '100%',
      position: 'absolute',

      '& .modal-col': {
        width: 'calc(100% - 51px)',

        '& h1': {
          fontSize: '10vh',
          marginBottom: '1vh',
          //fontWeight: 'bold',
          color: colors.bgGrey,
          textShadow: `2px 0 0 ${colors.bgRed}, 0 2px 0 ${colors.bgRed}, -2px 0 0 ${colors.bgRed}, 0 -2px 0 ${colors.bgRed}`,
          position: 'relative',
          //zIndex: '1',
          paddingTop: '2vh',
          paddingLeft: '2vh',
        },

        '& .modal-up': {
          height: '90vh',
          backgroundColor: 'white',
          borderRadius: '5px',

          '& .table': {
            marginTop: '30px',
            padding: '2vh',
            //height: 'calc(90vh - 10vh - 6vh)',

            //[mq[1]]: { padding: '0.5vh' },
          },
        },

        '& .frameless': {
          marginTop: '-1vh',
          marginBottom: '-1vh',
        },
      },
    },
  };

  return (
    <div className="comp_l1" css={styleCompL1}>
      <div className="modal-col d-flex flex-column h-100" css={styleMisc}>
        <div className="modal-up">
          <h1>{content.title}</h1>
          <BlogNav filterProps={content.filterProps} colors={colors} />
          <div className="table d-flex flex-row flex-wrap justify-content-between">
            <BlogEntry blog={content.blog} colors={colors} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComp_L1_Blog;
