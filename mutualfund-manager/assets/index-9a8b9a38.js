import{r as e,J as t,j as s,a2 as a,O as l,M as r,Q as n,N as i,R as d,U as o,B as c,V as u,X as h,Y as m,a0 as x,$ as j,a3 as g,a4 as p,a5 as y,a6 as S,a1 as k}from"./index-e6d10f58.js";import"./moment-8e95067b.js";import{T as C}from"./index-e3374630.js";import{T as b,a as f}from"./Table-ef838cc2.js";import"./iconUtil-fd190726.js";const w=e.forwardRef(((i,d)=>{let[o,c]=e.useState(!1),[u,h]=e.useState("0"),[m,x]=e.useState(null),[j]=t.useForm(),{TextArea:g}=l;e.useImperativeHandle(d,(()=>({setIsModalOpen:c,setEditForm:p,setTitle:h,setUserId:x})));const p=e=>{j.setFieldsValue({roleCode:e.roleCode,roleName:e.roleName,description:e.description})};return s.jsx(s.Fragment,{children:s.jsx(a,{title:0==u?"新增角色":"编辑角色",open:o,okText:"提交",cancelText:"取消",onOk:async()=>{try{const e=await j.validateFields();0==u?r.addRole(e).then((e=>{200==e.data.code&&(n.success(e.data.message),i.getList(),c(!1),j.resetFields())})):1==u&&(e.id=m,r.editRole(e).then((e=>{200==e.data.code&&(n.success(e.data.message),i.getList(),c(!1),j.resetFields())})))}catch(e){}},onCancel:()=>{c(!1),j.resetFields()},className:"AddRole",width:"50%",children:s.jsxs(t,{name:"basic",form:j,labelCol:{span:3},wrapperCol:{span:20},initialValues:{remember:!0},children:[s.jsx(t.Item,{label:"角色编码",name:"roleCode",rules:[{required:!0,message:"请输入角色编码!"},{validator:async(e,t)=>{const s={tableName:"sys_role",fieldName:"role_code",fieldVal:t,dataId:m};if(500==(await r.duplicateCheck(s)).data.code)throw new Error("角色编码已存在!")}}],children:s.jsx(l,{placeholder:"请输入角色编码",disabled:1==u})}),s.jsx(t.Item,{label:"角色名称",name:"roleName",rules:[{required:!0,message:"请输入角色名称!"}],children:s.jsx(l,{placeholder:"请输入角色名称"})}),s.jsx(t.Item,{label:"描述",name:"description",rules:[{required:!1,message:""}],children:s.jsx(g,{rows:4,placeholder:"请输入描述"})})]})})})})),I=e.forwardRef(((a,j)=>{let[g,p]=e.useState(!1),[y,S]=e.useState({}),[k,f]=e.useState(!1),[w,I]=e.useState([]),[N,T]=e.useState([]),[R,L]=e.useState([]),[v,z]=e.useState(""),[F,U]=e.useState("1");e.useImperativeHandle(j,(()=>({setLookVisible:p,setDetails:S,getUserlist:Y,getAllUserlist:G,setActiveKey:U})));let[K,M]=e.useState(0),[O,q]=e.useState(1),[D,V]=e.useState(10),A={current:O,pageSize:D,pageSizeOptions:["10","20","30","50","100"],showTotal:(e,t)=>t[0]+"-"+t[1]+" 共"+e+"条",showQuickJumper:!1,showSizeChanger:!0,total:K,onChange:e=>{q(e),Y()},onShowSizeChange:(e,t)=>{V(t),q(1),Y()}};const E=[{title:"用户账号",dataIndex:"username",align:"center",key:"username"},{title:"用户姓名",align:"center",dataIndex:"realname",key:"realname"},{title:"工号",align:"center",key:"workNo",dataIndex:"workNo"},{title:"操作",dataIndex:"action",align:"center",render:(e,t,a)=>s.jsx(s.Fragment,{children:s.jsx(x,{title:"确定要从此角色移出此用户?",onConfirm:()=>$(t),okText:"确定",cancelText:"取消",children:s.jsx("a",{children:"移出此用户"})})})}];let[J,Q]=e.useState(0),[H,P]=e.useState(1),[_,B]=e.useState(10),X={current:H,pageSize:_,pageSizeOptions:["10","20","30","50","100"],showTotal:(e,t)=>t[0]+"-"+t[1]+" 共"+e+"条",showQuickJumper:!1,showSizeChanger:!0,total:J,onChange:e=>{P(e),G()},onShowSizeChange:(e,t)=>{B(t),P(1),G()}};const Y=e=>{f(!0);let t={roleId:e.id,pageNo:O,pageSize:D};r.userRoleList(t).then((e=>{0==e.data.code&&(I(e.data.result.records),M(e.data.result.total)),f(!1)}))},$=e=>{let t={userId:e.id,roleId:y.id};r.deleteUserRole(t).then((e=>{200==e.data.code&&(n.success(e.data.message),Y(y))}))},G=()=>{f(!0);let e={username:v,pageNo:H,pageSize2:_};r.getUserList(e).then((e=>{0==e.data.code&&(T(e.data.result.records),Q(e.data.result.total)),f(!1)}))},W={onChange:(e,t)=>{L(e)}};return e.useEffect((()=>{}),[O]),s.jsx(s.Fragment,{children:s.jsxs(i,{title:"查看用户",open:g,closable:!1,onClose:()=>{p(!1)},width:"40%",footer:null,className:"lookUsers",children:[s.jsxs("p",{className:"lookUsers-title",children:[s.jsxs("span",{children:["当前角色：",y.roleName]}),s.jsxs("span",{children:["当前角色编码：",y.roleCode]})]}),s.jsx(C,{className:"iconDIV",defaultActiveKey:"1",onChange:e=>{U(e)},activeKey:F,items:[{label:"当前角色用户",key:"1",children:s.jsx(b,{rowKey:e=>e.id,dataSource:w,columns:E,loading:k,pagination:A})},{label:"添加已有用户",key:"2",children:s.jsxs(s.Fragment,{children:[s.jsxs(d,{gutter:15,children:[s.jsx(o,{md:12,sm:15,children:s.jsx(t.Item,{label:"账号",children:s.jsx(l,{value:v,onChange:e=>z(e.target.value),placeholder:"请输入账号"})})}),s.jsxs(o,{children:[s.jsx(c,{type:"primary",icon:s.jsx(u,{}),onClick:G,children:"查询"}),s.jsx(c,{type:"primary",icon:s.jsx(h,{}),onClick:()=>{z(""),P(1),v="",H=1,G()},style:{marginLeft:"10px"},children:"重置"}),0!=R.length?s.jsx(c,{type:"primary",icon:s.jsx(m,{}),onClick:()=>{let e={roleId:y.id,userIdList:R};r.addSysUserRole(e).then((e=>{0==e.data.code&&(n.success(e.data.message),U("1"),Y(y),L([]))}))},style:{marginLeft:"10px"},children:"添加"}):""]})]}),s.jsx(b,{rowKey:e=>e.id,dataSource:N,columns:[{title:"用户账号",dataIndex:"username",align:"center",key:"username"},{title:"用户姓名",align:"center",dataIndex:"realname",key:"realname"},{title:"工号",align:"center",key:"workNo",dataIndex:"workNo"}],loading:k,pagination:X,rowSelection:{selectedRowKeys:R,...W}})]})}]})]})})})),N=e.forwardRef(((t,a)=>{let[l,u]=e.useState(!1),[h,m]=e.useState(!1),[x,k]=e.useState({}),[C,b]=e.useState([]),[w,I]=e.useState([]),[N,T]=e.useState([]),[R,L]=e.useState([]),[v,z]=e.useState([]),[F,U]=e.useState(!1);const K=JSON.parse(localStorage.getItem("roleInfo"));e.useImperativeHandle(a,(()=>({setMenuVisible:m,queryMenuTreeList:M,setDetails:k})));const M=(e=null)=>{u(!0),r.queryMenuTreeList().then((t=>{if(0==t.data.code){let s=function(e){for(let t=0;t<e.length;t++){const a=e[t];l.includes(a.title)&&(a.disabled=!0),a.children&&s(a.children)}},a=O(t.data.result.treeList),l=["系统管理","用户管理","角色管理","菜单管理","机构管理"];e&&"admin"==e.roleCode&&s(a),b(a),L(t.data.result.ids),T(t.data.result.ids),q(e)}}))},O=e=>(e.forEach((e=>{e.title=e.slotTitle,e.children&&O(e.children)})),e),q=e=>{r.queryRolePermission({roleId:e.id}).then((e=>{u(!1),0==e.data.code&&(I(e.data.result),z(e.data.result))}))};return s.jsx(s.Fragment,{children:s.jsx(i,{title:"菜单角色权限配置",open:h,closable:!1,onClose:()=>{m(!1)},width:"40%",className:"MenuAuthorization",footer:s.jsx(s.Fragment,{children:s.jsxs(d,{justify:"space-between",className:"buttonbox",children:[s.jsx(o,{children:s.jsx(j,{trigger:["click"],menu:{items:[{label:s.jsx("a",{children:" 父子关联"}),key:"1"},{label:s.jsx("a",{children:" 取消关联"}),key:"2"},{label:s.jsx("a",{children:" 全部勾选"}),key:"3"},{label:s.jsx("a",{children:" 取消全选"}),key:"4"},{label:s.jsx("a",{children:" 展开所有"}),key:"5"},{label:s.jsx("a",{children:" 合并所有"}),key:"6"}],onClick:e=>(({key:e})=>{switch(e){case"1":U(!1);break;case"2":U(!0);break;case"3":I(N);break;case"4":I([]);break;case"5":L(N);break;case"6":L([])}})(e)},children:s.jsx("a",{onClick:e=>{e.preventDefault()},children:s.jsxs(c,{children:["树操作",s.jsx(g,{})]})})})}),s.jsxs(o,{children:[s.jsx(c,{onClick:()=>{m(!1)},style:{marginRight:"10px"},children:"取消"}),s.jsx(c,{type:"primary",onClick:()=>{let e={lastpermissionIds:v.join(","),permissionIds:w.join(","),roleId:x.id};r.saveRolePermission(e).then((e=>{200==e.data.code&&(K.roleCode==x.roleCode?K.roleCode==x.roleCode&&(n.loading("正在初始化菜单，请稍后"),y().then((e=>{localStorage.setItem("menuList",JSON.stringify(e)),setTimeout((()=>{S.dispatch({type:"reload",data:!0})}),2e3)}))):n.success(e.data.message)),q(x),m(!1)}))},children:"提交"})]})]})}),children:s.jsx(p,{spinning:l,children:s.jsx(f,{checkable:!0,onCheck:(e,t)=>{I(e)},treeData:C,checkedKeys:w,expandedKeys:R,checkStrictly:F,onExpand:e=>{L(e)}})})})})}));function T(){let[a,i]=e.useState(!1),[g,p]=e.useState([]),[y,S]=e.useState(""),C=e.useRef(null),f=e.useRef(null),T=e.useRef(null),[R,L]=e.useState(0),[v,z]=e.useState(1),[F,U]=e.useState(10),K={current:v,pageSize:F,pageSizeOptions:["10","20","30","50","100"],showTotal:(e,t)=>t[0]+"-"+t[1]+" 共"+e+"条",showQuickJumper:!1,showSizeChanger:!0,total:R,onChange:e=>{z(e),getUserlist()},onShowSizeChange:(e,t)=>{U(t),z(1),getUserlist()}};const M=[{title:"角色编码",align:"center",dataIndex:"roleCode"},{title:"角色名称",align:"center",dataIndex:"roleName"},{title:"创建时间",dataIndex:"createTime",align:"center"},{title:"操作",dataIndex:"action",align:"center",render:(e,t,a)=>s.jsxs(s.Fragment,{children:[s.jsx("a",{onClick:()=>q(t),children:"查看用户"}),s.jsx(j,{menu:{items:[{label:s.jsx("a",{children:" 菜单授权"}),key:"1"},{label:s.jsx("a",{children:" 编辑角色"}),key:"2"},{label:s.jsx(x,{Popconfirm:!0,title:"确定要删除此角色?",onConfirm:()=>V(t),okText:"确定",cancelText:"取消",children:s.jsx("a",{children:" 删除角色"})}),key:"3",disabled:t.roleCode.includes("admin")}],onClick:e=>D(e,t)},children:s.jsx("a",{onClick:e=>{e.preventDefault()},children:s.jsx(k,{children:"更多"})})})]})}],O=()=>{i(!0);let e={roleName:y,pageNo:v,pageSize:F};r.queryRoleList(e).then((e=>{i(!1),0==e.data.code&&(p(e.data.result.records),L(e.data.result.total))}))},q=e=>{f.current.setLookVisible(!0),f.current.setDetails(e),f.current.getUserlist(e),f.current.getAllUserlist(),f.current.setActiveKey("1")},D=({key:e},t)=>{switch(e){case"1":T.current.setMenuVisible(!0),T.current.setDetails(t),T.current.queryMenuTreeList(t);break;case"2":C.current.setIsModalOpen(!0),C.current.setTitle("1"),C.current.setUserId(t.id),C.current.setEditForm(t)}},V=e=>{r.roleDelete({id:e.id}).then((e=>{200==e.data.code&&(n.success(e.data.message),O())}))};return e.useEffect((()=>{O()}),[v]),s.jsx(s.Fragment,{children:s.jsxs("div",{className:"roleUserList",children:[s.jsxs(d,{gutter:24,children:[s.jsx(o,{md:6,sm:12,children:s.jsx(t.Item,{label:"角色名称",children:s.jsx(l,{value:y,onChange:e=>S(e.target.value),placeholder:"请输入角色名称"})})}),s.jsx(o,{md:6,sm:12})]}),s.jsxs(d,{justify:"space-between",className:"buttonbox",children:[s.jsxs(o,{children:[s.jsx(c,{type:"primary",icon:s.jsx(u,{}),onClick:O,children:"查询"}),s.jsx(c,{type:"primary",icon:s.jsx(h,{}),onClick:()=>{S(""),y="",O()},style:{marginLeft:"10px"},children:"重置"})]}),s.jsx(o,{children:s.jsx(c,{type:"primary",icon:s.jsx(m,{}),onClick:()=>{C.current.setIsModalOpen(!0),C.current.setTitle("0")},children:"添加角色"})})]}),s.jsx(b,{rowKey:e=>e.id,dataSource:g,columns:M,loading:a,pagination:K,expandable:{expandedRowRender:e=>s.jsxs("p",{style:{margin:0},children:["描述：",e.description]})}}),";",s.jsx(w,{ref:C,getList:O}),s.jsx(I,{ref:f}),s.jsx(N,{ref:T})]})})}export{T as default};