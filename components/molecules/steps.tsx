import styled from '@emotion/styled'
import { Typography } from '../atoms/typography'
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
    </Container>
  )
}

const Container = styled.div({
  display: 'flex',
  backgroundColor: colors.background.primary,
})

const StepText = styled.div({
  width: '100%',
  padding: '10px',
})
