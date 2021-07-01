import React from 'react';
import CompRoundRectSchedule from './CompRoundRectSchedule';
import CompRoundRectMap from './CompRoundRectMap';
import CompRoundRectText from './CompRoundRectText';
import CompRoundRectList from './CompRoundRectList';

const ModalCompTabRoundRect = ({ contentTraining, mq }) => {
  const styleTraining = {
    '& .circle': {
      position: 'relative',
      height: '15vh',
      width: '15vh',
      backgroundColor: 'rgba(255,255,255,0.7)',
      borderRadius: '125px',

      [mq[1]]: {
        height: '3vh',
        widht: '3vh',
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

      [mq[1]]: {
        width: '100%',
        margin: '0px',
      },

      '& .tab': { overflow: 'hidden' },

      '& iframe': {
        border: '0px',
      },
    },
  };

  return (
    <div className={contentTraining.title}>
      <div className="modal-col d-flex flex-column h-100">
        <div className="modal-up">
          <div className="bg-training"></div>
          <h1 className="big">{contentTraining.title}</h1>
          <div className="table d-flex flex-column justify-content-between">
            <CompRoundRectSchedule
              schedule={contentTraining.schedule}
              style={styleTraining}
            />
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

export default ModalCompTabRoundRect;
