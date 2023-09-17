"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5685],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,m=d["".concat(s,".").concat(u)]||d[u]||y[u]||r;return n?i.createElement(m,l(l({ref:t},p),{},{components:n})):i.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15347:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const r={},l="Get an ability score by index.",o={type:"api",id:"get-an-ability-score-by-index",unversionedId:"get-an-ability-score-by-index",title:"Get an ability score by index.",description:"",slug:"/get-an-ability-score-by-index",frontMatter:{},api:{description:"# Ability Score\n\nRepresents one of the six abilities that describes a creature's physical and mental characteristics. The three main rolls of the game - the ability check, the saving throw, and the attack roll - rely on the ability scores. [[SRD p76](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=76)]\n",tags:["Character Data"],parameters:[{name:"index",in:"path",required:!0,description:"The `index` of the ability score to get.\n",schema:{type:"string",enum:["cha","con","dex","int","str","wis"],example:"cha"}}],responses:{200:{description:"OK",content:{"application/json":{schema:{description:"`AbilityScore`\n",type:"object",properties:{index:{description:"Resource index for shorthand searching.",type:"string"},name:{description:"Name of the referenced resource.",type:"string"},url:{description:"URL of the referenced resource.",type:"string"},desc:{description:"Description of the resource.",type:"array",items:{type:"string"}},full_name:{description:"Full name of the ability score.",type:"string"},skills:{description:"List of skills that use this ability score.",type:"array",items:{description:"`APIReference`\n",type:"object",properties:{index:{description:"Resource index for shorthand searching.",type:"string"},name:{description:"Name of the referenced resource.",type:"string"},url:{description:"URL of the referenced resource.",type:"string"}}}}}},example:{index:"cha",name:"CHA",url:"/api/ability-scores/cha",desc:["Charisma measures your ability to interact effectively with others. It includes such factors as confidence and eloquence, and it can represent a charming or commanding personality.","A Charisma check might arise when you try to influence or entertain others, when you try to make an impression or tell a convincing lie, or when you are navigating a tricky social situation. The Deception, Intimidation, Performance, and Persuasion skills reflect aptitude in certain kinds of Charisma checks."],full_name:"Charisma",skills:[{index:"deception",name:"Deception",url:"/api/skills/deception"},{index:"intimidation",name:"Intimidation",url:"/api/skills/intimidation"},{index:"performance",name:"Performance",url:"/api/skills/performance"},{index:"persuasion",name:"Persuasion",url:"/api/skills/persuasion"}]}}}}},method:"get",path:"/api/ability-scores/{index}",servers:[{url:"https://www.dnd5eapi.co",description:"Production"},{url:"http://localhost:3000",description:"Local Development"}],info:{title:"D&D 5e API",description:"",version:"0.1",license:{name:"MIT License",url:"https://github.com/5e-bits/5e-srd-api/blob/main/LICENSE.md"},contact:{name:"5eBits",url:"https://github.com/5e-bits"}},postman:{name:"Get an ability score by index.",description:{content:"# Ability Score\n\nRepresents one of the six abilities that describes a creature's physical and mental characteristics. The three main rolls of the game - the ability check, the saving throw, and the attack roll - rely on the ability scores. [[SRD p76](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=76)]\n",type:"text/plain"},url:{path:["api","ability-scores",":index"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) The `index` of the ability score to get.\n",type:"text/plain"},type:"any",value:"<string>",key:"index"}]},method:"GET"}},source:"@site/openapi.json",sourceDirName:".",permalink:"/docs/api/get-an-ability-score-by-index",previous:{title:"Get list of all available resources for an endpoint.",permalink:"/docs/api/get-list-of-all-available-resources-for-an-endpoint"},next:{title:"Get an alignment by index.",permalink:"/docs/api/get-an-alignment-by-index"}},s=[],c={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-an-ability-score-by-index"},"Get an ability score by index."),(0,a.kt)("h1",{id:"ability-score"},"Ability Score"),(0,a.kt)("p",null,"Represents one of the six abilities that describes a creature's physical and mental characteristics. The three main rolls of the game - the ability check, the saving throw, and the attack roll - rely on the ability scores. [",(0,a.kt)("a",{parentName:"p",href:"https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=76"},"SRD p76"),"]"),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"index"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,a.kt)("inlineCode",{parentName:"p"},"cha"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"con"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"dex"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"str"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"wis"),"]")),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," of the ability score to get.")))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"200")),(0,a.kt)("div",null,(0,a.kt)("p",null,"OK"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"index"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Resource index for shorthand searching.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"name"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Name of the referenced resource.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"url"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"URL of the referenced resource.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"desc"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string[]"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Description of the resource.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"full_name"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Full name of the ability score.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"skills"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"List of skills that use this ability score.")),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"index"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Resource index for shorthand searching.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"name"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Name of the referenced resource.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"url"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"URL of the referenced resource."))))))))))))))))}d.isMDXComponent=!0}}]);