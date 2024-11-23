import { TextArea } from './TextArea'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TextArea> = {
  title: 'ui/TextArea',
  component: TextArea,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  argTypes: {
    background: {
      options: ['fill', 'ghost'],
      control: { type: 'select' }
    },
    outline: {
      options: ['blue', 'yellow'],
      control: { type: 'select' }
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'select' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    error: {
      control: { type: 'boolean' }
    }
  },
  args: {
    background: 'fill',
    outline: 'blue',
    size: 'sm',
    disabled: false,
    error: false
  }
}

export default meta
type Story = StoryObj<typeof TextArea>

export const Base: Story = {}
