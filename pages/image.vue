<template>
	<div class="image-container">
		<h1 class="image-title">图片展示</h1>
		<div class="image-content">
			<img :src="imageUrl" alt="展示图片" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue"

// 使用 public 文件夹中的图片
const imageUrl = ref("/images/test.jpg")
</script>

<style scoped>
.image-container {
	padding: 20px;
	font-family: "Arial", sans-serif;
	line-height: 1.6;
	background-color: #f9f9f9;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	max-width: 800px;
	margin: 20px auto;
	text-align: center;
}

.image-title {
	font-size: 28px;
	margin-bottom: 20px;
	color: #333;
}

.image-content img {
	max-width: 100%;
	height: auto;
	border-radius: 8px;
}
</style>
