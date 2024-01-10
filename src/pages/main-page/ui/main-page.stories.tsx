import type { Meta, StoryObj } from '@storybook/react';
import MainPage from './main-page';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator';
import { Themes } from 'app/providers/theme-providers/lib/theme-context';

const meta = {
	title: 'pages/MainPage',
	component: MainPage,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		//backgroundColor: { control: 'color' },
	},
} satisfies Meta<typeof MainPage>;

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
