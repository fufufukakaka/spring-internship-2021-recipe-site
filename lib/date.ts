import dayjs from 'dayjs'

export const formatDate = (
  inputIsoString: string | undefined,
  format?: string
): string => {
  if (!inputIsoString) {
    return ''
  }

  return dayjs(inputIsoString, 'YYYY-MM-DD[T]HH:mm:ssZZ').format(
    format ?? 'YYYY/M/D HH:mm'
  )
}
