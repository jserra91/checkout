import * as React from 'react';
import { css } from '@emotion/css';
import * as Style from './InputText.Style';

export interface ITextInputProps {
  placeholder?: string,
  value?: string,
  label?: string,
  type?: string,
  onChange?(value: any): void;
}

export const InputText: React.FunctionComponent<ITextInputProps> = (props: ITextInputProps) => {

  const [placeholder] = React.useState(props.placeholder ? props.placeholder : "");
  const [value, setValue] = React.useState(props.value ? props.value : "");
  const [label] = React.useState(props.label ? props.label : "");
  const [type] = React.useState(props.type ? props.type : "text");

  React.useEffect(() => {
    if (props.value !== undefined) setValue(props.value);
  }, [props.value]);

  const handleOnChange = (event: any) => {
    if (props.onChange) {
      props.onChange(event.currentTarget.value)
    }
  }

  return (
    <>
      <div className={css(Style.Base)}>
        <label>{label}</label>
        <input
          className={css(Style.InputText)}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleOnChange}
        />
      </div>
    </>
  );
};





