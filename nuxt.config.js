export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'twitter',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ href: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap', rel:'stylesheet' }
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		//'~/assets/global.css',
	],

	tailwindcss: {
		cssPath: '~/assets/css/tailwind.css',
		configPath: 'tailwind.config.js',
		exposeConfig: false,
		config: {}
	},

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'@/plugins/mirage',
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: [
		'~components/',
		'~components/the-header',
		'~components/tweets',
		'~components/user-profile',
	],

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		'@nuxt/typescript-build',
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
		// https://github.com/whardier/nuxt-hero-icons
		'@nuxt-hero-icons/outline/nuxt',
		'@nuxt-hero-icons/solid/nuxt'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/axios',
	],

	axios: {
		baseURL: 'http://localhost:3000/api/',
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	},

	vue: {
		config: {
			productionTip: true,
			devtools: true,
		}
	},
};
