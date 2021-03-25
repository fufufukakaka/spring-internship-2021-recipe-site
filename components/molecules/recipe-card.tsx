import styled from '@emotion/styled'
import { colors } from '~/styles/color'
import { Image } from '../atoms/image'
import { Typography } from '../atoms/typography'
import { Icon } from '~/components/atoms/icon'

export type RecipeCardPropType = {
  imgUrl: string | null
  recipeTitle: string
  recipeDescription: string
  author: string
  className?: string
}

export const RecipeCard: React.VFC<RecipeCardPropType> = ({
  imgUrl,
  recipeTitle,
  recipeDescription,
  author,
  className,
}) => {
  return (
    <Container className={className}>
      <Thumbnail>
        {imgUrl ? (
          <Image imgUrl={imgUrl} />
        ) : (
          <Icon type="noImage" height="100px" />
        )}
      </Thumbnail>
      <SideText>
        <RecipeTitle>
          <Typography text={recipeTitle} type="16bold" />
          <Typography text={`by ${author}`} type="12normal" color="gray" />
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
  backgroundColor: colors.background.alphaPrimary,
  margin: '15px auto',
  boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.15)',
  width: '80%',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
})

const Thumbnail = styled.div({
  width: '70%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10%',
  position: 'relative',
  overflow: 'hidden',
  margin: '10px',
})

const SideText = styled.div({
  width: '80%',
  textAlign: 'center',
  display: 'block',
})

const RecipeTitle = styled.div({
  padding: '10px',
})

const RecipeDesc = styled.div({
  padding: '10px',
})
