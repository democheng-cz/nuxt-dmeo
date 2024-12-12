export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.hook("app:error", error => {
		console.error("Global error:", error)
		// 你可以在这里添加错误日志、通知服务等
	})
	console.log("加载了吗")
	// const errorHandler = () => {
	// 	nuxtApp.hook("app:error", error => {
	// 		// 在这里处理全局错误
	// 		console.error("Global error:", error)
	// 		// 你可以在这里添加错误日志、通知服务等
	// 	})
	// }
	// nuxtApp.provide("errorHandler", errorHandler)
})
