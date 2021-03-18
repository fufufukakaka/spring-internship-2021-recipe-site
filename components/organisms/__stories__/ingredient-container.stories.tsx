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
    { ingredientName: '豚肉', ingredientUnit: '50g' },
    { ingredientName: '米粉', ingredientUnit: '半カップ' },
    { ingredientName: '水', ingredientUnit: '1/3カップ' },
    { ingredientName: '山芋', ingredientUnit: '3cm' },
    { ingredientName: '卵', ingredientUnit: '1個' },
    { ingredientName: '白だし（なければめんつゆ）', ingredientUnit: '小さじ1' },
    { ingredientName: 'キャベツ', ingredientUnit: '1/6個' },
    { ingredientName: 'ねぎ、紅生姜', ingredientUnit: 'お好みで' },
    { ingredientName: 'ソース、マヨネーズ、かつお節', ingredientUnit: '' },
  ],
}

export const Primary = Template.bind({})
Primary.args = args
