import * as React from 'react';
import { css } from '@emotion/css';
import * as Style from './TextArea.Style';

export interface ITextAreaProps {
  placeholder?: string,
  ariaLabel?: string,
  value?: string,
  label?: string,
  onChange?(value: any): void;
}

export const TextArea: React.FunctionComponent<ITextAreaProps> = (props: ITextAreaProps) => {

  const [placeholder] = React.useState(props.placeholder ? props.placeholder : "");
  const [value, setValue] = React.useState(props.value ? props.value : "");
  const [label,] = React.useState(props.label ? props.label : "");

  React.useEffect(() => {
    if (props.value !== undefined) setValue(props.value);
  }, [props.value])

  const handleOnChange = (event: any) => {
    if (props.onChange) {
      props.onChange(event.currentTarget.value)
    }
  }

  return (
    <>
      <div className={css(Style.Base)}>
        <label>{label}</label>
        <textarea
          rows={4}
          cols={50}
          className={css(Style.InputText)}
          placeholder={placeholder}
          value={value}
          onChange={handleOnChange}
        />
      </div>
    </>
  );
};





