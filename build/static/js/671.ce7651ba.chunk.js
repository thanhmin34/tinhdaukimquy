"use strict";(self.webpackChunktinhdaukimquy=self.webpackChunktinhdaukimquy||[]).push([[671],{5748:function(e,t,s){s.r(t);var n=s(5861),r=s(1413),c=s(885),i=s(7757),a=s.n(i),l=s(2791),d=s(302),o=s(7692),x=s(6856),u=s(9062),m=s(255),h=s(6871),p=s(184);function f(e){var t=e.item,s=(0,l.useState)(0),r=(0,c.Z)(s,2),i=r[0],m=r[1],h=(0,l.useState)(!1),f=(0,c.Z)(h,2),v=f[0],b=f[1];(0,l.useEffect)((function(){m(t.products.reduce((function(e,t){return e+ +t.quantity*+t.price}),0))}),[t]);var y=function(){var e=(0,n.Z)(a().mark((function e(t){var s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,(0,u.hJ)(d.db,"checkOutProducts",t.id);case 4:return s=e.sent,e.next=7,(0,u.oe)(s);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"flex w-full text-base  ",children:[(0,p.jsx)("div",{className:"py-1 px-2 md:py-3 md:basis-4/12 basis-6/12 border border-[#ccc] ",children:null===t||void 0===t?void 0:t.name}),(0,p.jsx)("div",{className:"py-1 px-2 md:py-3  basis-4/12 border border-[#ccc]",children:null===t||void 0===t?void 0:t.address}),(0,p.jsx)("div",{className:"py-1 px-2 md:py-3 md:basis-2/12 hidden md:block border border-[#ccc]",children:i?(0,p.jsxs)("span",{children:[i+2e4," \u0111"]}):""}),(0,p.jsx)("div",{className:"py-1 px-2 md:py-3 md:basis-1/12 basis-2/12 cursor-pointer border border-[#ccc] text-center flex items-center justify-center ",children:(0,p.jsx)("span",{onClick:function(){b(!0)},children:(0,p.jsx)(o.avz,{})})}),(0,p.jsx)("div",{className:"py-1 px-2 md:py-3 md:basis-1/12  hidden  cursor-pointer border border-[#ccc] text-center md:flex items-center justify-center ",children:(0,p.jsx)("span",{onClick:function(){return y(t)},children:(0,p.jsx)(x.ZkW,{})})})]}),!0===v?(0,p.jsx)("div",{className:"fixed inset-0  text-w w-full bg-[#ccc]  transition duration-100 ",children:(0,p.jsxs)("div",{className:"flex w-full max-w-[500px] mx-auto mt-10 text-base font-medium flex-col relative py-10 bg-f",children:[(0,p.jsx)("span",{onClick:function(){return b(!1)},className:"absolute top-2 right-3  text-xl p-2 cursor-pointer",children:"x"}),(0,p.jsx)("h2",{className:"text-center mx-auto",children:"Chi Ti\u1ebft \u0110\u01a1n H\xe0ng"}),(0,p.jsxs)("div",{className:"flex flex-col mt-5 px-5",children:[(0,p.jsxs)("span",{children:[(0,p.jsx)("strong",{children:"T\xean:"})," ",t.name]}),(0,p.jsxs)("span",{children:[(0,p.jsx)("strong",{children:"Gmail:"})," ",t.email]}),(0,p.jsxs)("span",{children:[(0,p.jsx)("strong",{children:"S\u0110T:"})," 0",t.phone]}),(0,p.jsxs)("span",{children:[(0,p.jsx)("strong",{children:"\u0110\u1ecba ch\u1ec9:"})," ",t.address]}),(0,p.jsxs)("span",{children:[(0,p.jsx)("strong",{children:"Ph\u01b0\u1eddng:"})," ",t.wart]}),(0,p.jsxs)("span",{children:[(0,p.jsx)("strong",{children:"Th\xe0nh Ph\u1ed1:"})," ",t.province]}),(0,p.jsxs)("span",{children:[(0,p.jsx)("strong",{children:"T\u1ec9nh:"})," ",t.city]})]}),(0,p.jsxs)("div",{className:"flex mt-5 px-5 flex-col",children:[(0,p.jsx)("h2",{className:"text-center mx-auto",children:"Danh s\xe1ch s\u1ea3n ph\u1ea9m"}),(0,p.jsxs)("div",{className:"flex  flex-col mt-5",children:[t.products.length>0&&t.products.map((function(e,t){return(0,p.jsx)(j,{item:e,total:i},t)})),(0,p.jsxs)("div",{className:"mt-5 flex flex-col",children:[(0,p.jsxs)("span",{children:["Ph\xed Ship: ",t.ship," \u0111"]}),(0,p.jsx)("div",{children:(0,p.jsxs)("strong",{children:["Th\xe0nh Ti\u1ec1n: ",t.ship+i," \u0111"]})})]})]})]})]})}):""]})}function j(e){var t=e.item;e.total;return(0,p.jsxs)("div",{className:"flex items-center my-3 pb-3 border-b ",children:[(0,p.jsxs)("div",{className:"gap-x-2 flex items-center",children:[(0,p.jsx)("img",{src:t.image,alt:"",className:"w-16"}),(0,p.jsxs)("div",{className:"flex flex-col",children:[(0,p.jsx)("span",{className:"text__overflow-1",children:t.title}),(0,p.jsx)("div",{className:"flex items-center ml-2",children:(0,p.jsxs)("span",{children:[t.quantity," x ",t.price]})})]})]}),(0,p.jsx)("div",{className:"total ml-auto",children:(0,p.jsxs)("span",{children:[+t.price*+t.quantity," \u0111"]})})]})}t.default=function(){var e=(0,l.useState)([]),t=(0,c.Z)(e,2),s=t[0],n=t[1],i=(0,u.hJ)(d.db,"checkOutProducts"),a=(0,h.s0)();(0,l.useEffect)((function(){(0,u.cf)(i,(function(e){var t=[];e.docs.forEach((function(e){t.push((0,r.Z)({id:e.id},e.data()))})),n(t)}))}),[]);return(0,p.jsxs)("div",{className:"w-full max-w-[1200px] mx-auto mt-10  text-b px-[10px]",children:[(0,p.jsx)("h2",{className:"text-center font-semibold text-2xl ",children:"Danh S\xe1ch \u0110\u01a1n H\xe0ng"}),(0,p.jsxs)("div",{className:"flex w-full mx-auto gap-x-5 mt-10 flex-col max-w-[900px]",children:[(0,p.jsx)("div",{className:"flex w-full mb-[1px]",children:(0,p.jsxs)("div",{className:"flex w-full mb-5",children:[(0,p.jsx)("div",{className:" text-center md:basis-4/12 basis-6/12 ",children:"T\xean Kh\xe1ch H\xe0ng"}),(0,p.jsx)("div",{className:" text-center md:basis-4/12 basis-4/12",children:"\u0110\u1ecba ch\u1ec9"}),(0,p.jsx)("div",{className:" text-center md:basis-2/12 hidden md:block",children:"T\u1ed5ng Ti\u1ec1n"}),(0,p.jsx)("div",{className:" text-center md:basis-1/12 basis-2/12",children:"Chi Ti\u1ebft"}),(0,p.jsx)("div",{className:" text-center md:basis-1/12 hidden md:block",children:"Edit"})]})}),(0,p.jsx)("div",{children:s.length>0&&s.map((function(e){return(0,p.jsx)(f,{item:e},e.id)}))})]}),(0,p.jsx)("button",{onClick:function(){(0,m.w7)(d.I),a("/")},className:"mt-10 w-full max-w-[142px] outline-none border border-[#000] text-b text-center ml-10 lg:ml-36 rounded-sm py-2",children:"\u0110\u0103ng xu\u1ea5t"})]})}},302:function(e,t,s){s.d(t,{I:function(){return l},db:function(){return a}});var n=s(2426),r=s(9062),c=s(255),i=(0,n.ZF)({apiKey:"AIzaSyA0TTdnjqVHg-fU0Wi5ZLm6C9TIgBBpDbU",authDomain:"kimquy-4e78c.firebaseapp.com",projectId:"kimquy-4e78c",storageBucket:"kimquy-4e78c.appspot.com",messagingSenderId:"914545086195",appId:"1:914545086195:web:dad37df66254ea4ddcf186",measurementId:"G-WT58GQQQCP"}),a=(0,r.ad)(i),l=(0,c.v0)(i)},9983:function(e,t,s){s.d(t,{w_:function(){return d}});var n=s(2791),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=n.createContext&&n.createContext(r),i=function(){return i=Object.assign||function(e){for(var t,s=1,n=arguments.length;s<n;s++)for(var r in t=arguments[s])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},i.apply(this,arguments)},a=function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(s[n[r]]=e[n[r]])}return s};function l(e){return e&&e.map((function(e,t){return n.createElement(e.tag,i({key:t},e.attr),l(e.child))}))}function d(e){return function(t){return n.createElement(o,i({attr:i({},e.attr)},t),l(e.child))}}function o(e){var t=function(t){var s,r=e.attr,c=e.size,l=e.title,d=a(e,["attr","size","title"]),o=c||t.size||"1em";return t.className&&(s=t.className),e.className&&(s=(s?s+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,d,{className:s,style:i(i({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==c?n.createElement(c.Consumer,null,(function(e){return t(e)})):t(r)}}}]);
//# sourceMappingURL=671.ce7651ba.chunk.js.map