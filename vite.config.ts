import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // gh pages -> base: '/portfolio1.1/'/
  base: './' //vercel
  
})
