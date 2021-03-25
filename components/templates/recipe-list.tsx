import styled from '@emotion/styled'
import React from 'react'
import { colors } from '~/styles/color'
import { SearchBar } from '~/components/organisms/search-bar'
import { Header } from '../molecules/header'
import { RecipeCard } from '~/components/molecules/recipe-card'
import { Divider } from '../atoms/divider'
import { Button } from '../atoms/button'
import { Typography } from '../atoms/typography'
import { RecipeType } from '~/types/recipe'
import Link from 'next/link'

export type RecipeListPropType = {
  recipeInfo: RecipeType[]
  searchValue: string
  onChangeSearch: (text: string) => void
  onClickSearch: () => void
  onClickNext?: () => void
  onClickPrev?: () => void
  onClickHeader: () => void
}

export const RecipeList: React.VFC<RecipeListPropType> = ({
  recipeInfo,
  searchValue,
  onChangeSearch,
  onClickSearch,
  onClickNext,
  onClickPrev,
  onClickHeader,
}) => {
  return (
    <Container>
      <HeaderContainer onClick={onClickHeader}>
        <Header
          headerText="fufufukakaka's Cookpad"
          colorType="light"
          textType="24bold"
        />
      </HeaderContainer>
      <SearchBar
        value={searchValue}
        onChange={onChangeSearch}
        onClickSearch={onClickSearch}
      />
      {recipeInfo.map((item) => (
        <>
          <Link href={`/recipes/${item.id}`}>
            <LinkContainer>
              <RecipeCard
                key={item.id}
                imgUrl={item.image_url}
                recipeTitle={item.title}
                author={item.author.user_name}
                recipeDescription={item.description}
              />
            </LinkContainer>
          </Link>
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

const LinkContainer = styled.a({})

const HeaderContainer = styled.div({})
