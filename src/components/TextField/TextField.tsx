/* 
PROP        TYPE                                            DEFAULT
className   string                                          none
fullWidth   boolean                                         false
label       string                                          none
multiline   boolean                                         false
size        Responsive<"1" | "2" | "3" | "4">               "2"
variant     "outlined", "filled", "standard"                "standard"
radius      "none" | "small" | "medium" | "large" | "full"  No default value
disabled    boolean                                         false
readonly    boolean                                         false
color       string                                          "black"
onChange    function                                        none
*/

import { useEffect } from 'react';
import styled from 'styled-components';

interface ITextField {
  className?: any;
  value?: number;
  error?: boolean;
  fullWidth?: boolean;
  label?: string;
  multiline?: boolean;
  variant?: 'outlined' | 'filled' | 'standard';
  color?: string;
  id: string;
  readonly?: any;
  onChange?: React.MouseEventHandler<HTMLInputElement | HTMLAnchorElement>;
}

export default function TextField({
  className,
  value,
  error = false,
  fullWidth = false,
  label,
  multiline = false,
  variant = 'standard',
  color,
  id,
  readonly = false,
  onChange,
}: ITextField) {
  //const { value, className, label, multiline, fullWidth } = props;
  const debug = false;

  const inputHandler = (e: any) => {
    e.preventDefault();
    if (onChange) onChange(e);
  };

  useEffect(() => {
    try {
      if (id) {
        const source = document.getElementById(id)!;
        source.addEventListener('input', inputHandler);
      }
    } catch (error) {
      console.log('TextField Error: ', error);
    }
    /* eslint-disable */
  }, []);

  if (debug) console.log('TextField: ', value, error, readonly);

  return (
    <TextFieldBody>
      <Label error={error}>
        {label}
        {error && ' + Keine gültige E-Mail Adresse'}
      </Label>
      {(multiline === false || multiline === null) && (
        <InputField
          id={id}
          type="text"
          className={`inputstyle ${className}`}
          value={value}
          //defaultValue={readonly === true ? value : undefined}
          fullWidth={fullWidth}
          readOnly={readonly}
          error={error}
        />
      )}
      {multiline && (
        <TextArea
          className={`textareastyle ${className}`}
          id={id}
          value={value}
          //defaultValue={readonly === true ? value : undefined}
          fullWidth={fullWidth}
          readOnly={readonly}
          rows={3}
        />
      )}
    </TextFieldBody>
  );
}

const TextFieldBody = styled.div`
  margin-top: 3px;
  margin-bottom: 8px;
`;

const Label = styled.div<{ error: boolean }>`
  font-size: 12px;
  margin: 0px;
  color: ${(props) => (props.error ? props.theme.colors.typoRed : props.theme.colors.typoGrey)};
`;

const InputField = styled.input<{ fullWidth?: boolean; error: boolean }>`
  &.inputstyle {
    background-color: rgba(0, 0, 0, 0);
    width: ${(props) => props.fullWidth && '100%'};
    border: none;
    outline: none;
    border-bottom: 1px solid
      ${(props) => (props.error ? props.theme.colors.typoRed : props.theme.colors.typoGreen)};
    margin-bottom: 1px;

    &:hover {
      border-bottom-width: 2px;
      margin-bottom: 0px;
    }

    &:-internal-autofill-selected {
      background-color: rgba(0, 0, 0, 0) !important;
    }
  }
`;

const TextArea = styled.textarea<{ fullWidth?: boolean }>`
  &.textareastyle {
    background-color: rgba(0, 0, 0, 0);
    width: ${(props) => {
      return props.fullWidth && '100%';
    }};
    border: none;
    outline: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.typoGreen};
    margin-bottom: 1px;

    &:hover {
      border-bottom-width: 2px;
      margin-bottom: 0px;
    }
  }
`;
