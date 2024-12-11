// 注册一个插件
export default defineNuxtPlugin(nuxtApp => {
	const testPlugin = () => console.log("Hello from testPlugin!")

	nuxtApp.provide("testPlugin", testPlugin)
})
