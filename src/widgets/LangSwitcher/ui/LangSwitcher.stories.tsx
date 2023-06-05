import type { Meta, StoryObj } from '@storybook/react';

import { LangSwitcher } from "./LangSwitcher";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/themeProvider";

const meta = {
  title: 'widget/LangSwitcher',
  component: LangSwitcher,
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof LangSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  render: () => <LangSwitcher />,
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <LangSwitcher />,
};
