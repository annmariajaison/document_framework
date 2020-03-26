(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{287:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(9),l=(n(0),n(404)),a={id:"power_supply",title:"Power Supply",date:"2020-03-"},c={id:"Product/iMCU/W7500/power_supply",title:"Power Supply",description:"## Content",source:"@site/docs/Product/iMCU/W7500/Power Supply.md",permalink:"/document_framework/docs/Product/iMCU/W7500/power_supply",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iMCU/W7500/Power Supply.md",sidebar:"someSidebar",previous:{title:"Interrupt and Event",permalink:"/document_framework/docs/Product/iMCU/W7500/interrupt_and_event"},next:{title:"Booting Sequence",permalink:"/document_framework/docs/Product/iMCU/W7500/booting_sequence"}},p=[{value:"Content",id:"content",children:[]}],i={rightToc:p};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"content"},"Content"),Object(l.b)("p",null,"\\<markdown",">"," ","#"," Power supply"),Object(l.b)("p",null,"#","#","Introduction"),Object(l.b)("p",null,"W7500 embeds a voltage regulator in order to supply the internal 1.5V\ndigital power domain."),Object(l.b)("p",null,"-"," Require a 2.7V ","~"," 5.5V operating supply voltage (VDD) - ADC ref\nvoltage is same as VDD"),Object(l.b)("p",null,"#","#"," Voltage regulator"),Object(l.b)("p",null,"The voltage regulator is always enabled after Reset and works on in only\none mode."),Object(l.b)("p",null,"-"," In Run mode, the regulator supplies full power to the 1.5V domain. -\nThere is no power down or sleep mode."),Object(l.b)("p",null,"#","#"," Power supply supervisor"),Object(l.b)("p",null,"W7500 has an integrated reset (POR) circuit which is always active and\nensure proper operation above a threshold of 0.6V"),Object(l.b)("p",null,"-"," The POR monitors only the VDD supply voltage. During the startup\nphase VDD must arrive first and be greater than or equal to 0.6V"),Object(l.b)("p",null,"!","[","]","(",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:por_reset_waveform.jpg"}),"http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:por_reset_waveform.jpg"),'\n"Figure 1 POR reset waveform")'),Object(l.b)("p",null,"#","#","Low power modes W7500 is in RUN mode after a system or power reset.\nThere are two low power modes to save power when the CPU does not need\nto be kept running. These modes are useful for instances like when the\nCPU is waiting for an external interrupt. Please note that there is no\npower-off mode for W7500."),Object(l.b)("p",null,"The device features two low power modes:"),Object(l.b)("p",null,"-"," Sleep mode - Deep Sleep mode"),Object(l.b)("p",null,"Additionally, the power consumption can be reducing by following method:"),Object(l.b)("p",null,"-"," User can slow down the system clocks - User can block the clocks to\nthe peripherals while they are unused."),Object(l.b)("p",null,"#","#","#","Sleep mode vs. Deep sleep mode"),Object(l.b)("p",null,"W7500 has two kinds of sleep modes. One is Sleep mode and the other is\nDeep sleep mode. Two of them are almost the same except the clock gated\nperipherals kinds."),Object(l.b)("p",null,"\\<table",">"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),'<tr>\n  <th>Mode</th>\n  <th>Entry</th>\n  <th>Wakeup</th>\n  <th>Effect-on-clocks</th>\n</tr>\n<tr>\n  <td rowspan="2">Sleep mode</td>\n  <td>DEEPSLEEP = 0<br>Enable WFI</td>\n  <td>Any interrupt</td>\n  <td rowspan="2">CPU Clock OFF<br>APB Bus Clock ON<br>AHB Bus Clock ON<br>Memory Clock ON</td>\n</tr>\n<tr>\n  <td>DEEPSLEEP = 0<br>Enable WFE</td>\n  <td>Wakeup event</td>\n</tr>\n<tr>\n  <td rowspan="2">Deep Sleep mode</td>\n  <td>DEEPSLEEP = 1<br>Enable WFI</td>\n  <td>Any interrupt</td>\n  <td rowspan="2">CPU Clock OFF<br>APB Bus Clock OFF<br>AHB Bus Clock OFF<br>Memory Clock OFF</td>\n</tr>\n<tr>\n  <td>DEEPSLEEP = 1<br>Enable WFE</td>\n  <td>Wakeup event</td>\n</tr>\n')),Object(l.b)("p",null,"\\</table",">"),Object(l.b)("p",null,"#","#","#","Peripheral clock gating"),Object(l.b)("p",null,"In Run mode, individual clocks can be stopped at any time to reduce\npower. Peripheral clock gating is controlled by the CRG block. Below is\nthe list of clocks which can be gating in CRG block."),Object(l.b)("p",null,"-"," ADC clock (ADCCLK) - SSP0, SSP1 clock (SSPCLK) - UART0, UART1 clock\n(UARTCLK) - Two Timer clocks (TIMCLK0, TIMCLK1) - 8 PWM clocks (PWMCLK0\n","~"," PWMCLK7) - WDOG clock (WDOGCLK) - Random number generator clock\n(RNGCLK)"),Object(l.b)("p",null,"\\</markdown",">"))}u.isMDXComponent=!0},404:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),u=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=u(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,m=s["".concat(a,".").concat(b)]||s[b]||d[b]||l;return n?o.a.createElement(m,c({ref:t},i,{components:n})):o.a.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var i=2;i<l;i++)a[i]=n[i];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);