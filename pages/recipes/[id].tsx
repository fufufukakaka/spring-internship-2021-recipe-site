import React from 'react'
import { Recipe } from '~/components/templates/recipe'
import type { GetServerSideProps, NextPage } from 'next'
import { RecipeType } from '~/types/recipe'
import { getRecipe } from '~/lib/get_recipe'
import { handleOnChangeSearch, handleOnSearch } from '~/lib/handler'
import { useRecipeStatus } from '~/lib/hooks'

export type RecipePagePropType = {
  recipe: RecipeType
}

const RecipePage: NextPage<RecipePagePropType> = ({ recipe }) => {
  const { searchWord, setSearchWord } = useRecipeStatus('')

  if (recipe === null) return <div>loading...</div>

  return (
    <Recipe
      recipeInfo={recipe}
      searchValue={searchWord}
      onChangeSearch={(e) => handleOnChangeSearch(e, setSearchWord)}
      onClickSearch={() => handleOnSearch(searchWord)}
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
