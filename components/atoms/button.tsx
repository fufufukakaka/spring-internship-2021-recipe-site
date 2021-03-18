import styled from '@emotion/styled'
import { BaseColor, BackgroundColor, colors } from '~/styles/color'

const DEFAULT_BACKGROUND_COLOR: BackgroundColor = 'accent'
const DEFAULT_TEXT_COLOR: BaseColor = 'white'
const DEFAULT_BUTTON_HEIGHT = '36px'

export type ButtonPropType = {
  backgroundColor?: BackgroundColor
  textColor?: BaseColor
  className?: string
  onClick: () => void
  children: JSX.Element
  height?: string
}

export const Button: React.VFC<ButtonPropType> = ({
  backgroundColor,
  textColor,
  className,
  onClick,
  children,
  height,
}) => {
  return (
    <ButtonContainer
      backgroundColor={backgroundColor}
      onClick={onClick}
      textColor={textColor}
      className={className}
      height={height ?? DEFAULT_BUTTON_HEIGHT}
    >
      {children}
    </ButtonContainer>
  )
}

const ButtonContainer = styled.button<{
  backgroundColor?: BackgroundColor
  textColor?: BaseColor
  height: string
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
  height: props.height,
  width: '100%',
  boxSizing: 'border-box',
  fontSize: '16px',
  letterSpacing: '.05em',
  outline: 'none',
  fontWeight: 'bold',
}))
