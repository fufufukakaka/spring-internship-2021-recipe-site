import { Story } from '@storybook/react'
import {
  IngredientContainer,
  IngredientContainerPropType,
} from '~/components/organisms/ingredient-container'

export default {
  title: 'organisms/IngredientContainer',
  component: IngredientContainer,
}

const Template: Story<IngredientContainerPropType> = (args) => (
  <IngredientContainer {...args} />
)

const args: IngredientContainerPropType = {
  ingredientsInfo: [
    { name: '豚肉', quantity: '50g' },
    { name: '米粉', quantity: '半カップ' },
    { name: '水', quantity: '1/3カップ' },
    { name: '山芋', quantity: '3cm' },
    { name: '卵', quantity: '1個' },
    { name: '白だし（なければめんつゆ）', quantity: '小さじ1' },
    { name: 'キャベツ', quantity: '1/6個' },
    { name: 'ねぎ、紅生姜', quantity: 'お好みで' },
    { name: 'ソース、マヨネーズ、かつお節', quantity: '' },
  ],
}

export const Primary = Template.bind({})
Primary.args = args
