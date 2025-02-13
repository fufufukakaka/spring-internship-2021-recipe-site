import styled from '@emotion/styled'
import { IconButton } from '~/components/molecules/icon-button'
import { TextInput } from '~/components/atoms/text-input'

export type SearchBarPropType = {
  value: string
  onChange: (text: string) => void
  onClickSearch: () => void
}

export const SearchBar: React.VFC<SearchBarPropType> = ({
  value,
  onChange,
  onClickSearch,
}) => {
  return (
    <Container>
      <SearchButton
        iconType="search"
        iconColor="accent"
        backgroundColor="primary"
        onClick={onClickSearch}
        iconHeight="30px"
      />
      <SearchTextField
        type="text"
        placeholder="search your interests..."
        value={value}
        onChange={onChange}
        backgroundColor="primary"
      />
    </Container>
  )
}

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const SearchTextField = styled(TextInput)({
  height: '48px',
  maxWidth: '582px',
})

const SearchButton = styled(IconButton)({
  borderRadius: '0 4px 4px 0',
  width: '32px',
  height: '48px',
})
