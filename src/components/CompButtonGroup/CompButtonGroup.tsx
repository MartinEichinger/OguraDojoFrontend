import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React from 'react';
import styled from 'styled-components';
import './styles.css';

export const ButtonGroup = ({ links, className }: { links: any; className: any }) => {
  const onelink = links?.[1] === null && links?.[2] === null;

  const list = ['ARTIKEL LESEN', 'WEBSEITE', 'VIDEO SEHEN'];
  const [person, setPerson] = React.useState('ARTIKEL LESEN');
  const [open, setOpen] = React.useState(false);

  return (
    <ButtonGroupMain
      className={`ButtonGroupMain d-flex flex-direction-row align-items-center justify-content-center ${className}`}
    >
      <DropdownMenu.Root open={open} onOpenChange={() => setOpen(onelink ? false : !open)}>
        <DropdownMenu.Trigger asChild>
          <button
            className="IconButton d-flex align-items-center align-self-stretch"
            aria-label="Customise options"
            aria-haspopup={onelink ? false : 'menu'}
            disabled={onelink ? true : false}
          >
            {!onelink && <TablerIconCaretDown fill={'white'} />}
            {person === list[0] && onelink && <TablerIconFile stroke={'white'} />}
            {person === list[1] && onelink && <TablerIconCirclePlay stroke={'white'} />}
            {person === list[2] && onelink && <TablerIconAt stroke={'white'} />}
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className="DropdownMenuContent" sideOffset={3} align={'start'}>
            <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
              <DropdownMenu.RadioItem className="DropdownMenuRadioItem" value={list[0]}>
                Artikel lesen
              </DropdownMenu.RadioItem>
              {links[1] !== null && (
                <DropdownMenu.RadioItem className="DropdownMenuRadioItem" value={list[1]}>
                  Webseite
                </DropdownMenu.RadioItem>
              )}
              {links[2] !== null && (
                <DropdownMenu.RadioItem className="DropdownMenuRadioItem" value={list[2]}>
                  Video
                </DropdownMenu.RadioItem>
              )}
            </DropdownMenu.RadioGroup>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
      <Button
        href={links[list.findIndex((el) => el === person)]}
        className="rightbutton"
        target="_blank"
      >
        {person}
      </Button>
    </ButtonGroupMain>
  );
};

const ButtonGroupMain = styled.div`
  &.ButtonGroupMain {
    z-index: 1;
    height: 42px;
    width: 150px;
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

    &:active {
      background-color: rgba(140, 0, 0, 1);
      /* border-top: 1px solid rgba(255, 255, 255, 1);
    border-bottom: 1px solid rgba(255, 255, 255, 1);
    border-right: 1px solid rgba(255, 255, 255, 1); */
      transform: scale(99%);
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
