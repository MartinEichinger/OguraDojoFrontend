import styled from 'styled-components';
import { IconX, IconChevronsUp, IconChevronsDown } from '@tabler/icons-react';

const ModalInNavigation = ({
  clickUpDown,
  nextItem,
  config,
  apdx,
  type,
}: {
  clickUpDown?: Function;
  nextItem?: Function;
  config: any;
  apdx?: string;
  type?: string;
}) => {
  return (
    <InNavigation className="inNavigation d-flex flex-column justify-content-between align-items-center">
      <button
        type="button"
        className="btn-close d-flex flex-row align-items-center justify-content-center"
        data-bs-dismiss="modal"
      >
        <IconX color={'white'} size={36} />
      </button>
      {config?.upDown ? (
        <Arrow
          className={'arrow d-flex align-items-center justify-content-center upArrow' + apdx}
          onClick={clickUpDown && (() => clickUpDown('up'))}
        >
          <IconChevronsUp color={'white'} size={36} />
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
            onClick={nextItem && (() => nextItem(link))}
            key={i}
          >
            <button className="big">{link}</button>
          </NavItem>
        );
      })}
      {config?.upDown ? (
        <Arrow
          className={'arrow d-flex align-items-center justify-content-center active downArrow' + apdx}
          onClick={clickUpDown && (() => clickUpDown('down'))}
        >
          <IconChevronsDown color={'white'} size={36} />
        </Arrow>
      ) : (
        ''
      )}
    </InNavigation>
  );
};

const InNavigation = styled.div`
  z-index: 1051;
  background-color: ${(props) => props.theme.colors.bgWhite};
  border-radius: 45px;
  grid-column: 2;
  grid-row: 2;

  & .btn-close {
    width: 45px;
    height: 45px;
    margin: 1px;
    padding: 0px;
    border-radius: 45px;
    line-height: 0;
    position: relative;
    right: 0px;
    top: 0px;
    background-color: ${(props) => props.theme.colors.typoGrey};
    border: none;
    outline: none;
    z-index: 1100;

    ${(props) => props.theme.breakpoints.mq[2]} {
      width: 33px;
      height: 33px;
    }

    ${(props) => props.theme.breakpoints.mq[1]} {
      width: 28px;
      height: 28px;
    }

    ${(props) => props.theme.breakpoints.mq[0]} {
      width: 23px;
      height: 23px;
    }
  }
`;

const NavItem = styled.div`
  max-width: 165px;
  position: relative;
  transform: rotate(90deg);
  color: ${(props) => props.theme.colors.bgRed50};
  border: 1px solid ${(props) => props.theme.colors.bgWhite};
  border-radius: 25px;
  padding: 0px 10px;

  & button {
    cursor: pointer;
    font-weight: normal;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    color: inherit;

    ${(props) => props.theme.breakpoints.mq[2]} {
      margin: 0;
    }
  }

  &.active {
    color: ${(props) => props.theme.colors.typoRed};
    border: 1px solid ${(props) => props.theme.colors.bgRed};

    & h1 {
      font-weight: bold;
    }
  }
`;

const Arrow = styled.div`
  position: relative;
  width: 45px;
  height: 45px;
  border-radius: 45px;
  background-color: ${(props) => props.theme.colors.bgGrey};
  margin: 1px;

  ${(props) => props.theme.breakpoints.mq[2]} {
    width: 33px;
    height: 33px;
  }

  ${(props) => props.theme.breakpoints.mq[1]} {
    width: 28px;
    height: 28px;
  }

  ${(props) => props.theme.breakpoints.mq[0]} {
    width: 23px;
    height: 23px;
  }

  &.active {
    background-color: ${(props) => props.theme.colors.bgRed};
    cursor: pointer;
  }
`;

export default ModalInNavigation;
