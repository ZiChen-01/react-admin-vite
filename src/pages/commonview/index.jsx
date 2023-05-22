import React, { useState, useRef, useEffect } from 'react';
import { Layout, Menu, Popconfirm, Dropdown, Tooltip, Tabs } from 'antd';
import Icon, { MenuFoldOutlined, MenuUnfoldOutlined, LogoutOutlined, BarsOutlined, SettingOutlined, CloseOutlined } from '@ant-design/icons';
import './index.less'
import { Route, Routes, Navigate, useLocation, useNavigate } from 'react-router-dom'

import logo from "@/assets/images/logo-react.png"
import nprogress from "nprogress";
import "@/components/progress/index.less";
import Loading from "@/components/loading";
import routes from "@/routes"
import ChangePassword from "@/components/users/changePassword/changePassword.jsx"
import Setting from '@/components/Setting';
import Contextmenu from '@/components/Contextmenu';

import { setCookies, getCookies, removeCookies } from '@/utils/cookies'

const { Header, Content, Footer, Sider } = Layout;

const Commonview = () => {
    let SettingRef = useRef(null)
    let ContextmenuRef = useRef(null)
    //路由加载进度条
    nprogress.start();
    setTimeout(() => {
        nprogress.done();
    }, 200);

    let titleH2 = window.envConfig.ROOT_APP_NAME
    let navigate = useNavigate()
    let location = useLocation()
    let [current, setCurrent] = useState(location.pathname);
    let [defaultOpenKeys, setDefaultOpenKeys] = useState(location.pathname)
    let [collapsed, setCollapsed] = useState(false);
    let [title, setTitle] = useState(true);
    let [routeList, setRouteList] = useState([])
    let [Stylebg, setStylebg] = useState("dark")
    let ThemeStyle = getCookies("ThemeStyle", 365)

    routes.map(item => {
        if (item.label == "首页") {
            routeList.push(item)
        }
    })
    useEffect(() => {
        if (ThemeStyle) {
            setStylebg(ThemeStyle)
            if (ThemeStyle == "light") {
                const sider = document.getElementsByClassName("ant-layout-sider")[0]
                sider.style.background = "#fff"
            }
        }
        // 右键事件监听
        const tabDom = document.getElementsByClassName("ant-tabs")[0]
        tabDom.addEventListener("contextmenu", onContextmenu)
        return () => {
            // 组件卸载移除事件监听
            tabDom.removeEventListener("contextmenu", onContextmenu)
        }

    }, []);

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

    // 标签栏
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
    // 删除标签栏
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
    // 标签栏跳转
    const toRouter = ((item) => {
        navigate(item.key)
        setCurrent(item.key)
    })

    // 后台布局设置
    const setting = () => {
        SettingRef.current.setSettingVisible(true)
    }

    // 标签栏设置
    const tabBar = ({ key }) => {
        let e = {} //当前组件
        let i = 0 // 当前
        routeList.map((item, index) => {
            if (item.key == current) {
                e = item
                i = index
            }
        })

        switch (key) {
            case "1"://关闭当前 
                if (e.label != "首页") delRouter(e, i)
                break;
            case "2": // 关闭其他
                //保存首页
                let home = routeList[0]
                routeList = [home]
                // 追加当前
                routeList.push(e)
                setRouteList(routeList)//更新视图
                break;
            case "3": //关闭所有
                let h = routeList[0]
                routeList = [h]
                setCurrent(h.key)
                navigate(h.key)//跳转首页
                setRouteList(routeList)//更新视图
                break;
            default:
                break;
        }
    }

    // 右键标签
    const onContextmenu = (e) => {
        e.preventDefault()
        ContextmenuRef.current.showContext(e)
    }
    // 关闭左侧
    const closeLeftMenu = (e) => {
        let i = 0
        // 找到当前元素的位置
        routeList.map((item, index) => {
            if (item.label == e) {
                i = index
            }
        })
        routeList.splice(1, i - 1)
        setRouteList(routeList)
    }
    // 关闭右侧
    const closeRightMenu = (e) => {
        let w = {}
        let i = 0
        // 找到当前元素的位置
        routeList.map((item, index) => {
            if (item.label == e) {
                w = item
                i = index
            }
        })
        routeList.splice(i, routeList.length - 1)
        navigate(w.key)
        setRouteList(routeList)
    }
    // 关闭其他
    const closeElseMenu = (e) => {
        let w = {}
        let i = 0
        // 找到当前元素的位置
        routeList.map((item, index) => {
            if (item.label == e) {
                w = item
                i = index
            }
        })
        let h = routeList[0]
        routeList = [h, w]
        navigate(w.key)
        setRouteList(routeList)
    }
    return (
        <>
            <Layout className="commonview">
                <Sider width={200} className="site-layout-background" trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo">
                        <img src={logo} alt="" />
                        {title ? <span className='logoTitle' style={{ color: ThemeStyle && ThemeStyle == "light" ? "#000000D9" : "" }}>{titleH2}</span> : ''}
                    </div>
                    <Menu
                        theme={Stylebg}
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
                                <Tooltip title="后台布局设置">
                                    <span className='user-Setting' onClick={setting}>
                                        <SettingOutlined spin />
                                    </span>
                                </Tooltip>
                                <UserInfo />
                                <Popconfirm title="真的要注销登录吗 ?" okText="确认" cancelText="取消" onConfirm={logOut}>
                                    <span className='tuichu'><LogoutOutlined />退出登录</span>
                                </Popconfirm>
                            </div>
                        </div>
                    </Header>
                    {/* 标签栏 */}
                    <div className="tabsList-box">
                        <div className="tabsList-box-view">
                            <div className='breadcrumb'>
                                <Tabs
                                    defaultActiveKey="1"
                                    items={routeList.map((item, index) => {
                                        const id = String(index);
                                        return {
                                            label: (
                                                <div className='breadcrumb-box' style={{ color: item.colordisabled == 'true' ? 'var(--main-bg)' : '' }}>
                                                    <span>{item.icon}</span>
                                                    <span onClick={() => { toRouter(item) }} className="breadcrumbTitle"> {item.label}</span>
                                                    {index != 0 ? <CloseOutlined onClick={() => { delRouter(item, index) }} /> : ""}
                                                </div>
                                            ),
                                            key: id,
                                        };
                                    })}
                                />
                            </div>
                            <div className="tabBarDetails">
                                <Dropdown menu={{
                                    items: [
                                        {
                                            label: (<a> 关闭当前</a>),
                                            key: '1',
                                        },
                                        {
                                            label: (<a> 关闭其他</a>),
                                            key: '2',
                                        },
                                        {
                                            label: (<a> 关闭所有</a>),
                                            key: '3',
                                        }
                                    ],
                                    onClick: (e) => tabBar(e),
                                }} arrow={{
                                    pointAtCenter: true,
                                }}>
                                    <BarsOutlined />
                                </Dropdown>
                            </div>

                        </div>
                    </div>
                    <Content>
                        {/* 配置路由子组件 */}
                        <Routes>
                            {getRoutes(routes)}
                            {/* 重定向404 */}
                            <Route path="*" element={<Navigate to="/error404" />}></Route>
                        </Routes>
                    </Content>
                    {/* 设置 */}
                    <Setting ref={SettingRef} />
                    {/* 标签栏右键 */}
                    <Contextmenu ref={ContextmenuRef} closeLeftMenu={closeLeftMenu} closeRightMenu={closeRightMenu} closeElseMenu={closeElseMenu} />
                </Layout>


            </Layout>
        </>
    )

}


function UserInfo() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const passwordRef = useRef(null);
    const onMenu = ({ key }) => {
        switch (key) {
            case '1':
                passwordRef.current.setIsModalVisible(true)
                passwordRef.current.form.setFieldsValue({
                    username: userInfo.username,
                })
                break;

            default:
                break;
        }
    }
    return (
        <>
            <Dropdown menu={{
                items: [
                    {
                        label: (<a> 修改密码</a>),
                        key: '1',
                    }
                ],
                onClick: (e) => onMenu(e),
            }} arrow={{
                pointAtCenter: true,
            }}>
                <span className='userName'>欢迎您，{userInfo?.realname}</span>
            </Dropdown>
            {/* 修改密码 */}
            <ChangePassword ref={passwordRef} />
        </>
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
