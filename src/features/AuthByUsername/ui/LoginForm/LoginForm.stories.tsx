import type { Meta, StoryObj } from '@storybook/react';

import { LoginForm } from './LoginForm';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'feature/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <LoginForm />,
};
