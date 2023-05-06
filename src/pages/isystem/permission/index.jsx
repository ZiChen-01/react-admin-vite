import { Space, Switch, Table, Modal, Popconfirm, Button, Col, Row, message } from 'antd';
import { DeleteOutlined, PlusOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import React, { useState, useEffect, useRef } from 'react';
import request from "@/api"
import { service } from '@/api/service';
import "./index.less"
import PermissionModule from "./permissionModule"

function RoleUserList() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [checkStrictly, setCheckStrictly] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState([])
    const PermissionModuleRef = useRef(null);

    // 分页
    let [total, setTotal] = useState(0)
    const [pageIndex, setPageIndex] = useState(1)
    let [pageSize, setPageSize] = useState(10)
    let pagination = {
        current: pageIndex,
        pageSize,
        pageSizeOptions: ['10', '30', '30', "50", "100"],
        showTotal: (total, range) => {
            return range[0] + "-" + range[1] + " 共" + total + "条"
        },
        showQuickJumper: false,
        showSizeChanger: true,
        total,//数据的总条数
        onChange: (pageIndex) => {
            setPageIndex(pageIndex);
            getmenulist()
        },
        onShowSizeChange: (current, pageSize) => {
            setPageSize(pageSize);
            setPageIndex(1);
            getmenulist()
        },
    }
    const columns = [
        {
            title: '菜单名称',
            dataIndex: 'name',
            key: 'name',
            width: 260,
        },
        {
            title: '菜单类型',
            dataIndex: 'menuType',
            key: 'menuType',
            render: function (text) {
                if (text == 0) {
                    return '菜单'
                } else if (text == 1) {
                    return '菜单'
                } else if (text == 2) {
                    return '按钮/权限'
                } else {
                    return text
                }
            }
        },
        /*{
          title: '权限编码',
          dataIndex: 'perms',
          key: 'permissionCode',
        },*/
        {
            title: 'icon',
            dataIndex: 'icon',
            key: 'icon'
        },
        {
            title: '组件',
            dataIndex: 'component',
            key: 'component',
            scopedSlots: { customRender: 'component' }
        },
        {
            title: '路径',
            dataIndex: 'url',
            key: 'url',
            scopedSlots: { customRender: 'url' }
        },
        {
            title: '排序',
            dataIndex: 'sortNo',
            key: 'sortNo'
        },
        {
            title: '操作',
            dataIndex: 'action',
            fixed: 'right',
            scopedSlots: { customRender: 'action' },
            align: 'center',
            width: 250,
            render: (text, record, index) => {
                return (
                    <>
                        <a onClick={() => edit(record)}>编辑</a>
                        <Popconfirm
                            title="确定要删除此菜单?"
                            onConfirm={() => confirm(record)}
                            okText="确定"
                            cancelText="取消"
                        >
                            <a className="delete">删除</a>
                        </Popconfirm>
                        <a onClick={() => addMenu(record)}>添加下级</a>
                    </>
                )
            }
        }
    ]

    useEffect(() => {
        getmenulist()
    }, [pageIndex])

    // 获取列表
    const getmenulist = async () => {
        setLoading(true)
        const res = await request.getmenulist({ pageIndex, pageSize })
        if (res.data.code == 0) {
            setData(res.data.result)
            setTotal(res.data.result.total)
        }

        setLoading(false)
    }
    // 新增菜单
    const newUser = () => {
        PermissionModuleRef.current.setOpen(true)
        PermissionModuleRef.current.setRadioValue("0")
        PermissionModuleRef.current.setTitle("新增菜单")
        let list = data
        setList(list)
        function setList(e) {
            e.forEach(item => {
                item.value = item.key
                if (item.children) setList(item.children)
            })
        }

        PermissionModuleRef.current.setTreeData(list)
    }
    // 编辑
    const edit = (item) => {
        PermissionModuleRef.current.setOpen(true)
        PermissionModuleRef.current.setTitle("编辑菜单")
        PermissionModuleRef.current.entiForm(item)
        let list = data
        setList(list)
        function setList(e) {
            e.forEach(item => {
                item.value = item.key
                if (item.children) setList(item.children)
            })
        }

        PermissionModuleRef.current.setTreeData(list)
    }
    //添加下级
    const addMenu = (item) => {
        PermissionModuleRef.current.setOpen(true)
        PermissionModuleRef.current.setRadioValue("1")
        PermissionModuleRef.current.setTitle("添加下级菜单")
        PermissionModuleRef.current.childenForm(item)
        let list = data
        setList(list)
        function setList(e) {
            e.forEach(item => {
                item.value = item.key
                if (item.children) setList(item.children)
            })
        }

        PermissionModuleRef.current.setTreeData(list)
    }
    //删除
    const confirm = async (record) => {
        const res = await request.deletePermission({ id: record.id })
        if (res.data.code == 200) {
            message.success(res.data.message)
            getmenulist()
        }
    };
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            setSelectedRowKeys(selectedRowKeys)
        },
    };
    // 批量删除
    const confirmModal = () => {
        Modal.confirm({
            title: '确认删除',
            icon: <ExclamationCircleOutlined />,
            content: '是否删除选中数据?',
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                let ids = selectedRowKeys.join(",")
                const res = await request.deleteAllPermission({ ids })
                if (res.data.code == 200) {
                    message.success(res.data.message)
                    getmenulist()
                    setSelectedRowKeys([])
                }
            }
        });
    };
    return (
        <>
            <div id="permission">
                <Row justify="space-between" className="buttonbox">
                    <Col>
                        <Button type="primary" icon={<PlusOutlined />} onClick={newUser}> 新增</Button>
                        {
                            selectedRowKeys.length != 0 ? <Button icon={<DeleteOutlined />} onClick={confirmModal} style={{ marginLeft: "10px" }}> 批量删除</Button> : ""
                        }
                    </Col>
                    <Col>
                        <Space
                            align="center"
                            style={{
                                marginBottom: 16,
                            }}
                        >
                            父子关联: <Switch checked={checkStrictly} onChange={setCheckStrictly} />
                        </Space>
                    </Col>
                </Row>
                <div className="alert">
                    已选择<span>{selectedRowKeys.length}</span>项
                    <a onClick={() => setSelectedRowKeys([])}>
                        清空
                    </a>
                </div>
                <Table
                    columns={columns}
                    rowSelection={{
                        selectedRowKeys,
                        ...rowSelection,
                        checkStrictly: !checkStrictly,

                    }}
                    dataSource={data}
                    loading={loading}
                    pagination={pagination}
                />

                <PermissionModule ref={PermissionModuleRef} getlist={getmenulist} />
            </div>
        </>
    )
}

export default RoleUserList