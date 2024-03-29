import { Story, Meta } from '@storybook/web-components';
import { Page, PageProps } from './Page';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Example/Page',
} as Meta;

const Template: Story<Partial<PageProps>> = (args) => Page(args as any);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
