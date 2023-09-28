import { axios } from '@/api/methods';
import { service } from '@/api/service';
import { notification, message } from 'antd'


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
    userRoleList: (params) => { return axios('get', service.userRoleList, params) }, //查询当前角色用户
    deleteUserRole: (params) => { return axios('post', `${service.deleteUserRole}?roleId=${params.roleId}&userId=${params.userId}`, params) }, //当前角色移出用户
    addSysUserRole: (params) => { return axios('post', service.addSysUserRole, params) },  //添加用户到当前角色
    queryMenuTreeList: (params) => { return axios('get', service.queryMenuTreeList, params) },  //菜单权限树
    queryRolePermission: (params) => { return axios('get', service.queryRolePermission, params) },  //角色菜单权限key
    saveRolePermission: (params) => { return axios('post', service.saveRolePermission, params) },  //保存菜单权限

    // 机构
    getDeptTree: (params) => { return axios('post', service.getDeptTree, params) },  //查询机构

    //上传文件
    upLoadFileNew: (url, params) => {
        const { file } = params
        const formData = new FormData()
        formData.append('file', file)
        return axios('upLoad', url, formData)
    },
    // 下载文件
    downloadFile: (url, fileName, params) => {
        message.loading("正在下载文件，请稍后")
        return axios('download', url, params).then(response => {
            let data = response.data;
            if (!data || data.size === 0) {
                notification.error({
                    message: '请求错误',
                    description: '文件下载失败，请稍后重试',
                });
                return;
            }

            if (typeof window.navigator.msSaveBlob !== 'undefined') { //IE浏览器
                // Internet Explorer
                window.navigator.msSaveBlob(new Blob([data]), fileName);
            } else {
                // Other browsers
                const downloadUrl = window.URL.createObjectURL(new Blob([data]));

                const link = document.createElement('a');
                link.style.display = 'none';
                link.href = downloadUrl;
                link.setAttribute('download', fileName);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(downloadUrl);
            }


            let percentCompleted = 0;
            const totalDuration = 6000; // 总共的加载时间（以毫秒为单位）

            // 创建通知
            const key = 'download-progress-notification';
            notification.open({
                key,
                message: '下载进度',
                description: `已完成 ${percentCompleted.toFixed(2)} %`,
            });

            const updateProgress = () => {
                if (percentCompleted < 100) {
                    percentCompleted += (100 / totalDuration) * 100;
                    // 更新通知内容
                    notification.open({
                        key,
                        message: '下载进度',
                        description: `已完成 ${Math.min(percentCompleted, 100).toFixed(2)} %`,
                    });
                } else {
                    clearInterval(progressInterval); // 当加载完成后停止定时器
                    // 关闭通知
                    setTimeout(() => {
                        notification.close(key);
                    }, 1000);
                }
            };

            const progressInterval = setInterval(updateProgress, totalDuration / 100);
        });
    }
};

export default request;
