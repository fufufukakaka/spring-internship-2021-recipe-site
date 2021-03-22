import styled from '@emotion/styled'
import React from 'react'
import { colors } from '~/styles/color'
import { SearchBar } from '~/components/organisms/search-bar'
import { Header } from '../molecules/header'
import { RecipeSummary } from '~/components/organisms/recipe-summary'
import { IngredientContainer } from '~/components/organisms/ingredient-container'
import { StepContainer } from '~/components/organisms/step-container'
import { RecipeType } from '~/types/recipe'
import Link from 'next/link'

export type RecipePropType = {
  recipeInfo: RecipeType
  searchValue: string
  onChangeSearch: (text: string) => void
  onClickSearch: () => void
}

export const Recipe: React.VFC<RecipePropType> = ({
  recipeInfo,
  searchValue,
  onChangeSearch,
  onClickSearch,
}) => {
  return (
    <Container>
      <Link href={`/`}>
        <LinkContainer>
          <Header
            headerText="fufufukakaka's Cookpad"
            colorType="light"
            textType="24bold"
          />
        </LinkContainer>
      </Link>
      <SearchBar
        value={searchValue}
        onChange={onChangeSearch}
        onClickSearch={onClickSearch}
      />
      <RecipeSummary
        imgUrl={recipeInfo.image_url}
        recipeTitle={recipeInfo.title}
        recipeDescription={recipeInfo.description}
        authorName={recipeInfo.author.user_name}
        publishedAt={recipeInfo.published_at}
      />
      <IngredientContainer ingredientsInfo={recipeInfo.ingredients} />
      <StepContainer steps={recipeInfo.steps} />
    </Container>
  )
}

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  backgroundColor: colors.background.primary,
})

const LinkContainer = styled.a({})
