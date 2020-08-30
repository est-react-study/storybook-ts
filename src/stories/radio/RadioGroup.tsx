import React from 'react';
import { Radio } from './Radio';
// import './radio.css';

export interface RadioGroupProps {
  name?: string;
  children?: any;
  defaultSelected?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  children,
  defaultSelected,
}: RadioGroupProps) => {
  return (
    <React.Fragment>
      {React.Children.map(children, child => {
        const { label, value } = (child as any).props;
        return (
          <Radio
            name={name}
            value={value}
            label={label}
            selected={value === defaultSelected}
          />
        );
      })}
    </React.Fragment>
  );
};
