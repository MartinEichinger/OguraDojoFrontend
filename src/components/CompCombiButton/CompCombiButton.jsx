import React, { useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Button } from '@mui/material';

const CombiButton = ({ colors, className, links }) => {
  const [visible, setVisible] = useState(0);
  const [item, setItem] = useState(0);
  const debug = false;

  const toggleVisible = () => {
    if (visible === true) {
      setVisible(false);
    } else if (visible === false) {
      setVisible(true);
    } else if (visible === 0) {
      setVisible(true);
    }
  };

  const unsetVisible = () => {
    setVisible(false);
  };

  const onSetItem = (item) => {
    setItem(item);
    unsetVisible();
  };

  const list = ['ARTIKEL LESEN', 'WEBSEITE', 'VIDEO SEHEN'];
  const icons = [TablerIconFile, TablerIconAt, TablerIconCirclePlay];
  const isAvailable = [links[0] !== null, links[1] !== null, links[2] !== null];
  const countAvailable = isAvailable.filter(Boolean).length;
  const firstAvailable = isAvailable.indexOf(true);

  if (debug) console.log('List: ', list);
  if (debug) console.log('Links: ', links);
  if (debug) console.log('Icons: ', icons);
  if (debug) console.log('isAvailable: ', isAvailable);
  if (debug) console.log('countAvailable: ', countAvailable);
  if (debug) console.log('firstAvailable: ', firstAvailable);

  return (
    <Container className={className}>
      <ButtonGroup id="ButtonGroup" className="button d-flex flex-row" colors={colors} visible={visible}>
        <Buttn
          className="select"
          onClick={() => toggleVisible()}
          onBlur={() => setTimeout(() => unsetVisible(), 200)}
          colors={colors}
          disabled={countAvailable <= 1}
        >
          {countAvailable === 0 && <TablerIconFile />}
          {countAvailable === 1 && <TablerIconFile />}
          {visible === true && countAvailable > 1 && <TablerIconCaretUp fill={'white'} />}
          {visible === 0 && countAvailable > 1 && <TablerIconCaretDown fill={'white'} />}
          {visible === false && countAvailable > 1 && <TablerIconCaretDown fill={'white'} />}
        </Buttn>
        <a href={links[item]} target="_blank" rel="noreferrer">
          <Buttn className="descr" colors={colors} onClick={() => unsetVisible()}>
            {list[item]}
          </Buttn>
        </a>
      </ButtonGroup>

      <List
        id="List"
        className={
          (visible === false && 'list d-flex flex-column slide-out-topII') ||
          (visible === true && 'list d-flex flex-column slide-in-topII') ||
          (visible === 0 && 'list d-flex flex-column outside')
        }
      >
        {isAvailable[0] === true && (
          <Buttn colors={colors} onClick={() => onSetItem(0)}>
            <TablerIconFile />
          </Buttn>
        )}
        {isAvailable[1] === true && (
          <Buttn colors={colors} onClick={() => onSetItem(1)}>
            <TablerIconAt />
          </Buttn>
        )}
        {isAvailable[2] === true && (
          <Buttn colors={colors} onClick={() => onSetItem(2)}>
            <TablerIconCirclePlay stroke={'white'} />
          </Buttn>
        )}
      </List>
    </Container>
  );
};

export default CombiButton;

const TablerIconAt = ({ stroke = 'white', fill = 'none' }) => {
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
      className="icon icon-tabler icons-tabler-outline icon-tabler-at"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
    </svg>
  );
};

const TablerIconCaretDown = ({ stroke = 'black', fill = 'black' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill}
      className="icon icon-tabler icons-tabler-filled icon-tabler-caret-down"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" />
    </svg>
  );
};

const TablerIconFile = ({ stroke = 'white', fill = 'none' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="2 2 20 20"
      fill={fill}
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-file"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
    </svg>
  );
};
const TablerIconCirclePlay = ({ stroke = 'white', fill = 'none' }) => {
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
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
      <path d="M10 9l5 3l-5 3z" />
    </svg>
  );
};

const TablerIconCaretUp = ({ stroke = 'none', fill = 'black' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill}
      className="icon icon-tabler icons-tabler-filled icon-tabler-caret-up"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11.293 7.293a1 1 0 0 1 1.32 -.083l.094 .083l6 6l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059l-.002 .059l-.005 .058l-.009 .06l-.01 .052l-.032 .108l-.027 .067l-.07 .132l-.065 .09l-.073 .081l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002h-12c-.852 0 -1.297 -.986 -.783 -1.623l.076 -.084l6 -6z" />
    </svg>
  );
};

// animation slide-in-top
const slide_in_topII = keyframes`
  0% {
    transform: translateY(-150%);
    opacity: 0;
  }
  75% {
    transform: translateY(-40%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

// animation slide-out-top
const slide_out_topII = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  25% {
    transform: translateY(-40%);
    opacity: 0;
  }
  100% {
    transform: translateY(-150%);
    opacity: 0;
  }
`;

const Container = styled.div`
  margin: 30px;
  width: 172px;
  height: 43.3px;
  border-radius: 8px;

  .slide-in-topII {
    -webkit-animation: ${slide_in_topII} 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: ${slide_in_topII} 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  .slide-out-topII {
    -webkit-animation: ${slide_out_topII} 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
    animation: ${slide_out_topII} 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }

  .outside {
    transform: translateY(-150%);
    opacity: 0;
  }
`;

const List = styled.div`
  width: 36px;
  position: relative;
  z-index: 99;

  button {
    border-top: 1px solid white;
  }
`;

const ButtonGroup = styled.div`
  position: relative;
  z-index: 100;
  border-radius: 8px;
  height: inherit;
  width: inherit;

  &:focus {
    border: 2px solid grey;
  }

  &:hover {
    box-shadow: none;
  }

  a {
    width: calc(150px - 36px);

    &:hover {
      text-decoration: none;
    }
  }

  .select {
    width: 36px;
    height: 100%;
    color: white;
    padding: 5px 10px;
    box-shadow: none !important;
    ${({ visible }) =>
      visible === true ? 'border-radius: 8px 0px 0px 0px' : 'border-radius: 8px 0px 0px 8px'};
  }

  .descr {
    box-shadow: none !important;
    color: white;
    height: 100%;
    width: inherit;
    border-left: 1px solid ${({ colors }) => colors.bgRedSolid};
    padding: 5px 10px;
    border-radius: 0px 8px 8px 0px;
  }
`;

const Buttn = styled(Button)`
  background-color: ${({ colors }) => colors.bgRed};
  border: 1px solid ${({ colors }) => colors.bgRed50};
  min-width: 36px;
  letter-spacing: inherit;
  color: white !important;
  border-radius: 0px;

  &:hover {
    background-color: ${({ colors }) => colors.bgRed20};
    color: white;
  }

  i {
    font-size: 20px;
  }
`;
