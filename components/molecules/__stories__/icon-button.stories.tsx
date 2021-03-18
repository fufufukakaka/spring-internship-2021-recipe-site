import { Story } from '@storybook/react'
import {
  IconButton,
  IconButtonPropType,
} from '~/components/molecules/icon-button'

export default {
  title: 'molecules/IconButton',
  component: IconButton,
  argTypes: {
    onClick: { action: 'onClick' },
  },
}

const Template: Story<IconButtonPropType> = (args) => <IconButton {...args} />

const args: Omit<IconButtonPropType, 'onClick'> = {
  iconType: 'search',
  backgroundColor: 'accent',
  iconColor: 'white',
  disabled: false,
}

export const Primary = Template.bind({})
Primary.args = args

export const Color = Template.bind({})
Color.args = {
  ...args,
  backgroundColor: 'primary',
  iconColor: 'primary',
}
