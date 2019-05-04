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
    sidebar: {
      "/foo/": [
        "" /* /foo/ */,
        "one" /* /foo/one.html */,
        "two" /* /foo/two.html */
      ],

      "/bar/": [
        "" /* /bar/ */,
        "three" /* /bar/three.html */,
        "four" /* /bar/four.html */
      ],

      // fallback
      "/": [
        "" /* / */,
        "contact" /* /contact.html */,
        "about" /* /about.html */
      ]
    }
  }
};
