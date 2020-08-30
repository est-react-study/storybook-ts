import React from 'react';
// import './radio.css';

export interface RadioProps {
  label: string;
  name?: string;
  value: string;
  selected?: boolean;
}

export const Radio: React.FC<RadioProps> = ({
  label,
  name,
  value,
  selected,
  ...props
}: RadioProps) => {
  return (
    <React.Fragment>
      <input
        type="radio"
        id={value}
        value={value}
        name={name}
        defaultChecked={selected}
        {...props}
      />
      <label htmlFor={value}>{label}</label>
    </React.Fragment>
  );
};
