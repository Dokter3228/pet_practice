import type { Meta, StoryObj } from '@storybook/react';

import { Text, TextTheme } from './Text';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/themeProvider";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'ui/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <Text text="some text" title="some title" />,
};

export const Error: Story = {
  render: () => <Text theme={TextTheme.ERROR} text="some text" title="some title" />,
};

export const OnlyTitle: Story = {
  render: () => <Text title="some title" />,
};

export const OnlyText: Story = {
  render: () => <Text text="some text" />,
};

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Text text="some text" title="some title" />,
};

export const OnlyTitleDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Text title="some title" />,
};

export const OnlyTextDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Text text="some text" />,
};
