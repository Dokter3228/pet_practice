import type { Meta, StoryObj } from '@storybook/react';

import { PageError } from "./PageError";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/themeProvider";

const meta = {
  title: 'widget/PageError',
  component: PageError,
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  render: () => <PageError />,
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <PageError />,
};
