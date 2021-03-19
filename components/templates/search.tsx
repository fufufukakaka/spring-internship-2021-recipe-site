import styled from '@emotion/styled'
import React from 'react'
import { colors } from '~/styles/color'
import { SearchBar } from '~/components/organisms/search-bar'
import { Header } from '../molecules/header'
import { RecipeCard } from '~/components/molecules/recipe-card'
import { Divider } from '../atoms/divider'
import { Button } from '../atoms/button'
import { Typography } from '../atoms/typography'
import { Recipe } from '~/lib/get_recipe_list'

export type SearchPropType = {
  recipeInfo: Recipe[]
  searchValue: string
  onChangeSearch: (text: string) => void
  onClickSearch: () => void
  onClickNext?: () => void
  onClickPrev?: () => void
}

export const Search: React.VFC<SearchPropType> = ({
  recipeInfo,
  searchValue,
  onChangeSearch,
  onClickSearch,
  onClickNext,
  onClickPrev,
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
      {recipeInfo.map((item, index) => (
        <>
          <RecipeCard
            key={index}
            imgUrl={item.image_url}
            recipeTitle={item.title}
            recipeDescription={item.description}
          />
          <Divider />
        </>
      ))}
      <ButtonContainer>
        {onClickPrev ? (
          <Button
            backgroundColor={'primary'}
            textColor={'primary'}
            onClick={onClickPrev}
          >
            <Typography text="前のページ" type="14normal" />
          </Button>
        ) : null}
        {onClickNext ? (
          <Button
            backgroundColor={'primary'}
            textColor={'primary'}
            onClick={onClickNext}
          >
            <Typography text="次のページ" type="14normal" />
          </Button>
        ) : null}
      </ButtonContainer>
    </Container>
  )
}

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  backgroundColor: colors.background.primary,
})

const ButtonContainer = styled.div({
  display: 'flex',
  padding: '10px',
  justifyContent: 'space-between',
})
