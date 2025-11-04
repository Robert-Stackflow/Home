import { defineCollection, z } from "astro:content";

import { glob, file } from "astro/loaders";

const postCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/post" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    modDate: z.date().optional(),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
    keywords: z.array(z.string()).optional(),
    heroImage: z.string().optional(),
  }),
});

const docsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/docs" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    modDate: z.date().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = {
  post: postCollection,
  docs: docsCollection,
};
