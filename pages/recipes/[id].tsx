import React from 'react'
import { Recipe } from '~/components/templates/recipe'
import { RecipeType } from '~/lib/get_recipe_list'

export type RecipePagePropType = {
  recipeInfo: RecipeType
}

const RecipePage: React.VFC<RecipePagePropType> = ({ recipeInfo }) => {
  if (recipeInfo === null) return <div>loading...</div>

  return (
    <Recipe
      recipeInfo={recipeInfo}
      searchValue=""
      onChangeSearch={() => console.log('search')}
      onClickSearch={() => console.log('search')}
    />
  )
}

export default RecipePage
