import styled from '@emotion/styled'
import { Steps } from '~/components/molecules/steps'
import { Header } from '~/components/molecules/header'

export type StepContainerPropType = {
  steps: string[]
}

export const StepContainer: React.VFC<StepContainerPropType> = ({ steps }) => {
  return (
    <Container>
      <Header headerText="手順" colorType="light" textType="14bold" />
      {steps.map((step, index) => (
        <Steps key={index} stepNumber={index} stepText={step} />
      ))}
    </Container>
  )
}

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
})
