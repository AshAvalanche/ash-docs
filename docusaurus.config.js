// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Ash",
  tagline: "Appchain-as-a-Service platform",
  favicon: "img/ash-logo.svg",

  // Set the production url of your site here
  url: "https://ash.center/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "AshAvalanche", // Usually your GitHub org/user name.
  projectName: "ash-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/AshAvalanche/ash-docs/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
      },
      // Replace with your project's social card
      image: "img/ash-social-card.png",
      navbar: {
        title: "Ash",
        logo: {
          alt: "Ash Logo",
          src: "img/ash-logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "console/index",
            position: "left",
            label: "Console docs",
          },
          {
            type: "doc",
            docId: "toolkit/index",
            position: "left",
            label: "Toolkit docs",
          },
          {
            type: "doc",
            docId: "professional-services/index",
            position: "left",
            label: "Professional services",
          },
          {
            href: "https://github.com/AshAvalanche/ash-docs",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
          {
            href: "https://twitter.com/ash_avax",
            position: "right",
            className: "header-twitter-link",
            "aria-label": "Twitter account",
          },
          {
            href: "https://discord.gg/7xSEzC2n7v",
            position: "right",
            className: "header-discord-link",
            "aria-label": "Discord server",
          },
          {
            href: "https://linktr.ee/ash.center",
            position: "right",
            label: "Linktree",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Content",
            items: [
              {
                label: "Console",
                to: "/docs/console",
              },
              {
                label: "Toolkit",
                to: "/docs/toolkit",
              },
              {
                label: "Professional services",
                to: "/docs/professional-services",
              },
            ],
          },
          {
            title: "Developers",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/AshAvalanche/ash-docs",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/ash_avax",
              },
              {
                label: "Discord",
                href: "https://discord.gg/7xSEzC2n7v",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/@ash_avax",
              },
            ],
          },
        ],
        copyright: `Copyright © 2022-${new Date().getFullYear()} E36 Knots - Built with Docusaurus`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
