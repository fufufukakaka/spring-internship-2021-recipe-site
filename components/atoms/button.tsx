import styled from '@emotion/styled'
import { BaseColor, BackgroundColor, colors } from '~/styles/color'

const DEFAULT_BACKGROUND_COLOR: BackgroundColor = 'accent'
const DEFAULT_TEXT_COLOR: BaseColor = 'white'

export type ButtonPropType = {
  backgroundColor?: BackgroundColor
  textColor?: BaseColor
  onClick: () => void
  innerText: string
}

export const Button: React.VFC<ButtonPropType> = ({
  backgroundColor,
  textColor,
  onClick,
  innerText,
}) => {
  return (
    <ButtonContainer
      backgroundColor={backgroundColor}
      onClick={onClick}
      textColor={textColor}
    >
      {innerText}
    </ButtonContainer>
  )
}

const ButtonContainer = styled.button<{
  backgroundColor?: BackgroundColor
  textColor?: BaseColor
}>((props) => ({
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor:
    colors.background[props.backgroundColor ?? DEFAULT_BACKGROUND_COLOR],
  borderRadius: '4px',
  border: 'none',
  color: colors.base[props.textColor ?? DEFAULT_TEXT_COLOR],
  height: '36px',
  width: '100%',
  boxSizing: 'border-box',
  fontSize: '16px',
  letterSpacing: '.05em',
  outline: 'none',
  fontWeight: 'bold',
}))
