import styled from '@emotion/styled'
import { BackgroundColor, colors } from '~/styles/color'

type TextFieldType = 'password' | 'text'
type TextAreaType = 'textarea'

type CommonPropType = {
  value: string
  onChange: (text: string) => void
  placeholder?: string
  backgroundColor?: BackgroundColor
  className?: string
}

type TextAreaPropType = {
  rows: number
  type: TextAreaType
} & CommonPropType

type TextFieldPropType = {
  type: TextFieldType
} & CommonPropType

export type TextInputPropType = TextAreaPropType | TextFieldPropType

const DEFAULT_BACKGROUND_COLOR: BackgroundColor = 'primary'

export const TextInput: React.VFC<TextInputPropType> = (props) => {
  let inputElement: React.ReactNode

  if (props.type === 'textarea') {
    inputElement = (
      <TextAreaElement
        rows={props.rows}
        value={props.value}
        placeholder={props.placeholder}
        className={props.className}
        backgroundColorType={props.backgroundColor ?? DEFAULT_BACKGROUND_COLOR}
        onChange={(e) => props.onChange(e.target.value)}
      />
    )
  } else {
    inputElement = (
      <TextFieldElement
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        className={props.className}
        backgroundColorType={props.backgroundColor ?? DEFAULT_BACKGROUND_COLOR}
        onChange={(e) => props.onChange(e.target.value)}
      />
    )
  }

  return <>{inputElement}</>
}

const commonStyle = (props: { backgroundColorType: BackgroundColor }) => ({
  backgroundColor: colors.background[props.backgroundColorType],
  border: 'none',
  outline: 'none',
  width: '100%',
  color: colors.text.primary,
  fontsize: '14px',
  borderRadius: '4px',
  padding: '16px',
  '::placeholder': {
    color: colors.text.gray,
    fontSize: '14px',
  },
})

const TextAreaElement = styled.textarea<{
  backgroundColorType: BackgroundColor
}>((props) => ({
  ...commonStyle(props),
  resize: 'none',
}))

const TextFieldElement = styled.input<{ backgroundColorType: BackgroundColor }>(
  (props) => ({
    ...commonStyle(props),
  })
)
