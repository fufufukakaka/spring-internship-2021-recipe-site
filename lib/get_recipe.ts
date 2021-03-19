import { RecipeType } from '~/lib/get_recipe_list'

export type Response = {
  recipe: RecipeType
}

export async function getRecipe(id: number): Promise<Response> {
  const headers = {
    'X-Api-Key': process.env.API_KEY ? process.env.API_KEY : '',
  }
  const response = await fetch(
    `https://internship-recipe-api.ckpd.co/recipes/${id}`,
    {
      method: 'GET',
      headers: headers,
    }
  )
  const _response: Response = await response.json()

  return _response
}
