import { defineConfig } from "astro/config";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkToc from "remark-toc";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [remarkMath, [remarkToc, { heading: "toc", maxDepth: 5 }]],
    rehypePlugins: [rehypeKatex, rehypeAccessibleEmojis],
  },
});
