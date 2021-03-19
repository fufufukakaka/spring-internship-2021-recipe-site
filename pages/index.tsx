import React from 'react'
import { Search } from '~/components/templates/search'
import { getRecipeList, Recipe, PagingLinks } from '~/lib/get_recipe_list'

const TopPage: React.VFC = () => {
  const [recipeForList, setRecipe] = React.useState<Recipe[] | null>(null)
  const [pagingLink, setPagingLink] = React.useState<PagingLinks | null>(null)

  React.useEffect(() => {
    ;(async () => {
      const response = await getRecipeList(null)
      setRecipe(response.recipes)
      setPagingLink(response.links)
    })()
  }, [])

  const handleOnClickNext = async () => {
    if (pagingLink && pagingLink.next) {
      const response = await getRecipeList(pagingLink.next)
      setRecipe(response.recipes)
      setPagingLink(response.links)
    } else {
      return null
    }
  }

  const handleOnClickPrev = async () => {
    if (pagingLink && pagingLink.prev) {
      const response = await getRecipeList(pagingLink.prev)
      setRecipe(response.recipes)
      setPagingLink(response.links)
    } else {
      return null
    }
  }

  if (recipeForList === null) return <div>loading...</div>

  return (
    <Search
      recipeInfo={recipeForList}
      searchValue=""
      onChangeSearch={() => console.log('search')}
      onClickSearch={() => console.log('search')}
      onClickNext={handleOnClickNext}
      onClickPrev={handleOnClickPrev}
    />
  )
}

export default TopPage
