/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';
import ModalInNavigation from '../ModalInNavigation/ModalInNavigation';
import ModalCompL1Impressum from './ModalCompL1Impressum';
import useGraphQLQuery from '../../hooks/useGraphQLQuery';
import '../animation.css';

export interface IContentImpressum {
  title: string;
  impressum: {
    id: number;
    translations: {
      impressum: string;
    }[];
  };
}

export default function ModalImpressum({ colors, mq, lang }: { colors: any; mq: any; lang: string }) {
  // Debugging
  const debug = false;

  const style: any = {
    width: '100vw',
    maxWidth: '1440px',
    height: 'calc(100vh)',
    zIndex: '1051',
    overflow: 'hidden',
    margin: '0 auto',

    '& .modal-content': {
      backgroundColor: 'rgba(0,0,0,0)',
      border: 'none',

      '& .modal-row': {
        height: 'calc(100vh - 4px)',
        margin: '2px',
        display: 'grid',
        gridColumnGap: '2px',
        gridTemplateColumns: '1fr 50px',
        gridTemplateRows: '1fr 7fr 1fr',

        [mq[2]]: {
          // bis 960 px
          gridTemplateColumns: '1fr 39px',
        },

        [mq[1]]: {
          // bis 600 px
          gridTemplateColumns: '1fr 34px',
        },

        [mq[0]]: {
          // bis 400px
          gridTemplateColumns: '1fr 29px',
        },

        '& .inNavigation': {
          gridColumn: '2',
          gridRow: '2',
        },

        '& .imageBg': {
          gridColumn: '1 / -1',
          gridRow: '1 / -1',
          backgroundImage: 'url(./main_panzigong.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          borderRadius: '5px',
          boxShadow: 'inset 0px 25px 30px 30px white',
          filter: 'blur(4px)',
        },

        '& .modal-col': {
          gridRow: '2',
          gridColumn: '1',
          height: '100%',
          backgroundColor: 'white',
          borderRadius: '5px',
          display: 'grid',
          gridTemplateColumns: '1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 1fr',
          gridTemplateRows: 'auto 1fr auto',
          [mq[2]]: {
            // bis 960 px
            gridTemplateColumns: '0.5fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 0.5fr',
          },
          [mq[1]]: {
            // bis 600 px
            gridTemplateColumns: '0.2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 0.2fr',
          },
          [mq[0]]: {
            // bis 400px
            gridTemplateColumns: '0.1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 0.1fr',
          },

          '& .bigger': {
            gridRow: '1',
            gridColumn: '1/-1',
            maxHeight: 'calc(20vh - 4px)',
            boxSizing: 'border-box',
            margin: '0',
            color: colors.bgGrey,
            textShadow: `2px 0 0 ${colors.bgRed}, 0 2px 0 ${colors.bgRed}, -2px 0 0 ${colors.bgRed}, 0 -2px 0 ${colors.bgRed}`,
            position: 'relative',
            width: '100%',
            height: '100%',
            paddingTop: '2vh',
            paddingLeft: '2vw',
          },

          '& .impressum': {
            gridRow: '3',
            gridColumn: '2/12',
            maxHeight: 'calc(80vh - 4px)',
            position: 'relative',
            boxSizing: 'border-box',
            backgroundColor: colors.bgWhite50,
            padding: '1vh',
            marginBottom: '1vh',
            borderRadius: '5px',

            '& h2': {
              marginTop: '1vh',
              fontSize: '36px',
              [mq[2]]: {
                // bis 960 px
                fontSize: '34px',
              },
              [mq[1]]: {
                // bis 600 px
                fontSize: '32px',
              },
              [mq[0]]: {
                // bis 400px
                fontSize: '28px',
              },
            },

            '& h3': {
              fontSize: '30px',
              margin: '1vh 0vh',
              [mq[2]]: {
                // bis 960 px
                fontSize: '28px',
              },
              [mq[1]]: {
                // bis 600 px
                fontSize: '26px',
              },
              [mq[0]]: {
                // bis 400px
                fontSize: '24px',
              },
            },

            '& p': {
              margin: 0,
              fontSize: '20px',
              [mq[2]]: {
                // bis 960 px
                fontSize: '18px',
              },
              [mq[1]]: {
                // bis 600 px
                fontSize: '16px',
              },
              [mq[0]]: {
                // bis 400px
                fontSize: '16px',
              },
            },
          },
        },
      },
    },
  };

  const query = `query {
    content_impressum {
      id
      translations (filter: {languages_code: {code: {_eq: "${lang}"}}}) {
        impressum
      }
  }
  }`;

  const contentImpressum = useGraphQLQuery(query);

  const configNav = {
    upDown: 0,
    pagItems: 4,
    navItems: [],
  };

  const configContent: IContentImpressum = {
    title: 'Impressum',
    impressum: contentImpressum?.content_impressum[0],
  };

  if (debug) console.log('ModalImpressum/Results', contentImpressum);

  return (
    <>
      <div
        className="modal fade"
        id="idModalImpressum"
        tabIndex={-1}
        aria-labelledby="ModalImpressumLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
      >
        <div
          className="modal-dialog d-flex flex-row-reverse align-items-center"
          id="modalDialog"
          css={style}
        >
          <div className="modal-content">
            <div className="modal-row">
              <ModalInNavigation
                clickUpDown
                nextItem
                colors={colors}
                config={configNav}
                mq={mq}
                apdx
                type
              />
              {/* eslint-disable-next-line */}
              <ModalCompL1Impressum content={configContent} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
