import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkToc from "remark-toc";
import rehypePresetMinify from "rehype-preset-minify";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://cloudchewie.com",
  integrations: [
    tailwind(),
    sitemap(),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: { theme: "dracula" },
      remarkPlugins: [remarkMath, [remarkToc, { heading: "toc", maxDepth: 5 }]],
      rehypePlugins: [rehypeKatex, rehypeAccessibleEmojis, rehypePresetMinify],
      remarkRehype: { footnoteLabel: "Footnotes" },
      gfm: false,
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath, [remarkToc, { heading: "toc", maxDepth: 5 }]],
    rehypePlugins: [rehypeKatex, rehypeAccessibleEmojis],
  },
});
