import type { Meta, StoryObj } from '@storybook/react';

import { AppLink, AppLinkTheme } from "./AppLink";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/themeProvider";

const meta = {
  title: 'ui/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
    to: "*"
  }
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <AppLink to="*" theme={AppLinkTheme.PRIMARY}>Link</AppLink>,
};
export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <AppLink to="*" theme={AppLinkTheme.PRIMARY}>Link</AppLink>,
};

export const Secondary: Story = {
  render: () => <AppLink to="*" theme={AppLinkTheme.SECONDARY}>Link</AppLink>,
};

export const SecondaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <AppLink to="*" theme={AppLinkTheme.SECONDARY}>Link</AppLink>,
};

export const Yellow: Story = {
  render: () => <AppLink to="*" theme={AppLinkTheme.YELLOW}>Link</AppLink>,
};

export const YellowDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <AppLink to="*" theme={AppLinkTheme.YELLOW}>Link</AppLink>,
};
