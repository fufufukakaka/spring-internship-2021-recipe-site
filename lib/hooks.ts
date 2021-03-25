import React from 'react'
import { getRecipeList } from '~/lib/get_recipe_list'
import { RecipeType, PagingLinks } from '~/types/recipe'

export const useRecipeStatus = () => {
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

  return {
    recipeForList,
    pagingLink,
    searchWord,
    isSearchResult,
    setRecipe,
    setPagingLink,
    setSearchWord,
  }
}
