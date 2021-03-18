import { BackgroundColor, IconColor } from '~/styles/color'
import { IconType, Icon } from '~/components/atoms/icon'
import { Button } from '~/components/atoms/button'

export type IconButtonPropType = {
  onClick: () => void
  iconType: IconType
  height?: string
  backgroundColor?: BackgroundColor
  iconColor?: IconColor
  className?: string
  disabled?: boolean
  iconHeight?: `${number}px`
}

export const IconButton: React.VFC<IconButtonPropType> = ({
  onClick,
  iconType,
  height,
  backgroundColor,
  iconColor,
  className,
  disabled,
  iconHeight,
}) => {
  const handleClick = () => {
    if (disabled) return
    onClick()
  }

  return (
    <Button
      className={className}
      onClick={handleClick}
      backgroundColor={backgroundColor}
      height={height}
    >
      <Icon height={iconHeight} type={iconType} color={iconColor} />
    </Button>
  )
}
