"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6057],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={},o="Schemas",l={unversionedId:"reference/schemas",id:"reference/schemas",title:"Schemas",description:"Definitions of all schemas will be accessible in a future update. Two of the most common schemas are described here.",source:"@site/docs/reference/schemas.md",sourceDirName:"reference",slug:"/reference/schemas",permalink:"/docs/docs/reference/schemas",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Command Line Spellbook with Python",permalink:"/docs/docs/tutorials/advanced/terminal-spellbook-with-python"},next:{title:"Status Page",permalink:"/docs/docs/reference/status-page"}},p={},s=[{value:"API Reference",id:"api-reference",level:2},{value:"Difficulty Check (DC)",id:"difficulty-check-dc",level:2},{value:"Damage",id:"damage",level:2},{value:"Choice",id:"choice",level:2},{value:"OptionSet",id:"optionset",level:2},{value:"Option",id:"option",level:2}],c={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"schemas"},"Schemas"),(0,i.kt)("p",null,"Definitions of all schemas will be accessible in a future update. Two of the most common schemas are described here."),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("p",null,"Represents a minimal representation of a resource. The detailed representation of the referenced resource can be retrieved by making a request to the referenced ",(0,i.kt)("inlineCode",{parentName:"p"},"URL"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"APIReference {\n    index     string\n    name      string\n    url       string\n}\n")),(0,i.kt)("h2",{id:"difficulty-check-dc"},"Difficulty Check (DC)"),(0,i.kt)("p",null,"Represents a difficulty check."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'DC {\n    dc_type       APIReference\n    dc_value      number\n    success_type  "none" | "half" | "other"\n}\n')),(0,i.kt)("h2",{id:"damage"},"Damage"),(0,i.kt)("p",null,"Represents damage."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Damage {\n    damage_type     APIReference\n    damage_dice     string\n}\n")),(0,i.kt)("h2",{id:"choice"},"Choice"),(0,i.kt)("p",null,"Represents a choice made by a player. Commonly seen related to decisions made during character creation or combat (e.g.: the description of the cleric class, under ",(0,i.kt)("strong",{parentName:"p"},"Proficiencies"),', states "Skills: Choose two from\tHistory, Insight, Medicine, Persuasion, and\tReligion" ',(0,i.kt)("a",{parentName:"p",href:"https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=15"},"[SRD p15]"),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Choice {\n    desc      string\n    choose    number\n    type      string\n    from      OptionSet\n}\n")),(0,i.kt)("h2",{id:"optionset"},"OptionSet"),(0,i.kt)("p",null,"The OptionSet structure provides the options to be chosen from, or sufficient data to fetch and interpret the options. All OptionSets have an ",(0,i.kt)("inlineCode",{parentName:"p"},"option_set_type")," attribute that indicates the structure of the object that contains the options. The possible values are ",(0,i.kt)("inlineCode",{parentName:"p"},"options_array"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"equipment_category"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"reference_list"),". Other attributes on the OptionSet depend on the value of this attribute."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options_array"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," (array): An array of Option objects. Each item in the array represents an option that can be chosen."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"equipment_category"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"equipment_category")," (APIReference): A reference to an EquipmentCategory. Each item in the EquipmentCategory's ",(0,i.kt)("inlineCode",{parentName:"li"},"equipment")," array represents one option that can be chosen."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"resource_list"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"resource_list_url")," (string): A reference (by URL) to a collection in the database. The URL may include query parameters. Each item in the resulting ResourceList's ",(0,i.kt)("inlineCode",{parentName:"li"},"results")," array represents one option that can be chosen.")))),(0,i.kt)("h2",{id:"option"},"Option"),(0,i.kt)("p",null,"When the options are given in an ",(0,i.kt)("inlineCode",{parentName:"p"},"options_array"),", each item in the array inherits from the Option structure. All Options have an ",(0,i.kt)("inlineCode",{parentName:"p"},"option_type")," attribute that indicates the structure of the option. The value of this attribute indicates how the option should be handled, and each type has different attributes. The possible values and their corresponding attributes are listed below."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reference")," - A terminal option. Contains a reference to a Document that can be added to the list of options chosen.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"item")," (APIReference): A reference to the chosen item."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"action")," - A terminal option. Contains information describing an action, for use within Multiattack actions.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"action_name")," (string): The name of the action, according to its ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," attribute."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"count")," (number | string): The number of times this action can be repeated if this option is chosen."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," (string = ",(0,i.kt)("inlineCode",{parentName:"li"},'"melee" | "ranged" | "ability" | "magic"'),", optional): For attack actions that can be either melee, ranged, abilities, or magic."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"multiple")," - When this option is chosen, all of its child options are chosen, and must be resolved the same way as a normal option.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"items")," (array): An array of Option objects. All of them must be taken if the option is chosen."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"choice")," - A nested choice. If this option is chosen, the Choice structure contained within must be resolved like a normal Choice structure, and the results are the chosen options.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"choice")," (Choice): The Choice to resolve."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"string")," - A terminal option. Contains a reference to a string.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"string")," (string): The string."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ideal")," - A terminal option. Contains information about an ideal.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"desc")," (string): A description of the ideal."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"alignments")," (ApiReference[]): A list of alignments of those who might follow the ideal."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"counted_reference")," - A terminal option. Contains a reference to something else in the API along with a count.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"count")," (number): Count."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"of")," (ApiReference): Thing being referenced."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"score_prerequisite")," - A terminal option. Contains a reference to an ability score and a minimum score.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ability_score")," (ApiReference): Ability score being referenced."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"minimum_score")," (number): The minimum score required to satisfy the prerequisite."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ability_bonus")," - A terminal option. Contains a reference to an ability score and a bonus",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ability_score")," (ApiReference): Ability score being referenced"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bonus")," (number): The bonus being applied to the ability score"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"breath")," - A terminal option: Contains a reference to information about a breath attack.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," (string): Name of the breath."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dc")," (DC): Difficulty check of the breath attack."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"damage")," (","[Damage]","): Damage dealt by the breath attack, if any."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"damage")," - A terminal option. Contains information about damage.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"damage_type")," (ApiReference): Reference to type of damage."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"damage_dice"),' (string): Damage expressed in dice (e.g. "13d6").'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"notes")," (string): Information regarding the damage.")))))}u.isMDXComponent=!0}}]);