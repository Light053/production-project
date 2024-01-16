import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './modal';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator';
import { Themes } from 'app/providers/theme-providers/lib/theme-context';

const meta = {
	title: 'shared/Modal',
	component: Modal,
	parameters: {

	},
	tags: ['autodocs'],

	argTypes: {
	},

} satisfies Meta<typeof Modal>;

export default meta;


type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia eligendi rem, facere eum esse nisi totam laudantium dicta quod fuga voluptatem consectetur vitae quibusdam sed nesciunt officia quae nostrum a.',
		isOpen: true,
	},
};

export const Dark: Story = {
	args: {
		children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia eligendi rem, facere eum esse nisi totam laudantium dicta quod fuga voluptatem consectetur vitae quibusdam sed nesciunt officia quae nostrum a.',
		isOpen: true,
	},
	decorators: [ThemeDecorator(Themes.DARK)]
};

