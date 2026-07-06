import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works both at l3thily.github.io/<repo>/ (PR preview)
// and at the custom domain root https://dkarpov.is-a.dev/
export default defineConfig({
  base: './',
  plugins: [react()],
})
