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
	</div>
</template>

<script setup>
import { useAsyncData } from "#app"

const { data, error } = await useAsyncData("news", () => $fetch("/api/test"))

if (error.value) {
	console.error("数据加载失败:", error.value)
}

const news = data.value?.news || []
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
