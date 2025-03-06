<template>
  <navigator :url="navigateUrl">
    <view class="root">
    	<view class="left">
    		<uni-icons :type="iconType" color="green" size="50rpx"></uni-icons>
    		<view class="title">{{title}}</view>
    	</view>
    	<view class="right">
    		<view class="num">{{num}}</view>
    		<uni-icons type="right" color="green" size="50rpx"></uni-icons>
    	</view>
    </view>
  </navigator>
</template>

<script setup>
	defineProps({
    iconType: {
      type: String,
      default: "download-filled"
    },
    title: {
      type: String,
      default: "我的下载"
    },
    num: {
      type: String,
      default: ""
    },
		navigateUrl: {
			type: String,
			default: ""
		}
  })
</script>

<style lang="scss" scoped>
.root{
	display: flex;
	align-items: center;
	background-color: #FFF;
	height: 120rpx;
	justify-content: space-between;
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