import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator';
import { Themes } from 'app/providers/theme-providers/lib/theme-context';

const meta = {
	title: 'shared/Input',
	component: Input,
	parameters: {
	},
	tags: ['autodocs'],

	argTypes: {
		//backgroundColor: { control: 'color' },
	},
} satisfies Meta<typeof Input>;

export default meta;


type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		value: '123'
	},
};
