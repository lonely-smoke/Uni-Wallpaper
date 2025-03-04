<template>
	<view class="content colorBg">
    <view class="banner">
      <swiper indicator-dots indicator-color="rgba(255, 255, 255, 50%)" indicator-active-color="rgba(255, 255, 255, 100%)" autoplay circular>
        <swiper-item>
          <image src="/common/images/banner1.jpg" mode="aspectFit"></image>
        </swiper-item>
        <swiper-item>
          <image src="/common/images/banner2.jpg" mode="aspectFit"></image>
        </swiper-item>
        <swiper-item>
          <image src="/common/images/banner3.jpg" mode="aspectFit"></image>
        </swiper-item>
      </swiper>
    </view>
    
    <view class="notice">
      <view class="left">
        <uni-icons type="sound" size="40rpx" color="green"></uni-icons>
        <view>公告</view>
      </view>
      <view class="center">
        <swiper autoplay circular vertical interval="3000">
         <swiper-item>这是第一条公告</swiper-item>
          <swiper-item>这是第二条公告</swiper-item>
          <swiper-item>这是第三条很长很长很长很长很长很长的公告</swiper-item>
        </swiper>
      </view>
      <view class="right">
        <uni-icons type="right" size="40rpx"></uni-icons>
      </view>
    </view>
    
    <view class="select">
      <common-title>
        <template #title>每日推荐</template>
        <template #other>
          <uni-icons type="calendar" size="20" color="green"></uni-icons>
          <uni-dateformat class="date" :date="Date.now()" format="MM月dd日"></uni-dateformat>
        </template>
      </common-title>
      <view class="gallary">
        <scroll-view scroll-x :show-scrollbar="false" enhanced>
          <view class="photo" v-for="temp in 9">
            <image src="https://uy.wzznft.com/i/2025/03/02/za8egi.webp" mode="aspectFill"></image>
          </view>
        </scroll-view>
      </view>
      <view class="title2">
        <common-title>
          <template #title>专题精选</template>
          <template #other>More+</template>
        </common-title>
      </view>
			<view class="theme">
				<view class="theme-item" v-for="temp in 8">
					<common-card></common-card>
				</view>
        <common-card isMore></common-card>
			</view>
    </view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.content{
  .banner{
    padding-top: 20rpx;
    padding-bottom: 30rpx;
    height: 340rpx;
    width: 100%;
    // display: flex;
    // justify-content: center;
    swiper{
      width: 100%;
      height: 100%;
      swiper-item{
        display: flex;
        justify-content: center;
        image{
          height: 340rpx;
          width: 690rpx;
          border-radius: 20rpx;
        }
      }
    }
  }
  .notice{
    display: flex;
    height: 80rpx;
    background-color: #F5F5F5;
    align-items: center;
    justify-content: center;
    width: 690rpx;
    margin: 20rpx auto;
    border-radius: 40rpx;
    line-height: 80rpx;
    .left{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 140rpx;
      color: green;
      font-size: 28rpx;
      font-weight: 1000;
      padding-left: 20rpx;
      view{
        padding-left: 3rpx;
      }
    }
    .center{
      flex: 1;
      padding-left: 5rpx;
      color: #888;
      height: 100%;
      swiper{
        height: 100%;
        &-item{
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
    .right{
      width: 70rpx;
      display: flex;
      justify-content: center;
    }
  }
  
  .select{
    margin-left: 30rpx;
    margin-top: 10rpx;
    padding-bottom: 200rpx;
    .date{
      margin-left: 5rpx;
    }

    .gallary{
      margin-top: 20rpx;
      scroll-view{
        white-space: nowrap;
        .photo{
          display: inline-block;
          padding-right: 20rpx;
          image{
            height: 430rpx;
            width: 200rpx;
            border-radius: 10rpx;
          }
        }
        .photo:last-child{
          margin-right: 10rpx;
        }
      }
    }
    .title2{
      margin-top: 20rpx;
    }
		.theme{
      margin-top: 20rpx;
      padding-right: 30rpx;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
      grid-gap: 15rpx;
      width: 100%;
			.theme-item{
				width: 100%;
        height: 100%;
			}
		}
  }
}
</style>
