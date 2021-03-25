import React from 'react'
import Router from 'next/router'
import { getRecipeList } from '~/lib/get_recipe_list'
import { RecipeType, PagingLinks } from '~/types/recipe'

export const handleOnClickNext = async (
  pagingLink: PagingLinks,
  setRecipe: React.Dispatch<React.SetStateAction<RecipeType[] | null>>,
  setPagingLink: React.Dispatch<React.SetStateAction<PagingLinks | null>>
) => {
  if (pagingLink && pagingLink.next) {
    const response = await getRecipeList(pagingLink.next)
    setRecipe(response.recipes)
    setPagingLink(response.links)
    window.scrollTo(0, 0)
  } else {
    return null
  }
}

export const handleOnClickPrev = async (
  pagingLink: PagingLinks,
  setRecipe: React.Dispatch<React.SetStateAction<RecipeType[] | null>>,
  setPagingLink: React.Dispatch<React.SetStateAction<PagingLinks | null>>
) => {
  if (pagingLink && pagingLink.prev) {
    const response = await getRecipeList(pagingLink.prev)
    setRecipe(response.recipes)
    setPagingLink(response.links)
    window.scrollTo(0, 0)
  } else {
    return null
  }
}

export const handleOnChangeSearch = (
  value: string,
  setSearchWord: React.Dispatch<React.SetStateAction<string>>
) => {
  setSearchWord(value)
}

export const handleOnSearch = async (searchWord: string) => {
  if (searchWord !== '') {
    Router.push(`/search?keyword=${encodeURIComponent(searchWord)}`)
  } else {
    return null
  }
}

export const handleOnClickHeader = async () => {
  Router.push(`/`)
}
