<template>
	<view @click="onWelcome" class="welcome">
		
	</view>
</template>

<script setup>
	function onWelcome(){
		uni.switchTab({
			url:"/pages/index/index"
		})
	}
</script>

<style lang="scss" scoped>
.welcome{
	background-color: black;
	height: 800rpx;
	width: 100%;
}
</style>
