/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'C2C React Native Template',
  tagline: 'Template For React Native',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'C2C React Native Template Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'right',
          label: 'Tutorial',
        },
        // {to: '/blog', label: 'Blog', position: 'right'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
            {
              label: 'Website',
              href: 'https://c2c-techhub.io/',
            },
            {
              label: 'Fanpage',
              href: 'https://www.facebook.com/c2c.techhub.io',
            },
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} C2C TechHub. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
