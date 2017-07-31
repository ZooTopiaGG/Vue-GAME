<template>
	<div class="bg"></div>
</template>

<script>
	export default{
		name:'bg'
	}
</script>

<style scoped>
	.bg{
		position:fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background: url("http://test2.lawyer-says.cn/images/02bg.png") no-repeat;
		background-size: cover;
		z-index: -1;
	}
</style>