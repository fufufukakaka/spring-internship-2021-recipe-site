import { Response } from '~/types/recipe'

export async function getRecipeList(url: string | null): Promise<Response> {
  const headers = {
    'X-Api-Key': process.env.API_KEY ? process.env.API_KEY : '',
  }
  const response = await fetch(
    url ? url : 'https://internship-recipe-api.ckpd.co/recipes',
    {
      method: 'GET',
      headers: headers,
    }
  )
  const _response: Response = await response.json()

  return _response
}
