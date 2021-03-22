import React from 'react'
import { Search } from '~/components/templates/search'
import { getRecipeList } from '~/lib/get_recipe_list'
import { search } from '~/lib/search'
import { RecipeType, PagingLinks } from '~/types/recipe'
import type { NextPage } from 'next'

const TopPage: NextPage = () => {
  const [recipeForList, setRecipe] = React.useState<RecipeType[] | null>(null)
  const [pagingLink, setPagingLink] = React.useState<PagingLinks | null>(null)
  const [searchWord, setSearchWord] = React.useState<string>('')
  const [isSearchResult, setIsSearchResult] = React.useState<boolean>(false)

  const init = async () => {
    const response = await getRecipeList(null)
    setRecipe(response.recipes)
    setPagingLink(response.links)
    setIsSearchResult(false)
  }

  React.useEffect(() => {
    init()
  }, [])

  const handleOnClickNext = async () => {
    if (pagingLink && pagingLink.next) {
      const response = await getRecipeList(pagingLink.next)
      setRecipe(response.recipes)
      setPagingLink(response.links)
      window.scrollTo(0, 0)
    } else {
      return null
    }
  }

  const handleOnClickPrev = async () => {
    if (pagingLink && pagingLink.prev) {
      const response = await getRecipeList(searchWord)
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
    if (searchWord !== '') {
      const response = await search(searchWord)
      setRecipe(response.recipes)
      setPagingLink(response.links)
      setIsSearchResult(true)
      window.scrollTo(0, 0)
    } else {
      return null
    }
  }

  const handleOnClickHeader = async () => {
    init()
  }

  if (recipeForList === null) return <div>loading...</div>

  return (
    <Search
      recipeInfo={recipeForList}
      searchValue={searchWord}
      isSearchResult={isSearchResult}
      onChangeSearch={(e) => handleOnChangeSearch(e)}
      onClickSearch={handleOnSearch}
      onClickNext={handleOnClickNext}
      onClickPrev={handleOnClickPrev}
      onClickHeader={handleOnClickHeader}
    />
  )
}

export default TopPage
