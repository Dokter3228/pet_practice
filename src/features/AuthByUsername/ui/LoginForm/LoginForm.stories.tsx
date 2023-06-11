import type { Meta, StoryObj } from '@storybook/react';

import { LoginForm } from './LoginForm';
import { ReduxDecorator } from "shared/config/storybook/ReduxDecorator/ReduxDecorator";

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
  decorators: [ReduxDecorator({ loginForm: { username: "dfas", password: "sdfas" } })],
  render: () => <LoginForm />,
};

export const WithError: Story = {
  decorators: [ReduxDecorator({ loginForm: { username: "asdf", password: "asdf", error: "EEEERROOORRR!!!!" } })],
  render: () => <LoginForm />,
};

export const WithLoading: Story = {
  decorators: [ReduxDecorator({ loginForm: { username: "", password: "", isLoading: true } })],
  render: () => <LoginForm />,
};
