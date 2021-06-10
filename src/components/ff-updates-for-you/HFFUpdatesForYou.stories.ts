import { Story, Meta } from '@storybook/web-components'
import { html } from 'lit-html'
import { FFUpdatesForYou } from './FFUpdatesForYou'

export default {
  title: 'Example/HFFUpdatesForYou',
  decorators: [(story) => html`<div style="margin: 3em">${story()}</div>`]
} as Meta

const Template: Story<Partial<void>> = () => FFUpdatesForYou()

export const Default = Template.bind({})
Default.args = {}
