<template>
  <view class="classify-layout colorBg">
    <common-card v-for="index in 15"></common-card>
  </view>
</template>

<script setup>
  
</script>

<style lang="scss" scoped>
  .classify-layout{
    padding: 15rpx 30rpx;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15rpx;
    padding-bottom: 300rpx;
  }
</style>
