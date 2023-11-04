<template>
	<view>
		<van-dialog v-model:show="show" title="搜索查询" :beforeClose="closeDialog">
			<van-field v-model="Code" type="text" label="设备编码:" />
			<van-field v-model="Typecode" type="text" label="设备类型:" />
			<van-field v-model="startTime" type="date" label="开始时间:" />
			<van-field v-model="endTime" type="date" label="结束时间:" />
			<van-field v-model="Page" type="number" label="当前页码:" />
			<van-field v-model="PageSize" type="number" label="页码容量:" />
			<!-- <van-field v-model="Field" type="text" label="排序字段:" />
			<van-field v-model="Order" type="text" label="排序方向:" />
			<van-field v-model="DescStr" type="text" label="降序排序:" /> -->
		</van-dialog>
		<van-list finished-text="没有更多了">
			<div style="width: 100%;height:100px; 
		     padding: 10px;
		     font-size: 15px;
		     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
				v-for="(item,index) in statusLists">
				<van-row gutter="20" justify="center">
					<van-col span="12"><strong>code:</strong> {{item.code}}</van-col>
					<van-col span="12"><strong>typeCode:</strong> {{item.typeCode}}</van-col>
					<van-col span="12"><strong>seconds:</strong> {{item.seconds}}</van-col>
					<van-col span="12"> <strong>状态:</strong>
						<van-tag v-if="item.status == '离线'" color="blue">离线</van-tag>
						<van-tag v-if="item.status == '暂停'" color="black">暂停</van-tag>
						<van-tag v-if="item.status == '运行'" color="red">运行</van-tag>
						<van-tag v-if="item.status == '报警'" color="purple">报警</van-tag>
					</van-col>
					<van-col span="24"><strong>createtime:</strong> {{item.createtime}}</van-col>
					<van-col span="24"><strong>endtime:</strong> {{item.endtime}}</van-col>
				</van-row>

			</div>
		</van-list>

		<van-col span="8" @click="search"
			style="width: 66px;position: fixed;bottom: 20px;right: 0px;font-size: 0;line-height: 0;z-index: 100;">
			<van-icon name="search" size="50" />
		</van-col>
		<van-pagination v-model="Page" :total-items="total" :show-page-size="3" force-ellipses @change="changeStatus"
			:page-count="pageCount" />


	</view>
</template>

<script>
	import {
		statusList
	} from "../../api/machine.js"
	export default {
		components: {
			statusList
		},
		data() {
			return {
				Code: null,
				Typecode: null,
				startTime: null,
				endTime: null,
				BusinessDateRange: [],
				Page: 1,
				PageSize: 5,
				Field: null,
				Order: null,
				DescStr: null,
				show: true,
				total: 0,
				pageCount: 5,
				statusLists: []
			};
		},
		methods: {
			async listStatus() {
				this.BusinessDateRange = ""
				if (this.startTime != null) {
					this.BusinessDateRange = this.startTime
				}
				if (this.endTime != null) {
					this.BusinessDateRange += decodeURIComponent("&BusinessDateRange=" + this.endTime)
				}
				if (this.Code == "")
					this.Code = null
				if (this.Typecode == "")
					this.Typecode = null
				console.log(this.BusinessDateRang,'xxxxe')
				const {
					data
				} = await statusList(this.Code,
					this.Typecode,
					this.BusinessDateRange,
					this.Page,
					this.PageSize,
					this.Field,
					this.Order,
					this.DescStr)
				console.log(data)
				if (data.code == 200) {
					this.total = data.result.total
					this.pageCount = Math.ceil((data.result.total) / this.PageSize)
					this.statusLists = data.result.items
				} else {
					alert("error")
				}
			},
			search() {
				this.show = true;
			},
			closeDialog() {
				this.listStatus();
				this.show = false;
			},
			changeStatus() {
				this.listStatus();
			}
		}
	}
</script>

<style lang="scss">

</style>
