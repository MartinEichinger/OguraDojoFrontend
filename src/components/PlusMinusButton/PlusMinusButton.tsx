import styled from 'styled-components';

interface IPlusMinusButton {
  value: number;
  countUp: Function;
  countDown: Function;
}

export default function PlusMinusButton(props: IPlusMinusButton) {
  const { value, countUp, countDown } = props;

  return (
    <PlusMinusButtonBody className="d-flex flex-row justify-content-between">
      <p
        className="count minus d-flex justify-content-center align-items-center"
        onClick={() => countDown(value > 0 ? 1 : 0)}
      >
        -
      </p>
      <p className="counter d-flex justify-content-center align-items-center">{value}</p>
      <p
        className="count plus d-flex justify-content-center align-items-center"
        onClick={() => countUp(value > 8 ? 0 : 1)}
      >
        +
      </p>
    </PlusMinusButtonBody>
  );
}

const PlusMinusButtonBody = styled.div`
  width: 75px;
  height: 30px;
  border-radius: 3px;

  & .count {
    margin: 0px;
    width: 25px;
    border: 1px solid ${(props) => props.theme.colors.bgGreen};
    cursor: pointer;

    &.minus {
      border-radius: 3px 0 0 3px;

      &:hover {
        background-color: ${(props) => props.theme.colors.bgRed50};
      }
    }

    &.plus {
      border-radius: 0px 3px 3px 0px;
      &:hover {
        background-color: ${(props) => props.theme.colors.bgGreen50};
      }
    }
  }

  & .counter {
    margin: 0px;
    width: 25px;
    border-top: 1px solid ${(props) => props.theme.colors.bgGreen};
    border-bottom: 1px solid ${(props) => props.theme.colors.bgGreen};
  }
`;
