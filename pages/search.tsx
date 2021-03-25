import React from 'react'
import { RecipeList } from '~/components/templates/recipe-list'
import { search } from '~/lib/search'
import Router from 'next/router'
import { getRecipeList } from '~/lib/get_recipe_list'
import { RecipeType, PagingLinks } from '~/types/recipe'
import type { GetServerSideProps, NextPage } from 'next'

export type SearchPagePropType = {
  searchWord: string
  recipes: RecipeType[]
  pagingLink: PagingLinks
}

const SearchPage: NextPage<SearchPagePropType> = ({
  searchWord,
  recipes,
  pagingLink,
}) => {
  const [recipeForList, setRecipe] = React.useState<RecipeType[]>(recipes)
  const [statePagingLink, setPagingLink] = React.useState<PagingLinks>(
    pagingLink
  )
  const [stateSearchWord, setSearchWord] = React.useState<string>(searchWord)

  React.useEffect(() => {
    setRecipe(recipes)
    setPagingLink(pagingLink)
    setSearchWord(searchWord)
  }, [searchWord])

  const handleOnClickNext = async () => {
    if (statePagingLink && statePagingLink.next) {
      const response = await getRecipeList(statePagingLink.next)
      setRecipe(response.recipes)
      setPagingLink(response.links)
      window.scrollTo(0, 0)
    } else {
      return null
    }
  }

  const handleOnClickPrev = async () => {
    if (statePagingLink && statePagingLink.prev) {
      const response = await getRecipeList(statePagingLink.prev)
      setRecipe(response.recipes)
      setPagingLink(response.links)
      window.scrollTo(0, 0)
    } else {
      return null
    }
  }

  const handleOnChangeSearch = (value: string) => {
    setSearchWord(value)
  }

  const handleOnSearch = async () => {
    if (stateSearchWord !== '') {
      Router.push(`/search?keyword=${encodeURIComponent(stateSearchWord)}`)
    } else {
      return null
    }
  }

  const handleOnClickHeader = async () => {
    Router.push('/')
  }

  if (recipes === null) return <div>loading...</div>

  return (
    <RecipeList
      recipeInfo={recipeForList}
      searchValue={stateSearchWord}
      isSearchResult={true}
      onChangeSearch={(e) => handleOnChangeSearch(e)}
      onClickSearch={handleOnSearch}
      onClickNext={
        statePagingLink && statePagingLink.next ? handleOnClickNext : undefined
      }
      onClickPrev={
        statePagingLink && statePagingLink.prev ? handleOnClickPrev : undefined
      }
      onClickHeader={handleOnClickHeader}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const searchWord = String(context.query.keyword)
  if (!searchWord) {
    return {
      notFound: true,
    }
  } else {
    const response = await search(encodeURIComponent(searchWord))
    return {
      props: {
        searchWord: searchWord,
        recipes: response.recipes,
        pagingLink: response.links,
      },
    }
  }
}

export default SearchPage
