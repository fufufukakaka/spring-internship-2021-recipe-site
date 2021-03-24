import { Story } from '@storybook/react'
import {
  RecipeList,
  RecipeListPropType,
} from '~/components/templates/recipe-list'

export default {
  title: 'templates/RecipeList',
  component: RecipeList,
  argTypes: {
    onChangeSearch: { action: 'onChangeSearch' },
    onClickSearch: { action: 'onClickSearch' },
    onClickNext: { action: 'onClickNext' },
    onClickPrev: { action: 'onClickPrev' },
    onClickHeader: { action: 'onClickHeader' },
  },
}

const Template: Story<RecipeListPropType> = (args) => <RecipeList {...args} />

const args: Omit<
  RecipeListPropType,
  | 'onChangeSearch'
  | 'onClickSearch'
  | 'onClickNext'
  | 'onClickPrev'
  | 'onClickHeader'
> = {
  recipeInfo: [
    {
      id: 1,
      author: { user_name: 'fufufukakaka' },
      published_at: '2020-01-01 00:00:00',
      steps: [''],
      ingredients: [{ name: 'hoge', quantity: 'fuga' }],
      related_recipes: [1],
      image_url:
        'http://img.cpcdn.com/recipes/6690847/1280x720c/36926b27cabace7c00c57430c3588fc5.jpg',
      title: 'お好み焼き',
      description: '大好物です',
    },
    {
      id: 2,
      author: { user_name: 'fufufukakaka' },
      published_at: '2020-01-01 00:00:00',
      steps: [''],
      ingredients: [{ name: 'hoge', quantity: 'fuga' }],
      related_recipes: [1],
      image_url:
        'http://img.cpcdn.com/recipes/6690847/1280x720c/36926b27cabace7c00c57430c3588fc5.jpg',
      title: 'お好み焼き',
      description: '大好物です',
    },
    {
      id: 3,
      author: { user_name: 'fufufukakaka' },
      published_at: '2020-01-01 00:00:00',
      steps: [''],
      ingredients: [{ name: 'hoge', quantity: 'fuga' }],
      related_recipes: [1],
      image_url:
        'http://img.cpcdn.com/recipes/6690847/1280x720c/36926b27cabace7c00c57430c3588fc5.jpg',
      title: 'お好み焼き',
      description: '大好物です',
    },
  ],
  searchValue: '',
  isSearchResult: false,
}

export const Primary = Template.bind({})
Primary.args = args

export const NextOnly = Template.bind({})
NextOnly.args = {
  ...args,
  onClickPrev: undefined,
}

export const PrevOnly = Template.bind({})
PrevOnly.args = {
  ...args,
  onClickNext: undefined,
}
