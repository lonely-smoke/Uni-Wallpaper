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
        <view class="tab" @click="clickInfo">
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
	<uni-popup ref="popupInfo" type="bottom">
		<view class="popup-info">
			<scroll-view scroll-y>
				<view class="popupTitle">
					<view class="popupTitleLeft"></view>
					<view class="popupTitleMiddle">壁纸信息</view>
					<view class="popupTitleRight">
						<uni-icons type="closeempty" size="35rpx"></uni-icons>
					</view>
				</view>
				<view class="popupItem">
					<view class="popupItemTitle">壁纸ID</view>
					<text class="popupItemContent">
						<text class="id">123123123aabc</text>
					</text>
				</view>
				<view class="popupItem">
					<view class="popupItemTitle">分类</view>
					<view class="popupItemContent">
						<text class="popupItemContentClassify">明星美女</text>
					</view>
				</view>
				<view class="popupItem">
					<view class="popupItemTitle">发布者</view>
					<view class="popupItemContent">
						<text>咸虾米</text>
					</view>
				</view>
				<view class="popupItem">
					<view class="popupItemTitle">评分</view>
					<view class="popupItemContent comment">
						<uni-rate></uni-rate>
						<text class="commentText">5分</text>
					</view>
				</view>
				<view class="popupItem">
					<view class="popupItemTitle">摘要</view>
					<view class="popupItemContent">
						<text class="popupItemContent">这里是摘要的文字。这里是摘要的文字。这里是摘要的文字。这里是摘要的文字。这里是摘要的文字。这里是摘要的文字。这里是摘要的文字。</text>
					</view>
				</view>
				<view class="popupItem">
					<view class="popupItemTitle">标签</view>
					<view class="popupItemContent tagGroup">
						<text class="tag">标签名</text>
						<text class="tag">标签名</text>						
						<text class="tag">标签名</text>
					</view>
				</view>
				<view class="popupBottum">
					<text>
						声明：这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明，这里是声明。
					</text>
				</view>
				
			</scroll-view>
		</view>
	</uni-popup>
</template>

<script setup>
	import { ref } from 'vue';
	const popupInfo = ref(null);
	
	function clickInfo(){
		
		popupInfo.value.open();
		
	}
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
				opacity: 0;
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
.popup-info{
	background-color: white;
	max-height: 60vh;
	border-radius: 20rpx 20rpx 0 0;
	.popupTitle{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx 0;
		.popupTitleLeft{
			flex: 1;
		}
		.popupTitleMiddle{
			flex: 5;
			text-align: center;
			font-size: 35rpx;
		}
		.popupTitleRight{
			flex: 1;
			text-align: center;
			display: flex;
			justify-content: center;
		}
	}
	.popupItem{
		display: flex;
		padding: 15rpx 50rpx;
		.popupItemTitle{
			flex: 1;
			text-align: left;
			padding-right: 20rpx;
			color: rgba(0, 0, 0, 0.7);
		}
		.popupItemContent{
			flex: 5;
		}
		.popupItemContentClassify{
			color: green;
		}
		.comment{
			display: flex;
			align-items: center;
			.commentText{
				padding-left: 10rpx;
			}
		}
		.tagGroup{
			display: flex;
			align-items: center;
			.tag{
				border: 1rpx solid green;
				padding: 2rpx 10rpx;
				border-radius: 20rpx;
				margin-right: 5rpx;
				color: green;
				font-size: 25rpx;
			}
		}
	}
}
.popupBottum{
	margin: 20rpx 20rpx;
	border-radius: 20rpx;
	padding: 30rpx;
	color: rgba(0, 0, 0, 0.7);
	background-color: gray;
}
</style>
