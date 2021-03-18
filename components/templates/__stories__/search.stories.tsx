import { Story } from '@storybook/react'
import { Search, SearchPropType } from '~/components/templates/search'

export default {
  title: 'templates/Search',
  component: Search,
}

const Template: Story<SearchPropType> = (args) => <Search {...args} />

const args: Omit<SearchPropType, 'onChangeSearch' | 'onClickSearch'> = {
  recipeInfo: [
    {
      imgUrl:
        'http://img.cpcdn.com/recipes/6690847/1280x720c/36926b27cabace7c00c57430c3588fc5.jpg',
      recipeTitle: 'お好み焼き',
      recipeDescription: '大好物です',
    },
    {
      imgUrl:
        'http://img.cpcdn.com/recipes/6690847/1280x720c/36926b27cabace7c00c57430c3588fc5.jpg',
      recipeTitle: 'お好み焼き',
      recipeDescription: '大好物です',
    },
    {
      imgUrl:
        'http://img.cpcdn.com/recipes/6690847/1280x720c/36926b27cabace7c00c57430c3588fc5.jpg',
      recipeTitle: 'お好み焼き',
      recipeDescription: '大好物です',
    },
  ],
  searchValue: '',
}

export const Primary = Template.bind({})
Primary.args = args
