import { Story } from '@storybook/react'
import { Button, ButtonPropType } from '../button'
import { colors } from '~/styles/color'

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'onClick' },
  },
}

const Template: Story<ButtonPropType> = (args) => <Button {...args} />

const args: Omit<ButtonPropType, 'onClick'> = {
  backgroundColor: 'accent',
  textColor: 'white',
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

export const ForwardPage = Template.bind({})
ForwardPage.args = {
  ...args,
  backgroundColor: 'primary',
  textColor: 'primary',
  innerText: '次のページ',
}

export const BackwardPage = Template.bind({})
BackwardPage.args = {
  ...args,
  backgroundColor: 'primary',
  textColor: 'primary',
  innerText: '前のページ',
}
