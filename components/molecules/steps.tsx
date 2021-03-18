import styled from '@emotion/styled'
import { Typography } from '../atoms/typography'
import { Divider } from '../atoms/divider'
import { colors } from '~/styles/color'

export type StepsPropType = {
  stepNumber: number
  stepText: string
  className?: string
}

export const Steps: React.VFC<StepsPropType> = ({
  stepNumber,
  stepText,
  className,
}) => {
  return (
    <Container className={className}>
      <StepText>
        <Typography text={`${stepNumber}. ${stepText}`} type="14normal" />
      </StepText>
      <Divider />
    </Container>
  )
}

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  backgroundColor: colors.background.primary,
})

const StepText = styled.div({
  width: '100%',
  padding: '20px',
})
