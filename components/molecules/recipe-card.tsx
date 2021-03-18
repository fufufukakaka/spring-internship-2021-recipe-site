import styled from '@emotion/styled'
import { colors } from '~/styles/color'
import { Image } from '../atoms/image'
import { Typography } from '../atoms/typography'

export type RecipeCardPropType = {
  imgUrl: string
  recipeTitle: string
  recipeDescription: string
  className?: string
}

export const RecipeCard: React.VFC<RecipeCardPropType> = ({
  imgUrl,
  recipeTitle,
  recipeDescription,
  className,
}) => {
  return (
    <Container className={className}>
      <SideImage>
        <Image imgUrl={imgUrl} />
      </SideImage>
      <SideText>
        <RecipeTitle>
          <Typography text={recipeTitle} type="16bold" />
        </RecipeTitle>
        <RecipeDesc>
          <Typography text={recipeDescription} type="14normal" />
        </RecipeDesc>
      </SideText>
    </Container>
  )
}

const Container = styled.div({
  display: 'flex',
  backgroundColor: colors.background.primary,
})

const SideImage = styled.div({
  width: '40%',
})

const SideText = styled.div({
  width: '60%',
  textAlign: 'center',
  display: 'block',
})

const RecipeTitle = styled.div({
  padding: '10px',
})

const RecipeDesc = styled.div({
  padding: '10px',
})
