import React from 'react'
import { Recipe } from '~/components/templates/recipe'
import type { GetServerSideProps, NextPage } from 'next'
import { RecipeType } from '~/types/recipe'
import { getRecipe } from '~/lib/get_recipe'
import { handleOnChangeSearch, handleOnSearch } from '~/lib/handler'
import { useRecipeStatus } from '~/lib/hooks'
import styled from '@emotion/styled'
import { colors } from '~/styles/color'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

export type RecipePagePropType = {
  recipe: RecipeType
}

const RecipePage: NextPage<RecipePagePropType> = ({ recipe }) => {
  const { searchWord, setSearchWord } = useRecipeStatus('')

  if (recipe === null)
    return (
      <LoaderContainer>
        <Loader
          type="Puff"
          color={colors.base.green}
          height={100}
          width={100}
          timeout={0}
        />
      </LoaderContainer>
    )

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

const LoaderContainer = styled.div({
  position: 'fixed',
  padding: 0,
  margin: 0,
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: colors.background.primary,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export default RecipePage
