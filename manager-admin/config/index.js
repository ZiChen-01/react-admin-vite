// 环境配置
let env = {
    key : 0,  //环境地址 0:开发 1:测试  2:生产
    proxy : true,  //是否开启代理，允许跨域（只在开发环境有效 true/false)
}

window.envConfig = {
    ROOT_APP_NAME:'React-Admin-Vite', //项目名称
    API_BASE_URL:"",  //请求地址
}

switch (env.key) {
    case 0:
        // 无需代理(禁止跨域)地址，如开启允许跨域，必须和vite.config.js配置文件下proxy的目标代理地址一致
        let noProxyUrl = "https://zhihuitest.wzbank.cn/yinqihui/xxx/"

        window.envConfig['API_BASE_URL'] = env.proxy ? '/api/' : noProxyUrl
        break;
    case 1:
        window.envConfig['API_BASE_URL'] = 'http://20.100.31.159:8080/xxx/'
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

