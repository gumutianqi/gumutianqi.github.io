import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "开发日记", icon: "laptop", link: "/posts/" },
  { text: "AI 日记", icon: "robot", link: "/llm/" },
  { text: "关于我", icon: "info", link: "/intro.html" },
]);
