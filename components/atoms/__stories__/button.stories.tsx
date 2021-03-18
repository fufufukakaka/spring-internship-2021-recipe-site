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
  backgroundColor: 'accent',
  textColor: 'white',
  children: <p>テキスト</p>,
}

export const AddtoMyFolder = Template.bind({})
AddtoMyFolder.args = {
  ...args,
  children: <p>マイフォルダに追加</p>,
}

export const DeleteFromMyFolder = Template.bind({})
DeleteFromMyFolder.args = {
  ...args,
  children: <p>マイフォルダから削除</p>,
}

export const ForwardPage = Template.bind({})
ForwardPage.args = {
  ...args,
  backgroundColor: 'primary',
  textColor: 'primary',
  children: <p>次のページ</p>,
}

export const BackwardPage = Template.bind({})
BackwardPage.args = {
  ...args,
  backgroundColor: 'primary',
  textColor: 'primary',
  children: <p>前のページ</p>,
}
