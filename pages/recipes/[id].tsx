import React from 'react'
import { Recipe } from '~/components/templates/recipe'
import type { GetServerSideProps, NextPage } from 'next'
import { RecipeType } from '~/lib/get_recipe_list'
import { getRecipe } from '~/lib/get_recipe'

export type RecipePagePropType = {
  recipeInfo: RecipeType
}

const RecipePage: NextPage<RecipePagePropType> = ({ recipeInfo }) => {
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = Number(context.params?.id)
  if (id === 0 || isNaN(id)) {
    return {
      notFound: true,
    }
  } else {
    const recipe = await getRecipe(id)
    return {
      props: {
        recipe: recipe,
      },
    }
  }
}

export default RecipePage
