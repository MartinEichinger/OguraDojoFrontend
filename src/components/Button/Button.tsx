/* 
PROP        TYPE                                            DEFAULT
asChild     boolean                                         No default value
size        Responsive<"1" | "2" | "3" | "4">               "2"
variant     enum                                            "solid"
color       enum                                            No default value
radius      "none" | "small" | "medium" | "large" | "full"  No default value
loading     boolean                                         false 
*/

import styled from 'styled-components';

interface IButton {
  children: any;
  className?: any;
  size?: number;
}

export default function Button(props: IButton) {
  console.log('Button: ', props);
  const { children, className, size } = props;

  return (
    <ButtonBody className={`buttonstyle ${className}`} size={size}>
      {children}
    </ButtonBody>
  );
}

const ButtonBody = styled.button<{ size?: number }>`
  &.buttonstyle {
    border: 1px solid rgba(0, 0, 0, 1);
    border-radius: 3px;
    min-width: ${(props) => props.size === 1 && '30px'};
  }
`;
