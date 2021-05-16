import React from 'react';
import CompRoundRectSchedule from './CompRoundRectSchedule';
import CompRoundRectMap from './CompRoundRectMap';
import CompRoundRectText from './CompRoundRectText';
import CompRoundRectList from './CompRoundRectList';

const contentTraining = {
  title: 'Training',
  schedule: {
    title: 'Wann?',
    lesson: [
      {
        day: 'Montag',
        time: '18:20 - 20:00',
        topic: 'Taiji',
      },
      {
        day: 'Montag',
        time: '20:00 - 22:00',
        topic: 'Karate (Erwachsene)',
      },
      {
        day: 'Mittwoch',
        time: '17:00 - 18:30',
        topic: 'Karate (Kinder/Jugendliche)',
      },
      {
        day: 'Freitag',
        time: '20:00 - 22:00',
        topic: 'Karate (Erwachsene)',
      },
    ],
  },
  map: {
    title: 'Wo?',
    address: 'Sonnenschule Traunreut - Martin-Luther-Straße - 83301 Traunreut',
    src:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d667.9166880710771!2d12.595441829286242!3d47.962167896732744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDU3JzQzLjgiTiAxMsKwMzUnNDUuNiJF!5e0!3m2!1sen!2sde!4v1619885924254!5m2!1sen!2sde',
  },
  text: {
    title: 'Was?',
    text:
      'Zum Kennenlernen gibt es natürlich die Möglichkeit eines kostenlosen Probetrainings. Zum Training am Besten in lockerer Sportbekleidung erscheinen. Sportanzüge und Equipment kann bei Bedarf vor Ort bestellt werden.',
  },
  beitrag: {
    title: 'Beitrag?',
    items: [
      {
        heading: ['TuS Traunreut', '(Karate und Taiji)'],
        listing: ['unter 18J: 60€/J', 'über 18J: 120€/J'],
      },
      {
        heading: ['Verband CRB', '(Tengu Ryu)'],
        listing: ['Neuaufnahme: 31€/J', 'Verlängerung: 22€/J'],
      },
      {
        heading: ['Verband DKV', '(Karate)'],
        listing: [
          '18€/J für Kinder (bis 13J)',
          '23€/J für Jugendl. & Erwachsene',
        ],
      },
    ],
  },
};

const ModalCompTabRoundRect = ({ mq }) => {
  const styleTraining = {
    '& .circle': {
      position: 'relative',
      //aspectRatio: '1 / 1',
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

      [mq[1]]: {
        width: 'calc(100% - 2vh)',
        padding: '1vh',
        margin: '0',
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
