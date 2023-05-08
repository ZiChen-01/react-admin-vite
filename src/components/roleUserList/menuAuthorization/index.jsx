import { Drawer, Tree, message, Button, Table, Popconfirm, Col, Row, Form } from "antd"
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import request from "@/api";
import { SearchOutlined, ReloadOutlined, PlusOutlined } from '@ant-design/icons';
import './index.less'

const MenuAuthorization = forwardRef((props, ref) => {
    const [menuVisible, setMenuVisible] = useState(false)
    const [details, setDetails] = useState({})
    const [treeData, setTreeData] = useState([])
    const [checkedKeys, setCheckedKeys] = useState([]) //复选框选中菜单
    const [expandedKeys, setExpandedKeys] = useState([]) //展开
    //将子组件的方法 暴露给父组件
    useImperativeHandle(ref, () => ({
        setMenuVisible, queryMenuTreeList, setDetails
    }))

    const handleOk = () => {
        let params = {
            permissionIds: checkedKeys.join(","),
            roleId: details.id
        }
        request.saveRolePermission(params).then(res => {
            if (res.data.code == 200) {
                message.success(res.data.message)
            }
        })
    }
    // 菜单树
    const queryMenuTreeList = (item = null) => {
        request.queryMenuTreeList().then(res => {
            if (res.data.code == 0) {
                console.log(res.data.result.ids);
                setTreeData(setTreeList(res.data.result.treeList))
                setExpandedKeys(res.data.result.ids)
                queryRolePermission(item)
            }
        })
    }
    // 权限树数据处理
    function setTreeList(array) {
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            element.title = element.slotTitle
            if (element.children) setTreeList(element.children)
        }
        return array
    }
    // 菜单角色key
    const queryRolePermission = (item) => {
        request.queryRolePermission({ roleId: item.id }).then(res => {
            if (res.data.code == 0) {
                console.log(res.data.result);
                setCheckedKeys(res.data.result)
            }
        })
    }

    const onCheck = (checkedKeys, info) => {
        console.log(checkedKeys);
        setCheckedKeys(checkedKeys)
    };
    return (
        <>
            <Drawer title="菜单角色权限配置" open={menuVisible} closable={false} onClose={() => { setMenuVisible(false) }} width='40%' className="MenuAuthorization" footer={
                <>
                    <Button onClick={() => { setMenuVisible(false) }} style={{ marginRight: "10px" }}>
                        取消
                    </Button>
                    <Button type="primary" onClick={handleOk}>
                        提交
                    </Button>
                </>
            }>
                <Tree
                    checkable
                    onCheck={onCheck}
                    treeData={treeData}
                    checkedKeys={checkedKeys}
                    expandedKeys={expandedKeys}
                />
            </Drawer >
        </>
    )
})
export default MenuAuthorization