import{b as r,c as C,j as g,n as i}from"/build/_shared/chunk-CNHGPWJO.js";var t=r(i());function c({product:o}){let e=Array.from({length:5},(d,l)=>(0,t.jsx)("span",{className:l<o.dropRatio?"star filled":"star",children:"\u2605"},l));return(0,t.jsxs)("div",{className:"product-card",children:[(0,t.jsx)("img",{src:o.imageUrl||"https://via.placeholder.com/150",alt:o.name,className:"product-image"}),(0,t.jsxs)("div",{className:"product-info",children:[(0,t.jsx)("h2",{children:o.name})," ",(0,t.jsxs)("p",{className:"product-price",children:[o.price," TL"]}),(0,t.jsx)("div",{className:"product-rating",children:e}),(0,t.jsxs)("p",{className:"product-followCount",children:["Takip\xE7i Say\u0131s\u0131: ",o.followCount]})]})]})}var m=r(i());function f({products:o}){return(0,m.jsx)("div",{className:"horizontal-scroll",children:o.map(e=>(0,m.jsx)(c,{product:e},e.code))})}var p=r(C());var a=r(i()),R=({initialProducts:o,nextUrl:e})=>{let[d,l]=(0,p.useState)(o),[u,y]=(0,p.useState)(e),[L,P]=(0,p.useState)(!1),k=async()=>{if(u){P(!0);try{let v=await(await fetch(u)).json();l(x=>[...x,...v.productList]),y(v.nextUrl)}catch(n){console.error("\xDCr\xFCnler y\xFCklenirken hata olu\u015Ftu:",n)}finally{P(!1)}}};return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"product-grid",children:d.map(n=>(0,a.jsx)(c,{product:n},n.code))}),(0,a.jsx)("div",{className:"more-button-container",children:L?(0,a.jsx)("div",{children:"Y\xFCkleniyor..."}):u?(0,a.jsx)("button",{onClick:k,className:"load-more",children:"Daha Fazla Y\xFCkle"}):(0,a.jsx)("span",{children:"T\xFCm \xFCr\xFCnler y\xFCklendi."})})]})},h=R;var s=r(i());function N(){let{horizontalProductList:o,productList:e,nextUrl:d}=g();return(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("h1",{children:"\xDCr\xFCn Listesi"}),(0,s.jsx)(f,{products:o}),(0,s.jsx)(h,{initialProducts:e,nextUrl:d})]})}export{N as default};
