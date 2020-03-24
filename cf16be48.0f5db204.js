(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{356:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(1),o=n(9),c=(n(0),n(404)),i={id:"booting_sequence",title:"Booting Sequence",date:"2020-03-"},a={id:"Product/iMCU/W7500/booting_sequence",title:"Booting Sequence",description:"## Content",source:"@site/docs/Product/iMCU/W7500/Booting Sequence.md",permalink:"/document_framework/docs/Product/iMCU/W7500/booting_sequence",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iMCU/W7500/Booting Sequence.md",sidebar:"someSidebar",previous:{title:"Power Supply",permalink:"/document_framework/docs/Product/iMCU/W7500/power_supply"},next:{title:"Electrical Characteristics",permalink:"/document_framework/docs/Product/iMCU/W7500/electrical_characteristics"}},s=[{value:"Content",id:"content",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"content"},"Content"),Object(c.b)("p",null,"\\<markdown",">"," ","#"," Booting Sequence"),Object(c.b)("p",null,"W7500 has three different boot modes that can be selected through the\nBOOT pin and TEST pin."),Object(c.b)("p",null,'\\<style type="text/css"',">"," .tg\n{border-collapse:collapse;border-spacing:0;} .tg td{font-family:Arial,\nsans-serif;font-size:14px;padding:10px\n5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}\n.tg th{font-family:Arial,\nsans-serif;font-size:14px;font-weight:normal;padding:10px\n5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}\n.tg .tg-s6z2{text-align:center; vertical-align:middle} .tg\n.tg-huh2{font-size:14px;text-align:center; vertical-align:middle}\n\\</style",">",' \\<table class="tg"',">"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'<tr>\n  <th class="tg-huh2" colspan="2">Mode Selection</th>\n  <th class="tg-s6z2" rowspan="2">Mode</th>\n  <th class="tg-huh2" rowspan="2">Aliasing</th>\n</tr>\n<tr>\n  <td class="tg-s6z2">TEST</td>\n  <td class="tg-s6z2">BOOT</td>\n</tr>\n<tr>\n  <td class="tg-s6z2">0</td>\n  <td class="tg-s6z2">0</td>\n  <td class="tg-s6z2">APP</td>\n  <td class="tg-031e">User code execute in Main Flash memory</td>\n</tr>\n<tr>\n  <td class="tg-s6z2">0</td>\n  <td class="tg-s6z2">1</td>\n  <td class="tg-s6z2">ISP</td>\n  <td class="tg-031e">In this mode, W7500 can support ISP function in order to control flash using serial interface.</td>\n</tr>\n')),Object(c.b)("p",null,"\\</table",">"),Object(c.b)("p",null,"When W7500 is reset by hardware, it will be operated as below in\nembedded boot code."),Object(c.b)("p",null,"!","[","Figure 1 I2C Bus\nConfiguration","]","(",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:documents:boot.jpg"}),"http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:documents:boot.jpg"),'\n"Figure 1 operation of boot code")'),Object(c.b)("p",null,"\\</markdown",">"))}d.isMDXComponent=!0},404:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},p=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,f=p["".concat(i,".").concat(b)]||p[b]||u[b]||c;return n?o.a.createElement(f,a({ref:t},l,{components:n})):o.a.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=b;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);