import { Drawer, Divider, message, Select, DatePicker, Tooltip, Switch, Tag } from "antd"
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

import './index.less'

//用于获取状态
import store from "@/redux/store";

import { setDayNight } from "@/utils/moment"
const Setting = forwardRef((props, ref) => {
    let [SettingVisible, setSettingVisible] = useState(false);
    let [darkChecked, setDarkChecked] = useState(false)
    let [grayChecked, setGrayChecked] = useState(false)
    let [weakChecked, setWeakChecked] = useState(false)
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
    //将子组件的方法 暴露给父组件
    useImperativeHandle(ref, () => ({
        setSettingVisible
    }))
    useEffect(() => {
        switch (localStorage.getItem("weakOrGray")) {
            case "gray":
                setGrayChecked(true)
                break;
            case "weak":
                setWeakChecked(true)
                break;
            default:
                break;
        }
        if (localStorage.getItem("darkTheme")) {
            setDarkChecked(true)
        }
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
        localStorage.setItem('ThemeBgColor', item.color)
        message.loading("主题编译中，请稍后")
        setTimeout(() => {
            window.location.reload()
        }, 2000);
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
                                    <Tag color={item.color} onClick={() => changeColor(item)}> </Tag>
                                </Tooltip>
                            )
                        })
                    }
                </div>
                <Divider>界面设置</Divider>
            </Drawer >
        </>
    )
})

export default Setting