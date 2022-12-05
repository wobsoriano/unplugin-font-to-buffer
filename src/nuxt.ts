import type { Options } from './types'
import unplugin from '.'

export default function (options: Options = {}, nuxt: any) {
  // install webpack plugin
  nuxt.hook('webpack:config', async (config: any) => {
    config.plugins = config.plugins || []
    config.plugins.unshift(unplugin.webpack(options))
  })

  // install vite plugin
  nuxt.hook('vite:extendConfig', async (config: any) => {
    config.plugins = config.plugins || []
    config.plugins.push(unplugin.vite(options))
  })

  // install rollup plugin for server imports
  nuxt.hook('nitro:config', (config: any) => {
    config.rollupConfig = config.rollupConfig || {}
    config.rollupConfig.plugins = config.rollupConfig.plugins || []
    config.rollupConfig.plugins.push(unplugin.rollup(options))
  })
}
