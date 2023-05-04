import { UserOutlined, HomeOutlined } from '@ant-design/icons';

// 使用路由懒加载
import { lazy } from "react";
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

routes =await getMenu()
console.log(routes);
export default routes