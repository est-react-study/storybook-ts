import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Input } from './minput/Input';

export default {
  title: 'Example/MUI Input',
  component: Input,
} as Meta;

const Template: Story<any> = () => (
  <>
    <Input label="레이블" id="test1" value="test1" />
    <Input label="레이블" id="test2" value="test2" />
    <Input label="레이블" id="test3" value="test3" />
  </>
);

export const Basic = Template.bind({});
// Basic.args = {
//   label: '레이블',
//   id: 'asd',
//   value: 'test',
// };
