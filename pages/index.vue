<template>
	<div>
		<h1>首页</h1>
		<p>欢迎来到我们的主页。</p>
	</div>
</template>

<script lang="ts" setup>
definePageMeta({
	layout: "default",
})

const { $testPlugin } = useNuxtApp()

console.log($testPlugin)
$testPlugin()
</script>

<style scoped lang="less"></style>
