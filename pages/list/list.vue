<template>
  <view class="list">
    <view class="imgContainer" v-for="index in 10">
      <navigator url="/pages/preview/preview">
		  <image class="img" mode="widthFix" src="/common/images/preview1.jpg"></image>
	  </navigator>
    </view>
  </view>
</template>

<script setup>
</script>

<style lang="scss" scoped>
  .list{
    padding: 5rpx;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
		gap: 5rpx;
	.img{
		width: 100%;
		display: block;
	}
  }
</style>