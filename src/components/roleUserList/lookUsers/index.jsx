import { Drawer, Form, Input, message, Button } from "antd"
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import request from "@/api";
import './index.less'
const LookUsers = forwardRef((props, ref) => {
    const [lookVisible, setLookVisible] = useState(false);
    const [details, setDetails] = useState({});
    //将子组件的方法 暴露给父组件
    useImperativeHandle(ref, () => ({
        setLookVisible, setDetails
    }))

    return (
        <>
            <Drawer title="查看用户" open={lookVisible} closable={false} onClose={() => { setLookVisible(false) }} width='40%'
                footer={null} className="lookUsers">
                <p className="title">
                    <span>当前角色：{details.roleName}</span>
                    <span>当前角色编码：{details.roleCode}</span>
                </p>
            </Drawer>
        </>
    )
})
export default LookUsers