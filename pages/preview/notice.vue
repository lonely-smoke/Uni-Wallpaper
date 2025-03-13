<template>
	<view class="notice">
		<view class="noticeTitle">
			<uni-tag class="noticeTitleTag" text="公告" type="primary" inverted></uni-tag>
			<view class="noticeTitleText">这是一条公告</view>
		</view>
		<view class="noticeDate">
			<view class="noticeDateAuthor">咸虾米</view>
			<view class="noticeDateDate">
				<uni-dateformat :date="Date.now()"></uni-dateformat>
			</view>
		</view>
		<view class="noticeText">
			公告正文，公告正文，公告正文，公告正文，公告正文，公告正文，公告正文，公告正文。这里是公告正文。这里是公告正文。这里是公告正文。这里是公告正文。这里是公告正文。这里是公告正文。
		</view>
		<view class="noticeBottom">阅读 5678</view>
  </view>
</template>

<script setup>
	import { ref } from 'vue';

</script>

<style lang="scss" scoped>
.notice{
	padding: 20rpx 30rpx;
	.noticeTitle{
		padding: 30rpx 0;
		display: flex;
		align-items: center;
		.noticeTitleTag{
			margin-right: 30rpx;
		}
		.noticeTitleText{
			font-size: 24px;
		}
	}
	.noticeDate{
		color: gray;
		display: flex;
		.noticeDateAuthor{
			margin-right: 20rpx;
		}
		.noticeDateDate{
			
		}
	}
	.noticeText{
		padding: 30rpx 0;
	}
	.noticeBottom{
		color: gray;
	}
}
</style>
