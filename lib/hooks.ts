import React from 'react'

export const useRecipeStatus = (_searchWord: string) => {
  const [searchWord, setSearchWord] = React.useState<string>(_searchWord)

  return {
    searchWord,
    setSearchWord,
  }
}
