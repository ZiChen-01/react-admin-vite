import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Button, Drawer } from 'antd';
import request from "@/api"
import "./index.less"

const PermissionModule = forwardRef((props, ref) => {
    const [title, setTitle] = useState("新增")
    const [open, setOpen] = useState(false);

    //将子组件的方法 暴露给父组件
    useImperativeHandle(ref, () => ({
        setOpen, setTitle
    }))
    const onClose = () => {
        setOpen(false);
    };
    return (
        <div id="permissionModule">
            <Drawer title={title} placement="right" onClose={onClose} open={open} closable={false} width="35%">
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>

        </div>
    )
})

export default PermissionModule