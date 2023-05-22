import axios from 'axios';
import { notification } from 'antd'
const Server = axios.create({
    baseURL: window.envConfig['API_BASE_URL'],//域名请求地址
    headers: {
        'Content-Type': "application/json; charset=utf-8",
    },
    timeout: 10000,//超时时间 10s
});


const codeMessage = {
    202: '一个请求已经进入后台排队（异步任务）。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    405: '客户端请求中的方法被服务器禁止或请求方法错误',
    406: '请求的格式不可得。',
    410: '请求的题目被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};



// 添加请求拦截器
Server.interceptors.request.use(function (config) {
    // 在请求头上缀入token
    if (localStorage.getItem('Autn-Token')) {
        config.headers["X-Access-Token"] = localStorage.getItem('Autn-Token');
    }
    return config;
}, function (error) {
    // 对请求错误做些什么

    return Promise.reject(error);
});




// 添加响应拦截器
Server.interceptors.response.use(function (response) {
    console.log(response);
    if (response && response.data) {
        if (response.data.code != 0 && response.data.code != 200 && response.data.errCode != "000000") {
            const errorText = response.data.message || codeMessage[response.data.code];
            const { config: { url }, data: { code } } = response;
            notification.error({
                message: `请求错误 ${code} :  ${url}`,
                description: errorText,
            });
        }

    }
    // 对响应数据做点什么
    return response;
}, function (error) {
    console.log(error.response);
    // 请求超时提示
    if (error.message.includes('timeout')) {
        notification.error({
            message: '超时错误',
            description: '请检查网络或稍后再试',
        });
        return Promise.reject(error);
    }
    // 异常处理
    const response = error.response
    if (response && response.status) {
        const errorText = codeMessage[response.status] || response.statusText;
        const { status, config } = response;
        notification.error({
            message: `请求错误 ${status} :  ${config?.url}`,
            description: errorText,
        });
        // 500及401重新登录
        if (status == 500 || status == 401) clearStorage()
    } else if (!response) {
        notification.error({
            description: '您的网络发生异常，无法连接服务器，可能为跨域、无效令牌、网络未连接等相关原因',
            message: '网络异常',
        });
        clearStorage()
    }

    return Promise.reject(error);
});

// 清除本地所有缓存，重新登录
const clearStorage = () => {
    localStorage.clear();
    sessionStorage.clear()
    setTimeout(() => {
        window.location.reload()
    }, 1000)
}
export default Server
