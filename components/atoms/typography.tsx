import styled from '@emotion/styled'
import { colors, TextColor } from '~/styles/color'

const typographyList = [
  '32bold',
  '24bold',
  '20bold',
  '18bold',
  '16bold',
  '14bold',
  '12bold',
  '24normal',
  '16normal',
  '14normal',
  '12normal',
  '10normal',
] as const

export type TypographyType = typeof typographyList[number]

export type TypographyPropType = {
  text: string
  color?: TextColor
  type: TypographyType
  className?: string
}

const DEFAULT_TEXT_COLOR: TextColor = 'primary'

export const Typography: React.VFC<TypographyPropType> = ({
  text,
  type,
  className,
  color,
}) => {
  return (
    <TextInnerText
      className={className}
      labelType={type}
      color={color ?? DEFAULT_TEXT_COLOR}
    >
      {text}
    </TextInnerText>
  )
}

const fontInfo: {
  [key in TypographyType]: {
    fontSize: `${number}px`
    fontWeight: 'normal' | 'bold'
  }
} = {
  '32bold': {
    fontSize: '32px',
    fontWeight: 'bold',
  },
  '24bold': {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  '20bold': {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  '18bold': {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  '16bold': {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  '14bold': {
    fontSize: '14px',
    fontWeight: 'bold',
  },
  '12bold': {
    fontSize: '12px',
    fontWeight: 'bold',
  },
  '24normal': {
    fontSize: '24px',
    fontWeight: 'normal',
  },
  '16normal': {
    fontSize: '16px',
    fontWeight: 'normal',
  },
  '14normal': {
    fontSize: '14px',
    fontWeight: 'normal',
  },
  '12normal': {
    fontSize: '12px',
    fontWeight: 'normal',
  },
  '10normal': {
    fontSize: '10px',
    fontWeight: 'normal',
  },
}

const TextInnerText = styled.span<{
  labelType: TypographyType
  color: TextColor
}>((props) => ({
  color: colors.text[props.color],
  fontStyle: 'normal',
  fontWeight: fontInfo[props.labelType].fontWeight,
  fontSize: fontInfo[props.labelType].fontSize,
  lineHeight: '1.5',
  fontFamily: 'Noto Sans JP',
  '::before': {
    content: '""',
    display: 'block',
    height: 0,
    width: 0,
    marginTop: 'calc(-0.5 * 0.5em)',
  },
  '::after': {
    content: '""',
    display: 'block',
    height: 0,
    width: 0,
    marginTop: 'calc(-0.5 * 0.5em)',
  },
}))
