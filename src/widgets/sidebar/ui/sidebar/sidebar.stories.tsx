import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './sidebar';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator';
import { Themes } from 'app/providers/theme-providers/lib/theme-context';

const meta = {
	title: 'widgets/Sidebar',
	component: Sidebar,
	parameters: {

	},
	tags: ['autodocs'],

	argTypes: {
		//backgroundColor: { control: 'color' },
	},
} satisfies Meta<typeof Sidebar>;

export default meta;


type Story = StoryObj<typeof meta>;

export const Light: Story = {
	decorators: [ThemeDecorator(Themes.LIGHT)]
};

export const Dark: Story = {
	decorators: [ThemeDecorator(Themes.DARK)]
};

