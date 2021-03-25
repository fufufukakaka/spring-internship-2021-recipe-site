import React from 'react'
import { RecipeList } from '~/components/templates/recipe-list'
import type { NextPage } from 'next'
import { useRecipeStatus } from '~/lib/hooks'
import {
  handleOnClickNext,
  handleOnClickPrev,
  handleOnChangeSearch,
  handleOnSearch,
  handleOnClickHeader,
} from '~/lib/handler'

const TopPage: NextPage = () => {
  const {
    recipeForList,
    pagingLink,
    searchWord,
    isSearchResult,
    setRecipe,
    setPagingLink,
    setSearchWord,
  } = useRecipeStatus()

  if (recipeForList === null) return <div>loading...</div>

  return (
    <>
      <RecipeList
        recipeInfo={recipeForList}
        searchValue={searchWord}
        isSearchResult={isSearchResult}
        onChangeSearch={(e) => handleOnChangeSearch(e, setSearchWord)}
        onClickSearch={() => handleOnSearch(searchWord)}
        onClickNext={
          pagingLink && pagingLink.next
            ? () => handleOnClickNext(pagingLink, setRecipe, setPagingLink)
            : undefined
        }
        onClickPrev={
          pagingLink && pagingLink.prev
            ? () => handleOnClickPrev(pagingLink, setRecipe, setPagingLink)
            : undefined
        }
        onClickHeader={handleOnClickHeader}
      />
    </>
  )
}

export default TopPage
