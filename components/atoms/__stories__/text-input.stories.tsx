import { Story } from '@storybook/react'
import { TextInput, TextInputPropType } from '~/components/atoms/text-input'

export default {
  title: 'atoms/TextInput',
  component: TextInput,
  argTypes: {
    onChange: { action: 'onChange' },
  },
}

const Template: Story<TextInputPropType> = (args) => <TextInput {...args} />

const args: Omit<TextInputPropType, 'onChange'> = {
  type: 'text',
  value: '',
}

export const Primary = Template.bind({})
Primary.args = args

export const Placeholder = Template.bind({})
Placeholder.args = {
  ...args,
  placeholder: 'プレースホルダー',
}

export const BackgroundColor = Template.bind({})
BackgroundColor.args = {
  ...args,
  backgroundColor: 'primary',
  placeholder: 'プレースホルダー',
}

export const TextAreaPlaceholder = Template.bind({})
TextAreaPlaceholder.args = {
  ...args,
  type: 'textarea',
  placeholder: 'プレースホルダー',
  rows: 4,
}

export const TextAreaBackgroundColor = Template.bind({})
TextAreaBackgroundColor.args = {
  ...args,
  type: 'textarea',
  backgroundColor: 'primary',
  placeholder: 'プレースホルダー',
  rows: 4,
}
