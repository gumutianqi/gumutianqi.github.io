# 古老师的博客（VuePress v2）

[![Build and Deploy](https://github.com/gumutianqi/gumutianqi.github.io/actions/workflows/pages.yml/badge.svg?branch=main)](https://github.com/gumutianqi/gumutianqi.github.io/actions/workflows/pages.yml)

访问博客：`https://gumutianqi.github.io/`

也可通过自定义域名访问：`https://larrykoo.com/`

这是古老师的个人技术博客，专注云原生、AI/LLM/Agent 与工程实践的原创分享。站点基于 VuePress v2 + Vite 构建，并通过 GitHub Actions 自动发布到 `gh-pages` 分支。

---

## 特性一览
- 基于 VuePress v2（bundler: Vite）与 `vuepress-theme-hope`
- 代码高亮（Shiki）与数学公式（KaTeX）
- 自动生成 sitemap、robots.txt，并开启基础 SEO/跳转支持
- 按模块组织的导航与侧边栏，便于扩展与重构
- 使用 pnpm 管理依赖与构建

## 目录结构
```
├─ src/
│  ├─ README.md                 # 站内首页（可作为内容索引）
│  ├─ intro.md                  # 站点介绍/引导
│  ├─ llm/                      # AI/LLM 相关内容
│  ├─ posts/                    # 博文内容（按主题分目录）
│  └─ .vuepress/
│     ├─ config.ts              # VuePress 配置（base/title/语言等）
│     ├─ navbar/ & sidebar/     # 导航/侧边栏
│     ├─ styles/                # 主题扩展样式
│     └─ public/                # 公共静态资源（favicon、封面等）
└─ .github/workflows/pages.yml  # 构建与部署工作流（gh-pages）
```

## 本地开发
确保已安装 Node.js 20+ 与 pnpm。

```bash
pnpm install --frozen-lockfile
pnpm run docs:dev
```

启动后默认在 `http://localhost:8080` 访问（按控制台提示为准）。

## 构建发布
```bash
pnpm run docs:build
```
- 构建产物输出至 `src/.vuepress/dist`
- 仓库已配置 GitHub Actions：推送到 `main` 将自动构建并将产物发布到 `gh-pages` 分支
- Pages 来源请设置为 `gh-pages` 分支（仓库 Settings → Pages）

## 写作指南
- 在 `src/posts/` 新增目录与 `.md` 文件即可新增文章；图片可以放在文章同级目录或 `src/.vuepress/public`
- 建议使用 Frontmatter 组织元信息（标题/日期/摘要/封面等）：

```md
---
title: TektonCD 入门
date: 2025-09-01
summary: 一文入门 TektonCD 的核心概念与实践
cover: /covers/tektoncd-intro.png
---

# 正文标题
这里是正文内容……
```

## 自定义域名（可选）
- 在仓库 Pages 设置填写自定义域名并启用 HTTPS
- DNS 记录：`www` 子域名使用 CNAME 指向 `gumutianqi.github.io`；顶级域名可用 A/AAAA 指向 GitHub Pages IP
- 也可在发布产物中包含 `CNAME` 文件（或在工作流中使用 `cname` 选项）

## 技术栈与依赖
- VuePress `2.0.0-rc.24`
- vuepress-theme-hope `2.0.0-rc.94`
- Bundler: `@vuepress/bundler-vite`
- Shiki 代码高亮、KaTeX 数学公式

## 许可协议
本仓库采用 MIT License。

—— 欢迎 Star、分享与交流，感谢关注！
