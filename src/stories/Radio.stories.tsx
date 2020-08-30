import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Radio } from './radio/Radio';
import { RadioGroup } from './radio/RadioGroup';

export default {
  title: 'Example/Radio',
  component: Radio,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<Record<any, any>> = () => (
  <>
    <RadioGroup name="gender" defaultSelected="male">
      <Radio label="Male" value="male" />
      <Radio label="Female" value="female" />
      <Radio label="Others" value="others" />
    </RadioGroup>
  </>
);

export const Basic = Template.bind({});
