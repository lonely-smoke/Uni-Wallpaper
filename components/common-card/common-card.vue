<template>
	<view class="root">
    <navigator url="" class="nav" v-if="!isMore">
     <view class="view-pic">
        <image class="image-back" src="/common/images/classify1.jpg"></image>
      </view>
      <view class="view-bottom">帅哥靓仔</view>
      <view class="view-tip">1周前更新</view>     
    </navigator>
    <navigator url="" class="nav-more" v-if="isMore">
      <view class="view-pic">
        <image class="image-back" src="/common/images/more.jpg"></image>
      </view>
      <view class="view-bottom">
        <uni-icons type="more-filled" size="40rpx" color="white"></uni-icons>
        <view>更多</view>
      </view>
    </navigator>
	</view>
</template>

<script setup>
defineProps({
  isMore: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
	.root{
    .nav{
      
    }
		position: relative;
    width: 100%;
    height: 340rpx;
    border-radius: 10rpx;
    overflow: hidden;
		.view-pic{
			position: absolute;
			width: 100%;
			height: 100%;
			.image-back{
				height: 100%;
				width: 100%;
			}
		}
		.view-bottom{
			position: absolute;
			bottom: 0rpx;
      width: 100%;
      text-align: center;
      height: 80rpx;
      line-height: 80rpx;
      background-color: rgba(0, 0, 0, 0.02);
      backdrop-filter: blur(15rpx);
      color: #EEE
		}
		.view-tip{
			position: absolute;
			background-color: orange;
      color: #EEE;
      font-size: 25rpx;
      width: 70%;
      text-align: center;
      line-height: 40rpx;
      height: 40rpx;
      border-radius: 0 0 30rpx 0;
		}
    .nav-more{
      .view-bottom{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        line-height: normal;
      }
    }
	}
</style>