import { useState, useEffect } from 'react';
import { Table } from 'antd';
import request from "@/api"
import './index.less'

function DeptNew() {
    let [data, setData] = useState([])
    let [loading, setLoading] = useState(false)

    // 分页
    let [total, setTotal] = useState(0)
    let [pageIndex, setPageIndex] = useState(1)
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
            getDeptTree()
        },
        onShowSizeChange: (current, pageSize) => {
            setPageSize(pageSize);
            setPageIndex(1);
            getDeptTree()
        },
    }
    const columns = [
        {
            title: "机构名称",
            width: 400,
            dataIndex: "title",
        },
        {
            title: "机构编码",
            align: "center",
            dataIndex: "key",
        },
    ];
    useEffect(() => {
        getDeptTree()
    }, [pageIndex])
    // 查询
    const getDeptTree = async (record = null) => {
        setLoading(true)
        request.getDeptTree({ deptNo: record ? record.key : null }).then(res => {
            if (res.data.errCode == 0) {
                let deptTree = JSON.parse(res.data.bizContent).deptTree
                if (!record) {
                    // children返回为布尔值，不是array，报错，删除
                    if (deptTree[0].children) delete deptTree[0].children
                    setData(deptTree)
                } else {
                    record.children = deptTree
                    setData([record])
                }
            }

            setLoading(false)
        })
    }
    // 展开查询
    const rowExpand = (expanded, record) => {
        expanded && !(record.children instanceof Array) && getDeptTree(record);
    }
    return (
        <div id='DeptNew'>
            <Table rowKey={(row) => row.key} dataSource={data} columns={columns} loading={loading}
                pagination={pagination} rowExpandable={true} onExpand={rowExpand} expandable={{
                    expandedRowRender: (record) => (
                        <p style={{ margin: 0, }}>

                        </p>
                    ),
                    rowExpandable: (record) => record.name !== 'Not Expandable',
                }} />;
        </div>
    )
}

export default DeptNew