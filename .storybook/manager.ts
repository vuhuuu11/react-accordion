import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.light,
    brandTitle: '@tenedev/react-accordion',
    brandUrl: 'https://TenEplaysOfficial.github.io/react-accordion/',
  },
});
