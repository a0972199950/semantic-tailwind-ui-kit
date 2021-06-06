/**
 * How to add postcss support with tailwind, cssnano, purgecss and postcss-replace
 * Credit: https://medblocks.medium.com/setting-up-a-stencil-js-project-with-tailwind-css-for-beautiful-web-components-49d20e5c6be6
 */
import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { postcss } from '@stencil/postcss'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import cssnano from 'cssnano'
import purgecss from '@fullhuman/postcss-purgecss'
import replace from 'postcss-replace'

const purge = purgecss({
  content: ['./src/**/*.tsx', './src/index.html'],
  // safelist: [':host']
})

export const config: Config = {
  namespace: 'fundfluent-frontend-design-system',

  devServer: {
    openBrowser: false
  },

  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],

  plugins: [
    // sass, scss 支援
    sass({
      injectGlobalPaths: [
        'src/styles/variables.scss'
      ]
    }),

    // postcss 支援
    postcss({
      // add postcss plugins
      plugins: [
        // add tailwind css. Config file was added using `npx tailwindcss init`
        tailwindcss('tailwind.config.js'),

        autoprefixer(),

        // shadow dom does not respect 'html' and 'body' styling, so we replace it with ':host' instead
        replace({ pattern: 'html', data: { replaceAll: ':host' } }),

        // purge and cssnano if production build
        ...(process.argv.includes('--dev')
          ? [ purge ]
          : [])
      ]
    })
  ]
}
