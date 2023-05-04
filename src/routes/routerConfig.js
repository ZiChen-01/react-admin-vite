import request from '@/api'
import { lazy } from "react";
const getMenu = () => {
    return request.getMenuBar({ _t: "1682558421" }).then((res) => {
        if (localStorage.getItem('Autn-Token')) {
            if (res.data.code = 200) {
                return setmenu(res.data.result.menu)
            }
        }
    })
}
function setmenu(list) {
    list.forEach((item) => {
        item.label = item.meta.title
        item.key = item.path
        item.icon = item.meta.icon
        delete item.meta.title
        delete item.path
        delete item.meta.icon
        item.element = lazy(() => dynamicImport(item.key))
        if (item.children) setmenu(item.children)
    });
    return list
}
const dynamicImport = async (moduleName) => {
    const module = await import(`../pages${moduleName}`);
    return module;
}
export default getMenu