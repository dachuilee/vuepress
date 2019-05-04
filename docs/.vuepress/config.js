module.exports = {
  base: "/vuepress/",
  title: "da chui",
  description: "Just up up",
  head: [
    [
      "link",
      { rel: "icon", href: "https://github.githubassets.com/favicon.ico" }
    ]
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "https://vuepress.vuejs.org/zh/guide/" },
      { text: "github", link: "https://github.com/dachuilee/vuepress" }
    ],
    displayAllHeaders: true, // 默认值：false
    // sidebar: 'auto',
    // sidebar: {
    //   "/foo/": [
    //     "" /* /foo/ */,
    //     "one" /* /foo/one.html */,
    //     "two" /* /foo/two.html */
    //   ],

    //   "/bar/": [
    //     "" /* /bar/ */,
    //     "three" /* /bar/three.html */,
    //     "four" /* /bar/four.html */
    //   ],

    //   // fallback
    //   "/": [
    //     "" /* / */,
    //     "contact" /* /contact.html */,
    //     "about" /* /about.html */
    //   ]
    // }
    sidebar: [
      {
        title: 'foo',
        children: [
          '/foo/',
          '/foo/one',
          '/foo/two'
        ]
      },
      {
        title: 'bar',
        children: [
          "/bar/",
          "/bar/three",
          "/bar/four"
        ]
      },
      {
        title: 'fallback',
        children: [
          "",
          "/contact",
          "/about"
        ]
      },
    ],
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'dachuilee/vuepress',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'dachuilee/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！'
  }
};
