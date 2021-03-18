import emotionReset from 'emotion-reset'
import { Global, css } from '@emotion/core'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const decorators = [
  (Story) => (
    <>
      <Global
        styles={css`
          @import url(https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,500,700&display=swap&subset=japanese);
          ${emotionReset}
          * {
            box-sizing: border-box;
          }
        `}
      />
      <Story />
    </>
  ),
]
