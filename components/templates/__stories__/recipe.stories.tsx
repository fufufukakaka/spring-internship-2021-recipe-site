import { Story } from '@storybook/react'
import { Recipe, RecipePropType } from '~/components/templates/recipe'

export default {
  title: 'templates/Recipe',
  component: Recipe,
  argTypes: {
    onChangeSearch: { action: 'onChangeSearch' },
    onClickSearch: { action: 'onClickSearch' },
  },
}

const Template: Story<RecipePropType> = (args) => <Recipe {...args} />

const args: Omit<RecipePropType, 'onChangeSearch' | 'onClickSearch'> = {
  recipeInfo: {
    id: 1,
    image_url:
      'http://img.cpcdn.com/recipes/6690847/1280x720c/36926b27cabace7c00c57430c3588fc5.jpg',
    title: 'お好み焼き',
    description: '大好物です',
    author: { user_name: 'fufufukakaka' },
    published_at: '2010-12-04T22:56:06+09:00',
    ingredients: [
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
    steps: [
      '豚肉は3cm幅に切っておく。\n\n米粉と水をボウルに入れ、菜箸でまぜる',
      'すりおろした山芋、卵、白だしを入れる。キャベツも粗めの千切りにして入れる。\nお好みでねぎや紅しょうがを入れる',
      '菜箸で全体を混ぜる。混ざりきらなくても大丈夫',
      'フライパンを温めて豚肉を焼く。両面サッと焼いたら生地を流し入れて蓋をして焼く',
      '5分くらい焼いたらひっくり返す。生地が柔らかいのでしっかり焼いてからひっくり返します。押しません',
      'ソース、マヨネーズ、かつお節をかけてできあがり',
    ],
    related_recipes: [1],
  },
  searchValue: '',
}

export const Primary = Template.bind({})
Primary.args = args
