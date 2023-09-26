import Server from '@/utils/request'
import { notification } from 'antd'
let API_BASE_PORT = window.envConfig['API_BASE_PORT']
// 封装请求方式
// ----------------methods:请求方式   url:请求地址   params：请求参数----------------
export function axios(methods, url, params) {
	url = url.includes(API_BASE_PORT) ? url : API_BASE_PORT + url
	switch (methods) {
		case 'get':
			return Server({
				url: url,
				method: 'get',
				params,
			});
		case 'post':
			return Server({
				url: url,
				method: 'post',
				data: params,
			});
		case 'delete':
			return Server({
				url: url,
				method: 'delete',
				params,
			});
		case 'put':
			return Server({
				url: url,
				method: 'put',
				data: params,
			});
		case 'options':
			return Server({
				url: url,
				method: 'options',
				params,
			});
		case "upLoad": //上传文件
			return Server({
				url: url,
				method: 'post',
				data: params,
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
		case "download"://下载文件
			return Server({
				url: url,
				method: 'post',
				data: params,
				responseType: 'blob'
			});
		default:
			return notification.error({
				message: "请求方式错误",
				description: "找不到此方法，请认真检查是否拼写错误",
			});
	}
}