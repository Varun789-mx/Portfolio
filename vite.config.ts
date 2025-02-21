import { defineConfig as defineCig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
export default defineCig({
  plugins:[
    tailwindcss(),
  ],
});