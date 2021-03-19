export type Recipe = {
  // レシピID
  id: number
  // レシピ名
  title: string
  // レシピ概要
  description: string
  // レシピ画像。画像がない場合は null。
  imageUrl: string | null
  // レシピ作者
  author: {
    userName: string
  }
  // レシピを公開した日時。ISO 8601
  publishedAt: string
  // レシピの手順
  steps: string[]
  // レシピの材料
  ingredients: {
    // 材料名
    name: string
    // 分量（100g など）
    quantity: string
  }[]
  // 関連するレシピのIDが最大5つ入っている。Poster View などを実装するのに使う。
  // なお、関連レシピの算出アルゴリズムのできが悪いため関連性が低い可能性がある点に注意。
  relatedRecipes: number[]
}

export type PagingLinks = {
  next?: string
  prev?: string
}

export type Response = {
  // レシピ一覧
  recipes: Recipe[]

  // ページネーション可能な場合の次、前のページのリンク
  links: PagingLinks
}

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
