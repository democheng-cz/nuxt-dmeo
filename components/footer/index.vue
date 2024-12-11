<template>
	<div class="footer">
		<div class="footer-content">
			<p>© 2023 公司名称. 保留所有权利。</p>
			<ul class="footer-links">
				<!-- <li><a href="/privacy">隐私政策</a></li>
				<li><a href="/terms">服务条款</a></li>
				<li><a href="/contact">联系我们</a></li> -->
			</ul>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style scoped>
.footer {
	background-color: #343a40;
	color: #fff;
	padding: 20px;
	text-align: center;
	position: fixed;
	bottom: 0;
	width: 100%;
}

.footer-content {
	max-width: 800px;
	margin: 0 auto;
}

.footer-links {
	list-style: none;
	padding: 0;
	margin: 10px 0 0;
	display: flex;
	justify-content: center;
}

.footer-links li {
	margin: 0 15px;
}

.footer-links a {
	color: #adb5bd;
	text-decoration: none;
}

.footer-links a:hover {
	color: #fff;
}
</style>
