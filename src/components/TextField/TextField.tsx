import styled from 'styled-components';

interface ITextField {
  className?: any;
  value?: number;
  fullWidth?: boolean;
  label?: string;
  multiline?: boolean;
}

export default function TextField(props: ITextField) {
  const { value, className, label, multiline, fullWidth } = props;

  console.log('TextField: ', props, typeof multiline, typeof multiline === 'number');

  return (
    <TextFieldBody>
      <Label>{label}</Label>
      {(multiline === false || multiline === null) && (
        <InputField
          type="text"
          className={`inputstyle ${className}`}
          value={value}
          fullWidth={fullWidth}
        />
      )}
      {multiline && (
        <TextArea className={`textareastyle ${className}`} fullWidth={fullWidth}>
          {value}
        </TextArea>
      )}
    </TextFieldBody>
  );
}

const TextFieldBody = styled.div`
  margin-top: 3px;
  margin-bottom: 8px;
`;

const Label = styled.div`
  font-size: 12px;
  margin: 0px;
  color: ${(props) => props.theme.colors.typoGrey};
`;

const InputField = styled.input<{ fullWidth?: boolean }>`
  &.inputstyle {
    background-color: rgba(0, 0, 0, 0);
    width: ${(props) => {
      console.log('inputstyle: ', props);
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
