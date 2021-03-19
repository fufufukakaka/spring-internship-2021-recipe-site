import { Story } from '@storybook/react'
import { Search, SearchPropType } from '~/components/templates/search'

export default {
  title: 'templates/Search',
  component: Search,
  argTypes: {
    onChangeSearch: { action: 'onChangeSearch' },
    onClickSearch: { action: 'onClickSearch' },
    onClickNext: { action: 'onClickNext' },
    onClickPrev: { action: 'onClickPrev' },
  },
}

const Template: Story<SearchPropType> = (args) => <Search {...args} />

const args: Omit<
  SearchPropType,
  'onChangeSearch' | 'onClickSearch' | 'onClickNext' | 'onClickPrev'
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
