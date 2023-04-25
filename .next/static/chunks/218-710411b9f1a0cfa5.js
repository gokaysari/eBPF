"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[218],{6428:function(e,t,s){s.d(t,{t:function(){return x}});var a=s(5893),n=s(7294);function r(e){let{total:t,from:s,to:n}=e;return(0,a.jsxs)("div",{className:"col-12 text-center text-sm-start col-sm-auto col-lg mb-3",children:["Showing"," ",(0,a.jsx)("span",{className:"fw-semibold",children:s})," ","to"," ",(0,a.jsx)("span",{className:"fw-semibold",children:n})," ","of"," ",(0,a.jsx)("span",{className:"fw-semibold",children:t})," ","results"]})}var l=s(2529),i=s(1163);function c(e){let{perPage:t,setPerPage:s}=e,n=(0,i.useRouter)();return(0,a.jsxs)("div",{className:"col-auto ms-sm-auto mb-3",children:["Rows per page:"," ",(0,a.jsxs)(l.Z.Select,{defaultValue:t,className:"d-inline-block w-auto","aria-label":"Item per page",onChange:e=>{s&&s(parseInt(e.target.value,10)),n.push({pathname:n.pathname,query:{...n.query,page:1,per_page:e.target.value}})},children:[(0,a.jsx)("option",{value:20,children:"20"}),(0,a.jsx)("option",{value:50,children:"50"}),(0,a.jsx)("option",{value:100,children:"100"}),(0,a.jsx)("option",{value:250,children:"250"})]})]})}var d=s(1358),o=s.n(d);function h(e){let{currentPage:t,lastPage:s,setPage:r}=e,[l,c]=(0,n.useState)(t-1),d=(0,i.useRouter)();return(0,n.useEffect)(()=>{c(t-1)},[t]),(0,a.jsx)("div",{className:"col-auto ms-sm-auto mb-3 overflow-auto",children:(0,a.jsx)(o(),{forcePage:l,pageCount:s,marginPagesDisplayed:1,pageRangeDisplayed:3,containerClassName:"pagination mb-0",previousClassName:"page-item",pageClassName:"page-item",breakClassName:"page-item",nextClassName:"page-item",previousLinkClassName:"page-link",pageLinkClassName:"page-link",breakLinkClassName:"page-link",nextLinkClassName:"page-link",previousLabel:"‹",nextLabel:"›",activeClassName:"active",disabledClassName:"disabled",onPageChange:e=>{let t=e.selected+1;r&&r(t),d.push({pathname:d.pathname,query:{...d.query,page:t}})}})})}function x(e){let{meta:{from:t,to:s,total:n,per_page:l,last_page:i,current_page:d},setPerPage:o,setPage:x}=e;return(0,a.jsxs)("div",{className:"row align-items-center justify-content-center",children:[(0,a.jsx)(r,{from:t,to:s,total:n}),(0,a.jsx)(c,{perPage:l,setPerPage:o}),(0,a.jsx)(h,{currentPage:d,lastPage:i,setPage:x})]})}},7662:function(e,t,s){s.d(t,{W:function(){return p}});var a=s(5893),n=s(5147),r=s(8563),l=s(7814),i=s(9417),c=s(7294),d=s(1163);function o(e){let{name:t,children:s,setSort:n,setOrder:r}=e,[o,h]=(0,c.useState)(i.CmM),x=(0,d.useRouter)(),{query:{sort:m,order:u}}=x,p=()=>{r&&r("asc"===u?"desc":"asc"),n&&n(t),x.push({pathname:x.pathname,query:{...x.query,sort:t,order:"asc"===u?"desc":"asc"}})};return(0,c.useEffect)(()=>{if(m!==t){h(i.CmM);return}if("asc"===u){h(i.foy);return}"desc"===u&&h(i.u9C)},[m,u,t]),(0,a.jsxs)("a",{className:"text-decoration-none",role:"button",tabIndex:0,onClick:p,onKeyDown:p,children:[s,(0,a.jsx)(l.G,{icon:o,fixedWidth:!0,size:"xs"})]})}var h=s(5675),x=s.n(h);let m={normal:"#aa9",fighting:"#b54",flying:"#89f",poison:"#a59",ground:"#db5",rock:"#ba6",bug:"#ab2",ghost:"#66b",steel:"#aab",fire:"#f42",water:"#39f",grass:"#7c5",electric:"#fc3",psychic:"#f59",ice:"#6cf",dragon:"#76e",dark:"#754",fairy:"#e9e",unknown:"#aa9",shadow:"#aa9"},u=e=>{let{type:t}=e;return(0,a.jsx)("span",{className:"text-white d-inline-block text-uppercase text-center rounded-1 shadow-sm me-2",style:{backgroundColor:m[t],textShadow:"1px 1px 2px rgb(0 0 0 / 70%)",fontSize:".7rem",width:"70px"},children:t})};function p(e){let{pokemons:t,setSort:s,setOrder:c}=e;return(0,a.jsxs)(n.Z,{responsive:!0,bordered:!0,hover:!0,children:[(0,a.jsx)("thead",{className:"bg-light",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:(0,a.jsx)(o,{name:"id",setSort:s,setOrder:c,children:"#"})}),(0,a.jsx)("th",{"aria-label":"Photo"}),(0,a.jsx)("th",{children:(0,a.jsx)(o,{name:"name",setSort:s,setOrder:c,children:"Name"})}),(0,a.jsx)("th",{children:"Type"}),(0,a.jsx)("th",{className:"text-center",children:"Egg group"}),(0,a.jsx)("th",{className:"text-end",children:(0,a.jsx)(o,{name:"hp",setSort:s,setOrder:c,children:"Hp"})}),(0,a.jsx)("th",{className:"text-end",children:(0,a.jsx)(o,{name:"attack",setSort:s,setOrder:c,children:"Atk"})}),(0,a.jsx)("th",{className:"text-end",children:(0,a.jsx)(o,{name:"defense",setSort:s,setOrder:c,children:"Def"})}),(0,a.jsx)("th",{className:"text-end",children:(0,a.jsx)(o,{name:"special_attack",setSort:s,setOrder:c,children:"SpA"})}),(0,a.jsx)("th",{className:"text-end",children:(0,a.jsx)(o,{name:"special_defense",setSort:s,setOrder:c,children:"SpD"})}),(0,a.jsx)("th",{className:"text-end",children:(0,a.jsx)(o,{name:"speed",setSort:s,setOrder:c,children:"Spd"})}),(0,a.jsx)("th",{className:"text-end",children:(0,a.jsx)(o,{name:"total",setSort:s,setOrder:c,children:"Total"})}),(0,a.jsx)("th",{"aria-label":"Action"})]})}),(0,a.jsx)("tbody",{children:t.map(e=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:e.id}),(0,a.jsx)("td",{children:(0,a.jsx)("div",{className:"position-relative mx-auto",style:{width:"70px",height:"70px"},children:(0,a.jsx)(x(),{fill:!0,style:{objectFit:"contain"},alt:e.pokemondb_identifier,sizes:"5vw",src:"https://img.pokemondb.net/sprites/home/normal/2x/".concat(e.pokemondb_identifier,".jpg")})})}),(0,a.jsx)("td",{children:e.name}),(0,a.jsx)("td",{children:e.types.map(e=>(0,a.jsx)(u,{type:e},e))}),(0,a.jsx)("td",{className:"text-center",style:{whiteSpace:"pre"},children:e.egg_groups.join("\n")}),(0,a.jsx)("td",{className:"text-end",children:e.hp}),(0,a.jsx)("td",{className:"text-end",children:e.attack}),(0,a.jsx)("td",{className:"text-end",children:e.defense}),(0,a.jsx)("td",{className:"text-end",children:e.special_attack}),(0,a.jsx)("td",{className:"text-end",children:e.special_defense}),(0,a.jsx)("td",{className:"text-end",children:e.speed}),(0,a.jsx)("td",{className:"text-end",children:e.total}),(0,a.jsx)("td",{children:(0,a.jsxs)(r.Z,{align:"end",children:[(0,a.jsx)(r.Z.Toggle,{as:"button",bsPrefix:"btn",className:"btn-link rounded-0 text-black-50 shadow-none p-0",id:"action-".concat(e.id),children:(0,a.jsx)(l.G,{fixedWidth:!0,icon:i.Uwo})}),(0,a.jsxs)(r.Z.Menu,{children:[(0,a.jsx)(r.Z.Item,{href:"#/action-1",children:"Info"}),(0,a.jsx)(r.Z.Item,{href:"#/action-2",children:"Edit"}),(0,a.jsx)(r.Z.Item,{className:"text-danger",href:"#/action-3",children:"Delete"})]})]})})]},e.id))})]})}},4588:function(e,t,s){s.d(t,{b:function(){return c},T:function(){return i}});var a=s(9734),n=s(9669),r=s.n(n),l=s(3454);function i(e,t){let s={data:t.data,headers:{},status:200,statusText:"Initial",config:{}},n={...s,...t};return(0,a.ZP)(JSON.stringify(e),()=>r().request(e),{fallbackData:n,onErrorRetry:(e,t,s,a,n)=>{var r,i,c;let{retryCount:d}=n;if((null===(r=e.response)||void 0===r?void 0:r.status)===404)return;let o=parseInt(null!==(i=l.env.NEXT_PUBLIC_API_MAX_RETRY)&&void 0!==i?i:"5",10);if(d>=o)return;let h=parseInt(null!==(c=l.env.NEXT_PUBLIC_API_RETRY_INTERVAL_IN_SECONDS)&&void 0!==c?c:"5",10);setTimeout(()=>a({retryCount:d}),1e3*h)}})}let c=e=>[].concat(r().defaults.transformResponse,e)},4817:function(e,t,s){s.d(t,{m:function(){return r}});let a=(e,t,s)=>1===t?e<s?e:s:(t-1)*s+s,n=(e,t)=>e<=1?1:Math.ceil(e/t),r=(e,t,s,r)=>({data:e,meta:{current_page:s,last_page:n(t,r),from:1===s?1:(s-1)*r+1,to:a(t,s,r),per_page:r,total:t}})}}]);