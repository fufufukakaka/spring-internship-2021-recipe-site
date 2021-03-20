import { Response } from '~/types/recipe'

export async function search(word: string): Promise<Response> {
  const headers = {
    'X-Api-Key': process.env.API_KEY ? process.env.API_KEY : '',
  }
  const response = await fetch(
    `https://internship-recipe-api.ckpd.co/search?keyword=${word}`,
    {
      method: 'GET',
      headers: headers,
    }
  )
  const _response: Response = await response.json()

  return _response
}
