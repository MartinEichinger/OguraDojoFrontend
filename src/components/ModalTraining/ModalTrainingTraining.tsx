import styled from 'styled-components';
import CompRoundRectSchedule from '../CompRoundRectSchedule/CompRoundRectSchedule';
import CompRoundRectMap from '../CompRoundRectMap/CompRoundRectMap';
import CompRoundRectText from '../CompRoundRectText/CompRoundRectText';
import CompRoundRectList from '../CompRoundRectList/CompRoundRectList';

const ModalTrainingTraining = ({ contentTraining }: { contentTraining: any }) => {
  return (
    <TrainingTR className="csTrainingTR">
      <div className="modal-col">
        <div className="bg-training"></div>
        <h1 className="bigger">{contentTraining.title}</h1>
        <CompRoundRectSchedule schedule={contentTraining.schedule} />
        <CompRoundRectMap map={contentTraining.map} />
        <CompRoundRectText text={contentTraining.text} />
        <CompRoundRectList list={contentTraining.beitrag} />
      </div>
    </TrainingTR>
  );
};

const TrainingTR = styled.div`
  &.csTrainingTR {
    grid-row: 1;
    grid-column: 1;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 6fr;

    & .modal-col {
      grid-row: 1;
      grid-column: 1;
      height: 100%;
      background-color: white;
      border-radius: 5px;
      display: grid;

      grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 1fr;
      grid-template-rows: auto 1fr auto 1fr auto 1fr auto 1fr auto;
      ${(props) => props.theme.breakpoints.mq[2]} {
        // bis 960 px
        grid-template-columns: 0.5fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 0.5fr;
      }
      ${(props) => props.theme.breakpoints.mq[1]} {
        // bis 600 px
        grid-template-columns: 0.2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 0.2fr;
      }
      ${(props) => props.theme.breakpoints.mq[0]} {
        // bis 400px
        grid-template-columns: 0.1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 0.1fr;
      }

      & .bg-training {
        grid-column: 1 / -1;
        grid-row: 1 / -1;
        background-image: url(./training_pic_1.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 5px;
        box-shadow: inset 0px 25px 30px 30px white;
        filter: blur(4px);
      }

      & .bigger {
        grid-column: 2 / -1;
        grid-row: 1;
        max-height: calc(20vh - 4px);
        box-sizing: border-box;
      }

      & .circle {
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 125px;
        aspect-ratio: 1/1;
        margin: 1vh;
        position: relative;
        max-height: 18vh;
        max-width: 20vw;
        box-sizing: border-box;
        grid-column: 2/4;
        align-self: center;

        &:nth-of-type(2) {
          grid-row: 3;
        }

        &:nth-of-type(4) {
          grid-row: 5;
        }

        &:nth-of-type(6) {
          grid-row: 7;
        }

        &:nth-of-type(8) {
          grid-row: 9;
        }

        ${(props) => props.theme.breakpoints.mq[1]} {
          // bis 600 px
          grid-column: 1/3;
          & p {
            display: none;
          }
        }
      }

      & .rect {
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 5px;
        padding: 1vh;
        margin: 1vh;
        overflow: auto;
        position: relative;
        max-height: 18vh;
        box-sizing: border-box;
        grid-column: 4/12;

        &:nth-of-type(3) {
          grid-row: 3;
        }

        &:nth-of-type(5) {
          grid-row: 5;
        }

        &:nth-of-type(7) {
          grid-row: 7;
        }

        &:nth-of-type(9) {
          grid-row: 9;
        }

        ${(props) => props.theme.breakpoints.mq[1]} {
          // bis 600 px
          grid-column: 3/-1;
        }

        &.tab-rows {
          display: grid;
          grid-template-columns: auto 1fr auto 1fr auto;

          & .tab1 {
            grid-column: 1;
          }
          & .tab2 {
            grid-column: 3;
          }
          & .tab3 {
            grid-column: 5;
          }
        }

        &.list-rows {
          grid-template-columns: auto 1fr auto;

          & .tab1 {
            grid-column: 1;
          }
          & .tab2 {
            grid-column: 3;
          }
        }
      }

      & h1 {
        color: white;
        text-shadow: 0px 0px 5px ${(props) => props.theme.colors.bgRed};
        position: relative;
        margin-bottom: 1vh;
      }

      & .highlight {
        color: ${(props) => props.theme.colors.typoRed};
        margin-bottom: 0.5vh;
        position: relative;
        text-align: center;
        text-shadow: 0 0 2px white;
      }

      & h5 {
        color: ${(props) => props.theme.colors.bgWhite};
        margin-bottom: 0.5vh;
        position: relative;
        text-align: center;
      }

      & p {
        margin: 0;
        position: relative;
        z-index: 1;
      }
    }
  }
`;

export default ModalTrainingTraining;
