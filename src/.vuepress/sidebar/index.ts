import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  // 根路径 - Blog 首页的 sidebar
  "/": [
    {
      text: "开发日记",
      icon: "note",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
  ],
  
  // AI 日记专用 sidebar
  "/llm/": [
    {
      text: "AI 日记",
      icon: "robot",
      children: "structure",
    }
  ],
  
  // 技术文章专用 sidebar  
  "/posts/": [
    {
      text: "开发日记",
      icon: "laptop",
      children: "structure",
    }
  ]
});