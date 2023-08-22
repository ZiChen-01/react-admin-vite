import { Drawer, Divider, message, Select, DatePicker, Tooltip, Switch, Tag } from "antd"
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { CheckOutlined } from '@ant-design/icons';
import './index.less'

//用于获取状态
import store from "@/redux/store";

import { setDayNight } from "@/utils/moment"
import { setCookies, getCookies, removeCookies } from '@/utils/cookies'
const Setting = forwardRef((props, ref) => {
    let [SettingVisible, setSettingVisible] = useState(false);
    let [darkChecked, setDarkChecked] = useState(false)
    let [grayChecked, setGrayChecked] = useState(false)
    let [weakChecked, setWeakChecked] = useState(false)
    let [bgCheck, setBgCheck] = useState("#1890ff")
    let [StyleCheck, setStyleCheck] = useState("dark")
    let [pattern, setPattern] = useState("broadside")
    // 主题颜色
    const colorList = [
        {
            key: '极客蓝（默认）', color: '#1890ff',
        },
        {
            key: '深海蓝', color: '#2f54eb',
        },
        {
            key: '火山', color: '#f5222d',
        },
        {
            key: '浅红', color: '#fa541c',
        },
        {
            key: '日暮', color: '#faad14',
        },
        {
            key: '明青', color: '#13C2C2',
        },
        {
            key: '草绿', color: '#52c41a',
        },
        {
            key: '熏紫', color: '#a876ed',
        },
    ]
    const ThemeBgColor = getCookies("ThemeBgColor")
    const ThemeStyle = getCookies("ThemeStyle")
    const patternStyle = getCookies("pattern")
    //将子组件的方法 暴露给父组件
    useImperativeHandle(ref, () => ({
        setSettingVisible
    }))
    useEffect(() => {
        switch (getCookies("weakOrGray")) {
            case "gray":
                setGrayChecked(true)
                break;
            case "weak":
                setWeakChecked(true)
                break;
            default:
                break;
        }
        if (getCookies("darkTheme")) {
            setDarkChecked(true)
        }
        if (patternStyle) setPattern(patternStyle)
        if (ThemeBgColor) setBgCheck(ThemeBgColor)
        if (ThemeStyle) setStyleCheck(ThemeStyle)
    }, []);
    // 深夜模式
    const darkChange = (e) => {
        setDarkChecked(e)
        //通知reducer页面数据变化了
        store.dispatch({
            type: 'darkTheme',
            data: e
        })

    }
    // 灰色模式
    const grayChange = (e) => {
        setGrayChecked(e)
        //通知reducer页面数据变化了
        if (e) {
            store.dispatch({
                type: 'weakOrGray',
                data: "gray"
            })
            setWeakChecked(false)
        } else {
            store.dispatch({
                type: 'weakOrGray',
                data: false
            })
        }
    }
    // 色弱模式
    const weakChange = (e) => {
        setWeakChecked(e)
        //通知reducer页面数据变化了
        if (e) {
            store.dispatch({
                type: 'weakOrGray',
                data: "weak"
            })
            setGrayChecked(false)
        } else {
            store.dispatch({
                type: 'weakOrGray',
                data: false
            })
        }
    }

    // 主题颜色
    const changeColor = (item) => {
        setCookies('ThemeBgColor', item.color, 365)
        message.loading("主题编译中，请稍后")
        setBgCheck(item.color)
        window.location.reload()
    }
    // 风格
    const darkOn = () => {
        setStyleCheck("dark")
        setCookies('ThemeStyle', "dark", 365)
        store.dispatch({
            type: 'ThemeStyle',
            data: "dark"
        })
        message.loading("风格切换中，请稍后")
        window.location.reload()
    }
    const lightOn = () => {
        setStyleCheck("light")
        setCookies('ThemeStyle', "light", 365)
        store.dispatch({
            type: 'ThemeStyle',
            data: "light"
        })
        message.loading("风格切换中，请稍后")
        window.location.reload()
    }
    // 导航模式
    const sidebarOn = () => {
        setPattern("broadside")
        store.dispatch({
            type: 'pattern',
            data: "broadside"
        })
        setCookies('pattern', "broadside", 365)
        message.loading("模式切换中，请稍后")
        window.location.reload()
    }
    const topOn = () => {
        setPattern("top")
        store.dispatch({
            type: 'pattern',
            data: "top"
        })
        setCookies('pattern', "top", 365)
        message.loading("模式切换中，请稍后")
        window.location.reload()
    }

    return (
        <>
            <Drawer headerStyle={{ display: "none" }} open={SettingVisible} closable={true} onClose={() => { setSettingVisible(false) }} width='20%' className="Setting">
                <Divider>模式设置</Divider>
                <div className="theme-item">
                    <span>深夜模式</span>
                    <Switch checked={darkChecked} checkedChildren="开启" unCheckedChildren="关闭" onChange={e => darkChange(e)} />
                </div>
                <div className="theme-item">
                    <span>灰色模式</span>
                    <Switch checked={grayChecked} checkedChildren="开启" unCheckedChildren="关闭" onChange={e => grayChange(e)} />
                </div>
                <div className="theme-item">
                    <span>色弱模式</span>
                    <Switch checked={weakChecked} checkedChildren="开启" unCheckedChildren="关闭" onChange={e => weakChange(e)} />
                </div>
                <Divider>主题颜色</Divider>
                <div className="theme-bgd">
                    {
                        colorList.map((item, index) => {
                            return (
                                <Tooltip title={item.key} key={index}>
                                    <Tag color={item.color} onClick={() => changeColor(item)}>
                                        {bgCheck == item.color ? < CheckOutlined /> : ""}
                                    </Tag>
                                </Tooltip>
                            )
                        })
                    }
                </div>
                <Divider>导航风格</Divider>
                <div className="theme-style">
                    <Tooltip title="暗色菜单风格">
                        <div className="theme-style-dark" onClick={darkOn}>
                            <div className="theme-style-dark-left"></div>
                            <div className="theme-style-dark-right">
                                <div className="theme-style-dark-right-top"></div>
                                <div className="theme-style-dark-right-bot">
                                    {StyleCheck == "dark" ? < CheckOutlined /> : ""}
                                </div>
                            </div>
                        </div>
                    </Tooltip>
                    <Tooltip title="高亮菜单风格">
                        <div className="theme-style-light" onClick={lightOn}>
                            <div className="theme-style-light-left"></div>
                            <div className="theme-style-light-right">
                                <div className="theme-style-light-right-top"></div>
                                <div className="theme-style-light-right-bot">
                                    {StyleCheck == "light" ? < CheckOutlined /> : ""}
                                </div>
                            </div>
                        </div>
                    </Tooltip>
                </div>
                <Divider>导航模式</Divider>
                <div className="theme-style">
                    <Tooltip title="侧边导航模式">
                        <div className="theme-style-dark" onClick={sidebarOn}>
                            <div className="theme-style-dark-left"></div>
                            <div className="theme-style-dark-right">
                                <div className="theme-style-dark-right-top"></div>
                                <div className="theme-style-dark-right-bot">
                                    {pattern == "broadside" ? < CheckOutlined /> : ""}
                                </div>
                            </div>
                        </div>
                    </Tooltip>
                    <Tooltip title="顶部导航模式">
                        <div className="dingbu-style" onClick={topOn}>
                            <div className="dingbu-style-top"></div>
                            <div className="dingbu-style-bottom">
                                <div className="dingbu-style-bottom-bot">
                                    {pattern == "top" ? < CheckOutlined /> : ""}
                                </div>
                            </div>
                        </div>
                    </Tooltip>
                </div>
            </Drawer >
        </>
    )
})

export default Setting