import { fileURLToPath, URL } from 'node:url'
import { resolve, dirname } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '!': fileURLToPath(new URL('./public', import.meta.url))
    },
    extensions: [
        '.js',
        '.json',
        '.jsx',
        '.mjs',
        '.ts',
        '.tsx',
        '.vue',
    ],
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/pages/index.html'),
        about: resolve(__dirname, 'src/pages/about.html'),
        projects: resolve(__dirname, 'src/pages/projects.html'),
        ongoingProjects: resolve(__dirname, 'src/pages/ongoing-projects.html'),
        contact: resolve(__dirname, 'src/pages/contact.html')
      }
    }
  },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  server: {
    watch: {
        usePolling: true
    }
}
})
