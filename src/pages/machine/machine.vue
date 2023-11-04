<template>
	<view>
		<van-col span="8" @click="search"
			style="width: 66px;position: fixed;bottom: 20px;right: 0px;font-size: 0;line-height: 0;z-index: 100;">
			<van-icon name="search" size="50" />
		</van-col>
		<van-list  finished-text="没有更多了" >
			<div style="width: 100%;height:100px; 
             padding: 10px;
             font-size: 15px;
             box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
				v-for="(item,index) in machinelists">
				序号: <text>{{index}}</text><br>
				note: <text>{{item.note}}</text><br>
				code: <text>{{item.code}}</text><br>
				typeCode:<text>{{item.typeCode}}</text><br>
				状态:
				<van-tag v-if="item.status == 1" color="blue">离线</van-tag>
				<van-tag v-if="item.status == 2" color="black">暂停</van-tag>
				<van-tag v-if="item.status == 3" color="red">运行</van-tag>
				<van-tag v-if="item.status == 4" color="purple">报警</van-tag>
			</div>
		</van-list>


		<van-dialog v-model:show="show" title="搜索查询" :beforeClose="closeDialog">
			<van-radio-group v-model="Enable" direction="horizontal">
				<van-radio name="true">启用</van-radio>
				<van-radio name="false">不启用</van-radio>
			</van-radio-group>
			<van-field v-model="Code" type="text" label="设备编码:" />
			<van-field v-model="Typecode" type="text" label="设备类型:" />
			<van-field v-model="Unitid" type="number" label="所属单元:" />
			<van-field v-model="Unitmchineindex" type="number" label="单元内索引号:" />
			<van-field v-model="Note" type="text" label="备注:" />
			<van-field v-model="Ip" type="text" label="IP地址:" />
			<van-field v-model="Port" type="text" label="端口号:" />
			<van-field v-model="Page" type="number" label="当前页码:" />
			<van-field v-model="PageSize" type="number" label="页码容量:" />
			<van-field v-model="PageSize" type="number" label="页码容量:" />
			<van-field v-model="Field" type="text" label="排序字段:" />
			<van-field v-model="Order" type="text" label="排序方向:" />
			<van-field v-model="DescStr" type="text" label="降序排序:" />
		</van-dialog>
	</view>
</template>

<script>
	import {
		machinelist
	} from "../../api/machine.js"
	import {
		Card
	} from 'vant'

	export default {
		components: {
			machinelist,
			Card,

		},
		data() {
			return {
				Enable: true,
				Code: null,
				Typecode: null,
				Unitid: null,
				Unitmchineindex: null,
				Note: null,
				Ip: null,
				Port: null,
				BusinessDateRange: null,
				Page: null,
				PageSize: null,
				Field: null,
				Order: null,
				DescStr: null,
				show: false,
				machinelists: [],
			};
		},
		created() {
			this.listmachinelist()
		},
		methods: {
			closeDialog() {
				this.listmachinelist();
				this.show = false;
			},
			search() {
				this.show = true;
			},
			async listmachinelist() {
				const {
					data
				} = await machinelist()
				console.log(data)
				if (data.code == 200) {
					this.machinelists = data.result
				}

			}
		}
	}
</script>

<style lang="scss">

</style>
