/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
import tsconfigpaths from 'vite-tsconfig-paths'

export default defineConfig({
  test: {
    include: ['./src/**/*.test.{ts,tsx}']
  },
  plugins: [react(), tsconfigpaths()]
});
