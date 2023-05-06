export const service = {
	login: 'sys/login', //登录
	getMenuBar: "/sys/permission/getUserPermissionByToken",//菜单路由表
	// 用户管理
	UserList: "sys/user/list",//用户列表
	userAdd: "sys/user/add",//添加用户
	userEdit: "sys/user/edit",//编辑用户
	userDelete: "/sys/user/delete",//删除用户
	roleList: "sys/role/queryall", //角色列表
	getRoleId: "sys/user/queryUserRole",//角色id
	getDeptTree: "sys/tmpDeptInfo/list",//获取机构
	duplicateCheck: "sys/duplicate/check",///重复校验
	// 菜单管理
	getmenulist: "sys/permission/list",//系统管理-菜单列表
	deletePermission: "/sys/permission/delete",//系统管理-删除菜单
	addPermission: "/sys/permission/add",//系统管理-新增菜单
	editPermission: "/sys/permission/edit",//系统管理-编辑菜单
	deleteAllPermission: "/sys/permission/deleteBatch",//批量删除菜单
}
