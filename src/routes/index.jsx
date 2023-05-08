import Icon, { UserOutlined, HomeOutlined } from '@ant-design/icons';
// 使用路由懒加载
import React, { lazy } from "react";
import getMenu from "@/routes/routerConfig";
//用于获取状态
import store from "@/stores/store";
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
        children: [],
        disabled: false,
    },
]

store.subscribe(() => {
    const { reload } = store.getState()
    if (reload) location.reload()
})

if (localStorage.getItem('Autn-Token')) {
    routes = await getMenu()
    function setIcon(res) {
        for (let i = 0; i < res.length; i++) {
            const element = res[i];
            let IconItem = element.icon
            // element.icon = < Icon component={IconItem} />
            element.icon = <HomeOutlined />
            if (element.children) setIcon(element.children)
        }
    }
    setIcon(routes)

}
export default routes