import Server from '@/utils/request'

// 封装请求方式
// ----------------methods:请求方式   url:请求地址   params：请求参数----------------
export function axios(methods, url, params) {
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
		default:
			return '找不到此方法'
	}
}