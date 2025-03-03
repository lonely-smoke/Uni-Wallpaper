<template>
  <view class="classify-layout">
    <common-card v-for="index in 15"></common-card>
  </view>
</template>

<script setup>
  
</script>

<style lang="scss" scoped>
  .classify-layout{
    margin: 15rpx 30rpx;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15rpx;
    padding-bottom: 300rpx;
  }
</style>
