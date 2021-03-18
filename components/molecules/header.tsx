import styled from '@emotion/styled'
import { colors } from '~/styles/color'
import { Typography } from '~/components/atoms/typography'

type HeaderColorType = 'light' | 'dark'

export type HeaderPropType = {
  headerText: string
  colorType: HeaderColorType
  className?: string
}

export const Header: React.VFC<HeaderPropType> = ({
  headerText,
  colorType,
  className,
}) => {
  return (
    <HeaderContainer className={className} colorType={colorType}>
      <HeaderText>
        <Typography
          text={headerText}
          type="20bold"
          color={colorType === 'dark' ? 'white' : 'primary'}
        />
      </HeaderText>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header<{ colorType: HeaderColorType }>(
  (props) => ({
    backgroundColor:
      props.colorType === 'dark'
        ? colors.background.dark
        : colors.background.primary,
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: `2px solid ${colors.border.gray}`,
  })
)

const HeaderText = styled.div()
