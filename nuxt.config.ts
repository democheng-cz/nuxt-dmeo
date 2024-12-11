// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: true,
	compatibilityDate: "2024-11-01",
	devtools: { enabled: process.env.NODE_ENV === "development" },

	app: {
		baseURL: "/", // 修改这里，使用相对路径
		buildAssetsDir: "/_nuxt/", // 指定资源文件目录
	},

	nitro: {
		output: {
			// publicDir: "dist",
		},
		prerender: {
			routes: ["/", "/about", "/user"],
			ignore: [],
		},
	},

	plugins: ["~/plugins/test-plugin.ts"],
})
