(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4561,5755],{49643:function(){},243:function(){},47082:function(e,n,t){Promise.resolve().then(t.bind(t,37413)),Promise.resolve().then(t.bind(t,6567))},11990:function(e,n,t){"use strict";t.d(n,{B:function(){return fetchGroupListApi}});let a="api/v1/groups";var i=t(96657);let l=new i.Z({url:"https://mhtai.kenroly.com"});l.createEntities([{name:a}]);let fetchGroupListApi=()=>l.createBasicCRUDEndpoints({name:a}).get()},37413:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return GroupManagement}});var a=t(57437),i=t(2265),l=t(20020),s=t(18142),r=t(68939),c=t(65473);t(71727);var d=t(11990);t(50088);let o=[{title:"Group ID",dataIndex:"id",key:"id",render:e=>(0,a.jsx)("a",{children:e})},{title:"Name",dataIndex:"name",key:"name",render:e=>(0,a.jsx)("span",{children:e})}];function GroupManagement(){var e;let[n,t]=(0,i.useState)([]),[u,p]=(0,i.useState)({page:1,pageSize:10,meta:null}),fetchGroupList=async(e,n)=>{try{var a,i,l;let s=await (0,d.B)({page:e,limit:n}),r=null==s?void 0:null===(i=s.data)||void 0===i?void 0:null===(a=i.data)||void 0===a?void 0:a.meta;p(e=>({...e,meta:r})),t(null==s?void 0:null===(l=s.data)||void 0===l?void 0:l.data)}catch(e){console.error("fetch group list failed:",e)}};return(0,i.useEffect)(()=>{console.log("pagination:",u)},[u]),(0,i.useEffect)(()=>{fetchGroupList(u.page,u.pageSize)},[u.page]),(0,a.jsxs)("div",{className:"techwave_fn_community_page",children:[(0,a.jsx)("div",{className:"fn__title_holder",children:(0,a.jsx)("div",{className:"container-fluid",children:(0,a.jsx)("h1",{className:"title",children:"Group Management"})})}),(0,a.jsx)("div",{className:"techwave_fn_feed",children:(0,a.jsxs)("div",{className:"container-fluid",children:[(0,a.jsx)(r.Z,{columns:o,dataSource:n,pagination:!1}),";",(0,a.jsx)(l.Z,{children:(0,a.jsx)(s.Z,{xs:24,children:(0,a.jsx)("div",{className:"user-card-pagination text-end mt-5",children:(0,a.jsx)(c.default,{align:"end",total:null==u?void 0:null===(e=u.meta)||void 0===e?void 0:e.total,onChange:e=>{p(n=>({...n,page:e}))},current:u.page,pageSize:u.pageSize})})})})]})})]})}}},function(e){e.O(0,[5713,8218,8326,2600,1360,7394,59,8519,2641,9272,6567,2971,2472,1744],function(){return e(e.s=47082)}),_N_E=e.O()}]);