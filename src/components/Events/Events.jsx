/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';
import { EventContactForm } from '../EventContactForm/EventContactForm';
import EventFormInfos from '../EventFormInfos/EventFormInfos';
import EventFormSchedule from '../EventFormSchedule/EventFormSchedule';
import { useCustomStyles } from './Events.style';
import { useFormControls } from './Events.controls';

const Events = ({ events, colors, mq }) => {
  // constants
  const debug = false;
  if (debug) console.log('Events : ', events);

  // style
  //const classes = useStyles();
  const style = useCustomStyles({ mq, colors });

  // util data
  const month = ['JAN', 'FEB', 'MAR', 'APR', 'MAI', 'JUN', 'JUL', 'AUG', 'SEP', 'OKT', 'NOV', 'DEZ'];

  const entries = [
    // part I
    { name: 'seminar_title', label: 'Seminar', id: '#title', val_length: 80, required: 'true' },
    { name: 'seminar_date', label: 'Termin', id: '#date' },
    { name: 'seminar_location', label: 'Ort', id: '#location', val_length: 80, required: 'true' },
    {
      name: 'seminar_trainer',
      label: 'Trainer',
      id: '#trainer',
      val_length: 80,
      required: 'true',
    },
    {
      name: 'seminar_organiser',
      label: 'Ausrichter',
      id: '#organisator',
      multiline: true,
      multilinerows: 3,
      val_length: 80,
      required: 'true',
    },
    // part II
    {
      name: 'details',
      label: 'Weitere Infos',
      id: '#details',
      multiline: true,
      multilinerows: 5,
      val_length: 2047,
      required: 'true',
    },
    { name: 'authorized', label: 'Berechtigt', id: '#authorized', val_length: 40, required: 'true' },
    { name: 'cost', label: 'Gebühr', id: '#cost', val_length: 80, required: 'true' },
    {
      name: 'other',
      label: 'Sonstiges',
      id: '#other',
      multiline: true,
      val_length: 1023,
      required: 'true',
    },
    // part III
    { name: 'email', label: 'E-Mail', id: '#email', val_email: true },
    { name: 'fullName', label: 'Name', id: '#fullName', val_length: 40 },
  ];

  // methods
  const { selectEvent, onChangeEvent, formIsValid, handleFormSubmit, entryData, changedData, errors } =
    useFormControls({
      events,
      entries,
    });

  if (debug) console.log('Events/props : ', changedData, entryData);

  return (
    <React.Fragment>
      {1 && (
        <div className="schedule d-flex flex-column scroll_" css={style}>
          <EventFormSchedule events={events} month={month} selectEvent={selectEvent} />
        </div>
      )}
      <div className="detail d-flex flex-column scroll_" css={style}>
        {events.length > 0 ? (
          <>
            <EventFormInfos inFieldVal={entries.slice(0, 5)} changedData={changedData} />
            <div className="invitation d-flex row-direction">
              <p className="green">Ausschreibung</p>
              {changedData?.invitation_to_tender ? (
                <a
                  href={`https://ogura-dojo-cms.directus.app/assets/${changedData?.invitation_to_tender?.id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <TablerIconPDF stroke="rgb(10,121,0)" />
                </a>
              ) : (
                '-'
              )}
            </div>
            <EventContactForm
              //style={classes.root2}
              inFieldVal={entries.slice(8, 10)}
              event={changedData.title}
              value={changedData}
              onChangeEvent={onChangeEvent}
              errors={errors}
              formIsValid={formIsValid}
              handleFormSubmit={handleFormSubmit}
            />
          </>
        ) : (
          <h2>Aktuell keine Termine</h2>
        )}
      </div>
    </React.Fragment>
  );
};

const TablerIconPDF = ({ stroke = 'white', fill = 'none' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-file-type-pdf"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
      <path d="M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" />
      <path d="M17 18h2" />
      <path d="M20 15h-3v6" />
      <path d="M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z" />
    </svg>
  );
};

export default Events;
