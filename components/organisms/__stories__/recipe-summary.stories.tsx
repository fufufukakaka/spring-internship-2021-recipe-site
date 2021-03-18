import { Story } from '@storybook/react'
import {
  RecipeSummary,
  RecipeSummaryPropType,
} from '~/components/organisms/recipe-summary'

export default {
  title: 'organisms/RecipeSummary',
  component: RecipeSummary,
}

const Template: Story<RecipeSummaryPropType> = (args) => (
  <RecipeSummary {...args} />
)

const args: RecipeSummaryPropType = {
  imgUrl:
    'http://img.cpcdn.com/recipes/6690847/1280x720c/36926b27cabace7c00c57430c3588fc5.jpg',
  recipeTitle: 'お好み焼き',
  recipeDescription: '大好物です',
  authorName: 'fufufukakaka',
  createdAt: new Date('2020-10-10 10:00'),
}

export const Primary = Template.bind({})
Primary.args = args
