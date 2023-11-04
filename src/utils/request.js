import axios from 'axios';
import qs from "qs";

const instance = axios.create({
	baseURL: 'http://192.168.101.200:16000/',
	timeout: 3000
});



instance.interceptors.request.use(config => {
	if (config.method === 'get') {
		config.paramsSerializer = function(params) {
			return qs.stringify(params, {
				arrayFormat: 'repeat'
			})
		}
	}
	let token = window.sessionStorage.getItem("token")
	if (token != null)
		config.headers["Authorization"] = "Bearer " + token
	console.log(token)
	// 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改 

	return config;
}, error => {
	Message(error);
	return Promise.reject(error);
})

instance.interceptors.response.use(function(response) {
	// 1. http 状态码是 2xx 会进来这里，response 的数据结构如下：response-200
	// 2. 可通过 validateStatus 配置进到 success callback 的 http status，例如: 
	//    function (status) {
	//      return status >= 200 && status <= 500; // 当 http status 属于定义的范围内，都会进到 success callback
	//    }
	console.log("response" + response)
	return response;
}, function(error) {
	// 1. http 状态码非2开头（没有额外定义 validateStatus）的都会进来这里，如 404, 500 等，error 的数据结构如下：error-400、error-500
	// 2. 取消请求也会进入这里，可以用 axios.isCancel(error) 来判断是否是取消请求，error 的数据结构如下：cancel-error
	// 3. 请求运行有异常也会进入这里，如故意将 headers 写错：axios.defaults.headers = '123'
	// 4. 断网，error 的数据结构如下：network-error
	return Promise.reject(error);
});


export default instance;
