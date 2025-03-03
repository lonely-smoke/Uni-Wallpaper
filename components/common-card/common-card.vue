<template>
	<view class="root">
		<view class="view-pic">
			<image class="image-back" src="/common/images/classify1.jpg" mode="aspectFit"></image>
		</view>
		<view class="view-bottom">帅哥靓仔</view>
		<view class="view-tip">1周前更新</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.root{
		position: relative;
		.view-pic{
			position: absolute;
			width: 220rpx;
			height: 340rpx;
			.image-back{
				height: 100%;
				width: 100%;
			}
		}
		.view-bottom{
			position: absolute;
			bottom: 40rpx;
		}
		.view-tip{
			position: absolute;
			top: 0rpx;
		}
	}
</style>