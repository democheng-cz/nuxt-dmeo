<template>
	<div class="layout-container">
		<Header />
		<div class="content-wrapper">
			<aside class="sidebar">
				<p>侧边栏内容</p>
			</aside>
			<main class="main-content">
				<NuxtPage />
			</main>
		</div>
		<Footer />
	</div>
</template>

<script setup>
import Header from "~/components/header/index.vue"
import Footer from "~/components/footer/index.vue"
</script>

<style scoped>
.layout-container {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.content-wrapper {
	display: flex;
	flex: 1;
}

.sidebar {
	width: 200px;
	background-color: #e0e0e0;
	padding: 20px;
}

.main-content {
	flex: 1;
	padding: 20px;
	background-color: #f0f0f0;
}

main {
	padding-top: 60px; /* 确保内容不被固定的header遮挡 */
	padding-bottom: 60px; /* 确保内容不被固定的footer遮挡 */
}
</style>
