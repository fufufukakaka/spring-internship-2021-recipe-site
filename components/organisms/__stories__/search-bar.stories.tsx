import { Story } from '@storybook/react'
import { SearchBar, SearchBarPropType } from '~/components/organisms/search-bar'

export default {
  title: 'organisms/SearchBar',
  component: SearchBar,
  argTypes: {
    onChange: { action: 'onChange' },
    onClickSearch: { action: 'onClickSearch' },
  },
}

const Template: Story<SearchBarPropType> = (args) => <SearchBar {...args} />

const args: Omit<SearchBarPropType, 'onChange' | 'onClickSearch'> = {
  value: '',
}

export const Default = Template.bind({})
Default.args = args

export const Value = Template.bind({})
Value.args = {
  ...args,
  value: '入力値',
}
