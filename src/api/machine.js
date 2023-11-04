import request from '../utils/request'
import qs from "qs";


export const machinelist = (Enable, Code, Typecode,
	Unitid, Unitmchineindex,
	Note, Ip, Port, BusinessDateRange,
	Page, PageSize, Field, Order, DescStr) => {
	return request({
		url: "api/machine/list",
		method: 'get',
		params: {
			Enable,
			Code,
			Typecode,
			Unitid,
			Unitmchineindex,
			Note,
			Ip,
			Port,
			BusinessDateRange,
			Page,
			PageSize,
			Field,
			Order,
			DescStr
		}
	})
}
export const statusList = (Code, Typecode, BusinessDateRange,
	Page, PageSize, Field, Order, DescStr) => {
		console.log(BusinessDateRange,'BusinessDateRange');
	return request({
		url: `/api/machine/statuslist?${BusinessDateRange}`,
		method: 'get',
		params: {
			Code,
			Typecode,
			Page,
			PageSize,
			Field,
			Order,
			DescStr
		}
	})

}
