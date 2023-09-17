"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6390],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),y=i,f=d["".concat(s,".").concat(y)]||d[y]||u[y]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},41141:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={},o="Get a feat by index.",l={type:"api",id:"get-a-feat-by-index",unversionedId:"get-a-feat-by-index",title:"Get a feat by index.",description:"",slug:"/get-a-feat-by-index",frontMatter:{},api:{description:"# Feat \n\nA feat is a boon a character can receive at level up instead of an ability score increase.\n",tags:["Feats"],parameters:[{name:"index",in:"path",required:!0,description:"The `index` of the feat to get.\n",schema:{type:"string",enum:["grappler"]}}],responses:{200:{description:"OK",content:{"application/json":{schema:{description:"`Feat`\n",type:"object",properties:{index:{description:"Resource index for shorthand searching.",type:"string"},name:{description:"Name of the referenced resource.",type:"string"},url:{description:"URL of the referenced resource.",type:"string"},desc:{description:"Description of the resource.",type:"array",items:{type:"string"}},prerequisites:{description:"An object of APIReferences to ability scores and minimum scores.",type:"array",items:{description:"`Prerequisite`\n",type:"object",properties:{ability_score:{description:"`APIReference`\n",type:"object",properties:{index:{description:"Resource index for shorthand searching.",type:"string"},name:{description:"Name of the referenced resource.",type:"string"},url:{description:"URL of the referenced resource.",type:"string"}}},minimum_score:{description:"Minimum score to meet the prerequisite.",type:"number"}}}}}},example:{index:"grappler",name:"Grappler",url:"/api/feats/grappler",desc:["You\u2019ve developed the Skills necessary to hold your own in close--quarters Grappling. You gain the following benefits:","- You have advantage on Attack Rolls against a creature you are Grappling.","- You can use your action to try to pin a creature Grappled by you. To do so, make another grapple check. If you succeed, you and the creature are both Restrained until the grapple ends."],prerequisites:[{ability_score:{index:"str",name:"STR",url:"/api/ability-scores/str"},minimum_score:13}]}}}}},method:"get",path:"/api/feats/{index}",servers:[{url:"https://www.dnd5eapi.co",description:"Production"},{url:"http://localhost:3000",description:"Local Development"}],info:{title:"D&D 5e API",description:"",version:"0.1",license:{name:"MIT License",url:"https://github.com/5e-bits/5e-srd-api/blob/main/LICENSE.md"},contact:{name:"5eBits",url:"https://github.com/5e-bits"}},postman:{name:"Get a feat by index.",description:{content:"# Feat \n\nA feat is a boon a character can receive at level up instead of an ability score increase.\n",type:"text/plain"},url:{path:["api","feats",":index"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) The `index` of the feat to get.\n",type:"text/plain"},type:"any",value:"<string>",key:"index"}]},method:"GET"}},source:"@site/openapi.json",sourceDirName:".",permalink:"/docs/api/get-a-feat-by-index",previous:{title:"Get an equipment category by index.",permalink:"/docs/api/get-an-equipment-category-by-index"},next:{title:"Get a feature by index.",permalink:"/docs/api/get-a-feature-by-index"}},s=[],p={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"get-a-feat-by-index"},"Get a feat by index."),(0,i.kt)("h1",{id:"feat"},"Feat"),(0,i.kt)("p",null,"A feat is a boon a character can receive at level up instead of an ability score increase."),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"index"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,i.kt)("inlineCode",{parentName:"p"},"grappler"),"]")),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," of the feat to get.")))))),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"200")),(0,i.kt)("div",null,(0,i.kt)("p",null,"OK"))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"index"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Resource index for shorthand searching.")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"name"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Name of the referenced resource.")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"url"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"URL of the referenced resource.")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"desc"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string[]"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Description of the resource.")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"prerequisites"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"An object of APIReferences to ability scores and minimum scores.")),(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"ability_score"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"APIReference"))),(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"index"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Resource index for shorthand searching.")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"name"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Name of the referenced resource.")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"url"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"URL of the referenced resource.")))))))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"minimum_score"),(0,i.kt)("span",{style:{opacity:"0.6"}}," number"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Minimum score to meet the prerequisite."))))))))))))))))}d.isMDXComponent=!0}}]);