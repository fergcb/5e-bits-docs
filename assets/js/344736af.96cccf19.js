"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9083],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?l.createElement(h,a(a({ref:t},c),{},{components:n})):l.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,a[1]=i;for(var s=2;s<o;s++)a[s]=n[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46875:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(67294);function r(e){let{children:t,objectives:n}=e;return l.createElement(l.Fragment,null,l.createElement("h2",null,"\u2705 Learning Objectives"),l.createElement("ol",null,n.map((e=>l.createElement("li",null,e)))),l.createElement("div",null,t))}},84319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var l=n(87462),r=(n(67294),n(3905)),o=n(46875);const a={},i="Command Line Spellbook with Python",p={unversionedId:"tutorials/advanced/terminal-spellbook-with-python",id:"tutorials/advanced/terminal-spellbook-with-python",title:"Command Line Spellbook with Python",description:"<LearningObjectives objectives={[",source:"@site/docs/tutorials/advanced/terminal-spellbook-with-python.mdx",sourceDirName:"tutorials/advanced",slug:"/tutorials/advanced/terminal-spellbook-with-python",permalink:"/docs/tutorials/advanced/terminal-spellbook-with-python",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating a Spell Card Library with React",permalink:"/docs/tutorials/advanced/react-spell-cards"},next:{title:"Schemas",permalink:"/docs/reference/schemas"}},s={},c=[{value:"Setting Up the Project",id:"setting-up-the-project",level:2},{value:"Building the Command-Line Spellbook",id:"building-the-command-line-spellbook",level:2},{value:"<code>spellbook.py</code>",id:"spellbookpy",level:3},{value:"Running the Spellbook",id:"running-the-spellbook",level:2},{value:"Conclusion",id:"conclusion",level:2}],m={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"command-line-spellbook-with-python"},"Command Line Spellbook with Python"),(0,r.kt)(o.Z,{objectives:["Learn how to interact with APIs using Python","Learn to write a simple Python script","Learn to make a script interactive","Create a simple tool to explore D&D spells right from your terminal"],mdxType:"LearningObjectives"}),(0,r.kt)("h2",{id:"setting-up-the-project"},"Setting Up the Project"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create a New Directory:"),' Start by creating a new directory for your project. Let\'s call it "spellbook-cli".')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create a Python Script:")," Inside the project directory, create a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"spellbook.py"),"."))),(0,r.kt)("h2",{id:"building-the-command-line-spellbook"},"Building the Command-Line Spellbook"),(0,r.kt)("h3",{id:"spellbookpy"},(0,r.kt)("inlineCode",{parentName:"h3"},"spellbook.py")),(0,r.kt)("p",null,"Let's start building our command-line spellbook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import requests\n\ndef display_spell(spell_data):\n    print(f"Name: {spell_data[\'name\']}")\n    print(f"Index: {spell_data[\'index\']}")\n    print(f"URL: {spell_data[\'url\']}")\n    print()\n\ndef main():\n    url = "https://www.dnd5eapi.co/api/spells"\n    headers = {\'Accept\': \'application/json\'}\n\n    response = requests.get(url, headers=headers)\n\n    if response.status_code == 200:\n        spells_data = response.json()\n        spells = spells_data[\'results\']\n\n        print("Welcome to the D&D 5e Spellbook!")\n        print(f"Total Spells: {spells_data[\'count\']}\\n")\n\n        while True:\n            print("Commands:")\n            print("1 - List all spells")\n            print("2 - Search for a spell by name")\n            print("3 - Exit")\n\n            choice = input("Enter your choice: ")\n\n            if choice == \'1\':\n                print("\\nList of Spells:")\n                for spell in spells:\n                    display_spell(spell)\n            elif choice == \'2\':\n                spell_name = input("Enter the spell name: ").lower()\n                matching_spells = [spell for spell in spells if spell_name in spell[\'name\'].lower()]\n                print("\\nMatching Spells:")\n                for spell in matching_spells:\n                    display_spell(spell)\n            elif choice == \'3\':\n                print("Goodbye!")\n                break\n            else:\n                print("Invalid choice. Please select a valid option.")\n\nif __name__ == "__main__":\n    main()\n')),(0,r.kt)("h2",{id:"running-the-spellbook"},"Running the Spellbook"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open your terminal and navigate to the project directory.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command to execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"spellbook.py")," script:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"python spellbook.py\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Follow the on-screen prompts to explore and search for D&D 5e spells right from your command line."))),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Congratulations! You've successfully built an interactive command-line spellbook using Python. This tool allows you to list all spells, search for spells by name, and exit the application. As you become more comfortable with Python programming, you can explore adding more features, improving user experience, or integrating additional APIs."),(0,r.kt)("p",null,"Remember, practice is essential for becoming a proficient developer. Keep coding, experimenting, and learning, and you'll continue to develop your programming skills. Happy adventuring! \ud83e\ude84"))}u.isMDXComponent=!0}}]);