import { Story } from '@storybook/react'
import { Icon, IconPropType } from '~/components/atoms/icon'

export default {
  title: 'atoms/Icon',
  component: Icon,
  argTypes: {
    onClick: { action: 'onClick' },
  },
}

const Template: Story<IconPropType> = (args) => <Icon {...args} />

const args: Omit<IconPropType, 'onClick'> = {
  type: 'search',
  height: '30px',
}

export const Primary = Template.bind({})
Primary.args = args

export const Size = Template.bind({})
Size.args = {
  ...args,
  height: '100px',
}
