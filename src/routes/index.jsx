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
        element: lazy(() => import("@/pages/system")),
        icon: <UserOutlined />,
        children: [
            {
                label: "用户管理",
                key: "/isystem/user",
                element: lazy(() => import("@/pages/isystem/user")),
                icon: null,
                disabled: false,
            },
            {
                label: "角色管理",
                key: "/isystem/roleUserList",
                element: lazy(() => import("@/pages/isystem/roleUserList")),
                icon: null,
                disabled: false,
            },
            {
                label: "菜单管理",
                key: "/isystem/permission",
                element: lazy(() => import("@/pages/isystem/permission")),
                icon: null,
                disabled: false,
            },
            {
                label: "机构管理",
                key: "/isystem/deptNew",
                element: lazy(() => import("@/pages/isystem/deptNew")),
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

//创建节点的方法
function iconBC(name) { return React.createElement(Icon[name]); }
// 从接口请求菜单
if (localStorage.getItem('Autn-Token')) {
    routes = await getMenu()
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