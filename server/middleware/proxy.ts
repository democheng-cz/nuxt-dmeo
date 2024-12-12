export default defineEventHandler(async event => {
	const config = useRuntimeConfig()

	// 获取请求路径
	const path = getRequestURL(event).pathname

	// 如果是 API 请求
	if (path.startsWith("/onlin-api")) {
		// 设置代理目标
		const target = "https://server.bluen.cn"

		// 移除 /onlin-api 前缀
		const newPath = path.replace(/^\/onlin-api/, "")

		// 转发请求
		try {
			const response = await $fetch(target + newPath, {
				method: event.method,
				body: event.body,
				headers: {
					...event.headers,
					host: new URL(target).host,
				},
			})

			return response
		} catch (error) {
			console.error("代理请求失败:", error)
			throw error
		}
	}
})
