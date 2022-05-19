import { Story, Meta } from '@storybook/react';
import { AddDataSheet } from '.';

const meta: Meta = {
  title: 'Components/AddDataSheet',
  component: AddDataSheet,
};

export default meta;

const Template: Story = () => {
  return <AddDataSheet />;
};

export const Default = Template.bind({});
