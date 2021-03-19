import styled from '@emotion/styled'
import { IconColor, colors } from '~/styles/color'

const DEFAULT_COLOR: IconColor = 'primary'
const DEFUALT_HEIGHT = '30px'

export type IconType = 'search' | 'noImage'

export type IconPropType = {
  type: IconType
  color?: IconColor
  className?: string
  width?: `${number}px`
  height?: `${number}px`
}

const iconNameMap: { [key in IconType]: string } = {
  search: 'search.svg',
  noImage: 'noImage.svg',
}

export const Icon: React.VFC<IconPropType> = ({
  color,
  type,
  className,
  height,
  width,
}) => {
  const IconComponent = require(`~/assets/icon/${iconNameMap[type]}`).default

  const StyledIcon = styled(IconComponent)(() => ({
    fill: colors.icon[color ?? DEFAULT_COLOR],
    height: height ?? DEFUALT_HEIGHT,
    width,
  }))

  return <StyledIcon className={className} />
}
