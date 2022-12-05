import fs from 'fs/promises'
import { createUnplugin } from 'unplugin'
import { createFilter } from '@rollup/pluginutils'
import type { Options } from './types'

// Credits to mattjennings
// https://github.com/mattjennings/mattjennings.io/blob/master/vite.config.js
export default createUnplugin<Options | undefined>(options => ({
  name: 'unplugin-font-to-buffer',
  enforce: 'post',
  async transform(_: string, id: string) {
    const include = options?.include ?? '**/*.{ttf,otf,woff}'
    const filter = createFilter(include, options?.exclude)

    if (!filter(id))
      return

    const base64 = await fs.readFile(id, { encoding: 'base64' })

    return {
      code: `export default Buffer.from(${JSON.stringify(base64)}, 'base64')`,
      map: null,
    }
  },
}))
