import { Story, Meta } from '@storybook/web-components'
import { FFUpdatesForYou } from './FFUpdatesForYou'

export default {
  title: 'Example/FFUpdatesForYou'
} as Meta

const Template: Story<Partial<void>> = () => FFUpdatesForYou()

export const Default = Template.bind({})
Default.args = {}
