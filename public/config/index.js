// 项目信息配置相关
window.envConfig = {
    key : 0,  //环境地址 0:开发 1:测试  2:生产
    proxy : true,  //是否开启代理，允许跨域（只在开发环境有效 true/false)
    ROOT_APP_NAME:'React-Admin-Vite', //项目系统名称
    API_BASE_URL:"",  //请求地址(此处为空禁写，请在switch语句配置地址)
    API_BASE_TIMEOUT:10,  //请求超时时间（单位/s）
    ROOT_APP_TOKEN:"Autn-Token",  //token名称
}

const { envConfig:{key,proxy} } =window
// API_BASE_URL配置
switch (key) {
    case 0:
        // 无需代理(禁止跨域)地址，如开启允许跨域，必须和vite.config.js配置文件下proxy的目标代理地址一致
        let noProxyUrl = "https://zhihuitest.wzbank.cn/yinqihui/xxx/"

        window.envConfig['API_BASE_URL'] = proxy ? '/api/' : noProxyUrl
        break;
    case 1:
        window.envConfig['API_BASE_URL'] = ''
        break;
    case 2:
        window.envConfig['API_BASE_URL'] = ''
        break;
    default:
        break;
}


 // 
 //  ██████ ▒██    ██   ▄████▄  ░██ ▄█▀░       ██████╗  ██╗   ██╗  ██████╗       ██
 // ░██    ▒ ██  ▒ ██▒░██▀  ▀██  ███▀	       ██╔══██╗ ██║   ██║ ██╔════╝       ██
 // ▒██████ ░██   ▒██░░██░      ░██▄░          ██████╔╝ ██║   ██║ ██║  ███╗      ██
 // ░██▒   ░░██  ░ ██░▒██▄  ▄██░▒██▀█▄░        ██╔══██╗ ██║   ██║ ██║   ██║      
 // ░██░    ▒▒██████ ▒ ░▀████▀   ██ ░▀█▄       ██████╔╝ ╚██████╔╝ ╚██████╔╝      ██
 // ▒ ░   ░▒▒▒ ▒ ▒ ░ ░▒ ▒  ░▒ ▒▒ ▒▒            ╚═════╝   ╚═════╝   ╚═════╝      
 // jiangsihan.cn░    ░  ░  ▒   ░ ░▒ ▒░
 //  ░ ░    ░░░ ░ ░ ░        ░ ░░ ░
 //           ░     ░ ░      ░  ░

