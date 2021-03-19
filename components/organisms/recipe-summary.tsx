import styled from '@emotion/styled'
import { Image } from '../atoms/image'
import { Typography } from '../atoms/typography'
import { formatDate } from '~/lib/date'
import { Icon } from '~/components/atoms/icon'

export type RecipeSummaryPropType = {
  imgUrl: string | null
  recipeTitle: string
  recipeDescription: string
  authorName: string
  publishedAt: string
}

export const RecipeSummary: React.VFC<RecipeSummaryPropType> = ({
  imgUrl,
  recipeTitle,
  recipeDescription,
  authorName,
  publishedAt,
}) => {
  return (
    <Container>
      <div>
        {imgUrl ? (
          <Image imgUrl={imgUrl} />
        ) : (
          <Icon type="noImage" height="100px" />
        )}
      </div>
      <div>
        <RecipeTitle>
          <Typography text={recipeTitle} type="24bold" />
        </RecipeTitle>
        <SubContainer>
          <AuthorName>
            <Typography text={authorName} type="14normal" />
          </AuthorName>
          <CreatedAt>
            <Typography
              text={formatDate(publishedAt, 'YYYY年M月D日 HH:mm:ss')}
              type="14normal"
            />
          </CreatedAt>
        </SubContainer>
        <RecipeDesc>
          <Typography text={recipeDescription} type="14normal" />
        </RecipeDesc>
      </div>
    </Container>
  )
}

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
})

const SubContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
})

const RecipeTitle = styled.div({
  padding: '20px',
  textAlign: 'center',
})

const RecipeDesc = styled.div({
  padding: '20px',
})

const AuthorName = styled.div({
  padding: '20px',
})

const CreatedAt = styled.div({
  padding: '20px',
})
