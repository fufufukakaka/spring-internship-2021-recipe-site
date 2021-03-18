import { Story } from '@storybook/react'
import { Recipe, RecipePropType } from '~/components/templates/recipe'

export default {
  title: 'templates/Recipe',
  component: Recipe,
}

const Template: Story<RecipePropType> = (args) => <Recipe {...args} />

const args: Omit<RecipePropType, 'onChangeSearch' | 'onClickSearch'> = {
  imgUrl:
    'http://img.cpcdn.com/recipes/6690847/1280x720c/36926b27cabace7c00c57430c3588fc5.jpg',
  recipeTitle: 'お好み焼き',
  recipeDescription: '大好物です',
  authorName: 'fufufukakaka',
  createdAt: new Date('2020-10-10 10:00'),
  searchValue: '',
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
