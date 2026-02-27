// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://targetmate.birju.dev',
  output: 'static',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  },
});
