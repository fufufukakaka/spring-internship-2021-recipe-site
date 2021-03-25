import React from 'react'
import { RecipeList } from '~/components/templates/recipe-list'
import type { GetServerSideProps, NextPage } from 'next'
import { useRecipeStatus } from '~/lib/hooks'
import { RecipeType, PagingLinks } from '~/types/recipe'
import {
  handleOnClickPaging,
  handleOnChangeSearch,
  handleOnSearch,
  handleOnClickHeader,
} from '~/lib/handler'
import { getRecipeList } from '~/lib/get_recipe_list'

export type TopPagePropType = {
  recipes: RecipeType[]
  pagingLink: PagingLinks
}

const TopPage: NextPage<TopPagePropType> = ({ recipes, pagingLink }) => {
  const { searchWord, setSearchWord } = useRecipeStatus('')

  if (recipes === null) return <div>loading...</div>

  return (
    <>
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
    </>
  )
}

// pagingに伴うデータ取得をここで行う
export const getServerSideProps: GetServerSideProps = async (context) => {
  const pageNumber = Number(context.query.page)
  let requestUrl: string
  if (isNaN(pageNumber)) {
    requestUrl = `https://internship-recipe-api.ckpd.co/recipes`
  } else {
    requestUrl = `https://internship-recipe-api.ckpd.co/recipes?page=${pageNumber}`
  }
  if (requestUrl) {
    const response = await getRecipeList(requestUrl)
    return {
      props: {
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

export default TopPage
