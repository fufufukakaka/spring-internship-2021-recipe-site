import { Story } from '@storybook/react'
import {
  StepContainer,
  StepContainerPropType,
} from '~/components/organisms/step-container'

export default {
  title: 'organisms/StepContainer',
  component: StepContainer,
}

const Template: Story<StepContainerPropType> = (args) => (
  <StepContainer {...args} />
)

const args: StepContainerPropType = {
  steps: [
    '豚肉は3cm幅に切っておく。\n\n米粉と水をボウルに入れ、菜箸でまぜる',
    'すりおろした山芋、卵、白だしを入れる。キャベツも粗めの千切りにして入れる。\nお好みでねぎや紅しょうがを入れる',
    '菜箸で全体を混ぜる。混ざりきらなくても大丈夫',
    'フライパンを温めて豚肉を焼く。両面サッと焼いたら生地を流し入れて蓋をして焼く',
    '5分くらい焼いたらひっくり返す。生地が柔らかいのでしっかり焼いてからひっくり返します。押しません',
    'ソース、マヨネーズ、かつお節をかけてできあがり',
  ],
}

export const Primary = Template.bind({})
Primary.args = args
