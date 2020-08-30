import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Input, InputProps } from './input/Input';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<InputProps> = args => <Input {...args} />;
export const Basic = Template.bind({});
Basic.args = {
  id: 'basic',
  name: 'basic',
  placeholder: 'placeholder',
  label: '레이블: ',
};
