# unplugin-font-to-buffer

Import font files as Buffer. Best used with [satori](https://github.com/vercel/satori).

## Install

```bash
pnpm add unplugin-font-to-buffer -D
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import FontToBuffer from 'unplugin-font-to-buffer/vite'

export default defineConfig({
  plugins: [FontToBuffer()],
})
```

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import FontToBuffer from 'unplugin-font-to-buffer/rollup'

export default {
  plugins: [FontToBuffer()],
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default defineNuxtConfig({
  // Applied on Nitro only
  modules: ['unplugin-font-to-buffer/nuxt'],
})
```

<br></details>


<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-font-to-buffer/webpack')()
  ]
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import FontToBuffer from 'unplugin-font-to-buffer/esbuild'

build({
  plugins: [FontToBuffer()],
})
```

<br></details>

```jsx
import satori from 'satori'
import Roboto from './lib/fonts/Roboto-Regular.ttf'

const svg = await satori(
  <div style={{ color: 'black' }}>hello, world</div>,
  {
    width: 600,
    height: 400,
    fonts: [
      {
        name: 'Roboto',
        data: Roboto,
        weight: 400,
        style: 'normal',
      },
    ],
  },
)
```

## License

MIT
