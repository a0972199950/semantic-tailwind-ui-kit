import path from 'path'
import { Config } from '@stencil/core'
import { less } from '@stencil/less'
import { sass } from '@stencil/sass'
import LessPluginAutoPrefix from 'less-plugin-autoprefix'

export const config: Config = {
  namespace: 'fundfluent-frontend-design-system',
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
    // less({
    //   plugins: [ // less 支援的 plugin 陣列
    //     new LessPluginAutoPrefix({ browsers: ['last 2 versions'] })
    //   ],

    //   injectGlobalPaths: [
    //     'src/styles/variables.less',
    //     'src/semantic/semantic.min.css'
    //   ]
    // }),

    sass({
      injectGlobalPaths: [
        'src/styles/variables.scss'
      ]
    })
  ]
}
