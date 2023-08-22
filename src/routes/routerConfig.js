import request from '@/api'
import { lazy } from "react";
const getMenu = () => {
    return request.getMenuBar({ _t: "1682558421" }).then((res) => {
        if (res.data.code = 200) {
            let list = res.data.result.menu
            let appInfo = JSON.parse(localStorage.getItem(window.envConfig['ROOT_APP_INFO']))
            appInfo.menuList = res.data.result.menu
            localStorage.setItem(window.envConfig['ROOT_APP_INFO'], JSON.stringify(appInfo))
            return list
        }
    })
}

export default getMenu