import { Story } from '@storybook/react'
import {
  RecipeCard,
  RecipeCardPropType,
} from '~/components/molecules/recipe-card'

export default {
  title: 'molecules/RecipeCard',
  component: RecipeCard,
}

const Template: Story<RecipeCardPropType> = (args) => <RecipeCard {...args} />

const args: RecipeCardPropType = {
  imgUrl:
    'http://img.cpcdn.com/recipes/6690847/1280x720c/36926b27cabace7c00c57430c3588fc5.jpg',
  recipeTitle: 'お好み焼き',
  recipeDescription: '大好物です',
}

export const Primary = Template.bind({})
Primary.args = args
