(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{370:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(9),a=(n(0),n(474)),i={id:"system_and_memory",title:"System and Memory",date:"2020-03-"},c={id:"Product/iMCU/W7500/system_and_memory",title:"System and Memory",description:"## Content",source:"@site/docs/Product/iMCU/W7500/System and Memory.md",permalink:"/document_framework/docs/Product/iMCU/W7500/system_and_memory",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iMCU/W7500/System and Memory.md",sidebar:"someSidebar",previous:{title:"Pin Assignment",permalink:"/document_framework/docs/Product/iMCU/W7500/pin_assignment"},next:{title:"Interrupt and Event",permalink:"/document_framework/docs/Product/iMCU/W7500/interrupt_and_event"}},l=[{value:"Content",id:"content",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"content"},"Content"),Object(a.b)("p",null," ","#","System and Memory overview ","#","#"," System architecture Main\nsystem consists of:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Two masters:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Cortex-M0 core"),Object(a.b)("li",{parentName:"ul"},"uDMAC(PL230, 6 channels)"))),Object(a.b)("li",{parentName:"ul"},"Ten slaves",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Internal BOOT ROM"),Object(a.b)("li",{parentName:"ul"},"Internal SRAM"),Object(a.b)("li",{parentName:"ul"},"Internal Flash Memory"),Object(a.b)("li",{parentName:"ul"},"Two AHB2APB bridge which connects all APB peripherals"),Object(a.b)("li",{parentName:"ul"},"Four AHB dedicated to 16-bit GPIOs"),Object(a.b)("li",{parentName:"ul"},"TCP/IP Hardware core")))),Object(a.b)("p",null,"!","[","]","(",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:overview:w7500_system_architecture.png"}),"http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:overview:w7500_system_architecture.png"),'\n"W7500 System Architecture")'),Object(a.b)("p",null,"AHB-Lite BUS"),Object(a.b)("p",null,"-"," This bus connects the two masters (Cortex-M0 and uDMAC) and ten AHB\nslaves."),Object(a.b)("p",null,"Two APB BUSs"),Object(a.b)("p",null,"-"," These buses connect Seventeen APB peripherals (Watchdog, two dual\ntimers, pwm, two UARTs, simple UART, two I2Cs, two SSPs, random number\ngenerator, real time clock, 12bits analog digital converter, clock\ncontroller, IO configuration, PAD MUX controller)"),Object(a.b)("p",null,"#","#"," Memory organization"),Object(a.b)("p",null,"Program memory, data memory, registers and I/O ports are organized\nwithin the same linear 4-Gbyte address space. The bytes are coded in\nmemory in Little Endian format. The lowest numbered byte in a word is\nconsidered the word\u2019s least significant byte and the highest numbered\nbyte the most significant."),Object(a.b)("p",null,"#","#","#","Memory map"),Object(a.b)("p",null,"!","[","]","(",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:overview:w7500_memory_map.png"}),"http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:overview:w7500_memory_map.png"),'\n"Figure 2 W7500 Memory map")'),Object(a.b)("p",null,"#","#","System Configuration Controller (SYSCFG)"),Object(a.b)("p",null,"Main purposes of the system configuration controller are the following"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Control of the memory remap feature"),Object(a.b)("li",{parentName:"ul"},"The ability to enable an automatic reset if the system locks up"),Object(a.b)("li",{parentName:"ul"},"Information about the cause of the last reset")),Object(a.b)("p",null,"\\"))}s.isMDXComponent=!0},474:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||a;return n?o.a.createElement(d,c({ref:t},u,{components:n})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);