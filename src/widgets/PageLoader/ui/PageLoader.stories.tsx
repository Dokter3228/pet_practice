import type { Meta, StoryObj } from '@storybook/react';

import { PageLoader } from "./PageLoader";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/themeProvider";

const meta = {
  title: 'widget/PageLoader',
  component: PageLoader,
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  render: () => <PageLoader />,
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <PageLoader />,
};
