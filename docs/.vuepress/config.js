module.exports = {
  base: "/vuepress/", // pages 根目录
  port: "9999", // 配置端口
  title: "Hello dachui", // vuepress 头部名称
  description: "Just playing around", // vuepress 描述
  // permalink: "/:year/:month/:day/:slug",// 永久链接
  head: [
    [
      "link", // 自定义的 favicon
      { rel: "icon", href: "https://github.githubassets.com/favicon.ico" }
    ]
  ],
  markdown: {
    lineNumbers: true
  },
  plugins: [
    "@vuepress/active-header-links",
    "@vuepress/last-updated",
    "@vuepress/nprogress",
    "@vuepress/back-to-top"
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      {
        text: "Github",
        link: "https://github.com/dachuilee/vuepress/tree/master/docs"
      }
    ],
    lastUpdated: "更新于",
    displayAllHeaders: true,
    docsRepo: "dachuilee/vuepress",
    docsDir: "docs",
    docsBranch: "master",
    editLinks: true,
    editLinkText: "improve my page",
    sidebar: [
      {
        title: "foo",
        path: "/foo/",
        children: ["/foo/","/foo/one", "/foo/two"]
      },
      {
        title: "bar",
        path: "/bar/",
        children: ["/bar/", "/bar/three", "/bar/four"]
      },
      {
        title: "fallback",
        children: ["/about/"]
      },
      {
        title: "重学前端",
        children: ["/重学前端/"]
      }
    ]
  },
  
};
