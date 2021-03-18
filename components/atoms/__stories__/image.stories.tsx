import { Story } from '@storybook/react'
import { Image, ImagePropType } from '../image'

export default {
  title: 'atoms/Image',
  component: Image,
}

const Template: Story<ImagePropType> = (args) => <Image {...args} />

const args: ImagePropType = {
  imgUrl:
    'http://img.cpcdn.com/recipes/6690847/1280x720c/36926b27cabace7c00c57430c3588fc5.jpg',
}

export const Primary = Template.bind({})
Primary.args = {
  ...args,
}
