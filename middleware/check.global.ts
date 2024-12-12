// 全局中间件，所有路由都会执行
export default defineNuxtRouteMiddleware((to, from) => {
	// 验证参数
	const validateParams = (route: typeof to) => {
		const id = route.params.id as string
		if (id && !/^\d+$/.test(id)) {
			return navigateTo("/404")
		}
	}
	if (to.path.includes("/user")) {
		return validateParams(to)
	}
})
