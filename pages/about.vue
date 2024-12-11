<template>
	<div>这是about,{{ a }}</div>
	<div>
		<button @click="handleGotoUser">跳转到user页面，通过按钮</button>
	</div>
	<div>
		<button @click="handleGotoUserForNavigate">
			跳转到user页面，通过navigate
		</button>
	</div>
	<!-- 通过nuxtLint进行跳转 -->
	<div>
		<NuxtLink :to="`user/${a}`">通过nuxtlint进行跳转</NuxtLink>
	</div>
	<div>
		<NuxtLink
			:to="{
				path: `user/${a}`,
				query: {
					name: '2222',
				},
			}"
			>通过nuxtlint进行跳转，带参数</NuxtLink
		>
	</div>
	<div><NuxtLink :to="`user/sads`">通过nuxtlint,错误跳转</NuxtLink></div>
</template>

<script lang="ts" setup>
definePageMeta({
	layout: "custom-layout",
})
const router = useRouter()
const a = ref(111)

const handleGotoUser = () => {
	router.push({
		path: `/user/${a.value}`,
	})
}

const handleGotoUserForNavigate = () => {
	navigateTo(`user/${a.value}`)
}
</script>

<style scoped lang="less"></style>
