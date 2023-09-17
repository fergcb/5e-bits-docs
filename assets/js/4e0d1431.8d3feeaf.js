"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3959],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},46875:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(67294);function n(e){let{children:t,objectives:r}=e;return a.createElement(a.Fragment,null,a.createElement("h2",null,"\u2705 Learning Objectives"),a.createElement("ol",null,r.map((e=>a.createElement("li",null,e)))),a.createElement("div",null,t))}},61517:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),o=r(46875);const i={},l="Discover D&D Races with Shell Scripting",c={unversionedId:"tutorials/basic/discover-dnd-races-with-shell-scripting",id:"tutorials/basic/discover-dnd-races-with-shell-scripting",title:"Discover D&D Races with Shell Scripting",description:"<LearningObjectives objectives={[",source:"@site/docs/tutorials/basic/discover-dnd-races-with-shell-scripting.mdx",sourceDirName:"tutorials/basic",slug:"/tutorials/basic/discover-dnd-races-with-shell-scripting",permalink:"/docs/docs/tutorials/basic/discover-dnd-races-with-shell-scripting",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GraphQL Fundamentals",permalink:"/docs/docs/tutorials/beginner/graphql"},next:{title:"Interactive Monster Search with JavaScript",permalink:"/docs/docs/tutorials/advanced/monster-search-with-javascript"}},s={},p=[{value:"Preparing Your Bash Adventure",id:"preparing-your-bash-adventure",level:2},{value:"Building the D&amp;D Race Search Tool",id:"building-the-dd-race-search-tool",level:2},{value:"The Mystical Output Awaits!",id:"the-mystical-output-awaits",level:2},{value:"Celebrate Your Coding Victory!",id:"celebrate-your-coding-victory",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"discover-dd-races-with-shell-scripting"},"Discover D&D Races with Shell Scripting"),(0,n.kt)(o.Z,{objectives:["Learn to use cURL","Learn to write a simple Bash script","Learn to make a script interactive"],mdxType:"LearningObjectives"}),(0,n.kt)("h2",{id:"preparing-your-bash-adventure"},"Preparing Your Bash Adventure"),(0,n.kt)("p",null,"Before we set off on our coding journey, make sure you have these:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"A command-line terminal (Bash)"),(0,n.kt)("li",{parentName:"ol"},"An internet connection"),(0,n.kt)("li",{parentName:"ol"},"Your excitement and curiosity")),(0,n.kt)("h2",{id:"building-the-dd-race-search-tool"},"Building the D&D Race Search Tool"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Summon the Magic of Curl:")),(0,n.kt)("p",{parentName:"li"},"Open your command-line terminal and let's cast our first spell to fetch D&D race information using the mighty ",(0,n.kt)("inlineCode",{parentName:"p"},"curl")," command. Type or copy-paste the following:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -L 'https://www.dnd5eapi.co/api/races/dwarf' -H 'Accept: application/json'\n")),(0,n.kt)("p",{parentName:"li"},"When you hit Enter, you'll unveil the details of the D&D Dwarf race!")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Create Your Own Spell (Bash Script):")),(0,n.kt)("p",{parentName:"li"},"Now, let's create a magical script named ",(0,n.kt)("inlineCode",{parentName:"p"},"dnd_race_search.sh")," using your favorite text editor (like ",(0,n.kt)("inlineCode",{parentName:"p"},"nano"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"vim"),", or even a code editor)."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\necho "Welcome to the D&D Race Search Tool!"\necho "-----------------------------------"\necho\n\nread -p "Enter the name of a D&D race: " race_name\n\ncurl -L "https://www.dnd5eapi.co/api/races/$race_name" -H \'Accept: application/json\'\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Enchant Your Script:")),(0,n.kt)("p",{parentName:"li"},"Before you can use your script, you'll need to make it executable (aka runnable). In your terminal, type:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x dnd_race_search.sh\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Embark on Your Quest:")),(0,n.kt)("p",{parentName:"li"},"Cast your spell and run your script:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./dnd_race_search.sh\n")),(0,n.kt)("p",{parentName:"li"},"You'll be prompted to enter the name of a D&D race. For now, let's try \"dwarf\" and see what magnificent details unfold!"))),(0,n.kt)("h2",{id:"the-mystical-output-awaits"},"The Mystical Output Awaits!"),(0,n.kt)("p",null,'Prepare yourself, for the secrets of the D&D Dwarf race shall be revealed before your very eyes! Once you enter "dwarf," you should expect an awe-inspiring response similar to this:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'Welcome to the D&D Race Search Tool!\n-----------------------------------\n\nEnter the name of a D&D race: dwarf\n\n{\n  "index": "dwarf",\n  "name": "Dwarf",\n  "speed": 25,\n  "ability_bonuses": [\n    {\n      "ability_score": {\n        "index": "con",\n        "name": "CON",\n        "url": "/api/ability-scores/con"\n      },\n      "bonus": 2\n    }\n  ],\n  "alignment": "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",\n  "age": "Dwarves mature at the same rate as humans, but they\'re considered young until they reach the age of 50. On average, they live about 350 years.",\n  "size": "Medium",\n  "size_description": "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.",\n  ...\n  ...\n}\n\n')),(0,n.kt)("h2",{id:"celebrate-your-coding-victory"},"Celebrate Your Coding Victory!"),(0,n.kt)("p",null,"Congratulations, young adventurers! You've crafted your very own D&D Race Search Tool using Bash scripting. You can now explore different races and learn about their unique abilities, traits, and more. Your journey has just begun, and there's so much more to discover in the realm of coding and Dungeons & Dragons. May your code be bug-free and your rolls be critical hits! \ud83c\udf89\ud83c\udff0\ud83e\udddd\u200d\u2642\ufe0f"))}m.isMDXComponent=!0}}]);