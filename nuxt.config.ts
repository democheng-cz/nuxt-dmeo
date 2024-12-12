// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: true,
	compatibilityDate: "2024-11-01",
	devtools: { enabled: process.env.NODE_ENV === "development" },

	app: {
		baseURL: "/", // 修改这里，使用相对路径
	},

	// 输出静态页面
	nitro: {
		output: {
			// publicDir: "dist",
		},
		prerender: {
			routes: ["/", "/about", "/user"],
			ignore: [],
		},
	},

	// 模块
	modules: ["@nuxtjs/tailwindcss"],

	plugins: ["~/plugins/test-plugin.ts"],

	// 处理跨域(开发时跨域配置)
	vite: {
		server: {
			proxy: {
				"/local-api": {
					target: "http://127.0.0.1:8080",
					changeOrigin: true,
					prependPath: true,
					rewrite: path => path.replace(/^\/local-api/, "/api"),
				},
			},
		},
	},
})
