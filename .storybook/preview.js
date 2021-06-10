import { applyPolyfills, defineCustomElements } from '../loader'

applyPolyfills().then(() => {
  defineCustomElements()
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}