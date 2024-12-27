import styled from 'styled-components';
import { EventContactForm } from '../EventContactForm/EventContactForm';
import EventFormInfos from '../EventFormInfos/EventFormInfos';
import EventFormSchedule from '../EventFormSchedule/EventFormSchedule';
import { useFormControls } from './Events.controls';

const Events = ({ events }: { events: any }) => {
  // constants
  const debug = false;
  if (debug) console.log('Events : ', events);

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
    <EventsBody>
      {1 && (
        <div className="schedule d-flex flex-column scroll_">
          <EventFormSchedule events={events} month={month} selectEvent={selectEvent} />
        </div>
      )}
      <div className="detail d-flex flex-column scroll_">
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
              inFieldVal={entries.slice(9, 11)}
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
    </EventsBody>
  );
};

const EventsBody = styled.div`
  width: 47%;
  height: 100%;
  font-family: Lato, sans-serif;
  padding-top: 3vh;

  ${(props) => props.theme.breakpoints.mq[2]} {
    // bis 960px
    width: 90%;
    margin-bottom: 1vh;
    height: 50%;
  }

  ${(props) => props.theme.breakpoints.mq[1]} {
    // bis 600px
    width: 95%;
  }

  ${(props) => props.theme.breakpoints.mq[0]} {
    // bis 400px
    width: 100%;
  }

  &.schedule {
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.5);

    '& button': {
      position: 'absolute;
      bottom: ' 3.5vh;
      left: '3.5vh;
    },
  },

  &.detail {
    border-radius: 5px;
    background-color: rgba(255,255,255,0.5);
    padding: 2vh;

    & .invitation {
      margin-top: 16px;
      margin-bottom: 32px;

      & p {
        margin-bottom: 0px;
        margin-right: 16px;
      }
    }

    & h3 {
      text-decoration: underline;
      margin: 1vh 0vh;
    }

    & i {
      cursor: '
        pointer;
    }

    & button {
      cursor: pointer;
      border-radius: 5px;
      padding: 3px;

      &.red {
        border: 1px solid ${(props) => props.theme.colors.bgRed};
        color: white;
      }

      &.green {
        border: 1px solid ${(props) => props.theme.colors.bgGreen};
        color: white;
      }
    }
  }
`;

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
