import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  css: {
    postcss: './postcss.config.js'  // Explicitly point to the PostCSS config file
  },
  plugins: [react()],
  server:{
    open:true
  }
})
