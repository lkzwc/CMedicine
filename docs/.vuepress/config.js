import { defaultTheme, defineUserConfig } from "vuepress";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";

export default defineUserConfig({
  lang: "zh-CN",
  base: "/",
  title: "华夏中医",
  description: "华夏中医",
  theme: defaultTheme({
    navbar: [
      // NavbarItem
      {
        text: "基础",
        link: "/basic",
      },
      {
        text: "针灸",
        link: "/zhen",
      },
      // NavbarGroup
      {
        text: "方剂",
        children: ["/group/foo.md", "/group/bar.md"],
      },
      // 字符串 - 页面文件路径
      "/bar/README.md",
    ],
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
