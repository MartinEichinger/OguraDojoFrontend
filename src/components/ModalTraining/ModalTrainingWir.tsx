import styled from 'styled-components';

const ModalTrainingWir = ({ contentWir }: { contentWir: any }) => {
  return (
    <WirTR className="csWirTR d-none">
      <div className="modal-col">
        <div className="bg-training"></div>
        <h1 className="bigger">{contentWir.title}</h1>
        <div className="rect scroll_">
          <p className="mb-2">{contentWir.text}</p>
        </div>
        <div className="cards d-flex flex-row flex-wrap justify-content-around scroll_">
          {contentWir.tabs.map((item: any, i: number) => {
            return (
              <div className="body d-flex flex-column justify-content-between" key={i}>
                <div
                  className="image"
                  style={{
                    backgroundImage: item.img,
                    backgroundPosition: item.img_pos,
                  }}
                ></div>
                <div className="text d-flex flex-column align-items-center justify-content-around">
                  <p className="bold highlight">{item.head1}</p>
                  <h5>{item.head2}</h5>
                  <p className="white text-center mb-2">{item.head3}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </WirTR>
  );
};

const WirTR = styled.div`
  &.csWirTR {
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
      grid-template-rows: auto 1fr auto 1fr auto;
      grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 1fr;

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

      & h1 {
        color: white;
        text-shadow: 0px 0px 5px ${(props) => props.theme.colors.bgRed};
        position: relative;
        margin-bottom: 1vh;
      }

      & .bigger {
        grid-column: 2/-1;
        grid-row: 1;
        max-height: 20vh;
        box-sizing: border-box;
      }

      & .rect {
        grid-column: 2/12;
        grid-row: 3;
        background-color: rgba(255, 255, 255, 0.7);
        position: relative;
        border-radius: 5px;
        padding: 1vh;
        margin: 1vh;
        overflow: auto;
        max-height: 28vh;
        box-sizing: border-box;
      }

      & .cards {
        grid-column: 2/12;
        grid-row: 5;
        position: relative;
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 5px;
        padding: 1vh;
        margin: 1vh;
        overflow: auto;
        max-height: 48vh;
        box-sizing: border-box;

        & .body {
          height: 320px;
          width: 250px;
          border-radius: 5px;
          position: relative;
          margin: 5px;

          & .image {
            width: 100%;
            height: 55%;
            border-radius: 5px;
            background-size: cover;
          }

          & .text {
            width: 100%;
            height: 42%;
            border-radius: 5px;
            background-color: rgba(0, 0, 0, 0.7);
          }
        }
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

export default ModalTrainingWir;
