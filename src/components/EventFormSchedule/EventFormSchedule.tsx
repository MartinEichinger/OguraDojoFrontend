import styled from 'styled-components';
import { IconUser, IconMapPin } from '@tabler/icons-react';

const EventFormSchedule = ({
  events,
  month,
  selectEvent,
}: {
  events: any;
  month: any;
  selectEvent: any;
}) => {
  const debug = false;
  if (debug) console.log('EventFormSchedule: ', events);
  return (
    <>
      {events.map((item: any, i: number) => {
        var d = new Date(item.seminar_date);
        return (
          <ScheduleBody key={i}>
            <div className="block d-flex flex-row" onClick={() => selectEvent(item)}>
              {i % 2 === 0 && (
                <div className="date bgRed d-flex flex-column justify-content-center align-items-center">
                  <h1 className="big">{d.getDate()}</h1>
                  <h2>{month[d.getMonth()]}</h2>
                </div>
              )}
              {i % 2 === 1 && (
                <div className="date bgGreen d-flex flex-column justify-content-center align-items-center">
                  <h1 className="big">{d.getDate()}</h1>
                  <h2>{month[d.getMonth()]}</h2>
                </div>
              )}
              <div className="details d-flex flex-column align-items-stretch justify-content-between">
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <h3 className="align-self-stretch">{item.seminar_title}</h3>
                </div>
                <div className="d-flex flex-row justify-content-start align-items-center">
                  {i % 2 === 0 && <IconMapPin stroke={'rgb(121,0,0)'} />}
                  {i % 2 === 1 && <IconMapPin stroke={'rgb(19,73,0'} />}
                  {i % 2 === 0 && <h4 className="red">{item.seminar_location}</h4>}
                  {i % 2 === 1 && <h4 className="green">{item.seminar_location}</h4>}
                  <IconUser />
                  <h4>{item.seminar_trainer}</h4>
                </div>
              </div>
            </div>
          </ScheduleBody>
        );
      })}
    </>
  );
};

const ScheduleBody = styled.div`
& .block {
  background-color: rgba(255,255,255,0.5);
  margin-bottom: 2vh;
  border-radius: 5px;
  position: relative;
  cursor: pointer;

  &:hover, &:active, &:focus, &.active: {
    background-color: ${(props) => props.theme.colors.bgGreen50};
  }

  & .date {
    margin-left: 5%;
    width: 25%;
  }

  & .details {
    height: 100%;
    width: 70%;
    padding: 1vh;

    & h3 {
      font-weight: bold;
      font-size: 1.5rem;

      ${(props) => props.theme.breakpoints.mq[3]} {
        // bis 1280
        font-size: calc(1rem + 0.625vw);
      }
    }

    & h4 {
      font-weight: bold;
      margin: 1vh;
      font-size: 0.75rem;

      ${(props) => props.theme.breakpoints.mq[3]} {
        // bis 1280
        font-size: calc(0.625rem + 0.15625vw);
      }
    }
  }

  & h1 {
    font-size: 4.5rem;
    line-height: 3.75rem;

    ${(props) => props.theme.breakpoints.mq[3]} {
      font-size: calc(3.25rem + 1.5625vw);
      line-height: calc(2.75rem + 1.25vw);
    }

    color: rgba(255,255,255,1);
    margin-bottom: 0px;
    padding: 1vh 1vh 0.25vh 1vh;
    text-align: center;
    text-shadow: none;
  }

  & h2 {
    font-size: 3rem;
    line-height: 2.5rem;
    color: rgba(255,255,255,1);
    margin-bottom: 0px;
    padding: 0.25vh 1vh 1vh 1vh;
    text-align: center;

    ${(props) => props.theme.breakpoints.mq[3]} {
      // bis 1280
      font-size: calc(2rem + 1.25vw);
      line-height: calc(1.75rem + 1.25vw);
    }
  }
`;

export default EventFormSchedule;
