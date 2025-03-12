<template>
  <view class="commonNavbar">
    <view class="fixbar colorBg">
      <view class="stateBar fix" :style="{height: getStatusBarHeight() + 'px'}"></view>
      <view class="titleBar fix" :style="{height: getTitleBarHeight() + 'px'}">
        <view class="title">推荐</view>
        <view class="search">
          <uni-icons type="search" size="21" color="gray"></uni-icons>
          <view>搜索</view>
        </view>
      </view>      
    </view>
    <view class="fill" :style="{height: getTitleBarHeight() + getStatusBarHeight() + 'px'}"></view>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue';
import { getStatusBarHeight, getTitleBarHeight } from '../../utils/system';
const stateHeight = computed(() => {
  getStatusBarHeight() + 'px';
});
const titleHeight = computed(() => {
  getTitleBarHeight() + 'px';
})
</script>

<style lang="scss" scoped>
.commonNavbar{
  .stateBar{
    
  }
  .titleBar{
    display: flex;
    align-items: center;
    .title{
      font-size: 50rpx;
      font-weight: bold;
      padding: 0 20rpx;
    }
    .search{
      display: flex;
      align-items: center;
      font-size: 29rpx;
      background-color: rgba(255, 255, 255, 0.5);
      padding: 5rpx 100rpx 5rpx 15rpx;
      border-radius: 40rpx;
      color: gray;
      margin-left: 10rpx;
    }
  }
  .fixbar{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  }
  .fill{
    
  }
}
</style>