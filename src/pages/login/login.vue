<template>
	<view class="login">
		<view class="top_item">
			<text style="color: #000000;font-size: 22px;font-weight: bold;margin: 0 auto;">用户登录</text>
		</view>
		<view class="input-item" style="margin-top: 80rpx;">
			<view class="title-content">
				<text class="title">账号</text>
			</view>
			<input class="input" placeholder="手机号/邮箱" style="margin-left: 40rpx;" v-model="userVo.account" />
		</view>
		<view class="input-item">
			<view class="title-content">
				<text class="title">密码</text>
			</view>
			<input class="input" type="password" placeholder="请输入密码" style="margin-left: 40rpx;"
				v-model="userVo.password" />

		</view>
		<view class="button" @click="login">登录</view>
	</view>
</template>

<script>
	import {
		userlogin
	} from "../../api/login.js"
	import {
		showNotify,
		showDialog,
		TextEllipsis
	} from 'vant';


	export default {
		components: {
			showNotify,
			showDialog,
			TextEllipsis
		},
		data() {
			return {
				title: 'Hello',
				userVo: {
					account: "",
					password: "",
					codeId: 0,
					code: ""
				},
				show: false,
				message: ""
			}
		},
		onLoad() {

		},
		methods: {
			async login() {
				if (this.userVo.account == "" || this.userVo.password == "") {
					showNotify("账号密码不能为空");
				} else {
					uni.navigateTo({
							url: '../statusList/statusList'
						});
					// const {
					// 	data
					// } = await userlogin(this.userVo);
					// console.log(data)
					// if (data.code == 200) {
					// 	window.sessionStorage.setItem("token", data.result.accessToken)
					// 	uni.navigateTo({
					// 		url: '../menu/menu'
					// 	});
					// } else {
					// 	showNotify(data.message)
					// 	this.show = true
					// }
				}
			},
		}
	}
</script>

<style>
	.top_item {
		display: flex;
		margin-top: 40rpx;
		margin-left: 32rpx;
		margin-right: 32rpx;
		justify-content: space-between;
	}

	.input-item {
		display: flex;
		margin-left: 32rpx;
		margin-right: 32rpx;
		height: 50px;
		align-items: center;
		border-bottom: 1px solid #efeff4;
		margin-bottom: 20rpx;

		.title-content {
			display: flex;
			justify-content: flex-start;
			align-items: center;

			.title {
				font-size: 18px;
			}
		}

		.input {
			flex: 1;
		}
	}

	.button {
		height: 50px;
		line-height: 50px;
		margin-top: 60rpx;
		margin-left: 32rpx;
		margin-right: 32rpx;
		border-radius: 50rpx;
		font-size: 20px;
		background-color: #008AFE;
		color: #FFFFFF;
		text-align: center;
	}
</style>
