import React from 'react'
import { RecipeType, PagingLinks } from '~/types/recipe'

export const useRecipeStatus = (_searchWord: string) => {
  const [searchWord, setSearchWord] = React.useState<string>(_searchWord)

  return {
    searchWord,
    setSearchWord,
  }
}
