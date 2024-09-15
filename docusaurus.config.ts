import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: '鮪技研',
  tagline: '作ったものを適当に放流しています',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.ootr.jp',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/o-tr/docs/tree/master/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/o-tr/docs/tree/master/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '鮪技研',
      logo: {
        alt: '鮪技研',
        src: 'img/icon.png',
      },
      items: [
        {
          href: '/docs/vpm',
          position: 'left',
          label: 'ootr\'s vpm repository',
        },
        {
          href: '/docs/Packages',
          position: 'left',
          label: 'Packages',
        },
        {
          href: '/docs/TextZip',
          position: 'left',
          label: 'TextZip',
        },
        {
          href: '/docs/faq',
          position: 'left',
          label: 'FAQ',
        },
        {
          href: 'https://github.com/o-tr/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: "ootr's vpm repository",
              to: '/docs/vpm',
            },
            {
              label: 'Packages',
              to: '/docs/Packages',
            },
            {
              label: 'TextZip',
              to: '/docs/TextZip',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/o-tr/docs',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ootr_09922',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ootr. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
