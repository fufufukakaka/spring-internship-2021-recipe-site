import styled from '@emotion/styled'
import { colors } from '~/styles/color'
import { Typography, TypographyType } from '~/components/atoms/typography'

type HeaderColorType = 'light' | 'dark'

export type HeaderPropType = {
  headerText: string
  colorType: HeaderColorType
  textType?: TypographyType
  className?: string
}

const DEFAULT_TEXT_TYPE: TypographyType = '20bold'

export const Header: React.VFC<HeaderPropType> = ({
  headerText,
  colorType,
  textType,
  className,
}) => {
  return (
    <HeaderContainer className={className} colorType={colorType}>
      <HeaderText>
        <Typography
          text={headerText}
          type={textType ?? DEFAULT_TEXT_TYPE}
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
