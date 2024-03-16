import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { InputDropdownComponent } from 'npm-input-search-dropdown-rc';
// import InputDropdownComponent from './InputDropdownComponent';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/InputDropdownComponent',
  component: InputDropdownComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    placeholder: { control: 'placeholder' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onChange: fn() },
} satisfies Meta<typeof InputDropdownComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		inputName: 'inputName',
		options: [
			{ value: 'Option 1', label: 'Option 1'},
			{ value: 'Option 2', label: 'Option 2'},
			{ value: 'Option 3', label: 'Option 3'}
		],
		placeholder: 'placeholder',
		label: 'Some Dropdown',
	},
};
