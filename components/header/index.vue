<template>
	<div class="header">
		<nav class="nav">
			<ul class="nav-list">
				<li class="nav-item"><NuxtLink :to="{ path: '/' }">首页</NuxtLink></li>
				<li class="nav-item">
					<NuxtLink :to="{ path: '/about' }">关于我们</NuxtLink>
				</li>
				<li class="nav-item">
					<NuxtLink :to="{ path: '/user' }">联系我们</NuxtLink>
				</li>
				<li class="nav-item">
					<NuxtLink :to="{ path: '/news' }">新闻列表</NuxtLink>
				</li>
				<li class="nav-item">
					<NuxtLink :to="{ path: '/poem' }">诗词展示</NuxtLink>
				</li>
				<li class="nav-item">
					<NuxtLink :to="{ path: '/image' }">图片展示</NuxtLink>
				</li>
				<li class="nav-item">
					<NuxtLink :to="{ path: '/asyncData' }">setTimeout</NuxtLink>
				</li>
				<li class="nav-item">
					<NuxtLink :to="{ path: '/awaitData' }">await</NuxtLink>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script lang="ts" setup></script>

<style scoped>
.header {
	background-color: #f8f9fa;
	padding: 10px 20px;
	border-bottom: 1px solid #e7e7e7;
}

.nav {
	display: flex;
	justify-content: space-between;
}

.nav-list {
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
}

.nav-item {
	margin-right: 20px;
}

.nav-item a {
	text-decoration: none;
	color: #333;
	font-weight: bold;
}

.nav-item a:hover {
	color: #007bff;
}
</style>
