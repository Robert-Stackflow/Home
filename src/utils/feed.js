import Parser from "rss-parser";
import { FEED_URL } from "@/consts";

export async function get_feed_posts(len = 3) {
  const parser = new Parser();
  const feed = await parser.parseURL(FEED_URL);

  const latestPosts = feed.items.slice(0, len).map((item) => ({
    link: item.link,
    title: item.title,
    description: item.contentSnippet || item.content || item.summary || "",
    pubDate: item.pubDate
      ? new Date(item.pubDate).toLocaleDateString("zh-CN")
      : "",
  }));

  return latestPosts;
}
