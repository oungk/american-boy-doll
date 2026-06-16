import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/american-boy-doll/', // required for GitHub Pages subpath
})
