import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from "./Loader";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/themeProvider";

const meta = {
  title: 'ui/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  render: () => <Loader />,
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Loader />,
};
