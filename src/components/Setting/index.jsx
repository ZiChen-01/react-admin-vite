import { Drawer, Divider, message, Select, DatePicker, Button, Switch } from "antd"
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

import './index.less'

//用于获取状态
import store from "@/redux/store";
const Setting = forwardRef((props, ref) => {
    let [SettingVisible, setSettingVisible] = useState(false);
    let [darkChecked, setDarkChecked] = useState(false)
    //将子组件的方法 暴露给父组件
    useImperativeHandle(ref, () => ({
        setSettingVisible
    }))
    const darkChange = (e) => {
        setDarkChecked(e)
        //通知reducer页面数据变化了
        store.dispatch({
            type: 'darkTheme',
            data: e
        })
    }
    return (
        <>
            <Drawer headerStyle={{ display: "none" }} open={SettingVisible} closable={true} onClose={() => { setSettingVisible(false) }} width='20%' className="Setting">

                <Divider>全局主题</Divider>
                <div className="theme-item">
                    <span>暗黑模式</span>
                    <Switch checked={darkChecked} checkedChildren="开启" unCheckedChildren="关闭" onChange={e => darkChange(e)} />
                </div>
                <div className="theme-item">
                    <span>灰色模式</span>
                    <Switch checkedChildren="开启" unCheckedChildren="关闭" />
                </div>
                <div className="theme-item">
                    <span>色弱模式</span>
                    <Switch checkedChildren="开启" unCheckedChildren="关闭" />
                </div>
                <Divider>界面设置</Divider>
            </Drawer >
        </>
    )
})

export default Setting