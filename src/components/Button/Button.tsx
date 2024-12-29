/* 
PROP        TYPE                                            DEFAULT
asChild     boolean                                         No default value
size        Responsive<"1" | "2" | "3" | "4">               "2"
variant     "text", "contained", "outlined"                 "contained"
radius      "none" | "small" | "medium" | "large" | "full"  No default value
disabled    boolean                                         false
color       string                                          "black"
*/

import styled from 'styled-components';

interface IButton {
  id: string;
  children: any;
  className?: any;
  size?: 1 | 2 | 3 | 4;
  variant?: 'text' | 'contained' | 'outlined';
  onClick?: Function;
  disabled?: boolean;
  color?: string;
}

export default function Button(props: IButton) {
  const debug = false;
  if (debug) console.log('Button: ', props);
  const {
    id,
    children,
    className,
    size = 2,
    variant = 'contained',
    disabled = false,
    color = 'rgba(0,0,0,1)',
    onClick,
  } = props;

  return (
    <ButtonBody
      id={id}
      className={`buttonstyle ${className}`}
      size={size}
      variant={variant}
      color={color}
      disabled={disabled}
      onClick={
        onClick &&
        ((e) => {
          e.preventDefault();
          onClick(e);
        })
      }
    >
      {children}
    </ButtonBody>
  );
}

const ButtonBody = styled.button<{ size?: number; color?: string; variant?: string }>`
  &.buttonstyle {
    border: 1px solid rgba(0, 0, 0, 1);
    border-radius: 3px;
    min-width: ${(props) => props.size === 1 && '30px'};
    background-color: ${(props) => {
      if (props.variant === 'contained') return props.color;
      if (props.variant === 'outlined') return 'white';
      if (props.variant === 'text') return 'rgba(0,0,0,0)';
    }};
    color: ${(props) => {
      if (props.variant === 'contained') return 'white';
      if (props.variant === 'outlined') return props.color;
      if (props.variant === 'text') return props.color;
    }};
    padding-left: 5px;
    padding-right: 5px;

    &:hover {
      background-image: linear-gradient(rgb(255 255 255/20%) 0 0);
    }

    &:active {
      background-image: linear-gradient(rgb(0 0 0/20%) 0 0);
    }
  }
`;
