import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './navbar';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator';
import { Themes } from 'app/providers/theme-providers/lib/theme-context';

const meta = {
	title: 'widgets/Navbar',
	component: Navbar,
	parameters: {

	},
	tags: ['autodocs'],

	argTypes: {
		//backgroundColor: { control: 'color' },
	},
} satisfies Meta<typeof Navbar>;

export default meta;


type Story = StoryObj<typeof meta>;

export const Light: Story = {
};

export const Dark: Story = {
	decorators: [ThemeDecorator(Themes.DARK)]
};

