import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
    lang: "zh-CN",
    title: "古拉里 学架构",
    description: "Just Do IT",
    head: [["link", { rel: "icon", href: "/images/favicon.ico" }]],
    theme: hopeTheme({
        logo: "/images/logo.png",
        hostname: "https://gumutianqi.github.io",
        repo: "https://github.com/gumutianqi",
        author: "Larry Koo",
        displayFooter: true,
        footer: "生命的意义是成为你自己",
        backToTop: true,
        iconAssets: "iconfont",
        navbar: [
            {
                text: "博客",
                link: "/blog/",
                icon: "keyboard",
            },
            {
                text: "读书笔记",
                link: "/book/",
                icon: "read",
            },
            {
                text: "间隙日记",
                link: "/diary/",
                icon: "note",
            },
        ],
        sidebar: {
            "/blog/": [
                {
                    text: "博客",
                    link: "/blog/",
                    icon: "keyboard",
                    children: [
                        {
                            text: "云原生",
                            icon: "launch",
                            link: "/blog/cloud-native/",
                            prefix: "/blog/cloud-native/",
                            children: ["first-know-tektoncd.md"],
                        },
                        {
                            text: "微服务",
                            icon: "leaf",
                            link: "/blog/microservice/",
                            prefix: "/blog/microservice/",
                            children: [],
                        },
                    ],
                },
            ],
            "/book/": [
                {
                    text: "读书笔记",
                    link: "/book/",
                    icon: "read",
                    children: [],
                },
            ],
            "/diary/": [
                {
                    text: "间隙日记",
                    link: "/diary/",
                    icon: "note",
                    children: ["hhkb-pro2-types-show.md"],
                },
            ],
        },
    }),
    plugins: [
        docsearchPlugin({
            appId: "",
            apiKey: "",
            indexName: "gumutianqi_awesome",
        }),
    ],
});
