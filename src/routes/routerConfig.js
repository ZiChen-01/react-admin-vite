import request from '@/api'
import { lazy } from "react";
const getMenu = () => {
    return request.getMenuBar({ _t: "1682558421" }).then((res) => {
        if (res.data.code = 200) {
            let list = res.data.result.menu
            localStorage.setItem('menuList', JSON.stringify(list))
            return list
        }
    })
}

export default getMenu