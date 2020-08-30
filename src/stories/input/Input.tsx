import React, { useState } from 'react';
import './input.css';

export interface InputProps {
  label: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  onChange?: () => void;
  backgroundColor?: string;
}

export const Input: React.FC<InputProps> = ({
  id,
  className,
  size = 'medium',
  name,
  placeholder,
  label,
  disabled,
  readonly,
  backgroundColor,
  ...props
}: InputProps) => {
  const [value, setValue] = useState('');
  return (
    <React.Fragment>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        className={[
          'storybook-input',
          `storybook-input--${size}`,
          className,
        ].join(' ')}
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readonly}
        style={{ backgroundColor }}
        {...props}
        onChange={({ target: { value } }) => {
          setValue(value);
        }}
      />
    </React.Fragment>
  );
};
