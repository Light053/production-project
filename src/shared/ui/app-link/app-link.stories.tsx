import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from './app-link';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator';
import { Themes } from 'app/providers/theme-providers/lib/theme-context';

const meta = {
	title: 'shared/AppLink',
	component: AppLink,
	parameters: {

	},
	tags: ['autodocs'],

	argTypes: {
		//backgroundColor: { control: 'color' },
	},
	args: {
		to: '/'
	}
} satisfies Meta<typeof AppLink>;

export default meta;


type Story = StoryObj<typeof meta>;

export const PRIMARY: Story = {
	args: {
		children: 'Text',
		theme: AppLinkTheme.PRIMARY
	}
};

export const SECONDARY: Story = {
	args: {
		children: 'Text',
		theme: AppLinkTheme.SECONDARY
	},

};

export const RED: Story = {
	args: {
		children: 'Text',
		theme: AppLinkTheme.RED
	},
};




export const PRIMARYDARK: Story = {
	args: {
		children: 'Text',
		theme: AppLinkTheme.PRIMARY
	},
	decorators: [ThemeDecorator(Themes.DARK)]
};

export const SECONDARYDARK: Story = {
	args: {
		children: 'Text',
		theme: AppLinkTheme.SECONDARY
	},
	decorators: [ThemeDecorator(Themes.DARK)]
};

export const REDDARK: Story = {
	args: {
		children: 'Text',
		theme: AppLinkTheme.RED
	},
	decorators: [ThemeDecorator(Themes.DARK)]
};