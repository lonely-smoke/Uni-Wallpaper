<template>
  <view class="root">
    <view class="title">
      <slot name="title"></slot>
    </view>
    <view class="other">
      <slot name="other"></slot>
    </view>
  </view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.root{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50rpx;
  .title{
    font-size: 40rpx;
    font-weight: bold;
  }
  .other{
    margin-right: 30rpx;
    display: flex;
    align-items: center;
    color: green;
  }
}
</style>