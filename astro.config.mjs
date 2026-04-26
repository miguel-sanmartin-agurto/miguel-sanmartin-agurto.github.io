// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// 1. Importamos los plugins de matemáticas
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: 'https://miguel-sanmartin-agurto.github.io',
  
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],

  // 2. Añadimos la sección de Markdown para procesar LaTeX
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});