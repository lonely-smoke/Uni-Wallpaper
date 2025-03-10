<template>
	<view class="preview">
		<image class="img" src="/common/images/preview2.jpg" mode="heightFix"></image>
		<view class="mask">
			<view class="index">3/9</view>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
.preview{
	height: 100vh;
	position: relative;
	.img{
		height: 100%;
	}
	.mask{
		// position: absolute;
		top: 0rpx;
		left: 0rpx;
		width: 100%;
		height: 100%;
		position: absolute;
		.index{
			position: absolute;
			top: 10vh;
			background-color: red;
			margin: 0 auto;
		}
	}
}
</style>
