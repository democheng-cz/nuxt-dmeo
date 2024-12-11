<template>
	<div>
		<Header />
		<main>
			<NuxtPage />
		</main>
		<Footer />
	</div>
</template>

<script setup>
import Header from "~/components/header/index.vue"
import Footer from "~/components/footer/index.vue"
</script>

<style scoped>
main {
	padding-top: 60px; /* 确保内容不被固定的header遮挡 */
	padding-bottom: 60px; /* 确保内容不被固定的footer遮挡 */
}
</style>
