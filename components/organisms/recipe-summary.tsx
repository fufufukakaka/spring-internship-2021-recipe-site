import styled from '@emotion/styled'
import { Image } from '../atoms/image'
import { Typography } from '../atoms/typography'
import { formatDate } from '~/utils/date'

export type RecipeSummaryPropType = {
  imgUrl: string
  recipeTitle: string
  recipeDescription: string
  authorName: string
  createdAt: Date
}

export const RecipeSummary: React.VFC<RecipeSummaryPropType> = ({
  imgUrl,
  recipeTitle,
  recipeDescription,
  authorName,
  createdAt,
}) => {
  return (
    <Container>
      <div>
        <Image imgUrl={imgUrl} />
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
              text={formatDate(createdAt, 'YYYY年M月D日 HH:mm:ss')}
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
