import { fn } from '@storybook/test'

import { Box } from './Box'

import type { Meta, StoryObj } from '@storybook/react'


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'ui/Box',
  component: Box,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    background: {
      control: 'select',
      options: ['primary', 'secondary']
    },
    border: {
      control: 'select',
      options: ['primary', 'secondary']
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() }
} satisfies Meta<typeof Box>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    background: 'primary',
    border: 'primary',
    children: 'ボックス',
    className: 'mg-rounded-none'
  }
}
