import { UserOutlined, HomeOutlined } from '@ant-design/icons';
// 使用路由懒加载
import React, { lazy } from "react";
import getMenu from "@/routes/routerConfig";
//用于获取状态
import store from "@/redux/store";

//引入antd-icon
import * as Icon from '@ant-design/icons';



// 基础菜单
let routes = [
    {
        label: "首页",
        key: "/dashboard/analysis",
        element: lazy(() => import("@/pages/dashboard/analysis")),
        icon: <HomeOutlined />,
        disabled: false,
    },
    {
        label: "系统管理",
        key: "/system",
        element: "",
        icon: <UserOutlined />,
        children: [
            {
                label: "用户管理",
                key: "/system/user",
                element: lazy(() => import("@/pages/system/user")),
                icon: null,
                disabled: false,
            },
            {
                label: "角色管理",
                key: "/system/roleUserList",
                element: lazy(() => import("@/pages/system/roleUserList")),
                icon: null,
                disabled: false,
            },
            {
                label: "菜单管理",
                key: "/system/permission",
                element: lazy(() => import("@/pages/system/permission")),
                icon: null,
                disabled: false,
            },
            {
                label: "机构管理",
                key: "/system/deptNew",
                element: lazy(() => import("@/pages/system/deptNew")),
                icon: null,
                disabled: false,
            },
        ],
        disabled: false,
    },
]


// 登录后刷新页面
store.subscribe(() => {
    const { reload } = store.getState()
    if (reload) location.reload()
})
function setmenu(list) {
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        item.label = item.meta.title
        item.key = item.path
        item.icon = item.meta.icon
        delete item.meta.title
        delete item.path
        delete item.meta.icon
        item.element = lazy(() => dynamicImport(item.component))
        if (item.children) setmenu(item.children)
    }
    return list
}
const dynamicImport = (moduleName) => {
    let viteModule = import.meta.glob("../pages/**");
    let url = `../pages/${moduleName}`
    const module = import(`../pages/dashboard/analysis`)
    return module;
}
//创建节点的方法
function iconBC(name) { return React.createElement(Icon[name]); }
// 从接口请求菜单
const token = localStorage.getItem('Autn-Token')
const menu = localStorage.getItem('persist:redux-state')
if (token) getMenu()
if (token && menu) {
    let i = setmenu(JSON.parse(menu))
    routes = i
    console.log(routes);
    // routes = await getMenu()
    function setIcon(res) {
        for (let i = 0; i < res.length; i++) {
            const element = res[i];
            let IconItem = element.icon
            // element.icon = < Icon component={IconItem} />
            if (IconItem) element.icon = iconBC(IconItem)
            if (element.children) setIcon(element.children)
        }
    }
    setIcon(routes)

}
export default routes