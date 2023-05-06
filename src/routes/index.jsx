import Icon, { UserOutlined, HomeOutlined } from '@ant-design/icons';
// 使用路由懒加载
import React, { lazy } from "react";
import getMenu from "@/routes/routerConfig";
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

if (localStorage.getItem('Autn-Token')) {
    // location.reload()
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