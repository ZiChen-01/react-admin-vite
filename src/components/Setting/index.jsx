import { Drawer, Divider, message, Select, DatePicker, Button, Switch } from "antd"
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

import './index.less'

//用于获取状态
import store from "@/redux/store";
const Setting = forwardRef((props, ref) => {
    let [SettingVisible, setSettingVisible] = useState(false);
    let [darkChecked, setDarkChecked] = useState(false)
    let [grayChecked, setGrayChecked] = useState(false)
    let [weakChecked, setWeakChecked] = useState(false)
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
    return (
        <>
            <Drawer headerStyle={{ display: "none" }} open={SettingVisible} closable={true} onClose={() => { setSettingVisible(false) }} width='20%' className="Setting">

                <Divider>全局主题</Divider>
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
                <Divider>界面设置</Divider>
            </Drawer >
        </>
    )
})

export default Setting