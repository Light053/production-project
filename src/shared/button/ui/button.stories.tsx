import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonTheme } from './button';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator';
import { Themes } from 'app/providers/theme-providers/lib/theme-context';

const meta = {
	title: 'shared/Button',
	component: Button,
	parameters: {
	},
	tags: ['autodocs'],

	argTypes: {
		//backgroundColor: { control: 'color' },
	},
} satisfies Meta<typeof Button>;

export default meta;


type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: 'Text'
	},
};

export const Clear: Story = {
	args: {
		children: 'Text',
		theme: ButtonTheme.CLEAR,
	},
};

export const Outline: Story = {
	args: {
		children: 'Text',
		theme: ButtonTheme.OUTLINE,
	},
};

export const OutlineDark: Story = {
	args: {
		children: 'Text',
		theme: ButtonTheme.OUTLINE,
	},
	decorators: [ThemeDecorator(Themes.DARK)]
};

