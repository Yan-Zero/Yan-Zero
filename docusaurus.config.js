// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Yan\'s Blog',
  tagline: '这里言的博客，以及苦咖啡的文档。',
  url: 'https://cc.timedegree.cc/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  deploymentBranch: "main",
  organizationName: 'Yan-Zero',
  projectName: 'Yan-Zero.github.io',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Yan-Zero/Yan-Zero/tree/main/',
          id: "docs",
          routeBasePath: 'docs',
          path: "docs",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          showLastUpdateTime: true,
          editUrl:
            'https://github.com/Yan-Zero/Yan-Zero/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }
    ]
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl:
          'https://github.com/Yan-Zero/Yan-Zero/tree/main/',
        id: "note",
        routeBasePath: 'note',
        path: "note",
        remarkPlugins: [remarkMath],
        // rehypePlugins: [rehypeKatex],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Yan',
        items: [
          {
            position: 'left',
            label: '程序',
            items: [
              {
                docsPluginId: "docs",
                type: 'doc',
                docId: 'index',
                label: '介绍',
              },
              {
                docsPluginId: "docs",
                type: 'doc',
                docId: 'coffee/index',
                label: '苦咖啡',
              }
            ]
          },
          {
            position: 'left',
            label: '笔记',
            items: [
              {
                docsPluginId: "note",
                type: 'doc',
                docId: 'index',
                label: '主页',
              }
            ]
          },
          {
            href: 'https://github.com/Yan-Zero/Yan-Zero',
            label: 'GitHub',
            position: 'right',
          },
          {
            label: '更多',
            position: 'right',
            items: [
              { to: '/blog', label: '博客' },
              { to: 'friends', label: '友链' },
              { to: '/about-me', label: '关于我' },
            ],
          }
        ],
        hideOnScroll: true,
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Yan.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
};

module.exports = config;
