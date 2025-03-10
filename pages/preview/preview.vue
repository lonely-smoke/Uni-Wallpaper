<template>
	<view class="preview">
    <swiper class="swiper">
      <swiper-item class="imageContainer" v-for="index in 6">
        <image class="img" src="/common/images/preview2.jpg" mode="heightFix"></image>
      </swiper-item>
    </swiper>
		<view class="mask">
			<view class="index">3 / 9</view>
      <view class="time">
        <uni-dateformat :date="Date()" format="hh:mm"></uni-dateformat>
      </view>
      <view class="date">
        <uni-dateformat :date="Date()" format="MM月dd日"></uni-dateformat>
      </view>
      <view class="tabList">
        <view class="tab">
          <uni-icons class="tab1Icon" type="info" size="50rpx"></uni-icons>
          <view class=" tab1Text">信息</view>
        </view>
        <view class="tab">
          <uni-icons class="tab2Icon" type="star" size="50rpx"></uni-icons>
          <view class=" tab2Text">收藏</view>
        </view>
        <view class="tab">
          <uni-icons class="tab3Icon" type="download" size="50rpx"></uni-icons>
          <view class=" tab3Text">下载</view>
        </view>
      </view>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
.preview{
	height: 100vh;
  
  .swiper{
    height: 100%;
    .imageContainer{
      height: 100%;
      .img{
      	height: 100%;
      }
    }
  }

	.mask{
		.index{
			position: absolute;
			top: 10vh;
			backdrop-filter: blur(10px);
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 40rpx;
      color: white;
      padding: 4rpx 20rpx;
      overflow: hidden;
			margin: 0 auto;
      left: 0;
      right: 0;
      width: fit-content;
      // letter-spacing: 8rpx;
		}
    .time{
      position: absolute;
      top: 14vh;
      right: 0;
      left: 0;
      width: fit-content;
      margin: 0 auto;
      font-size: 130rpx;
      color: white;
      font-weight: lighter;
      letter-spacing: 8rpx;
    }
    .date{
      position: absolute;
      top: 24vh;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: fit-content;
      color: white;
    }
    .tabList{
      position: absolute;
      bottom: 10vh;
      display: flex;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: fit-content;
      background-color: rgba(255, 255, 255, 0.9);
      padding: 15rpx 20rpx;
      align-items: center;
      justify-content: center;
      border-radius: 100rpx;
      .tab{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 45rpx;
      }
    }
	}
}
</style>
