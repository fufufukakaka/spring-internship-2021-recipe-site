const path = require('path')
const rootPath = path.resolve(__dirname, '../')

module.exports = {
  stories: [path.resolve(__dirname, '../**/*.stories.tsx')],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test.test('.svg')
    )
    fileLoaderRule.exclude = /\.svg$/

    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(ts|tsx)$/,
        include: [path.resolve(__dirname, '..')],
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [require.resolve('babel-preset-react-app')],
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ]

    config.resolve.extensions.push('.ts', '.tsx')

    config.resolve.alias['~'] = rootPath

    return config
  },
}
