import { Story } from '@storybook/react'
import { Header, HeaderPropType } from '~/components/molecules/header'

export default {
  title: 'molecules/Header',
  component: Header,
}

const Template: Story<HeaderPropType> = (args) => <Header {...args} />

const args: HeaderPropType = {
  headerText: 'ヘッダーテキスト',
  colorType: 'dark',
}

export const Dark = Template.bind({})
Dark.args = args

export const Light = Template.bind({})
Light.args = {
  ...args,
  colorType: 'light',
}
