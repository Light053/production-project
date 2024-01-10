import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitcher } from './theme-switcher';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator';
import { Themes } from 'app/providers/theme-providers/lib/theme-context';

const meta = {
	title: 'widgets/ThemeSwitcher',
	component: ThemeSwitcher,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		//backgroundColor: { control: 'color' },
	},
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;


type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {},
	decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Themes.DARK)]

};
