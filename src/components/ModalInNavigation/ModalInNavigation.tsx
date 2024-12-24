import styled from '@emotion/styled';
import React from 'react';

const ModalInNavigation = ({
  clickUpDown,
  nextItem,
  config,
  apdx,
  type,
  onOpenChange,
}: {
  clickUpDown?: Function;
  nextItem?: Function;
  config: any;
  apdx?: string;
  type?: string;
  onOpenChange?: Function;
}) => {
  return (
    <InNavigation className="inNavigation d-flex flex-column justify-content-between align-items-center">
      <ButtonClose
        type="button"
        className="btn-close d-flex flex-row align-items-center justify-content-center"
        data-bs-dismiss="modal"
        onClick={onOpenChange && (() => onOpenChange(false))}
      >
        <TablerIconX stroke={'white'} />
      </ButtonClose>
      {config?.upDown ? (
        <Arrow
          className={'arrow d-flex align-items-center justify-content-center upArrow' + apdx}
          onClick={clickUpDown && ((e) => clickUpDown('up'))}
        >
          <TablerIconChevronsUp stroke={'white'} />
        </Arrow>
      ) : (
        ''
      )}
      {config?.navItems.map((link: any, i: number) => {
        return (
          <NavItem
            className={`navItem ${link}Btn${type} ${
              i === 0 ? 'active' : ''
            } d-flex align-items-center justify-content-center`}
            onClick={nextItem && ((e) => nextItem(link))}
            key={i}
          >
            <NavItemButton className="big">{link}</NavItemButton>
          </NavItem>
        );
      })}
      {config?.upDown ? (
        <Arrow
          className={'arrow d-flex align-items-center justify-content-center active downArrow' + apdx}
          onClick={clickUpDown && ((e) => clickUpDown('down'))}
        >
          <TablerIconChevronsDown stroke={'white'} />
        </Arrow>
      ) : (
        ''
      )}
    </InNavigation>
  );
};

const InNavigation = styled.div`
  z-index: 1052;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 45px;
  grid-column: 2;
  grid-row: 2;
`;

const ButtonClose = styled.button`
  width: 45px;
  height: 45px;
  margin: 1px;
  padding: 0px;
  border-radius: 50%;
  line-height: 0;
  position: relative;
  right: 0px;
  top: 0px;
  background-color: rgba(64, 64, 64, 1);
  border: none;
  outline: none;
  z-index: 1100;

  @media (max-width: 960px) {
    width: 33px;
    height: 33px;
  }
  @media (max-width: 600px) {
    width: 28px;
    height: 28px;
  }
  @media (max-width: 400px) {
    width: 23px;
    height: 23px;
  }
`;

const NavItem = styled.div`
  max-width: 165px;
  position: relative;
  transform: rotate(90deg);
  color: rgba(121, 0, 0, 1);
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 25px;
  padding: 0px 10px;

  &.active {
    color: rgba(121, 0, 0, 1);
    border: 1px solid rgba(121, 0, 0, 1);
  }
`;

const NavItemButton = styled.button`
  cursor: pointer;
  font-weight: normal;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  color: inherit;

  @media (max-width: 960px) {
    margin: 0;
  }
`;

const Arrow = styled.div`
  position: relative;
  width: 45px;
  height: 45px;
  border-radius: 45px;
  background-color: rgba(232, 232, 232, 1);
  margin: 1px;

  @media (max-width: 960px) {
    width: 33px;
    height: 33px;
  }
  @media (max-width: 600px) {
    width: 28px;
    height: 28px;
  }
  @media (max-width: 400px) {
    width: 23px;
    height: 23px;
  }

  &.active {
    background-color: rgba(121, 0, 0, 1);
    cursor: pointer;
  }
`;

const TablerIconX = ({ fill = 'none', stroke = 'black' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="4.5 4.5 15 15"
      fill={fill}
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-x"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};

const TablerIconChevronsDown = ({ fill = 'none', stroke = 'black' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="4 4 16 16"
      fill={fill}
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-chevrons-down"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 7l5 5l5 -5" />
      <path d="M7 13l5 5l5 -5" />
    </svg>
  );
};

const TablerIconChevronsUp = ({ fill = 'none', stroke = 'black' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="4 4 16 16"
      fill={fill}
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-chevrons-up"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 11l5 -5l5 5" />
      <path d="M7 17l5 -5l5 5" />
    </svg>
  );
};
export default ModalInNavigation;
