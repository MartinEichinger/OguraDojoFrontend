/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';
import CompRoundRectSchedule from '../CompRoundRectSchedule/CompRoundRectSchedule';
import CompRoundRectMap from '../CompRoundRectMap/CompRoundRectMap';
import CompRoundRectText from '../CompRoundRectText/CompRoundRectText';
import CompRoundRectList from '../CompRoundRectList/CompRoundRectList';

const ModalTrainingTraining = ({ contentTraining, mq, colors }) => {
  const styleTraining = {
    '&.Training': {
      width: '100%',
      position: 'absolute',

      '& .modal-col': {
        width: 'calc(100% - 51px)',

        [mq[2]]: {
          width: 'calc(100% - 39px)',
        },

        [mq[1]]: {
          width: 'calc(100% - 34px)',
        },

        [mq[0]]: {
          width: 'calc(100% - 29px)',
        },

        '& .modal-up': {
          height: '90vh',
          backgroundColor: 'white',
          borderRadius: '5px',

          '& .bg-training': {
            height: '90vh',
            width: 'calc(100% - 51px)',
            backgroundImage: 'url(./training_pic_1.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '5px',
            boxShadow: 'inset 0px 25px 30px 30px white',
            filter: 'blur(4px)',
            position: 'absolute',

            [mq[0]]: {
              width: 'calc(100% - 29px)',
            },
          },

          '& .table': {
            padding: '2vh',
            height: 'calc(90vh - 16vh)',

            [mq[1]]: { padding: '0.5vh' },

            '& .circle': {
              position: 'relative',
              height: '15vh',
              width: '15vh',
              backgroundColor: 'rgba(255,255,255,0.7)',
              borderRadius: '125px',

              [mq[2]]: {
                height: '11vh',
                width: '11vh',
                '& img, p': {
                  padding: '3px',
                  margin: '0px',
                },
              },

              [mq[1]]: {
                height: '3vh',
                //width: '3vh',
                margin: '1vh 0vh',
                padding: '1vh',
              },
            },

            '& .rect': {
              position: 'relative',
              marginLeft: '2vh',
              width: 'calc(100% - 125px - 2vh)',
              height: '15vh',
              backgroundColor: 'rgba(255,255,255,0.7)',
              borderRadius: '5px',
              padding: '1vh',
              overflow: 'auto',

              [mq[2]]: {
                width: 'calc(100% - 13vh)',
              },

              [mq[1]]: {
                width: '100%',
                margin: '0px',
              },

              '& iframe': {
                //border: '0px',
              },

              '& .frameless': {
                marginTop: '-1.25vh',
                marginBottom: '-1.25vh',
              },

              '& .tab-row': {
                padding: '3px',
              },
            },
          },
        },
      },
    },
  };

  return (
    <div className="Training" css={styleTraining}>
      <div className="modal-col d-flex flex-column h-100">
        <div className="modal-up">
          <div className="bg-training"></div>
          <h1 className="big">{contentTraining.title}</h1>
          <div className="table d-flex flex-column justify-content-between">
            <CompRoundRectSchedule schedule={contentTraining.schedule} />
            <CompRoundRectMap map={contentTraining.map} style={styleTraining} />
            <CompRoundRectText
              text={contentTraining.text}
              style={styleTraining}
            />
            <CompRoundRectList
              list={contentTraining.beitrag}
              style={styleTraining}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalTrainingTraining;
