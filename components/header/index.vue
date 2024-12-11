<template>
	<div class="header">
		<nav class="nav">
			<ul class="nav-list">
				<li class="nav-item"><NuxtLink href="/">首页</NuxtLink></li>
				<li class="nav-item"><NuxtLink href="/about">关于我们</NuxtLink></li>
				<li class="nav-item"><NuxtLink href="/user">联系我们</NuxtLink></li>
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
