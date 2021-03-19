import styled from '@emotion/styled'
import { Ingredients } from '~/components/molecules/ingredients'
import { Header } from '~/components/molecules/header'
import { Divider } from '../atoms/divider'

export type IngredientContainerPropType = {
  ingredientsInfo: {
    name: string
    quantity: string
  }[]
}

export const IngredientContainer: React.VFC<IngredientContainerPropType> = ({
  ingredientsInfo,
}) => {
  return (
    <Container>
      <Header headerText="材料" colorType="light" textType="16bold" />
      {ingredientsInfo.map((info, index) => (
        <>
          <Ingredients
            key={index}
            ingredientName={info.name}
            ingredientUnit={info.quantity}
          />
          <Divider />
        </>
      ))}
    </Container>
  )
}

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
})
