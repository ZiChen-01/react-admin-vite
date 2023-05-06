import React, { useState, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import { Button, Drawer, Form, Input, TreeSelect, Alert, Radio, InputNumber, Switch, message } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import request from "@/api"
import "./index.less"
import Marquee from 'react-fast-marquee';
import IconModule from "./iconModule"

const PermissionModule = forwardRef((props, ref) => {
    const [form] = Form.useForm();
    const [title, setTitle] = useState("")
    const [open, setOpen] = useState(false);
    const [radioValue, setRadioValue] = useState("0");
    const [value, setValue] = useState(undefined);
    const [treeData, setTreeData] = useState([]);
    const [route, setRoute] = useState(true);
    const [hidden, setHidden] = useState(false);
    const [keepAlive, setKeepAlive] = useState(false);
    const [alwaysShow, setAlwaysShown] = useState(false);
    const [internalOrExternal, setInternalOrExternal] = useState(false);
    const [id, setId] = useState(null)
    const IconModuleRef = useRef(null)
    //将子组件的方法 暴露给父组件
    useImperativeHandle(ref, () => ({
        setOpen, setTitle, setTreeData, entiForm, setRadioValue
    }))

    const onChange = (newValue) => {
        setValue(newValue);
    };
    // 选择图标
    const selectIcons = () => {
        IconModuleRef.current.setIsModalOpen(true)
    }
    // 确认
    const submit = async () => {
        try {
            const values = await form.validateFields();
            let params = { ...values, menuType: radioValue, route, hidden, keepAlive, alwaysShow, internalOrExternal, parentId: radioValue == 1 ? value : null }
            if (title == '新增菜单') {
                const res = await request.addPermission(params)
                resSet(res)
            } else if (title == '编辑菜单') {
                params.id = id
                const res = await request.editPermission(params)
                resSet(res)
            }
            function resSet(res) {
                if (res.data.code == 200) {
                    message.success(res.data.message)
                    setOpen(false)
                    form.resetFields()
                    setRoute(true)
                    setHidden(false)
                    setKeepAlive(false)
                    setAlwaysShown(false)
                    setInternalOrExternal(false)
                    props.getlist()
                }
            }
        } catch (errorInfo) {
            //    错误
        }
    }
    //编辑
    const entiForm = (data) => {
        form.setFieldsValue({
            name: data.name,
            url: data.url,
            component: data.component,
            icon: data.icon,
            sortNo: data.sortNo,
            menuType: data.menuType == 1 ? data.parentId : null
        })
        setId(data.id)
        data.menuType == 1 ? setValue(data.parentId) : null
        setRadioValue(String(data.menuType))
        setRoute(data.route)
        setHidden(data.hidden)
        setKeepAlive(data.keepAlive)
        setAlwaysShown(data.alwaysShow)
        setInternalOrExternal(data.internalOrExternal)
    }
    return (
        <>
            <Drawer title={title} placement="right" onClose={() => {
                setOpen(false); form.resetFields(); setRoute(true); setHidden(false); setKeepAlive(false); setAlwaysShown(false); setInternalOrExternal(false)
            }} open={open} closable={false} width="35%" className='permissionModule' footer={
                <>
                    <Button onClick={() => setOpen(false)} style={{ marginRight: "10px" }}>
                        取消
                    </Button>
                    <Button type="primary" onClick={submit}>
                        确认
                    </Button>
                </>
            }>
                <Alert banner
                    closeText="取消"
                    message={<Marquee pauseOnHover gradient={false}>
                        新增以后请在前端工程pages目录下添加该组件，例如：pages/dashboard/Analysis/index.jsx。
                    </Marquee>}
                />
                <Form
                    name="basic"
                    form={form}
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 18 }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                >
                    <Form.Item label="菜单类型" >
                        <Radio.Group value={radioValue} onChange={(e) => setRadioValue(e.target.value)}>
                            <Radio value="0"> 一级菜单 </Radio>
                            <Radio value="1"> 子菜单 </Radio>
                        </Radio.Group>
                    </Form.Item>
                    {radioValue == 1 ?
                        <Form.Item
                            label="上级菜单"
                            name="menuType"
                            rules={[{ required: true, message: '请输入菜单名称!' }]}
                        >
                            <TreeSelect
                                showSearch
                                style={{ width: '100%' }}
                                value={value}
                                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                placeholder="请选择上级菜单"
                                allowClear
                                treeDefaultExpandAll
                                onChange={onChange}
                                treeData={treeData}
                            />
                        </Form.Item>
                        : ""}
                    <Form.Item
                        label="菜单名称"
                        name="name"
                        rules={[{ required: true, message: '请输入菜单名称!' }]}
                    >
                        <Input placeholder="请输入菜单名称" allowClear />
                    </Form.Item>

                    <Form.Item
                        label="菜单路径"
                        name="url"
                        rules={[{ required: true, message: '请输入菜单路径!' }]}
                    >
                        <Input placeholder="请输入菜单路径，示例：/dashboard/analysis" allowClear />
                    </Form.Item>
                    <Form.Item
                        label="前端组件"
                        name="component"
                        rules={[{ required: true, message: '请输入前端组件!' }]}
                    >
                        <Input placeholder="请输入前端组件，示例：dashboard/Analysis" allowClear />
                    </Form.Item>
                    {
                        radioValue == 0 ? <Form.Item
                            label="默认跳转地址"
                            name="redirect"
                            rules={[{ required: false, message: '请输入默认跳转地址!' }]}
                        >
                            <Input placeholder="请输入默认跳转地址 redirect" allowClear />
                        </Form.Item> : ""
                    }
                    <Form.Item
                        label="菜单图标"
                        name="icon"
                        rules={[{ required: false, message: '请选择菜单图标!' }]}
                    >
                        <Input placeholder="请选择菜单图标" addonAfter={<SettingOutlined onClick={selectIcons} />} allowClear />
                    </Form.Item>

                    <Form.Item
                        label="菜单排序"
                        name="sortNo"
                        rules={[{ required: false, message: '' }]}
                    >
                        <InputNumber placeholder="请输入菜单排序" style={{ width: "200px" }} />
                    </Form.Item>
                    <Form.Item
                        label="是否路由菜单"
                        name="route"
                        rules={[{ required: false, message: '' }]}
                    >
                        <Switch defaultChecked checkedChildren="是" unCheckedChildren="否" checked={route} onChange={(e) => setRoute(e)} />
                    </Form.Item>
                    <Form.Item
                        label="隐藏路由"
                        name="hidden"
                        rules={[{ required: false, message: '' }]}
                    >
                        <Switch checkedChildren="是" unCheckedChildren="否" checked={hidden} onChange={(e) => setHidden(e)} />
                    </Form.Item>
                    <Form.Item
                        label="是否缓存路由"
                        name="keepAlive"
                        rules={[{ required: false, message: '' }]}
                    >
                        <Switch checkedChildren="是" unCheckedChildren="否" checked={keepAlive} onChange={(e) => setKeepAlive(e)} />
                    </Form.Item>
                    <Form.Item
                        label="聚合路由"
                        name="alwaysShow"
                        rules={[{ required: false, message: '' }]}
                    >
                        <Switch checkedChildren="是" unCheckedChildren="否" checked={alwaysShow} onChange={(e) => setAlwaysShown(e)} />
                    </Form.Item>
                    <Form.Item
                        label="打开方式"
                        name="internalOrExternal"
                        rules={[{ required: false, message: '' }]}
                    >
                        <Switch checkedChildren="外部" unCheckedChildren="内部" checked={internalOrExternal} onChange={(e) => setInternalOrExternal(e)} />
                    </Form.Item>
                </Form>
            </Drawer>
            <IconModule ref={IconModuleRef} setIcon={(e) => form.setFieldsValue({ icon: e })} />
        </>
    )
})

export default PermissionModule