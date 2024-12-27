import styled from 'styled-components';
import Events from '../Events/Events';

const ModalCompL1Events = ({ content, events }: { content: any; events: any }) => {
  const debug = false;

  // destructure
  events = events.map((item: any) => {
    return { seminar_title: item.translations[0].seminar_title, ...item };
  });

  if (debug) console.log('ModalComp_L1_Events: ', events, events.length);

  return (
    <ModalCol className="modal-col">
      <div className="imageBg"></div>
      <div className="heading d-flex flex-row justify-content-between align-items-center">
        <h1 className="bigger">{content.title}</h1>
      </div>
      <div className="tables d-flex flex-column flex-lg-row flex-lg-wrap align-items-center align-items-lg-stretch justify-content-lg-around ">
        <Events events={events} />
      </div>
    </ModalCol>
  );
};

const ModalCol = styled.div`
  grid-row: 2;
  grid-column: 1;
  height: 100%;
  background-color: white;
  border-radius: 5px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: '1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 1fr;
  
  ${(props) => props.theme.breakpoints.mq[2]} {
    // bis 960 px
    grid-template-columns: '0.5fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 0.5fr;
  }

  ${(props) => props.theme.breakpoints.mq[1]} {
    // bis 600 px
    grid-template-columns: '0.2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 0.2fr;
  }

  ${(props) => props.theme.breakpoints.mq[0]} {
    // bis 400px
    grid-template-columns: '0.1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 0.1fr;
  }

  & .imageBg {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    background-image: url(./main_panzigong.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5px;
    box-shadow: inset 0px 25px 30px 30px white;
    filter: blur(4px);
  }

  & .heading {
    grid-row: 1;
    grid-column: 2/-1;
    max-height: calc(20vh-4px);
    box-sizing: border-box;

    & h1 {
      font-size: calc(5rem + 2.5vw);
      margin-bottom: 1vh;
      color: ${(props) => props.theme.colors.bgGrey};
      text-shadow: 2px 0 0 ${(props) => props.theme.colors.bgRed}, 0 2px 0 ${(props) =>
  props.theme.colors.bgRed}, -2px 0 0 ${(props) => props.theme.colors.bgRed}, 0 -2px 0 ${(props) =>
  props.theme.colors.bgRed};
      position: relative;

      ${(props) => props.theme.breakpoints.mq[0]} {
        font-size: 8vh;
      }
    }
  }

  & .tables {
    grid-row: 2;
    grid-column: 2/12;
    max-height: calc(80vh - 4px);
    position: relative;
  }
`;

export default ModalCompL1Events;
