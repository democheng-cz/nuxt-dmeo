<template>
	<div>
		<h1>新闻列表</h1>
		<ul v-if="news.length">
			<li v-for="item in news" :key="item.id">
				<h2>{{ item.title }}</h2>
				<p>{{ item.content }}</p>
				<small>{{ item.date }}</small>
			</li>
		</ul>
		<p v-else>加载中...</p>
		<!-- 清除缓存的按钮 -->
		<button class="bg-orange-400 p-1 rounded" @click="handleClear">
			清除缓存
		</button>
	</div>
</template>

<script setup>
const nuxtApp = useNuxtApp()
// 确保缓存生效
const { data, clear } = await useAsyncData(
	"news", // 使用固定的key
	() => {
		return $fetch("/api/test")
	},
	{
		transform(value) {
			return {
				...value,
				date: Date.now() + 6 * 1000, // 过期时间
			}
		},
		getCachedData(key) {
			const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key]
			console.log(data)
			if (!data) return
			const date = data.date
			// 过期时间
			const isExpirTime = Date.now() > date
			// 过期了
			if (isExpirTime) return
			else return data
		},
	}
)
const news = data.value?.news || []

const handleClear = () => {
	clear()
	throw "test"
}
</script>

<style scoped>
ul {
	list-style-type: none;
	padding: 0;
}

li {
	margin-bottom: 20px;
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 5px;
}

h2 {
	margin: 0 0 10px;
}

p {
	margin: 0 0 5px;
}

small {
	color: #888;
}
</style>
