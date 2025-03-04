<template>
	<view class="root">
		<view class="left">
			<uni-icons type="download-filled" color="green" size="50rpx"></uni-icons>
			<view class="title">我的下载</view>
		</view>
		<view class="right">
			<view class="num">11</view>
			<uni-icons type="right" color="green" size="50rpx"></uni-icons>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
.root{
	display: flex;
	align-items: center;
	background-color: #EEE;
	height: 120rpx;
	justify-content: space-between;
	border-radius: 10rpx;
	overflow: hidden;
	box-shadow: 0 0 50rpx rgba(0, 0, 0, 0.04);
	.right{
		display: flex;
		align-items: center;
		margin-right: 20rpx;
	}
	.left{
		display: flex;
		align-items: center;
		margin-left: 20rpx;
		.title{
			font-size: 35rpx;
			margin-left: 15rpx;
		}
	}
}
</style>