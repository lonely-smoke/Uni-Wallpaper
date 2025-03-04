<template>
  <view class="header">
		<image class="img-avatar" src="/static/xxmLogo.png"></image>
		<view class="name">孤烟</view>
		<view class="address">来自于：山西</view>
  </view>
	<view class="nav1">
		<common-button></common-button>
	</view>
</template>

<script setup>
  
</script>

<style lang="scss" scoped>
.header{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 450rpx;
	.img-avatar{
		width: 200rpx;
		height: 200rpx;
		border-radius: 50%;
		margin-bottom: 20rpx;
	}
	.name{
		font-size: 50rpx;
		margin-bottom: 5rpx;
	}
	.address{
		color: #333;
	}
} 
.nav1{
	margin: 0 30rpx;
}
</style>
