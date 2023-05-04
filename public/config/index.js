// 环境配置

let key = 0;  // 0:开发 1:测试  2:生产

window._CONFIG = {
    ROOT_APP_NAME:'互助基金管理系统'
}

switch (key) {
    case 0:
        window._CONFIG['API_BASE_URL'] = 'https://zhihuitest.wzbank.cn/yinqihui/mutualfund-manager'
        break;
    case 1:
        window._CONFIG['API_BASE_URL'] = ''
        break;
    case 2:
        window._CONFIG['API_BASE_URL'] = ''
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

