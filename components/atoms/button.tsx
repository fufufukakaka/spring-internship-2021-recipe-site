import styled from '@emotion/styled'

export type ButtonPropType = {
  onClick: () => void
  innerText: string
}

export const Button: React.VFC<ButtonPropType> = ({ onClick, innerText }) => {
  return <ButtonContainer onClick={onClick}>{innerText}</ButtonContainer>
}

const ButtonContainer = styled.button<{}>(() => ({
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F78700',
  borderRadius: '4px',
  border: 'none',
  color: '#ffffff',
  height: '36px',
  width: '100%',
  boxSizing: 'border-box',
  fontSize: '16px',
  letterSpacing: '.05em',
  outline: 'none',
  fontWeight: 'bold',
}))
