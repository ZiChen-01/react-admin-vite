import { axios } from '@/api/methods';
import { service } from '@/api/service';



// 统一导出供调用  请勿重复命名

const request = {
    getLogin: (params) => { return axios('post', service.login, params) }, //登录
    getMenuBar: (params) => { return axios('get', service.getMenuBar, params) }, //菜单路由
    // 用户
    getUserList: (params) => { return axios('get', service.UserList, params) }, //用户列表
    addUser: (params) => { return axios('post', service.userAdd, params) }, //添加用户
    userEdit: (params) => { return axios('post', service.userEdit, params) }, //编辑用户
    changePassword: (params) => { return axios('post', service.changePassword, params) }, //修改密码
    userDelete: (params) => { return axios('post', service.userDelete + "?id=" + params.id, params) }, //删除用户
    getRoleList: (params) => { return axios('get', service.roleList, params) }, //角色列表
    getRoleId: (params) => { return axios('get', service.getRoleId, params) }, //角色id
    getDeptTreeList: (params) => { return axios('post', service.getDeptTreeList, params) },  //获取机构
    duplicateCheck: (params) => { return axios('get', service.duplicateCheck, params) },  //重复校验
    // 菜单
    getmenulist: (params) => { return axios('get', service.getmenulist, params) },  //菜单列表
    deletePermission: (params) => { return axios('post', service.deletePermission + "?id=" + params.id, params) },  //删除菜单
    deleteAllPermission: (params) => { return axios('post', service.deleteAllPermission + "?ids=" + params.ids, params) },//批量删除菜单
    addPermission: (params) => { return axios('post', service.addPermission, params) },  //新增菜单
    editPermission: (params) => { return axios('post', service.editPermission, params) },  //编辑菜单
    // 角色
    queryRoleList: (params) => { return axios('get', service.queryRoleList, params) },  //查询角色
    roleDelete: (params) => { return axios('post', service.roleDelete + "?id=" + params.id, params) },  //删除角色
    addRole: (params) => { return axios('post', service.addRole, params) },  //新增角色
    editRole: (params) => { return axios('post', service.editRole, params) },  //编辑角色

    // 机构
    getDeptTree: (params) => { return axios('post', service.getDeptTree, params) },  //查询机构

    //上传文件
    upLoadFileNew: (url, params) => {
        const { file } = params
        const formData = new FormData()
        formData.append('file', file)
        return axios('upLoad', url, formData)
    }
};

export default request;
