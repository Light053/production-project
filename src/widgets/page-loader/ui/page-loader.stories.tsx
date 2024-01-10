import type { Meta, StoryObj } from '@storybook/react';
import { PageLoader } from './page-loader';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator';
import { Themes } from 'app/providers/theme-providers/lib/theme-context';

const meta = {
	title: 'widgets/PageLoader',
	component: PageLoader,
	parameters: {

	},
	tags: ['autodocs'],

	argTypes: {
		//backgroundColor: { control: 'color' },
	},
} satisfies Meta<typeof PageLoader>;

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
