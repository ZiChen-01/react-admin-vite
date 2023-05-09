import React, { useState, ReactNode } from 'react';
import { Layout, Menu, Popconfirm } from 'antd';
import Icon, { MenuFoldOutlined, MenuUnfoldOutlined, LogoutOutlined, CloseOutlined } from '@ant-design/icons';
import './index.less'
import { Route, Routes, Navigate, useLocation, useNavigate } from 'react-router-dom'

import logo from "@/assets/images/logo-react.png"
import nprogress from "nprogress";
import "@/components/progress/index.less";
import Loading from "@/components/loading";
import routes from "@/routes"

const { Header, Content, Footer, Sider } = Layout;

const Commonview = () => {
    //路由加载进度条
    nprogress.start();
    setTimeout(() => {
        nprogress.done();
    }, 200);

    const titleH2 = window._CONFIG.ROOT_APP_NAME
    const navigate = useNavigate()
    const location = useLocation()
    const [current, setCurrent] = useState(location.pathname);
    const [defaultOpenKeys, setDefaultOpenKeys] = useState(location.pathname)
    const [collapsed, setCollapsed] = useState(false);
    const [title, setTitle] = useState(true);
    let [routeList, setRouteList] = useState([])
    routes.map(item => {
        if (item.label == "首页") {
            routeList.push(item)
        }
    })


    // 点击菜单
    const onClick = (e) => {
        navigate(e.key)
        setCurrent(e.key);
    };
    // 退出登录
    const logOut = () => {
        localStorage.clear();
        sessionStorage.clear()
        setTimeout(() => {
            window.location.reload()
        }, 500)
    }

    // 面包屑
    routerFun(routes)
    function routerFun(array) {//递归
        for (let index = 0; index < array.length; index++) {
            array[index].colordisabled = 'false' //colordisabled  规定选中颜色字段
            if (location.pathname == array[index]?.key) {
                routeList.push(array[index])
                array[index].colordisabled = 'true'
            }
            if (array[index].children) {
                routerFun(array[index].children)
            }
        }
    }
    // route去重
    let newobj = {};
    routeList = routeList.reduce((preVal, curVal) => {
        if (!newobj[curVal.key]) {
            newobj[curVal.key] = preVal.push(curVal)
        }
        return preVal
    }, [])
    // 删除面包屑
    const delRouter = ((item, index) => {
        if (routeList.length == 1) { //仅剩一个停止继续执行
            return
        }
        if (location.pathname == item.key) {//判断点击路由是否为当前路由 
            if (index == routeList.length - 1) {//点击路由是否为最后一个 如果是删除之前就跳转上一个路由
                navigate(routeList[index - 1].key) //删除前跳转上一个路由
                setCurrent(routeList[index - 1].key)//更新菜单选中标识
            } else {
                navigate(routeList[index + 1].key) //删除前跳转下一个路由
                setCurrent(routeList[index + 1].key)//更新菜单选中标识

            }

        }
        routeList.splice(index, 1)//删除当前路由
        setRouteList(routeList)//更新视图
    })
    // 面包屑跳转
    const toRouter = ((item) => {
        navigate(item.key)
        setCurrent(item.key)
    })


    return (
        <>
            <Layout className="commonview">
                <Sider width={200} className="site-layout-background" trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo">
                        <img src={logo} alt="" />
                        {title ? <span className='logoTitle'>{titleH2}</span> : ''}
                    </div>
                    <Menu
                        theme='dark'
                        onClick={onClick}
                        style={{ width: '100%' }}
                        defaultOpenKeys={[defaultOpenKeys]}
                        selectedKeys={[current]}
                        mode="inline"
                        items={routes}
                    />
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => { setCollapsed(!collapsed); setTitle(!title) },
                        })}
                        <div className='headBox'>
                            <span>欢迎登录{titleH2}</span>
                            <div className='userinfo'>
                                <UserInfo />
                                <Popconfirm title="真的要注销登录吗 ?" okText="确认" cancelText="取消" onConfirm={logOut}>
                                    <span className='tuichu'><LogoutOutlined />退出登录</span>
                                </Popconfirm>
                            </div>
                        </div>
                    </Header>
                    {/* 面包屑 */}
                    <div className='breadcrumb'>
                        {routeList.map((item, index) => {
                            return (
                                <div key={index} style={{ color: item.colordisabled == 'true' ? 'var(--main-bg)' : '' }}>
                                    <span>{item.icon}</span>
                                    <span onClick={() => { toRouter(item) }} className="breadcrumbTitle"> {item.label}</span>
                                    {index != 0 ? <CloseOutlined onClick={() => { delRouter(item, index) }} /> : <span style={{ width: '14px' }}></span>}
                                </div>
                            )
                        })}
                    </div>
                    <Content>
                        {/* 配置路由子组件 */}
                        <Routes>
                            {getRoutes(routes)}
                            {/* 重定向404 */}
                            <Route path="*" element={<Navigate to="/error404" />}></Route>
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </>
    );

}


function UserInfo() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo') || '0')
    return (
        <div className='userName'>欢迎您，{userInfo?.realname}</div>
    )
}
// 遍历路由组件
function getRoutes(routes) {
    const routesElement = routes.map((item, index) => {
        return (
            <React.Fragment key={index}>

                <Route path={item.key} element={
                    //  react懒加载，必须要loading 
                    <React.Suspense fallback={<Loading />}>
                        <item.element />
                    </React.Suspense>}
                    key={index}>
                </Route>
                {item.children ? getRoutes(item.children) : null}
            </React.Fragment >
        );
    });
    return routesElement;
}

export default Commonview;
