import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "button": path.resolve(__dirname, 'src/button/'),
      "input": path.resolve(__dirname, 'src/input/'),
      "nested-components": path.resolve(__dirname, 'src/nested-components/'),
      "associative-array": path.resolve(__dirname, 'src/associative-array'),
    }
  }
})