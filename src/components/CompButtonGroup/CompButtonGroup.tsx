//import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React from 'react';
import styled from 'styled-components';
import Dropdown from '../DropdownMenu/DropdownMenu';

export const ButtonGroup = ({ links, className }: { links: any; className?: string }) => {
  const onelink = links?.[1] === null && links?.[2] === null;

  const list = ['ARTIKEL LESEN', 'WEBSEITE', 'VIDEO SEHEN'];
  const [value, setValue] = React.useState('ARTIKEL LESEN');
  const [open, setOpen] = React.useState(false);

  return (
    <ButtonGroupMain
      className={`ButtonGroupMain d-flex flex-direction-row align-items-center justify-content-center ${className}`}
    >
      <Dropdown open={open} setOpen={onelink ? () => setOpen(false) : () => setOpen(!open)}>
        <DropdownButton
          className="TriggerButton d-flex align-items-center align-self-stretch"
          disabled={onelink}
        >
          {!onelink && <TablerIconCaretDown fill={'white'} />}
          {value === list[0] && onelink && <TablerIconFile stroke={'white'} />}
          {value === list[1] && onelink && <TablerIconCirclePlay stroke={'white'} />}
          {value === list[2] && onelink && <TablerIconAt stroke={'white'} />}
        </DropdownButton>
        <DropdownMenu sideOffset={3} align={'start'}>
          <Dropdown.RadioGroup setValue={setValue}>
            <DropdownRadioItem>{list[0]}</DropdownRadioItem>
            {links[1] !== null && <DropdownRadioItem>{list[1]}</DropdownRadioItem>}
            {links[2] !== null && <DropdownRadioItem>{list[2]}</DropdownRadioItem>}
          </Dropdown.RadioGroup>
        </DropdownMenu>
      </Dropdown>
      <Button href={links[list.findIndex((el) => el === value)]} className="rightbutton" target="_blank">
        {value}
      </Button>
    </ButtonGroupMain>
  );
};

const ButtonGroupMain = styled.div`
  &.ButtonGroupMain {
    z-index: 1;
    height: 42px;
    width: 160px;
  }
`;

const DropdownButton = styled(Dropdown.Button)`
&.TriggerButton {
    font-family: inherit;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(121,0,0,1);
    border-radius: 8px 0px 0px 8px;
    border: none;
    outline: none;

    &:hover {
        background-color: rgba(100,0,0,1);
    }

    &:focus {
        background-color: rgba(140,0,0,1);
    }
`;

const DropdownMenu = styled(Dropdown.Menu)`
  min-width: 160px !important;
`;

const DropdownRadioItem = styled(Dropdown.RadioItem)`
  color: rgba(121, 0, 0, 1) !important;

  &:hover {
    color: rgba(255, 255, 255, 1) !important;
    background-color: rgba(121, 0, 0, 1) !important;
  }
`;

const Button = styled.a`
  &.rightbutton {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    font-size: 12px !important;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    text-transform: uppercase;
    border-radius: 0px 8px 8px 0px;
    border: 0px;
    outline: none;
    border-left: 1px solid rgba(0, 0, 0, 1);
    background-color: rgba(121, 0, 0, 1) !important;
    color: rgba(255, 255, 255, 1);
    flex: 1 1 auto !important;
    align-self: stretch !important;
    text-decoration: none;

    &:hover {
      background-color: rgb(105, 0, 0);
    }
  }
`;

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
