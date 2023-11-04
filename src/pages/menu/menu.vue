<template>
	<view>
		<van-grid :gutter="40" square column-num="3" icon-size="50px">
			<van-grid-item icon="browsing-history" text="machine list " @click="machineList" />
			<van-grid-item icon="photo-o" text="machine list " @click="statusList" />
			<van-grid-item icon="photo-o" text="machine list " @click="machineList" />
			<van-grid-item icon="photo-o" text="machine list " @click="machineList" />
			<van-grid-item icon="photo-o" text="machine list " @click="machineList" />
			<van-grid-item icon="photo-o" text="machine list " @click="machineList" />
		</van-grid>



	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			machineList() {
				uni.navigateTo({
					url: '../machine/machine'
				});
			},
			statusList(){
				uni.navigateTo({
					url: '../statusList/statusList'
				});
			}
		}
	}
</script>

<style lang="scss">

</style>
