// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');


/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'xycLoans: Flash Loans and Liquidity protocol on the Soroban VM',
    tagline: 'Bringing flash loans to the Soroban ecosystem',
    favicon: 'https://avatars.githubusercontent.com/u/95138535?s=200&v=4',

    // Set the production url of your site here
    url: 'https://xycloans.xycloo.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'xyclooLabs', // Usually your GitHub org/user name.
    projectName: 'xycLoans', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',


    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
	defaultLocale: 'en',
	locales: ['en'],
    },

    presets: [
	[
	    'classic',
	    /** @type {import('@docusaurus/preset-classic').Options} */
	    ({
		docs: {
		    sidebarPath: require.resolve('./sidebars.js'),
		    // Please change this to your repo.
		    // Remove this to remove the "edit this page" links.
		    editUrl:
		    'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
		    remarkPlugins: [math],
		    rehypePlugins: [katex],

		},
		blog: {
		    showReadingTime: true,
		    // Please change this to your repo.
		    // Remove this to remove the "edit this page" links.
		    editUrl:
		    'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
		},
		theme: {
		    customCss: require.resolve('./src/css/custom.css'),
		},
	    }),
	],
    ],

    stylesheets: [
	{
	    href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
	    type: 'text/css',
	    integrity:
	    'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
	    crossorigin: 'anonymous',
	},
    ],
    
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
	// Replace with your project's social card
	image: 'img/docusaurus-social-card.jpg',
	navbar: {
            title: '',
            logo: {
		alt: 'xycLoans logo',
		src: 'https://raw.githubusercontent.com/xycloo/xycloans-interface/main/src/lib/images/logo.png',
            },
            items: [
		{
		    type: 'docSidebar',
		    sidebarId: 'tutorialSidebar',
		    position: 'left',
		    label: 'Docs',
		},
		//          {to: '/blog', label: 'Blog', position: 'left'},

		{
		    href: 'https://discord.com/invite/w7fBhSS34Q',
		    label: 'Discord',
		    position: 'right',
		},
		{
		    href: 'https://twitter.com/xyclooLabs/',
		    label: 'Twitter',
		    position: 'right',
		},
		{
		    href: 'https://github.com/xycloo/xycloans',
		    label: 'Core',
		    position: 'right',
		},
		{
		    href: 'https://github.com/xycloo/xycloans-interface',
		    label: 'Interface',
		    position: 'right',
		},
		{
		    href: 'https://app.xycloans.xycloo.com/',
		    label: 'Launch the App',
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
			    label: 'Getting started',
			    to: '/docs/intro',
			},
		    ],
		},
		{
		    title: 'Community',
		    items: [
			{
			    label: 'Discord',
			    href: 'https://discord.com/invite/w7fBhSS34Q',
			},
			{
			    label: 'Twitter',
			    href: 'https://twitter.com/xyclooLabs',
			},
		    ],
		},
		{
		    title: 'More',
		    items: [
			{
			    label: 'Xycloo Labs',
			    to: 'https://xycloo.com/',
			},
			{
			    label: 'GitHub',
			    href: 'https://github.com/facebook/docusaurus',
			},
		    ],
		},
            ],
	    //        copyright: `Copyright © ${new Date().getFullYear()} Xycloo Labs, Inc. Built with Docusaurus.`,
	},
	prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
	    additionalLanguages: ['rust'],
	},
    }),
};

module.exports = config;
