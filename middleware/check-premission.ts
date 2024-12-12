// 定义一个用于权限检测的中间件
export default defineNuxtRouteMiddleware(to => {
	const requiredPermission = to.meta.requiredPermission
	console.log(requiredPermission, to)
	if (requiredPermission) {
		// 显示错误信息
		const nuxtApp = useNuxtApp() as any
		nuxtApp.$toast?.error("没有访问权限")

		// 重定向
		return navigateTo("/")
	}
})
