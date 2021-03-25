import React from 'react'
import Router from 'next/router'

export const handleOnClickPaging = async (url: string | undefined) => {
  if (url) {
    const urlParams = new URLSearchParams(url.split('?')[1])
    const pageNumber = Number(urlParams.get('page'))
    const searchWord = String(urlParams.get('keyword'))
    if (searchWord && pageNumber && pageNumber >= 2) {
      Router.push(`/search?keyword=${searchWord}&page=${pageNumber}`)
    } else if (!searchWord && pageNumber) {
      Router.push(`/?page=${pageNumber}`)
    } else if (searchWord && !pageNumber) {
      Router.push(`/search?keyword=${searchWord}`)
    } else {
      Router.push(`/`)
    }
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
