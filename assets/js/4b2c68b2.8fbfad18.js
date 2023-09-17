"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3224],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>m});var n=l(67294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(l),y=r,m=u["".concat(s,".").concat(y)]||u[y]||d[y]||a;return l?n.createElement(m,o(o({ref:t},c),{},{components:l})):n.createElement(m,o({ref:t},c))}));function m(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,o=new Array(a);o[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=l[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}y.displayName="MDXCreateElement"},45272:(e,t,l)=>{l.r(t),l.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=l(87462),r=(l(67294),l(3905));const a={},o="Get level resource for a class and level.",i={type:"api",id:"get-level-resource-for-a-class-and-level",unversionedId:"get-level-resource-for-a-class-and-level",title:"Get level resource for a class and level.",description:"",slug:"/get-level-resource-for-a-class-and-level",frontMatter:{},api:{tags:["Class Levels"],parameters:[{name:"index",in:"path",required:!0,description:"The `index` of the class to get.\n",schema:{type:"string",enum:["barbarian","bard","cleric","druid","fighter","monk","paladin","ranger","rogue","sorcerer","warlock","wizard"],example:"paladin"}},{name:"class_level",in:"path",required:!0,schema:{type:"number",minimum:0,maximum:20,example:3}}],responses:{200:{description:"OK",content:{"application/json":{schema:{description:"`ClassLevel`\n",type:"object",properties:{index:{description:"Resource index for shorthand searching.",type:"string"},url:{description:"URL of the referenced resource.",type:"string"},level:{description:"The number value for the current level object.",type:"number"},ability_score_bonuses:{description:"Total number of ability score bonuses gained, added from previous levels.",type:"number"},prof_bonus:{description:"Proficiency bonus for this class at the specified level.",type:"number"},features:{description:"Features automatically gained at this level.",type:"array",items:{description:"`APIReference`\n",type:"object",properties:{index:{description:"Resource index for shorthand searching.",type:"string"},name:{description:"Name of the referenced resource.",type:"string"},url:{description:"URL of the referenced resource.",type:"string"}}}},spellcasting:{description:"Summary of spells known at this level.",type:"object",properties:{cantrips_known:{type:"number"},spells_known:{type:"number"},spell_slots_level_1:{type:"number"},spell_slots_level_2:{type:"number"},spell_slots_level_3:{type:"number"},spell_slots_level_4:{type:"number"},spell_slots_level_5:{type:"number"},spell_slots_level_6:{type:"number"},spell_slots_level_7:{type:"number"},spell_slots_level_8:{type:"number"},spell_slots_level_9:{type:"number"}}},class_specific:{description:"Class specific information such as dice values for bard songs and number of warlock invocations.",anyOf:[{description:"Barbarian Class Specific Features",type:"object",properties:{rage_count:{type:"number"},rage_damage_bonus:{type:"number"},brutal_critical_dice:{type:"number"}}},{description:"Bard Class Specific Features",type:"object",properties:{bardic_inspiration_dice:{type:"number"},song_of_rest_die:{type:"number"},magical_secrets_max_5:{type:"number"},magical_secrets_max_7:{type:"number"},magical_secrets_max_9:{type:"number"}}},{description:"Cleric Class Specific Features",type:"object",properties:{channel_divinity_charges:{type:"number"},destroy_undead_cr:{type:"number"}}},{description:"Druid Class Specific Features",type:"object",properties:{wild_shape_max_cr:{type:"number"},wild_shape_swim:{type:"boolean"},wild_shape_fly:{type:"boolean"}}},{description:"Fighter Class Specific Features",type:"object",properties:{action_surges:{type:"number"},indomitable_uses:{type:"number"},extra_attacks:{type:"number"}}},{description:"Monk Class Specific Features",type:"object",properties:{ki_points:{type:"number"},unarmored_movement:{type:"number"},martial_arts:{type:"object",properties:{dice_count:{type:"number"},dice_value:{type:"number"}}}}},{description:"Paladin Class Specific Features",type:"object",properties:{aura_range:{type:"number"}}},{description:"Bard Ranger Specific Features",type:"object",properties:{favored_enemies:{type:"number"},favored_terrain:{type:"number"}}},{description:"Bard Rogue Specific Features",type:"object",properties:{sneak_attack:{type:"object",properties:{dice_count:{type:"number"},dice_value:{type:"number"}}}}},{description:"Bard Sorcerer Specific Features",type:"object",properties:{sorcery_points:{type:"number"},metamagic_known:{type:"number"},creating_spell_slots:{type:"array",items:{type:"object",properties:{spell_slot_level:{type:"number"},sorcery_point_cost:{type:"number"}}}}}},{description:"Bard Warlock Specific Features",type:"object",properties:{invocations_known:{type:"number"},mystic_arcanum_level_6:{type:"number"},mystic_arcanum_level_7:{type:"number"},mystic_arcanum_level_8:{type:"number"},mystic_arcanum_level_9:{type:"number"}}},{description:"Wizard Class Specific Features",type:"object",properties:{arcane_recover_levels:{type:"number"}}}]}}},example:{level:1,ability_score_bonuses:0,prof_bonus:2,features:[{index:"rage",name:"Rage",url:"/api/features/rage"},{index:"barbarian-unarmored-defense",name:"Unarmored Defense",url:"/api/features/barbarian-unarmored-defense"}],class_specific:{rage_count:2,rage_damage_bonus:2,brutal_critical_dice:0},index:"barbarian-1",class:{index:"barbarian",name:"Barbarian",url:"/api/classes/barbarian"},url:"/api/classes/barbarian/levels/1"}}}}},description:"Get level resource for a class and level.",method:"get",path:"/api/classes/{index}/levels/{class_level}",servers:[{url:"https://www.dnd5eapi.co",description:"Production"},{url:"http://localhost:3000",description:"Local Development"}],info:{title:"D&D 5e API",description:"",version:"0.1",license:{name:"MIT License",url:"https://github.com/5e-bits/5e-srd-api/blob/main/LICENSE.md"},contact:{name:"5eBits",url:"https://github.com/5e-bits"}},postman:{name:"Get level resource for a class and level.",description:{type:"text/plain"},url:{path:["api","classes",":index","levels",":class_level"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) The `index` of the class to get.\n",type:"text/plain"},type:"any",value:"<string>",key:"index"},{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<number>",key:"class_level"}]},method:"GET"}},source:"@site/openapi.json",sourceDirName:".",permalink:"/docs/api/get-level-resource-for-a-class-and-level",previous:{title:"Get all level resources for a class.",permalink:"/docs/api/get-all-level-resources-for-a-class"},next:{title:"Get features available to a class at the requested level.",permalink:"/docs/api/get-features-available-to-a-class-at-the-requested-level"}},s=[],p={toc:s},c="wrapper";function u(e){let{components:t,...l}=e;return(0,r.kt)(c,(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-level-resource-for-a-class-and-level"},"Get level resource for a class and level."),(0,r.kt)("p",null,"Get level resource for a class and level."),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"index"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"barbarian"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bard"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"cleric"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"druid"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fighter"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"monk"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"paladin"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ranger"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"rogue"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sorcerer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"warlock"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"wizard"),"]")),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"index")," of the class to get.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"class_level"),(0,r.kt)("span",{style:{opacity:"0.6"}}," number"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," value \u2264 20")))))),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"200")),(0,r.kt)("div",null,(0,r.kt)("p",null,"OK"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"index"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Resource index for shorthand searching.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"url"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"URL of the referenced resource.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"level"),(0,r.kt)("span",{style:{opacity:"0.6"}}," number"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"The number value for the current level object.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"ability_score_bonuses"),(0,r.kt)("span",{style:{opacity:"0.6"}}," number"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Total number of ability score bonuses gained, added from previous levels.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"prof_bonus"),(0,r.kt)("span",{style:{opacity:"0.6"}}," number"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Proficiency bonus for this class at the specified level.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"features"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Features automatically gained at this level.")),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"index"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Resource index for shorthand searching.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"name"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Name of the referenced resource.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"url"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"URL of the referenced resource.")))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"spellcasting"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Summary of spells known at this level.")),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"cantrips_known"),(0,r.kt)("span",{style:{opacity:"0.6"}}," number"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"spells_known"),(0,r.kt)("span",{style:{opacity:"0.6"}}," number"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"spell_slots_level_1"),(0,r.kt)("span",{style:{opacity:"0.6"}}," number"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"spell_slots_level_2"),(0,r.kt)("span",{style:{opacity:"0.6"}}," number"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"spell_slots_level_3"),(0,r.kt)("span",{style:{opacity:"0.6"}}," number"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"spell_slots_level_4"),(0,r.kt)("span",{style:{opacity:"0.6"}}," number"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"spell_slots_level_5"),(0,r.kt)("span",{style:{opacity:"0.6"}}," number"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"spell_slots_level_6"),(0,r.kt)("span",{style:{opacity:"0.6"}}," number"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"spell_slots_level_7"),(0,r.kt)("span",{style:{opacity:"0.6"}}," number"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"spell_slots_level_8"),(0,r.kt)("span",{style:{opacity:"0.6"}}," number"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"spell_slots_level_9"),(0,r.kt)("span",{style:{opacity:"0.6"}}," number"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"class_specific"),(0,r.kt)("span",{style:{opacity:"0.6"}}," "),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Class specific information such as dice values for bard songs and number of warlock invocations."))))))))))))}u.isMDXComponent=!0}}]);