import {defineConfig} from 'vite'

export default defineConfig({
  plugins: [],

  build: {
    rollupOptions: {
      input: {
        index: './index.html',
      },
    },
  },
  server: {
    port: 2000,
    open: true,
  },
})