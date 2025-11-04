import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkToc from "remark-toc";
import rehypePresetMinify from 'rehype-preset-minify';
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [
    tailwind(),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: { theme: "dracula" },
      remarkPlugins: [remarkToc],
      rehypePlugins: [rehypePresetMinify],
      remarkRehype: { footnoteLabel: "Footnotes" },
      gfm: false,
    }),
  ],
  markdown: {
    layouts: {
      "src/content/**/*.md": "src/layouts/post.astro",
      "src/pages/**/*.mdx": "src/layouts/post.astro",
    },
    remarkPlugins: [remarkMath, [remarkToc, { heading: "toc", maxDepth: 5 }]],
    rehypePlugins: [rehypeKatex, rehypeAccessibleEmojis],
  },
});
