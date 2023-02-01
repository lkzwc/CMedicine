import { defaultTheme, defineUserConfig } from "vuepress";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";

const navBar = [
  {
    text: "基础",
    link: "/basic",
  },
  {
    text: "针灸",
    link: "/zhen",
  },
  {
    text: "方剂",
    link: "/fangji",
  },
  {
    text: "中药",
    link: "/tcm",
  },
];

const header = [
  [
    "link",
    {
      rel: "icon",
      type: "images/png",
      sizes: "16x16",
      href: `/images/logo.png`,
    },
  ],
  ["meta", { name: "application-name", content: "华夏中医" }],
  ["meta", { name: "apple-mobile-web-app-title", content: "华夏中医" }],
  ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
  ["meta", { name: "theme-color", content: "#3eaf7c" }],
];
const siderBar = {
  "/basic": [
    {
      text: "中医基础",
      collapsible: true,
      children: [
        "/basic/mai/mai.md",
        "/basic/see/she1.md",
        "/basic/see/she2.md",
        "/basic/wuxing/wuxing.md",
      ],
    },
  ],
  "/fangji": [
    {
      text: "方剂",
      children: [
        "/basic/mai/mai.md",
        "/basic/see/she1.md",
        "/basic/see/she2.md",
        "/basic/wuxing/wuxing.md",
      ],
    },
  ],
};

export default defineUserConfig({
  head: header,
  lang: "zh-CN",
  base: "/",
  title: "华夏中医",
  description: "华夏中医,专业的中医学习网站",
  theme: defaultTheme({
    navbar: navBar,
    sidebar: siderBar,
    editLinkText: "Edit this page on GitHub",
  }),
  plugins: [backToTopPlugin()],
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "en-US",
      title: "华夏中医 | 弘扬中国传统文化",
      description: "Chinese Medicine",
    },
  },
});
