export const service = {
	login: 'sys/login', //登录
	getMenuBar:"/sys/permission/getUserPermissionByToken",//菜单路由表
	UserList: "sys/user/list",//用户列表
	userAdd: "sys/user/add",//添加用户
	roleList: "sys/role/queryall", //角色列表
	getRoleId: "sys/user/queryUserRole?userid",//角色id
	getDeptTree: "sys/tmpDeptInfo/list",//获取机构
	duplicateCheck: "sys/duplicate/check",///重复校验
	getmenulist:"sys/permission/list",//系统管理-菜单列表
	deletePermission:"/sys/permission/delete",//系统管理-删除菜单
}
