import React from 'react'
import { RecipeList } from '~/components/templates/recipe-list'
import { getRecipeList } from '~/lib/get_recipe_list'
import { RecipeType, PagingLinks } from '~/types/recipe'
import type { GetServerSideProps, NextPage } from 'next'
import {
  handleOnClickPaging,
  handleOnChangeSearch,
  handleOnSearch,
  handleOnClickHeader,
} from '~/lib/handler'
import { useRecipeStatus } from '~/lib/hooks'
import styled from '@emotion/styled'
import { colors } from '~/styles/color'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

export type SearchPagePropType = {
  paramSearchWord: string
  recipes: RecipeType[]
  pagingLink: PagingLinks
}

const SearchPage: NextPage<SearchPagePropType> = ({
  paramSearchWord,
  recipes,
  pagingLink,
}) => {
  const { searchWord, setSearchWord } = useRecipeStatus(paramSearchWord)

  if (recipes === null)
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
    <RecipeList
      recipeInfo={recipes}
      searchValue={searchWord}
      onChangeSearch={(e) => handleOnChangeSearch(e, setSearchWord)}
      onClickSearch={() => handleOnSearch(searchWord)}
      onClickNext={
        pagingLink && pagingLink.next
          ? () => handleOnClickPaging(pagingLink.next)
          : undefined
      }
      onClickPrev={
        pagingLink && pagingLink.prev
          ? () => handleOnClickPaging(pagingLink.prev)
          : undefined
      }
      onClickHeader={handleOnClickHeader}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const searchWord = String(context.query.keyword)
  const pageNumber = Number(context.query.page)
  let requestUrl: string
  if (searchWord && pageNumber && pageNumber >= 2) {
    requestUrl = `https://internship-recipe-api.ckpd.co/search?keyword=${encodeURIComponent(
      searchWord
    )}&page=${pageNumber}`
  } else if (searchWord && (!pageNumber || pageNumber < 2)) {
    requestUrl = `https://internship-recipe-api.ckpd.co/search?keyword=${encodeURIComponent(
      searchWord
    )}`
  } else {
    requestUrl = `https://internship-recipe-api.ckpd.co/recipes`
  }
  if (requestUrl) {
    const response = await getRecipeList(requestUrl)
    return {
      props: {
        paramSearchWord: searchWord,
        recipes: response.recipes,
        pagingLink: response.links,
      },
    }
  } else {
    return {
      notFound: true,
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

export default SearchPage
