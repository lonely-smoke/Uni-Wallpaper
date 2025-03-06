<template>
  <view class="colorBg">
    <view class="header">
    	<image class="img-avatar" src="/static/xxmLogo.png"></image>
    	<view class="name">孤烟</view>
    	<view class="address">来自于：山西</view>
    </view>
    <view class="nav1">
    	<common-button class="bottomLine" navigateUrl="/pages/list/list" iconType="download-filled" title="我的下载"></common-button>
      <!-- #ifndef MP-WEIXIN -->
        <common-button iconType="star-filled" navigateUrl="/pages/list/list" title="我的评分"></common-button>
      <!-- #endif -->
      <!-- #ifdef MP-WEIXIN -->
        <common-button class="bottomLine" iconType="star-filled" navigateUrl="/pages/list/list" title="我的评分"></common-button>
        <button open-type="contact">联系客服</button>
        <common-button iconType="person-filled" title="联系客服"></common-button>
      <!-- #endif -->
    </view>
    <view class="nav2">
    	<common-button class="bottomLine" iconType="notification-filled" title="订阅更新"></common-button>
    	<common-button class="bottomLine" iconType="help-filled" title="常见问题"></common-button>
    </view>
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
	height: 380rpx;
	.img-avatar{
		width: 150rpx;
		height: 150rpx;
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
  border-radius: 10rpx;
  overflow: hidden;
  box-shadow: 0 0 50rpx rgba(0, 0, 0, 0.08);
  position: relative;
  .bottomLine{
    border-bottom: 1rpx solid #C8C8C8;
  }
  button{
    position: absolute;
    height: 120rpx;
    width: 100%;
    opacity: 0%;
  }
}
.nav2{
  margin: 20rpx 30rpx;
  border-radius: 10rpx;
  overflow: hidden;
  box-shadow: 0 0 50rpx rgba(0, 0, 0, 0.08);
  .bottomLine{
    border-bottom: 1rpx solid #C8C8C8;
  }
}
</style>
