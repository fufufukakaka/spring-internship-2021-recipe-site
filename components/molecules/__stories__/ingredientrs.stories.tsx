import { Story } from '@storybook/react'
import {
  Ingredients,
  IngredientsPropType,
} from '~/components/molecules/ingredients'

export default {
  title: 'molecules/Ingredients',
  component: Ingredients,
}

const Template: Story<IngredientsPropType> = (args) => <Ingredients {...args} />

const args: IngredientsPropType = {
  ingredientName: '卵',
  ingredientUnit: '1こ',
}

export const Primary = Template.bind({})
Primary.args = args
