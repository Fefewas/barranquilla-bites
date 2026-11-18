import { fileURLToPath } from 'node:url'
import { cwd, env } from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig(({ mode }) => {
  const googleEnv = loadEnv(mode, cwd(), 'GOOGLE_')
  for (const name of ['GOOGLE_MAPS_API_KEY', 'GOOGLE_PLACES_API_TOKEN']) {
    if (env[name] === undefined && googleEnv[name] !== undefined) {
      env[name] = googleEnv[name]
    }
  }

  return {
    preview: {
      allowedHosts: ['barrel-proceeds-treasurer-largely.trycloudflare.com'],
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    plugins: [devtools(), tailwindcss(), tanstackStart(), viteReact()],
  }
})

export default config
