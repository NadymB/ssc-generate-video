(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5700],{11389:function(e,s,a){Promise.resolve().then(a.bind(a,83415)),Promise.resolve().then(a.bind(a,6567))},83415:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return AIChatbot}});var t=a(57437),i=a(2265),n=a(61396),c=a.n(n);let r={welcome:{type:"text",description:"welcome message",text:"Frenify was founded in 2017. The company began working with the first customers, giving them the opportunity to purchase high-quality HTML templates. The company’s products began to grow in terms of complexity and aesthetics. Frenify currently has a wide range of HTML templates, WordPress themes, WordPress plugins, Photoshop projects; paid and absolutely free products. Design projects are unique and aesthetically pleasing based on customer requirements. Visit our website to get acquainted with our products. Thank you so much for being with us.",append:!0},about:{type:"text",description:"some information about the Frenify team",text:"Frenify was founded in 2017. The company began working with the first customers, giving them the opportunity to purchase high-quality HTML templates. The company’s products began to grow in terms of complexity and aesthetics. Frenify currently has a wide range of HTML templates, WordPress themes, WordPress plugins, Photoshop projects; paid and absolutely free products. Design projects are unique and aesthetically pleasing based on customer requirements. Visit our website to get acquainted with our products. Thank you so much for being with us.",append:!0},website:{type:"url",description:"go to our official website",append:!1,url:"https://frenify.com/"},free:{type:"url",description:"get PSD files of premium themes for free",append:!1,url:"https://frenify.com/freebies/"},doc:{type:"url",description:"visit online documentation for TechWave HTML template",append:!1,url:"https://frenify.com/work/envato/frenify/html/techwave/doc"},support:{type:"url",description:"if you have any questions regarding TechWave HTML template feel free and contact us by this command",append:!1,url:"https://themeforest.net/item/techwave-ai-html-dashboard-for-image-generation-chat-bot/46197058/support/contact"},purchase:{type:"url",description:"open the template description page on themeforest to purchase it",append:!1,url:"https://themeforest.net/item/techwave-ai-html-dashboard-for-image-generation-chat-bot/46197058"},youtube:{type:"url",description:"visit our youtube channel with video guides on our themes and templates",append:!1,url:"https://www.youtube.com/@frenifyteam/videos"},pass:{type:"password",description:"if you want to get strong password I can generate it for you, write <frenify_main>/pass 20</frenify_main> to get a 20 character password",append:!0},joke:{type:"joke",description:"I can cheer you up by telling a joke",append:!0},time:{type:"time",description:"display current time",append:!0},clear:{type:"clear",description:"to clear current chat",append:!1},commands:{type:"commands",description:"to list all available commands",append:!0}};function AIChatbot(){let[e,s]=(0,i.useState)([]),[a,n]=(0,i.useState)(""),addMessage=(e,a)=>{let t={author:e,text:a};s(e=>[...e,t])},handleSubmit=()=>{""!==a.trim()&&(addMessage("You",a),n(""),addMessage("Bot","Typing..."),setTimeout(()=>{let e=handleMessage(a);s(s=>s.filter(e=>"Typing..."!==e.text).concat({author:"Bot",text:e}))},1e3))},handleMessage=e=>{let s=e.trim().toLowerCase();if(!r.hasOwnProperty(s))return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{children:"Hello."}),(0,t.jsx)("p",{children:"I am Frenify Bot. After purchasing the template, you can delete me easily. I understand some commands. You just select one of the commands and write here."}),(0,t.jsx)("p",{children:"Here is the list of commands:"}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("frenify_main",{children:"/welcome"})," - welcome message"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("frenify_main",{children:"/about"})," - some information about the Frenify team"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("frenify_main",{children:"/website"})," - go to our official website"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("frenify_main",{children:"/free"})," - get PSD files of premium themes for free"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("frenify_main",{children:"/doc"})," - visit online documentation for TechWave HTML template"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("frenify_main",{children:"/support"})," - if you have any questions regarding TechWave HTML template feel free and contact us by this command"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("frenify_main",{children:"/purchase"})," - open the template description page on themeforest to purchase it"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("frenify_main",{children:"/youtube"})," - visit our youtube channel with video guides on our themes and templates"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("frenify_main",{children:"/pass"})," - if you want to get strong password I can generate it for you, write ",(0,t.jsx)("frenify_main",{children:"/pass 20"})," to get a 20 character password"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("frenify_main",{children:"/joke"})," - I can cheer you up by telling a joke"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("frenify_main",{children:"/time"})," - display current time"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("frenify_main",{children:"/clear"})," - to clear current chat"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("frenify_main",{children:"/commands"})," - to list all available commands"]})]}),(0,t.jsx)("p",{children:"We are trying for you. We try to make unique themes and templates with excellent functionality and excellent design."})]});{let e=r[s];return"text"===e.type?e.text:"url"===e.type?(window.location.href=e.url,""):e.append?e.description:"I'm sorry, I couldn't process your request."}};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"techwave_fn_aichatbot_page fn__chatbot",children:[(0,t.jsxs)("div",{className:"chat__page",children:[(0,t.jsx)("div",{className:"font__trigger",children:(0,t.jsx)("span",{})}),(0,t.jsx)("div",{className:"fn__title_holder",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("h1",{className:"title",children:"Chat Bot Definition"})})}),(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"chat__list",children:[(0,t.jsx)("div",{id:"chat0",className:"chat__item"}),(0,t.jsxs)("div",{className:"chat__item active",id:"chat1",children:[(0,t.jsxs)("div",{className:"chat__box your__chat",children:[(0,t.jsx)("div",{className:"author",children:(0,t.jsx)("span",{children:"You"})}),(0,t.jsx)("div",{className:"chat",children:(0,t.jsx)("p",{children:"What is a chat bot?"})})]}),(0,t.jsxs)("div",{className:"chat__box bot__chat",children:[(0,t.jsx)("div",{className:"author",children:(0,t.jsx)("span",{children:"Bot"})}),(0,t.jsx)("div",{className:"chat",children:(0,t.jsx)("p",{children:"At the most basic level, a chatbot is a computer program that simulates and processes human conversation (either written or spoken), allowing humans to interact with digital devices as if they were communicating with a real person. Chatbots can be as simple as rudimentary programs that answer a simple query with a single-line response, or as sophisticated as digital assistants that learn and evolve to deliver increasing levels of personalization as they gather and process information."})})]}),(0,t.jsxs)("div",{className:"chat__box your__chat",children:[(0,t.jsx)("div",{className:"author",children:(0,t.jsx)("span",{children:"You"})}),(0,t.jsx)("div",{className:"chat",children:(0,t.jsx)("p",{children:"How do chatbots work?"})})]}),(0,t.jsxs)("div",{className:"chat__box bot__chat",children:[(0,t.jsx)("div",{className:"author",children:(0,t.jsx)("span",{children:"Bot"})}),(0,t.jsx)("div",{className:"chat",children:(0,t.jsx)("p",{children:"Chatbots boost operational efficiency and bring cost savings to businesses while offering convenience and added services to internal employees and external customers. They allow companies to easily resolve many types of customer queries and issues while reducing the need for human interaction."})})]}),e.map((e,s)=>(0,t.jsxs)("div",{className:"chat__box ".concat("Bot"==e.author?"bot__chat":"your__chat"),children:[(0,t.jsx)("div",{className:"author",children:(0,t.jsxs)("span",{children:[e.author," ",console.log(e.author)]})}),(0,t.jsx)("div",{className:"chat",children:(0,t.jsx)("p",{children:e.text})})]},s))]}),(0,t.jsx)("div",{className:"chat__item",id:"chat2"}),(0,t.jsx)("div",{className:"chat__item",id:"chat3"}),(0,t.jsx)("div",{className:"chat__item",id:"chat4"})]})}),(0,t.jsx)("div",{className:"chat__comment",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"fn__chat_comment",children:[(0,t.jsx)("textarea",{rows:1,placeholder:"Send a message...",value:a,onChange:e=>{n(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),handleSubmit())}}),(0,t.jsx)("button",{onClick:handleSubmit,children:(0,t.jsx)("img",{src:"svg/enter.svg",alt:"",className:"fn__svg"})})]})})})]}),(0,t.jsxs)("div",{className:"chat__sidebar",children:[(0,t.jsx)("div",{className:"sidebar_header",children:(0,t.jsxs)(c(),{href:"#chat0",className:"fn__new_chat_link",children:[(0,t.jsx)("span",{className:"icon"}),(0,t.jsx)("span",{className:"text",children:"New Chat"})]})}),(0,t.jsx)("div",{className:"sidebar_content",children:(0,t.jsxs)("div",{className:"chat__group new",children:[(0,t.jsx)("h2",{className:"group__title",children:"Today"}),(0,t.jsxs)("ul",{className:"group__list",children:[(0,t.jsx)("li",{className:"group__item",children:(0,t.jsxs)("div",{className:"fn__chat_link active",href:"#chat1",children:[(0,t.jsx)("span",{className:"text",children:"Chat Bot Definition"}),(0,t.jsx)("input",{type:"text",defaultValue:"Chat Bot Definition"}),(0,t.jsxs)("span",{className:"options",children:[(0,t.jsx)("button",{className:"trigger",children:(0,t.jsx)("span",{})}),(0,t.jsx)("span",{className:"options__popup",children:(0,t.jsxs)("span",{className:"options__list",children:[(0,t.jsx)("button",{className:"edit",children:"Edit"}),(0,t.jsx)("button",{className:"delete",children:"Delete"})]})})]}),(0,t.jsxs)("span",{className:"save_options",children:[(0,t.jsx)("button",{className:"save",children:(0,t.jsx)("img",{src:"svg/check.svg",alt:"",className:"fn__svg"})}),(0,t.jsx)("button",{className:"cancel",children:(0,t.jsx)("img",{src:"svg/close.svg",alt:"",className:"fn__svg"})})]})]})}),(0,t.jsx)("li",{className:"group__item",children:(0,t.jsxs)("div",{className:"fn__chat_link",href:"#chat2",children:[(0,t.jsx)("span",{className:"text",children:"Essay: Marketing"}),(0,t.jsx)("input",{type:"text",defaultValue:"Essay: Marketing"}),(0,t.jsxs)("span",{className:"options",children:[(0,t.jsx)("button",{className:"trigger",children:(0,t.jsx)("span",{})}),(0,t.jsx)("span",{className:"options__popup",children:(0,t.jsxs)("span",{className:"options__list",children:[(0,t.jsx)("button",{className:"edit",children:"Edit"}),(0,t.jsx)("button",{className:"delete",children:"Delete"})]})})]}),(0,t.jsxs)("span",{className:"save_options",children:[(0,t.jsx)("button",{className:"save",children:(0,t.jsx)("img",{src:"svg/check.svg",alt:"",className:"fn__svg"})}),(0,t.jsx)("button",{className:"cancel",children:(0,t.jsx)("img",{src:"svg/close.svg",alt:"",className:"fn__svg"})})]})]})}),(0,t.jsx)("li",{className:"group__item",children:(0,t.jsxs)("div",{className:"fn__chat_link",href:"#chat3",children:[(0,t.jsx)("span",{className:"text",children:"Future of Social Media"}),(0,t.jsx)("input",{type:"text",defaultValue:"Future of Social Media"}),(0,t.jsxs)("span",{className:"options",children:[(0,t.jsx)("button",{className:"trigger",children:(0,t.jsx)("span",{})}),(0,t.jsx)("span",{className:"options__popup",children:(0,t.jsxs)("span",{className:"options__list",children:[(0,t.jsx)("button",{className:"edit",children:"Edit"}),(0,t.jsx)("button",{className:"delete",children:"Delete"})]})})]}),(0,t.jsxs)("span",{className:"save_options",children:[(0,t.jsx)("button",{className:"save",children:(0,t.jsx)("img",{src:"svg/check.svg",alt:"",className:"fn__svg"})}),(0,t.jsx)("button",{className:"cancel",children:(0,t.jsx)("img",{src:"svg/close.svg",alt:"",className:"fn__svg"})})]})]})}),(0,t.jsx)("li",{className:"group__item",children:(0,t.jsxs)("div",{className:"fn__chat_link",href:"#chat4",children:[(0,t.jsx)("span",{className:"text",children:"Business Ideas"}),(0,t.jsx)("input",{type:"text",defaultValue:"Business Ideas"}),(0,t.jsxs)("span",{className:"options",children:[(0,t.jsx)("button",{className:"trigger",children:(0,t.jsx)("span",{})}),(0,t.jsx)("span",{className:"options__popup",children:(0,t.jsxs)("span",{className:"options__list",children:[(0,t.jsx)("button",{className:"edit",children:"Edit"}),(0,t.jsx)("button",{className:"delete",children:"Delete"})]})})]}),(0,t.jsxs)("span",{className:"save_options",children:[(0,t.jsx)("button",{className:"save",children:(0,t.jsx)("img",{src:"svg/check.svg",alt:"",className:"fn__svg"})}),(0,t.jsx)("button",{className:"cancel",children:(0,t.jsx)("img",{src:"svg/close.svg",alt:"",className:"fn__svg"})})]})]})})]})]})})]})]})})}}},function(e){e.O(0,[5713,8326,2600,1360,7394,9272,6567,2971,2472,1744],function(){return e(e.s=11389)}),_N_E=e.O()}]);