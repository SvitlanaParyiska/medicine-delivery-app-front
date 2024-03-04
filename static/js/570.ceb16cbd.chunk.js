"use strict";(self.webpackChunkmedicine_delivery_app_front=self.webpackChunkmedicine_delivery_app_front||[]).push([[570],{581:(n,e,r)=>{r.d(e,{A:()=>a});r(43);const a=r.p+"static/media/sprite.823a24ac3c3762b72253f221e0d1c072.svg"},987:(n,e,r)=>{r.r(e),r.d(e,{default:()=>P});var a=r(3),s=r(338),t=r(416),i=r(920);const l=r.p+"static/media/placeholder2.0b25db705616b72b0582.jpg";var c,o,d,m=r(528),p=r(197);const x=p.Ay.li(c||(c=(0,m.A)(["\n  width: 70%;\n  overflow: hidden;\n  margin-left: auto;\n  margin-right: auto;\n\n  > div {\n    transition: var(--transition);\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1),\n        0px 2px 1px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);\n    }\n  }\n\n  img {\n    height: 100%;\n    object-fit: cover;\n  }\n"]))),u=p.Ay.button(o||(o=(0,m.A)(["\n  background-color: transparent;\n  border: none;\n  margin-bottom: 0;\n"]))),h=p.Ay.svg(d||(d=(0,m.A)(["\n  width: 18px;\n  height: 18px;\n  fill: var(--color-secondary);\n  stroke: var(--color-secondary);\n  transition: var(--transition);\n\n  &:hover,\n  &:focus {\n    fill: var(--color-accent);\n    stroke: var(--color-accent);\n  }\n"])));var b=r(581),f=r(579);const j=function(n){let{drug:e}=n;const r=(0,a.wA)();return(0,f.jsx)(x,{children:(0,f.jsx)("div",{className:"card mb-3",children:(0,f.jsxs)("div",{className:"row no-gutters",children:[(0,f.jsx)("div",{className:"col-md-4",children:(0,f.jsx)("img",{src:e.imgURL?e.imgURL:l,className:"card-img",alt:"...",style:{width:"250px"}})}),(0,f.jsx)("div",{className:"col-md-8",children:(0,f.jsxs)("div",{className:"card-body",children:[(0,f.jsx)("h5",{className:"card-title",children:e.drugName}),(0,f.jsxs)("p",{className:"card-text",children:["amount: ",e.price*e.total," UAH"]}),(0,f.jsxs)("div",{className:"mb-3",style:{display:"flex",alignItems:"center"},children:[(0,f.jsx)("p",{style:{border:"2px solid #262f34",borderRadius:"4px",padding:"5px 10px"},children:e.total}),(0,f.jsxs)("div",{children:[(0,f.jsx)(u,{type:"button",onClick:function(){r((0,i.uF)(e))},children:(0,f.jsx)(h,{children:(0,f.jsx)("use",{href:"".concat(b.A,"#icon-arrow-up-square")})})}),(0,f.jsx)(u,{type:"button",onClick:function(){r((0,i.Tx)(e))},children:(0,f.jsx)(h,{children:(0,f.jsx)("use",{href:"".concat(b.A,"#icon-arrow-down-square")})})})]}),(0,f.jsx)("button",{type:"button",onClick:function(){r((0,i.kz)(e))},style:{border:"none",backgroundColor:"transparent",marginLeft:"auto"},children:(0,f.jsx)(h,{children:(0,f.jsx)("use",{href:"".concat(b.A,"#icon-cart-x")})})})]})]})})]})})})};var g,v=r(712),y=r(475);const N=p.Ay.div(g||(g=(0,m.A)(["\n  height: 500px;\n  overflow: auto;\n  padding: 15px;\n  border-radius: 8px;\n  border: 1px solid #262f34;\n\n  &::-webkit-scrollbar {\n    width: 10px;\n  }\n  &::-webkit-scrollbar-thumb {\n    background: var(--color-accent);\n    border-radius: 14px;\n  }\n\n  @media screen and (max-width: 767px) {\n    margin-top: 20px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 70%;\n  }\n"])));const A=function(){const n=(0,a.d4)(t.DG);return(0,f.jsx)(N,{children:(0,f.jsx)("ul",{children:n.length>0?n.map((n=>(0,f.jsx)(j,{drug:n},(0,v.Ak)()))):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("p",{children:"Your shopping cart is still empty..."}),(0,f.jsx)(y.N_,{to:"/",children:"Back to shopping"})]})})})};var w,k,C,_;const F=p.Ay.div(w||(w=(0,m.A)(["\n  @media screen and (min-width: 768px) {\n    display: flex;\n    gap: 20px;\n  }\n"]))),q=p.Ay.div(k||(k=(0,m.A)(["\n  padding: 15px;\n  border-radius: 8px;\n  border: 1px solid #262f34;\n"]))),U=p.Ay.div(C||(C=(0,m.A)(["\n  margin-top: 20px;\n  display: flex;\n  gap: 30px;\n  align-items: center;\n  justify-content: flex-end;\n"]))),E=p.Ay.button(_||(_=(0,m.A)(["\n  display: block;\n  margin-left: auto;\n  margin-right: 0;\n  margin-top: 20px;\n"])));var z=r(43);var D=r(726),H=r.n(D);const L=function(){const n=(0,a.wA)(),[e,r]=(0,z.useState)(0),l=(0,a.d4)(t.DG);return(0,z.useEffect)((()=>{if(l.length>0){const n=function(n){let e=0;return n.forEach((n=>{e+=n.total*n.price})),e}(l);r(n)}else r(0)}),[l]),(0,f.jsxs)("div",{children:[(0,f.jsxs)("form",{onSubmit:async r=>{r.preventDefault();const{name:a,email:t,phone:i,address:c}=r.target.elements;try{await n((0,s.U4)({drugsList:l,totalPrice:e,name:a.value,email:t.value,phone:Number(i.value),address:c.value})).unwrap(),H().Notify.success("Done!",{timeout:2e3}),r.target.reset()}catch(r){H().Notify.failure("Fill in correct data!",{timeout:2e3})}},autoComplete:"off",children:[(0,f.jsxs)(F,{children:[(0,f.jsxs)(q,{children:[(0,f.jsxs)("div",{className:"mb-3",children:[(0,f.jsx)("label",{htmlFor:"inputName",className:"form-label",children:"Username:"}),(0,f.jsx)("input",{type:"text",name:"name",className:"form-control",id:"inputName",required:!0})]}),(0,f.jsxs)("div",{className:"mb-3",children:[(0,f.jsx)("label",{htmlFor:"inputEmail",className:"form-label",children:"Email:"}),(0,f.jsx)("input",{type:"email",name:"email",className:"form-control",id:"inputEmail","aria-describedby":"emailHelp",pattern:"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",required:!0}),(0,f.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),(0,f.jsxs)("div",{className:"mb-3",children:[(0,f.jsx)("label",{htmlFor:"inputPhone",className:"form-label",children:"Phone:"}),(0,f.jsx)("input",{type:"number",name:"phone",className:"form-control",id:"inputPhone",required:!0})]}),(0,f.jsxs)("div",{className:"mb-3",children:[(0,f.jsx)("label",{htmlFor:"inputAddress",className:"form-label",children:"Address:"}),(0,f.jsx)("input",{type:"text",name:"address",className:"form-control",id:"inputAddress",required:!0})]})]}),(0,f.jsx)(A,{})]}),(0,f.jsxs)(U,{children:[(0,f.jsxs)("p",{children:["Total price: ",e," UAH"]}),(0,f.jsx)("button",{type:"submit",className:"btn btn-info",children:"Submit"})]})]}),(0,f.jsx)(E,{type:"button",className:"btn btn-danger",onClick:function(){n((0,i.sX)())},children:"Clear cart"})]})};const P=function(){return(0,f.jsx)("main",{children:(0,f.jsx)("div",{className:"container",children:(0,f.jsx)(L,{})})})}}}]);
//# sourceMappingURL=570.ceb16cbd.chunk.js.map