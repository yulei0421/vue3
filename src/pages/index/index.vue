<template>
	<van-button type="primary" @click="onButtonClick">主要按钮</van-button>
	<van-tabbar v-model="active">
		<van-tabbar-item name="home" icon="home-o">xxx</van-tabbar-item>
		<van-tabbar-item name="category" icon="search">标签</van-tabbar-item>
		<van-tabbar-item name="shop-cart" icon="friends-o">标签</van-tabbar-item>
		<van-tabbar-item name="setting" icon="setting-o">标签</van-tabbar-item>
	</van-tabbar>
</template>

<script>
	import {
		showNotify,
		Tabbar
	} from "vant";

	export default {
		data() {
			return {
				title: "Hello",
				active: 'home'
			};
		},
		onLoad() {},
		watch: {
			active(newvalue, oldvalue) {
				if (newvalue == "category") {
					console.log(123)
					uni.switchTab({
						url: '../machine/machine'
					})
				}
			}
		},
		methods: {
			onButtonClick() {
				showNotify("yes");
			},
		}
	};
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
