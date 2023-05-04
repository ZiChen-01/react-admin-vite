import { Space, Switch, Table, Menu, Popconfirm } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import request from "@/api"
import "./index.less"


function RoleUserList() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [checkStrictly, setCheckStrictly] = useState(false);
    const [pageIndex, setPageIndex] = useState(1)

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
        const res = await request.getmenulist({})
        console.log(res);
        if (res.data.code == 0) {
            setData(res.data.result)
        }

        setLoading(false)
    }
    // 编辑
    const edit = (item) => {
        console.log(item);
    }
    //删除
    const deleteMenu = (item) => {
        console.log(item);
    }
    //添加
    const addMenu = (item) => {
        console.log(item);
    }
    const confirm = (record) => {
        console.log(record);
    };
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        onSelect: (record, selected, selectedRows) => {
            console.log(record, selected, selectedRows);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
            console.log(selected, selectedRows, changeRows);
        },
    };
    return (
        <>
            <Space
                align="center"
                style={{
                    marginBottom: 16,
                }}
            >
                父子关联: <Switch checked={checkStrictly} onChange={setCheckStrictly} />
            </Space>
            <Table
                columns={columns}
                rowSelection={{
                    ...rowSelection,
                    checkStrictly,
                }}
                dataSource={data}
                loading={loading}
            />
        </>
    )
}

export default RoleUserList