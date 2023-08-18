import{r as e,F as a,j as l,D as s,V as r,a9 as n,aa as t,ab as d,ac as i,d as o,w as c,ad as u,g as h,m}from"../.store/.store.788e8884.js";import{r as x}from"../index.88060652.js";import p from"./iconModule.d32dd410.js";const j=e.forwardRef(((j,C)=>{let[g]=a.useForm(),[b,w]=e.useState(""),[k,y]=e.useState(!1),[f,I]=e.useState("0"),[S,v]=e.useState(void 0),[q,F]=e.useState([]),[T,O]=e.useState(!0),[V,A]=e.useState(!1),[D,E]=e.useState(!1),[N,R]=e.useState(!1),[H,M]=e.useState(!1),[P,G]=e.useState(null),[z,B]=e.useState(!1),J=e.useRef(null);e.useImperativeHandle(C,(()=>({setOpen:y,setTitle:w,setTreeData:F,entiForm:K,setRadioValue:I,childenForm:L})));const K=e=>{g.setFieldsValue({name:e.name,url:e.url,component:e.component,icon:e.icon,sortNo:e.sortNo,menuType:1==e.menuType?e.parentId:null}),G(e.id),1==e.menuType&&v(e.parentId),I(String(e.menuType)),O(e.route),A(e.hidden),E(e.keepAlive),R(e.alwaysShow),M(e.internalOrExternal)},L=e=>{g.setFieldsValue({menuType:e.id}),v(e.id),B(!0)};return l.jsxs(l.Fragment,{children:[l.jsxs(s,{title:b,placement:"right",onClose:()=>{y(!1),g.resetFields(),O(!0),A(!1),E(!1),R(!1),M(!1),B(!1)},open:k,closable:!1,width:"40%",className:"permissionModule",footer:l.jsxs(l.Fragment,{children:[l.jsx(r,{onClick:()=>y(!1),style:{marginRight:"10px"},children:"取消"}),l.jsx(r,{type:"primary",onClick:async()=>{try{let e=function(e){200==e.data.code&&(m.success(e.data.message),j.getlist(),y(!1),g.resetFields(),O(!0),A(!1),E(!1),R(!1),M(!1),B(!1))};let a={...await g.validateFields(),menuType:f,route:T,hidden:V,keepAlive:D,alwaysShow:N,internalOrExternal:H,parentId:1==f?S:null};if("新增菜单"==b||"添加下级菜单"==b){e(await x.addPermission(a))}else if("编辑菜单"==b){a.id=P;e(await x.editPermission(a))}}catch(e){}},children:"确认"})]}),children:[l.jsx(n,{banner:!0,closeText:"取消",message:l.jsx(t,{pauseOnHover:!0,gradient:!1,children:"新增以后请在前端工程pages目录下添加该组件，例如：pages/dashboard/analysis/index.jsx。"})}),l.jsxs(a,{name:"basic",form:g,labelCol:{span:5},wrapperCol:{span:20},initialValues:{remember:!0},autoComplete:"off",children:[l.jsx(a.Item,{label:"菜单类型",children:l.jsxs(d.Group,{value:f,onChange:e=>I(e.target.value),disabled:z,children:[l.jsx(d,{value:"0",children:" 一级菜单 "}),l.jsx(d,{value:"1",children:" 子菜单 "})]})}),1==f?l.jsx(a.Item,{label:"上级菜单",name:"menuType",rules:[{required:!0,message:"请输入菜单名称!"}],children:l.jsx(i,{showSearch:!0,style:{width:"100%"},value:S,dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:"请选择上级菜单",allowClear:!0,treeDefaultExpandAll:!0,onChange:e=>{v(e)},treeData:q,disabled:z})}):"",l.jsx(a.Item,{label:"菜单名称",name:"name",rules:[{required:!0,message:"请输入菜单名称!"}],children:l.jsx(o,{placeholder:"请输入菜单名称",allowClear:!0})}),l.jsx(a.Item,{label:"菜单路径",name:"url",rules:[{required:!0,message:"请输入菜单路径!"}],children:l.jsx(o,{placeholder:"请输入菜单路径，示例：/dashboard/analysis",allowClear:!0})}),l.jsx(a.Item,{label:"前端组件",name:"component",rules:[{required:!0,message:"请输入前端组件!"}],children:l.jsx(o,{placeholder:"请输入前端组件，示例：dashboard/analysis",allowClear:!0})}),0==f?l.jsx(a.Item,{label:"默认跳转地址",name:"redirect",rules:[{required:!1,message:"请输入默认跳转地址!"}],children:l.jsx(o,{placeholder:"请输入默认跳转地址 redirect",allowClear:!0})}):"",l.jsx(a.Item,{label:"菜单图标",name:"icon",rules:[{required:!1,message:"请选择菜单图标!"}],children:l.jsx(o,{placeholder:"请选择菜单图标",addonAfter:l.jsx(c,{onClick:()=>{J.current.setIsModalOpen(!0)}}),allowClear:!0})}),l.jsx(a.Item,{label:"菜单排序",name:"sortNo",rules:[{required:!1,message:""}],children:l.jsx(u,{placeholder:"请输入菜单排序",style:{width:"200px"}})}),l.jsx(a.Item,{label:"是否路由菜单",name:"route",rules:[{required:!1,message:""}],children:l.jsx(h,{defaultChecked:!0,checkedChildren:"是",unCheckedChildren:"否",checked:T,onChange:e=>O(e)})}),l.jsx(a.Item,{label:"隐藏路由",name:"hidden",rules:[{required:!1,message:""}],children:l.jsx(h,{checkedChildren:"是",unCheckedChildren:"否",checked:V,onChange:e=>A(e)})}),l.jsx(a.Item,{label:"是否缓存路由",name:"keepAlive",rules:[{required:!1,message:""}],children:l.jsx(h,{checkedChildren:"是",unCheckedChildren:"否",checked:D,onChange:e=>E(e)})}),l.jsx(a.Item,{label:"聚合路由",name:"alwaysShow",rules:[{required:!1,message:""}],children:l.jsx(h,{checkedChildren:"是",unCheckedChildren:"否",checked:N,onChange:e=>R(e)})}),l.jsx(a.Item,{label:"打开方式",name:"internalOrExternal",rules:[{required:!1,message:""}],children:l.jsx(h,{checkedChildren:"外部",unCheckedChildren:"内部",checked:H,onChange:e=>M(e)})})]})]}),l.jsx(p,{ref:J,setIcon:e=>g.setFieldsValue({icon:e})})]})}));export{j as default};