import styled from '@emotion/styled'
import { Typography } from '../atoms/typography'
import { colors } from '~/styles/color'

export type IngredientsPropType = {
  ingredientName: string
  ingredientUnit: string
  className?: string
}

export const Ingredients: React.VFC<IngredientsPropType> = ({
  ingredientName,
  ingredientUnit,
  className,
}) => {
  return (
    <Container className={className}>
      <IngredientName>
        <Typography text={ingredientName} type="14normal" />
      </IngredientName>
      <Ingredientunit>
        <Typography text={ingredientUnit} type="14normal" />
      </Ingredientunit>
    </Container>
  )
}

const Container = styled.div({
  display: 'flex',
  backgroundColor: colors.background.primary,
})

const IngredientName = styled.div({
  width: '50%',
  padding: '10px',
  textAlign: 'left',
})

const Ingredientunit = styled.div({
  width: '50%',
  padding: '10px',
  textAlign: 'right',
})
