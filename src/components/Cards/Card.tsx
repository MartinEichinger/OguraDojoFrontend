import styled from 'styled-components';
import React from 'react';

export default function Card({ props, keys }: { props: any; keys: any }) {
  var { img, modal, heading, headingTwo, para, table, keywords } = props;

  return (
    <CardButton
      className="Cards d-flex flex-row"
      data-bs-toggle="modal"
      data-bs-target={modal}
      id="modalCard"
      key={keys}
      img={img}
    >
      <div className="img" id="modalCard"></div>
      <div className="cardBody d-flex flex-column justify-content-between" id="modalCard">
        <div>
          <h1>{heading}</h1>
          <h3>{headingTwo}</h3>
          {para !== undefined ? <p>{para}</p> : ''}
          {table !== undefined ? (
            <div className="card-rows scroll_">
              {table.map((line: any, j: number) => {
                return (
                  <React.Fragment key={j}>
                    <p className="tab1 bold">{line.head}</p>
                    <p className="tab2">{line.day}</p>
                    <p className="tab3">{line.time}</p>
                  </React.Fragment>
                );
              })}
            </div>
          ) : (
            ''
          )}
        </div>
        <h5>{keywords}</h5>
      </div>
    </CardButton>
  );
}

const CardButton = styled.button<{ img: string }>`
  width: 1280px;
  height: 340px;
  box-shadow: 10px 10px 25px 0px ${(props) => props.theme.colors.shadowGrey};
  border-radius: 5px;
  margin: 20px 20px;
  padding: 0px;
  font-family: Lato, cursive;
  background-color: ${(props) => props.theme.colors.bgWhite};
  border: none;
  outline: none;

  ${(props) => props.theme.breakpoints.mq[2]} {
    height: 300px;
  }

  ${(props) => props.theme.breakpoints.mq[1]} {
    height: 250px;
    margin: 15px 10px;
  }

  ${(props) => props.theme.breakpoints.mq[0]} {
    height: 200px;
    min-width: 390px;
    margin: 10px 0px;
  }

  & .bold {
    font-weight: bold;
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0px 0px 5px 0px ${(props) => props.theme.colors.shadowGrey};
  }

  & .img {
    top: 0px;
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-position: 50% 20%;
    background-size: cover;
    border-radius: 5px 0px 0px 5px;
    min-width: 420px;
    height: 340px;
    margin: 0px;
    padding: 0px;

    ${(props) => props.theme.breakpoints.mq[2]} {
      width: 35vw;
      min-width: 35vw;
      height: 300px;
    }

    ${(props) => props.theme.breakpoints.mq[1]} {
      height: 250px;
    }

    ${(props) => props.theme.breakpoints.mq[0]} {
      width: 130px;
      min-width: 130px;
      height: 200px;
    }
  }

  & .cardBody {
    padding: 20px;
    height: 340px;

    ${(props) => props.theme.breakpoints.mq[2]} {
      height: 300px;
      padding: 15px;
    }

    ${(props) => props.theme.breakpoints.mq[1]} {
      height: 250px;
    }

    ${(props) => props.theme.breakpoints.mq[0]} {
      height: 200px;
      padding: 10px;
    }

    & .card-rows {
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
  }

  & h1 {
    color: ${(props) => props.theme.colors.typoGrey};
    text-align: left;
  }

  & h3 {
    color: ${(props) => props.theme.colors.typoRed};
    text-align: left;
    padding-bottom: 20px;
    margin: 0px;

    ${(props) => props.theme.breakpoints.mq[2]} {
      padding-bottom: 10px;
    }
  }

  & p {
    margin: 0px;
    color: ${(props) => props.theme.colors.typoGrey};
    text-align: justify;

    ${(props) => props.theme.breakpoints.mq[2]} {
      max-height: 135px;
      padding-bottom: 5px;
      overflow: auto;
    }

    ${(props) => props.theme.breakpoints.mq[1]} {
      max-height: 97px;
      overflow: auto;
    }

    ${(props) => props.theme.breakpoints.mq[0]} {
      max-height: 85px;
      overflow: auto;
    }
  }

  & h5 {
    color: ${(props) => props.theme.colors.typoGreen};
    text-align: left;

    ${(props) => props.theme.breakpoints.mq[1]} {
      max-height: 28px;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    ${(props) => props.theme.breakpoints.mq[0]} {
      display: none;
    }
  }
`;
