module.exports = {
  base: '/vuepress/', // pages 根目录
  port: "9999", // 配置端口
  title: 'Hello dachui', // vuepress 头部名称
  description: 'Just playing around', // vuepress 描述
  // permalink: "/:year/:month/:day/:slug",// 永久链接
  head: [
    [
      "link", // 自定义的 favicon
      { rel: "icon", href: "https://github.githubassets.com/favicon.ico" }
    ]
  ],
}