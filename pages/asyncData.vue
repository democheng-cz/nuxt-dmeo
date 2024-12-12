<template>
	<div class="poem-container">
		<div v-if="Object.keys(onlineData).length">
			<div>{{ onlineData["design"] }}</div>
			<div>{{ onlineData["factory"] }}</div>
			<div>{{ onlineData["full_room"] }}</div>
			<div>{{ onlineData["hbs"] }}</div>
			<div>{{ onlineData["thinker_vip"] }}</div>
			<div>{{ onlineData["vip"] }}</div>
			<div>{{ onlineData["wood"] }}</div>
		</div>
		<div v-else>暂无数据。。。。。</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	title: "诗词展示",
	layout: "custom-layout",
	middleware: ["check-premission"],
	// 自定义meat属性
	requiredPermission: false,
})
const onlineData = ref<any>({})
setTimeout(() => {
	// 线上接口测试
	useAsyncData<any>("blune", () => {
		return $fetch("https://ggtools.thinkerx.com/user_num_statistics", {
			method: "get",
		})
	}).then(res => {
		console.log(res.data.value.data)
		onlineData.value = res.data.value.data
	})
	console.log(onlineData.value, "bluneData")
}, 3000)
</script>

<style scoped>
.poem-container {
	padding: 20px;
	font-family: "Songti SC", serif;
	line-height: 1.6;
	background-color: #f9f9f9;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	max-width: 600px;
	margin: 20px auto;
}

.poem-title {
	font-size: 28px;
	margin-bottom: 20px;
	text-align: center;
	color: #333;
}

.poem-content {
	font-size: 20px;
	color: #555;
	text-align: center;
}
</style>
