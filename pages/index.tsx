import React from 'react'
import styled from '@emotion/styled'
import { colors } from '~/styles/color'
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
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

export type TopPagePropType = {
  recipes: RecipeType[]
  pagingLink: PagingLinks
}

const TopPage: NextPage<TopPagePropType> = ({ recipes, pagingLink }) => {
  const { searchWord, setSearchWord } = useRecipeStatus('')

  if (recipes === null)
    return (
      <LoaderContainer>
        <Loader
          type="Puff"
          color={colors.base.green}
          height={100}
          width={100}
          timeout={0}
        />
      </LoaderContainer>
    )

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

const LoaderContainer = styled.div({
  position: 'fixed',
  padding: 0,
  margin: 0,
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: colors.background.primary,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export default TopPage
