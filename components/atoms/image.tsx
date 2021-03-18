import styled from '@emotion/styled'

export type ImagePropType = {
  imgUrl: string
}

export const Image: React.VFC<ImagePropType> = ({ imgUrl }) => {
  return <ImgContainer src={imgUrl} />
}

const ImgContainer = styled.img({
  width: '100%',
})
