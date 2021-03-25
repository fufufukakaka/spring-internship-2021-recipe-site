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

  if (recipes === null) return <div>loading...</div>

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

export default SearchPage
