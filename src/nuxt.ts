import type { Options } from './types'
import unplugin from '.'

export default function (options: Options = {}, nuxt: any) {
  // for Nitro imports
  nuxt.hook('nitro:config', (config: any) => {
    config.rollupConfig = config.rollupConfig || {}
    config.rollupConfig.plugins = config.rollupConfig.plugins || []
    config.rollupConfig.plugins.push(unplugin.rollup(options))
  })
}
