import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'web102_project1';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
})
