import { fn } from '@storybook/test'

import { Typography } from './Typography'

import type { Meta, StoryObj } from '@storybook/react'


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'ui/Typography',
  component: Typography,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: ['base', 'description', 'disabled', 'fill']
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']
    },
    weight: {
      control: 'select',
      options: ['medium', 'semibold', 'bold']
    },
    family: {
      control: 'select',
      options: ['mono', 'maru']
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() }
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    theme: 'base',
    size: 'md',
    children:
      '考えるという事と書くという事は二つの事実を指してはいないのである。言葉という技術を飛びこして何か考えるなどとは狂気の沙汰である。',
    className: 'mg-p-4'
  }
}
