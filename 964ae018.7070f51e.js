(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(9),r=(n(0),n(152)),o={title:"API Reference"},c={id:"api-reference",title:"API Reference",description:"All methods are named exports from the svelte-relay package.",source:"@site/docs/api-reference.md",permalink:"/svelte-relay/docs/api-reference",editUrl:"https://github.com/kesne/svelte-relay/edit/master/website/docs/api-reference.md",sidebar:"someSidebar",previous:{title:"Mutations",permalink:"/svelte-relay/docs/usage/mutations"}},l=[{value:"Svelte APIs",id:"svelte-apis",children:[{value:"<code>setRelayEnvironment()</code>",id:"setrelayenvironment",children:[]},{value:"<code>getRelayEnvironment()</code>",id:"getrelayenvironment",children:[]}]},{value:"General APIs",id:"general-apis",children:[{value:"<code>graphql</code>",id:"graphql",children:[]}]}],s={rightToc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"All methods are named exports from the ",Object(r.b)("inlineCode",{parentName:"p"},"svelte-relay")," package."),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"This Document Is Incomplete")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},'This API documentation is not complete. Currently, I recommend reading the "Using Svelte Relay" documents, as they contain more detailed information about how to use the library.'))),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Not For Beginners")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This documentation is not the most approachable, and is written to be a comprehensive overview of the public API of the package. If you're getting started with the package, I recommend you read the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:3000/svelte-relay/docs/usage/providing-the-environment"}),"Using Svelte Relay")," guide instead."))),Object(r.b)("h2",{id:"svelte-apis"},"Svelte APIs"),Object(r.b)("p",null,"These APIs work in Svelte components, and may not be used outside of Svelte."),Object(r.b)("h3",{id:"setrelayenvironment"},Object(r.b)("inlineCode",{parentName:"h3"},"setRelayEnvironment()")),Object(r.b)("p",null,"Sets a Relay Environent in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://svelte.dev/tutorial/context-api"}),"Svelte Context"),". Any Svelte component that is under the component tree of the component that calls this method can access the Relay Environment by calling ",Object(r.b)("inlineCode",{parentName:"p"},"getRelayEnvironment()"),"."),Object(r.b)("p",null,"For details on how to create a Relay Environment, you can reference ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://relay.dev/docs/en/relay-environment"}),"the Relay documentation"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Arguments:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"env: Environment"))," - The environment to set in the Svelte context.")),Object(r.b)("h3",{id:"getrelayenvironment"},Object(r.b)("inlineCode",{parentName:"h3"},"getRelayEnvironment()")),Object(r.b)("p",null,"Gets the current Relay Environment from the Svelte Context. If no environment is found, an error will be thrown."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Return:")," ",Object(r.b)("inlineCode",{parentName:"p"},"Environment")),Object(r.b)("h2",{id:"general-apis"},"General APIs"),Object(r.b)("p",null,"These APIs work outside of Svelte, and can be called at any time."),Object(r.b)("h3",{id:"graphql"},Object(r.b)("inlineCode",{parentName:"h3"},"graphql")),Object(r.b)("p",null,"A function that is used as a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"}),"tagged template literal"),". This function is used by the Relay Compiler to generate artifacts for your GraphQL queries."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Arguments:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"source: string"))," - The raw text for the GraphQL query. This must be defined statically in a template literal to be understood by the Relay Compiler.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Return:")," ",Object(r.b)("inlineCode",{parentName:"p"},"GraphQLTag")," - A tagged GraphQL query."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This method is never be called in production, and is instead used to define GraphQL queries so that the Relay Compiler can generate code."))))}b.isMDXComponent=!0}}]);