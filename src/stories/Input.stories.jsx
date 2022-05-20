import React from 'react';

import Input from '../components/Auth/Input';

export default {
  title: 'Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const defaultInput = Template.bind({});
defaultInput.args = {
  primary: true,
  label: 'Input',
  placeholder: 'Placeholder for input',
};
