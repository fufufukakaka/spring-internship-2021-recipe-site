import dayjs from 'dayjs'

export const formatDate = (
  input: Date | undefined,
  format?: string
): string => {
  if (!input) {
    return ''
  }

  return dayjs(input).format(format ?? 'YYYY/M/D HH:mm')
}
