// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: process.env.NODE_ENV === "development" },

	app: {
		baseURL: "/dist", // Set the base URL for your application
		cdnURL: "/dist",
	},

	nitro: {
		output: {
			publicDir: "dist",
		},
		prerender: {
			routes: ["/", "/about", "/user"],
			ignore: [],
		},
	},

	plugins: ["~/plugins/test-plugin.ts"],
})
