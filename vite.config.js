import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/newGrandmaKGames/', // This should be the name of your repository
  plugins: [react()],
})
