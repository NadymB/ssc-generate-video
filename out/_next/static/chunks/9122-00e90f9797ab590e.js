"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9122],{11990:function(e,a,t){t.d(a,{B:function(){return fetchGroupListApi}});let n="api/v1/groups";var i=t(96657);let l=new i.Z({url:"https://mhtai.kenroly.com"});l.createEntities([{name:n}]);let fetchGroupListApi=()=>l.createBasicCRUDEndpoints({name:n}).get()},75551:function(e,a,t){t.d(a,{tH:function(){return createTeamApi},T8:function(){return deleteMultiTeamApi},Cl:function(){return fetchDetailTeamApi},CB:function(){return fetchListTeamApi},eQ:function(){return updateTeamApi}});let n="api/v1/teams";var i=t(96657);let l=new i.Z({url:"https://mhtai.kenroly.com"});l.createEntities([{name:n}]);let fetchListTeamApi=e=>l.createBasicCRUDEndpoints({name:n}).get(e),createTeamApi=e=>l.createBasicCRUDEndpoints({name:"api/v1/teams"}).post(e),updateTeamApi=e=>l.createBasicCRUDEndpoints({name:"api/v1/teams"}).put(e),fetchDetailTeamApi=e=>l.createBasicCRUDEndpoints({name:"api/v1/teams"}).getOne(e),deleteMultiTeamApi=e=>l.createBasicCRUDEndpoints({name:"api/v1/teams"}).submitDeleteCustom(e)},77032:function(e,a,t){t.d(a,{F8:function(){return createNewUserApi},hS:function(){return fetchDetailUserApi},L2:function(){return fetchListUserApi},H6:function(){return updateUserApi}});let n="api/v1/users";var i=t(96657);let l=new i.Z({url:"https://mhtai.kenroly.com"});l.createEntities([{name:n},{name:"api/v1/groups"}]);let fetchListUserApi=e=>l.createBasicCRUDEndpoints({name:n}).get(e),createNewUserApi=e=>l.createBasicCRUDEndpoints({name:"api/v1/users"}).post(e),fetchDetailUserApi=e=>l.createBasicCRUDEndpoints({name:"api/v1/users"}).getOne(e),updateUserApi=e=>l.createBasicCRUDEndpoints({name:"api/v1/users"}).put(e)},84909:function(e,a,t){t.d(a,{Z:function(){return UserManagementTest}});var n=t(57437),i=t(2265),l=t(20020),s=t(18142),r=t(68939),o=t(88500),d=t(65473),u=t(88110),c=t.n(u),m=t(9273),p=t(71727),h=t(11990),v=t(75551),f=t(77032),x=t(92237);t(97212);var g=t(53648),C=t(59611),b=t(14472),j=t(44511),U=t(79404),w=t(5925);function UserManagementTest(){var e,a;let[t,u]=(0,i.useState)([]),[y,A]=(0,i.useState)({}),[E,S]=(0,i.useState)([]),[T,Z]=(0,i.useState)([]),[N,R]=(0,i.useState)({}),[_,D]=(0,i.useState)({page:1,pageSize:10,meta:null}),[k,L]=(0,i.useState)(!1),[B,M]=(0,i.useState)(!1),[G,F]=(0,i.useState)(!1),q=(0,i.useRef)(),I=(0,i.useRef)(),O=(0,i.useRef)();(0,i.useRef)();let[z]=U.Z.useForm(),handleShowDetailUserModal=async e=>{var a,t,n,i,l;try{let t=await (0,f.hS)(e);(null==t?void 0:t.status)===200&&(R(null==t?void 0:null===(a=t.data)||void 0===a?void 0:a.data),M(!0))}catch(e){console.error("An error occurred:",null==e?void 0:null===(n=e.response)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.message),w.Am.error(null==e?void 0:null===(l=e.response)||void 0===l?void 0:null===(i=l.data)||void 0===i?void 0:i.message)}};(0,i.useEffect)(()=>{console.log("user detail:",N)},[N]);let fetchUserList=async(e,a)=>{try{var t,n,i,l;let s=await (0,p.eg)({page:e,limit:a}),r=null==s?void 0:null===(n=s.data)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.meta;D(e=>({...e,meta:r})),u(null==s?void 0:null===(l=s.data)||void 0===l?void 0:null===(i=l.data)||void 0===i?void 0:i.items)}catch(e){console.error("fetch user list failed:",e)}},fetchGroupList=async(e,a)=>{try{var t;let n=await (0,h.B)({page:e,limit:a});S(null==n?void 0:null===(t=n.data)||void 0===t?void 0:t.data)}catch(e){console.error("fetch group list failed:",e)}},fetchTeamList=async(e,a)=>{try{var t,n;let i=await (0,v.CB)({page:e,limit:a});Z(null==i?void 0:null===(n=i.data)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.items)}catch(e){console.error("fetch team list failed:",e)}},handleCreateUser=async e=>{var a,t,n,i,l,s;try{let n=await (0,f.F8)(e);(null==n?void 0:n.status)===200&&(w.Am.success("Tạo t\xe0i khoản th\xe0nh c\xf4ng!"),A(null==n?void 0:null===(a=n.data)||void 0===a?void 0:a.data),fetchUserList(1,_.pageSize),null===(t=q.current)||void 0===t||t.resetFields(),L(!1),F(!0))}catch(e){console.error("An error occurred:",null==e?void 0:null===(i=e.response)||void 0===i?void 0:null===(n=i.data)||void 0===n?void 0:n.message),w.Am.error(null==e?void 0:null===(s=e.response)||void 0===s?void 0:null===(l=s.data)||void 0===l?void 0:l.message)}},handleCopyUserCredential=async e=>{try{let{username:a,password:t}=e,n="username:".concat(a,"|password:").concat(t);await navigator.clipboard.writeText(n),w.Am.success("Username v\xe0 password đ\xe3 được sao ch\xe9p v\xe0o clipboard")}catch(e){w.Am.error("Kh\xf4ng thể sao ch\xe9p th\xf4ng tin. Vui l\xf2ng thử lại."),console.error("Error copying text:",e)}};(0,i.useEffect)(()=>{console.log("createdUser:",y)},[y]),(0,i.useEffect)(()=>{fetchUserList(_.page,_.pageSize)},[_.page]),(0,i.useEffect)(()=>{fetchGroupList(1,100),fetchTeamList(1,100)},[]);let{getPrefixCls:V}=(0,i.useContext)(m.default.ConfigContext);V();let handleUpdateUser=async e=>{var a,t,n,i,l;try{console.log("values:",e);let t={id:null==N?void 0:N.id,...e,group_id:null==e?void 0:e.group_id},n=await (0,f.H6)(t);(null==n?void 0:n.status)===200&&(w.Am.success("Cập nhật user th\xe0nh c\xf4ng!"),fetchUserList(1,_.pageSize),null===(a=I.current)||void 0===a||a.resetFields(),M(!1))}catch(e){console.error("An error occurred when update team:",null==e?void 0:null===(n=e.response)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.message),w.Am.error(null==e?void 0:null===(l=e.response)||void 0===l?void 0:null===(i=l.data)||void 0===i?void 0:i.message)}},$={required:"${label} is required!",types:{email:"${label} is not a valid email!",number:"${label} is not a valid number!"},number:{range:"${label} must be between ${min} and ${max}"}},P=(0,i.useMemo)(()=>[{title:"Name",dataIndex:"name",key:"name",render:e=>(0,n.jsx)("a",{children:e})},{title:"Username",dataIndex:"username",key:"username",render:e=>(0,n.jsx)("span",{children:e})},{title:"Email",dataIndex:"email",key:"email",render:e=>(0,n.jsx)("span",{children:e})},{title:"Group",dataIndex:"group",key:"group",render:(e,a)=>{let{group:t}=a;return(0,n.jsx)(o.Z,{color:"ADMIN"===t?"geekblue":"SUPERVISOR"===t?"green":"volcano",children:t.toUpperCase()},t)}},{title:"Teams",dataIndex:"teams",key:"teams",render:e=>(0,n.jsx)("span",{children:null==e?void 0:e.map(e=>e.name).join(", ")})},{title:"Action",dataIndex:"id",key:"id",render:(e,a)=>{let{id:t}=a;return(0,n.jsx)("div",{className:"d-flex justify-content-center w-100",children:(0,n.jsx)("button",{type:"button",className:"btn btn-outline-primary",onClick:()=>{handleShowDetailUserModal(t)},children:"Update"})})}}],[]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"techwave_fn_community_page",children:[(0,n.jsx)("div",{className:"fn__title_holder",children:(0,n.jsx)("div",{className:"container-fluid",children:(0,n.jsx)("h1",{className:"title",children:"Quản l\xfd User"})})}),(0,n.jsx)("div",{className:"techwave_fn_feed",children:(0,n.jsxs)("div",{className:"container-fluid",children:[(0,n.jsx)("div",{className:"w-100 d-flex justify-content-end",children:(0,n.jsx)(c(),{type:"primary",size:"large",icon:(0,n.jsx)(x.Z,{}),className:"d-flex align-items-center bg-success",onClick:()=>{L(!0)},children:"Tạo mới user"})}),(0,n.jsx)(r.Z,{columns:P,dataSource:t,pagination:!1,className:"mt-2"}),(0,n.jsx)(l.Z,{children:(0,n.jsx)(s.Z,{xs:24,children:(0,n.jsx)("div",{className:"user-card-pagination text-end mt-5",children:(0,n.jsx)(d.default,{align:"end",total:null==_?void 0:null===(e=_.meta)||void 0===e?void 0:e.total,onChange:e=>{D(a=>({...a,page:e}))},current:_.page,pageSize:_.pageSize})})})})]})})]}),(0,n.jsxs)(g.Y,{title:"Create a new user",open:k,onFinish:handleCreateUser,onOpenChange:L,submitter:{searchConfig:{submitText:"Submit",resetText:"Close"}},validateMessages:$,formRef:q,children:[(0,n.jsxs)(C.A.Group,{children:[(0,n.jsx)(b.Z,{width:"md",name:"username",label:"Username",tooltip:"Enter a username",placeholder:"Enter username",rules:[{required:!0}]}),(0,n.jsx)(b.Z,{type:"email",width:"md",name:"email",label:"Email",tooltip:"Enter a email",placeholder:"Enter a email",rules:[{required:!0},{type:"email"}]})]}),(0,n.jsxs)(C.A.Group,{children:[(0,n.jsx)(b.Z,{width:"sm",name:"name",label:"Name",tooltip:"Enter a name",placeholder:"Enter a name",rules:[{required:!0}]}),(0,n.jsx)(j.Z,{options:E.map(e=>({value:e.id,label:e.name})),width:"sm",placeholder:"...",name:"group_id",label:"Choose a group",rules:[{required:!0}]}),(0,n.jsx)(j.Z,{width:"sm",placeholder:"...",options:T.map(e=>({value:e.id,label:e.name})),fieldProps:{mode:"multiple"},name:"team_ids",label:"Choose teams"})]})]}),(0,n.jsxs)(g.Y,{title:"Cập nhật user",open:B,onFinish:handleUpdateUser,onOpenChange:M,submitter:{searchConfig:{submitText:"Submit",resetText:"Close"}},validateMessages:$,formRef:I,modalProps:{destroyOnClose:!0,onCancel:()=>console.log("run")},children:[(0,n.jsxs)(C.A.Group,{children:[(0,n.jsx)(b.Z,{width:"md",name:"name",label:"T\xean của user",tooltip:"Nhập t\xean của user",placeholder:"Nhập t\xean của user",value:N.name,disabled:!0}),(0,n.jsx)(b.Z,{width:"md",name:"email",label:"email",tooltip:"email cua user",value:null==N?void 0:N.email,disabled:!0})]}),(0,n.jsxs)(C.A.Group,{children:[(0,n.jsx)(j.Z,{options:null==E?void 0:E.map(e=>({value:e.id,label:e.name})),width:"md",placeholder:"...",name:"group_id",label:"Chọn group",initialValue:{value:N.group_id},rules:[{required:!0}]}),(0,n.jsx)(j.Z,{options:null==T?void 0:T.map(e=>({value:e.id,label:e.name})),width:"md",placeholder:"...",name:"team_ids",label:"Chọn team",fieldProps:{mode:"multiple"},initialValue:null==N?void 0:null===(a=N.teams)||void 0===a?void 0:a.map(e=>e.id),rules:[{required:!0}]})]})]}),(0,n.jsx)(g.Y,{title:"Sao ch\xe9p th\xf4ng tin đăng nhập",open:G,onFinish:handleCopyUserCredential,onOpenChange:F,submitter:{searchConfig:{submitText:"Sao ch\xe9p",resetText:"Đ\xf3ng"}},validateMessages:$,formRef:O,modalProps:{destroyOnClose:!0,onCancel:()=>A({})},children:(0,n.jsxs)(C.A.Group,{children:[(0,n.jsx)(b.Z,{width:"md",name:"username",label:"username",initialValue:null==y?void 0:y.username,disabled:!0}),(0,n.jsx)(b.Z,{width:"md",name:"password",label:"password",initialValue:null==y?void 0:y.password,disabled:!0})]})})]})}t(83343)},86449:function(e,a,t){var n=t(57437),i=t(39272),l=t(24033),s=t(2265);a.Z=e=>a=>{let{authToken:t,login:r}=(0,i.useAuth)(),o=(0,l.useRouter)();return(0,s.useEffect)(()=>{t||o.push("/sign-in")},[t,o]),t?(0,n.jsx)(e,{...a}):null}}}]);