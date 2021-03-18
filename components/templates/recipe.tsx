import styled from '@emotion/styled'
import React from 'react'
import { SearchBar } from '~/components/organisms/search-bar'
import { Header } from '../molecules/header'
import { RecipeSummary } from '~/components/organisms/recipe-summary'
import { IngredientContainer } from '~/components/organisms/ingredient-container'
import { StepContainer } from '~/components/organisms/step-container'

export type RecipePropType = {
  imgUrl: string
  recipeTitle: string
  recipeDescription: string
  authorName: string
  createdAt: Date
  searchValue: string
  onChangeSearch: (text: string) => void
  onClickSearch: () => void
  ingredientsInfo: {
    ingredientName: string
    ingredientUnit: string
  }[]
  steps: string[]
}

export const Recipe: React.VFC<RecipePropType> = ({
  imgUrl,
  recipeTitle,
  recipeDescription,
  authorName,
  createdAt,
  searchValue,
  onChangeSearch,
  onClickSearch,
  ingredientsInfo,
  steps,
}) => {
  return (
    <Container>
      <Header
        headerText="fufufukakaka's Cookpad"
        colorType="light"
        textType="24bold"
      />
      <SearchBar
        value={searchValue}
        onChange={onChangeSearch}
        onClickSearch={onClickSearch}
      />
      <RecipeSummary
        imgUrl={imgUrl}
        recipeTitle={recipeTitle}
        recipeDescription={recipeDescription}
        authorName={authorName}
        createdAt={createdAt}
      />
      <IngredientContainer ingredientsInfo={ingredientsInfo} />
      <StepContainer steps={steps} />
    </Container>
  )
}

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
})

// const SubContainer = styled.div({
//   display: 'flex',
//   justifyContent: 'space-between',
// })
