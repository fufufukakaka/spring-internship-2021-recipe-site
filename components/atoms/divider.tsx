import styled from '@emotion/styled'
import { colors } from '~/styles/color'

export type DividerPropType = {
  height?: `${number}px`
  className?: string
}

const DEFAULT_HEIGHT = '1px'

export const Divider: React.VFC<DividerPropType> = ({ height, className }) => {
  return (
    <DividerElement className={className} height={height ?? DEFAULT_HEIGHT} />
  )
}

const DividerElement = styled.div<{ height: `${number}px` }>((props) => ({
  height: props.height,
  backgroundColor: colors.border.gray,
  width: '100%',
}))
