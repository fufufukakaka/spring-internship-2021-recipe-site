import { Story } from '@storybook/react'
import { Button, ButtonPropType } from '../button'

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'onClick' },
  },
}

const Template: Story<ButtonPropType> = (args) => <Button {...args} />

const args: Omit<ButtonPropType, 'onClick'> = {
  innerText: 'テキスト',
}

export const AddtoMyFolder = Template.bind({})
AddtoMyFolder.args = {
  ...args,
  innerText: 'マイフォルダに追加',
}

export const DeleteFromMyFolder = Template.bind({})
DeleteFromMyFolder.args = {
  ...args,
  innerText: 'マイフォルダから削除',
}
