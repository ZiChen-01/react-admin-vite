import { Modal, Form, Input, message, Select, DatePicker } from "antd"
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import request from "@/api";
import moment from 'moment'
import './index.less'
const { Option } = Select;

const Addusers = forwardRef((props, ref) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isStatus, setIsStatus] = useState(1);//1 添加  2编辑
    const [form] = Form.useForm();
    const userInfo = JSON.parse(localStorage.getItem('userInfo') || '0')
    const [queryalllist, setQueryalllist] = useState([]) //角色列表
    const [DeptTree, setGetDeptTree] = useState([]) //机构
    const [showEle, setShowEle] = useState(true);
    //将子组件的方法 暴露给父组件
    useImperativeHandle(ref, () => ({
        setIsModalVisible,
        queryUserRole,
        getDeptTree,
        entiForm,
        setShowEle,
        setIsStatus
    }))
    // 弹出框确认
    const handleOk = async (values) => {
        try {
            const values = await form.validateFields();
            const res = await request.addUser(values)
            if (res.data.code == 200) {
                message.success(res.data.message)
                setIsModalVisible(false)
                props.getlist()
            }
        } catch (errorInfo) {
            //    错误
        }

    };
    // 获取角色
    const queryUserRole = async () => {
        const res = await request.getRoleList({})
        if (res.data.code == 0) {
            setQueryalllist(res.data.result)
        }
    }
    //获取机构
    const getDeptTree = async () => {
        const res = await request.getDeptTree({})
        if (res.data.errCode == 0) {
            let bizContent = JSON.parse(res.data.bizContent)
            setGetDeptTree(bizContent.tmpDeptInfos)
        }
    }
    //校验用户名
    const validateUsername = async (rule, value) => {
        const params = {
            tableName: 'sys_user',
            fieldName: 'username',
            fieldVal: value,
            dataId: userInfo.id
        };
        const res = await request.duplicateCheck(params)
        if (res.data.code == 500) {
            throw new Error("用户名已存在!")
        }
    }
    //校验工号
    const validateWorkNo = async (rule, value) => {
        const params = {
            tableName: 'sys_user',
            fieldName: 'work_no',
            fieldVal: value,
            dataId: userInfo.id
        };
        const res = await request.duplicateCheck(params)
        if (res.data.code == 500) {
            throw new Error("工号已存在!")
        }
    }
    //校验手机号
    const validatePhone = async (rule, value) => {
        if (new RegExp(/^1[3|4|5|7|8|9][0-9]\d{8}$/).test(value)) {
            const params = {
                tableName: 'sys_user',
                fieldName: 'phone',
                fieldVal: value,
                dataId: userInfo.id
            };
            const res = await request.duplicateCheck(params)
            if (res.data.code == 500) {
                throw new Error("手机号已存在!")
            }
        } else {
            throw new Error("请输入正确格式的手机号码!")
        }

    }
    //校验邮箱
    const validateEmail = async (rule, value) => {
        let reg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        if (reg.test(value)) {
            const params = {
                tableName: 'sys_user',
                fieldName: 'email',
                fieldVal: value,
                dataId: userInfo.id
            };
            const res = await request.duplicateCheck(params)
            if (res.data.code == 500) {
                throw new Error("邮箱已存在!")
            }
        } else {
            throw new Error("请输入正确格式的邮箱!")
        }

    }
    //编辑
    const entiForm = (data) => {
        form.setFieldsValue({
            username: data.username,
            realname: data.realname,
            workNo: data.workNo,
            selectedroles: data.selectedroles,
            orgCodeTxt: data.orgCodeTxt,
            birthday: moment(data.birthday),
            sex: String(data.sex),
            email: data.email,
            phone: data.phone,
        })
    }
    return (
        <>
            <Modal title={isStatus == 1 ? "添加用户" : "编辑用户"} open={isModalVisible} okText='提交' cancelText='取消' onOk={handleOk} onCancel={() => { setIsModalVisible(false); form.resetFields() }} width='80%'>
                <Form
                    name="basic"
                    form={form}
                    labelCol={{ span: 3 }}
                    wrapperCol={{ span: 20 }}
                    initialValues={{ remember: true }}
                >
                    <Form.Item
                        label="用户账号"
                        name="username"
                        rules={[{ required: true, message: '请输入用户账号!' }, { validator: validateUsername, }]}
                    >
                        <Input placeholder="请输入用户账号" />
                    </Form.Item>

                    {showEle ? (
                        <div>
                            <Form.Item
                                label="登录密码"
                                name="password"
                                rules={[{ required: true, message: '请输入登录密码!' }, { pattern: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,./]).{6,}$/, message: '密码由至少6位数字、大小写字母和特殊符号组成!' }]}
                            >
                                <Input.Password placeholder="请输入登录密码" />
                            </Form.Item>
                            <Form.Item
                                label="确认密码"
                                name="confirmpassword"
                                required
                                rules={[
                                    { required: true, message: '请确认密码!' },
                                    ({ getFieldValue }) => ({
                                        validator(_,value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            } else {
                                                return Promise.reject('两次密码不一致，请重新输入');
                                            }
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password placeholder="请确认密码" />
                            </Form.Item>
                        </div>
                    ) : ""}
                    <Form.Item
                        label="用户姓名"
                        name="realname"
                        rules={[{ required: true, message: '请输入用户姓名!' }]}
                    >
                        <Input placeholder="请输入用户姓名" />
                    </Form.Item>
                    <Form.Item
                        label="工号"
                        name="workNo"
                        rules={[{ required: true, message: '请输入工号!' }, { validator: validateWorkNo, }]}
                    >
                        <Input placeholder="请输入工号" />
                    </Form.Item>
                    <Form.Item
                        label="角色分配"
                        name="selectedroles"
                    >
                        <Select placeholder='请选择角色' getPopupContainer={(triggerNode) => (triggerNode.parentElement || document.body)}
                        >
                            {
                                queryalllist.map((item, index) => {
                                    return (
                                        <Option value={item.id} key={index}>{item.roleName}</Option>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="机构分配"
                        name="orgCodeTxt"
                    ><Select placeholder='请选择机构' getPopupContainer={(triggerNode) => (triggerNode.parentElement || document.body)}
                    >
                            {
                                DeptTree.map((item, index) => {
                                    return (
                                        <Option value={item.deptNo} key={index}>{item.deptName}</Option>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="生日"
                        name="birthday"
                    >
                        <DatePicker getPopupContainer={(triggerNode) => (triggerNode.parentElement || document.body)} placeholder="请选择生日" style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item
                        label="性别"
                        name="sex"
                    >
                        <Select placeholder='请选择性别！' getPopupContainer={(triggerNode) => (triggerNode.parentElement || document.body)}>
                            <Option value="1">男</Option>
                            <Option value="2">女</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="邮箱"
                        name="email"
                        rules={[{ required: true, message: '请输入邮箱!' }, { validator: validateEmail, }]}
                    >
                        <Input placeholder="请输入邮箱" />
                    </Form.Item>
                    <Form.Item
                        label="手机号码"
                        name="phone"
                        rules={[{ required: true, message: "" }, { validator: validatePhone, }]}
                    >
                        <Input placeholder="请输入手机号码" />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
})

export default Addusers