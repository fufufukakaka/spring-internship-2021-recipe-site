import { Story } from '@storybook/react'
import { Steps, StepsPropType } from '~/components/molecules/steps'

export default {
  title: 'molecules/Steps',
  component: Steps,
}

const Template: Story<StepsPropType> = (args) => <Steps {...args} />

const args: StepsPropType = {
  stepNumber: 1,
  stepText: '人参と生姜などを鍋に入れてコトコトやる',
}

export const Primary = Template.bind({})
Primary.args = args
