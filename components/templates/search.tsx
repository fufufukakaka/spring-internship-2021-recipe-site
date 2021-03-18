import styled from '@emotion/styled'
import React from 'react'
import { SearchBar } from '~/components/organisms/search-bar'
import { Header } from '../molecules/header'
import { RecipeCard } from '~/components/molecules/recipe-card'

export type SearchPropType = {
  recipeInfo: {
    imgUrl: string
    recipeTitle: string
    recipeDescription: string
  }[]
  searchValue: string
  onChangeSearch: (text: string) => void
  onClickSearch: () => void
}

export const Search: React.VFC<SearchPropType> = ({
  recipeInfo,
  searchValue,
  onChangeSearch,
  onClickSearch,
}) => {
  return (
    <Container>
      <Header
        headerText="fufufukakaka Cookpad"
        colorType="light"
        textType="24bold"
      />
      <SearchBar
        value={searchValue}
        onChange={onChangeSearch}
        onClickSearch={onClickSearch}
      />
      {recipeInfo.map((item, index) => (
        <RecipeCard
          key={index}
          imgUrl={item.imgUrl}
          recipeTitle={item.recipeTitle}
          recipeDescription={item.recipeDescription}
        />
      ))}
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
