<template>
	<div>这是userid为{{ route.params.id }}的页面</div>
	<div v-if="Object.keys(query).length">我的名字是：{{ query.name }}</div>
</template>

<script lang="ts" setup>
definePageMeta({
	layout: "default",
})
const route = useRoute()
const query = route.query
console.log(route.params)
console.log(query)

onMounted(() => {
	// validateParams()
})
</script>

<style scoped lang="less"></style>
