import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [tailwind(), mdx()],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  },
  content: {
    collections: [
      {
        name: 'experience',
        pattern: 'src/content/experience.md'
      }
    ]
  },
  site: 'https://Rohit-Medpalli123.github.io',
  base: '/PersonalWebsite',
  output: 'static'
});
