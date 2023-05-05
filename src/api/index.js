import { axios } from '@/api/methods';
import { service } from '@/api/service';



// 统一导出供调用  请勿重复命名

const request = {
    getLogin: (params) => { return axios('post', service.login, params) }, //登录
    getMenuBar: (params) => { return axios('get', service.getMenuBar, params) }, //菜单
    getUserList: (params) => { return axios('get', service.UserList, params) }, //用户列表
    addUser: (params) => { return axios('post', service.userAdd, params) }, //添加用户
    getRoleList: (params) => { return axios('get', service.roleList, params) }, //角色列表
    getRoleId: (params) => { return axios('get', service.getRoleId, params) }, //角色id
    getDeptTree: (params) => { return axios('post', service.getDeptTree, params) },  //获取机构
    duplicateCheck: (params) => { return axios('get', service.duplicateCheck, params) },  //重复校验
    getmenulist: (params) => { return axios('get', service.getmenulist, params) },  //系统管理-菜单列表
    deletePermission: (params) => { return axios('get', service.deletePermission, params) },  //系统管理-删除菜单
    addPermission: (params) => { return axios('post', service.addPermission, params) },  //系统管理-新增菜单

    //上传文件
    upLoadFileNew: (url, params) => {
        const { file } = params
        const formData = new FormData()
        formData.append('file', file)
        return axios('upLoad', url, formData)
    }
};

export default request;
