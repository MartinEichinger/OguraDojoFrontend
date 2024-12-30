//import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React from 'react';
import styled from 'styled-components';
import Dropdown from '../DropdownMenu/DropdownMenu';
import { IconCaretDown, IconFile, IconBrandYoutube, IconAt } from '@tabler/icons-react';

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
          {!onelink && <IconCaretDown color={'white'} />}
          {value === list[0] && onelink && <IconFile color={'white'} />}
          {value === list[1] && onelink && <IconBrandYoutube color={'white'} />}
          {value === list[2] && onelink && <IconAt color={'white'} />}
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
