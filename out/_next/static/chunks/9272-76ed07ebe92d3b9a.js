"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9272],{96657:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(54829),r=a(62601);let o=r.env.REACT_APP_API_URL,c=null;c=localStorage.getItem("authToken");var i=class{createEntity(e){this.endpoints[e.name]=this.createBasicCRUDEndpoints(e)}createEntities(e){e.forEach(this.createEntity.bind(this))}createBasicCRUDEndpoints(e){let{name:t}=e;var a={};let r="".concat(this.url,"/").concat(t);return a.getWithNoToken=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{headers:{}};return n.Z.get(r,{params:{...e},...t})},a.get=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{headers:{authorization:c?"Bearer ".concat(c):null}};return n.Z.get(r,{params:{...e},...t})},a.getWithHeader=(e,t)=>{let a={};return e.config&&(a={...e.config}),console.log("params:",e.params),console.log("config:",e.config),console.log("customHeaders:",a),console.log("query:",e),n.Z.get(r,{params:{...e.params},headers:{...a,authorization:c?"Bearer ".concat(c):(null==e?void 0:e.token)?"Bearer ".concat(c):null}})},a.getOne=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{headers:{authorization:c?"Bearer ".concat(c):null}};return n.Z.get("".concat(r,"/").concat(e),{...t})},a.getByLink=function(e){let{link:t}=e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{headers:{authorization:c?"Bearer ".concat(c):null}};return n.Z.get("".concat(r,"/").concat(t),{...a})},a.customGet=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{headers:{authorization:c?"Bearer ".concat(c):null}};return n.Z.get(r.replace("id",e),e,{...t})},a.postWithNoToken=(e,t)=>{let a=t&&t.headers&&{...t.headers};return n.Z.post(r,e,{...t,headers:{...a,"Content-Type":"application/json"}})},a.submitPost=(e,t)=>{let a=t&&t.headers&&{...t.headers};return console.log("---- resource url -----",r.replace("id",e),e),n.Z.post(r.replace("id",e),e,{...t,headers:{authorization:c?"Bearer ".concat(c):null,...a}})},a.post=(e,t)=>{let a=t&&t.headers&&{...t.headers};return n.Z.post(r,e,{...t,headers:{authorization:c?"Bearer ".concat(c):null,...a}})},a.put=(e,t)=>{let a=t&&t.headers&&{...t.headers};return n.Z.put(r,e,{...t,headers:{authorization:c?"Bearer ".concat(c):null,...a}})},a.patch=(e,t)=>{let a=t&&t.headers&&{...t.headers};return n.Z.patch(r,e,{...t,headers:{authorization:c?"Bearer ".concat(c):null,...a}})},a.submitPut=(e,t)=>{let a=t&&t.headers&&{...t.headers};return n.Z.put(r.replace("id",e.id),e,{...t,headers:{authorization:c?"Bearer ".concat(c):null,...a}})},a.submitPatch=(e,t)=>{let a={statuses:e.data.statuses},o=t&&t.headers&&{...t.headers};return n.Z.patch("".concat(r,"/").concat(e.data.id),a,{...t,headers:{authorization:c?"Bearer ".concat(c):null,...o}})},a.patchWithoutId=(e,t)=>{let a=t&&t.headers&&{...t.headers};return n.Z.patch(r,e,{...t,headers:{...a,authorization:c?"Bearer ".concat(c):null,"Content-Type":"application/json"}})},a.submitDelete=(e,t)=>{let a=t&&t.headers&&{...t.headers};return n.Z.delete(r.replace("id",e),e,{...t,headers:{authorization:c?"Bearer ".concat(c):null,...a}})},a.update=(e,t)=>{let a=t&&t.headers&&{...t.headers},o=e&&(e.id||e.get("id"));return n.Z.put("".concat(r,"/").concat(o),e,{...t,headers:{authorization:c?"Bearer ".concat(c):null,...a}})},a.patch=function(e,t){let{id:a}=e,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{headers:{authorization:c?"Bearer ".concat(c):null}};return n.Z.patch("".concat(r,"/").concat(a),t,{...o})},a.customPatch=function(e,t){let{start_id:a,end_id:o}=e,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{headers:{authorization:c?"Bearer ".concat(c):null}};return n.Z.patch("".concat(r,"/").concat(a,"/").concat(o),t,{...i})},a.delete=function(e){let{id:t}=e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{headers:{authorization:c?"Bearer ".concat(c):null}};return n.Z.delete("".concat(r,"/").concat(t),{...a})},a}constructor({url:e}){this.url=e||o,this.endpoints={}}}},71727:function(e,t,a){a.d(t,{dt:function(){return changePasswordApi},eg:function(){return fetchAdminListUser},Q1:function(){return fetchUserProfileApi},E8:function(){return loginUserApi}});let n="api/v1/auth/login",r="api/v1/users",o="api/v1/auth/change-password";var c=a(96657);console.log(a(62601).env);let i=new c.Z({url:"https://mhtai.kenroly.com"});i.createEntities([{name:n},{name:"api/v1/users/register"},{name:"api/v1/auth/me"},{name:r},{name:"api/v1/users/password"},{name:o}]);let loginUserApi=e=>i.createBasicCRUDEndpoints({name:n}).post(e),fetchUserProfileApi=()=>i.createBasicCRUDEndpoints({name:"api/v1/auth/me"}).get(),fetchAdminListUser=e=>(console.log("params:",e),i.createBasicCRUDEndpoints({name:r}).get(e)),changePasswordApi=e=>i.createBasicCRUDEndpoints({name:o}).put(e)},39272:function(e,t,a){a.r(t),a.d(t,{AuthProvider:function(){return AuthProvider},useAuth:function(){return useAuth}});var n=a(57437),r=a(2265),o=a(24033),c=a(71727);let i=(0,r.createContext)(null),AuthProvider=e=>{let{children:t}=e,[a,l]=(0,r.useState)(null),[u,s]=(0,r.useState)(null),h=(0,o.useRouter)();(0,r.useEffect)(()=>{{let e=localStorage.getItem("authToken");e&&s(e)}},[]);let login=async(e,t)=>{try{var a,n;let r=await (0,c.E8)({username:e,password:t}),o=null==r?void 0:null===(n=r.data)||void 0===n?void 0:null===(a=n.data)||void 0===a?void 0:a.token;return s(o),localStorage.setItem("authToken",o),o}catch(e){console.error("Login failed:",e)}},logout=async()=>{s(null),localStorage.removeItem("authToken"),h.push("/sign-in")},fetchProfile=async()=>{try{let t=await (0,c.Q1)();if((null==t?void 0:t.status)===200){var e;l(null==t?void 0:null===(e=t.data)||void 0===e?void 0:e.data)}else l(null)}catch(e){console.error("fetch profile failed:",e)}};return(0,r.useEffect)(()=>{fetchProfile()},[]),(0,n.jsx)(i.Provider,{value:{user:a,authToken:u,login,logout},children:t})},useAuth=()=>(0,r.useContext)(i)}}]);