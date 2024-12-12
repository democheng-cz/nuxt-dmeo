<template>
	<div class="poem-container">
		<div v-if="Object.keys(poem).length">
			<h1 class="poem-title">{{ poem.title }}</h1>
			<div class="poem-content">
				<!-- <p>床前明月光，疑是地上霜。</p>
			<p>举头望明月，低头思故乡。</p> -->
				<p>{{ poem.content }}</p>
			</div>
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

const { data } = await useAsyncData<any>(
	"poem",
	() => {
		return $fetch("/local-api/poem")
	},
	{
		transform(value) {
			return value.data.poem
		},
	}
)
const poem = ref<any>({})
poem.value = data.value || {}
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
