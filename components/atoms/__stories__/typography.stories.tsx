import { Story } from '@storybook/react'
import { Typography, TypographyPropType } from '~/components/atoms/typography'

export default {
  title: 'atoms/Typography',
  component: Typography,
}

const Template: Story<TypographyPropType> = (args) => <Typography {...args} />

const args: TypographyPropType = {
  text: 'click me',
  type: '24bold',
}

export const HeaderBig = Template.bind({})
HeaderBig.args = args

export const HeaderNormal = Template.bind({})
HeaderNormal.args = {
  ...args,
  type: '20bold',
}

export const HeaderSmall = Template.bind({})
HeaderSmall.args = {
  ...args,
  type: '18bold',
}

export const NumericBig = Template.bind({})
NumericBig.args = {
  ...args,
  type: '16bold',
}

export const NumericNormal = Template.bind({})
NumericNormal.args = {
  ...args,
  type: '14bold',
}

export const NumericUnit = Template.bind({})
NumericUnit.args = {
  ...args,
  type: '12bold',
}

export const PlainText = Template.bind({})
PlainText.args = {
  ...args,
  type: '14normal',
}

export const SubtextNormal = Template.bind({})
SubtextNormal.args = {
  ...args,
  type: '12normal',
}

export const SubtextSmall = Template.bind({})
SubtextSmall.args = {
  ...args,
  type: '10normal',
}
