(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[80],{9548:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pokemons/client",function(){return n(2020)}])},2020:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return p}});var r=n(5893),s=n(231),a=n(7662),o=n(1444),u=n(7294),_=n(4817),c=n(4588),d=n(6428),i=n(3454);let l=e=>{let{page:t,perPage:n,sort:l,order:p}=e,[f,m]=(0,u.useState)(t),[P,S]=(0,u.useState)(n),[h,x]=(0,u.useState)(l),[E,k]=(0,u.useState)(p),N="".concat(i.env.NEXT_PUBLIC_POKEMON_LIST_API_BASE_URL,"pokemons")||0,[j,w]=(0,u.useState)((0,_.m)([],0,f,P)),{data:{data:g}}=(0,c.T)({url:N,params:{_page:f,_limit:P,_sort:h,_order:E},transformResponse:(0,c.b)((e,t)=>{let n=t?parseInt(t["x-total-count"],10):0;return(0,_.m)(e,n,f,P)})},{data:j,headers:{"x-total-count":"0"}});return(0,u.useEffect)(()=>{w(g)},[g]),(0,r.jsx)(o.l,{children:(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(s.Z.Header,{children:"Pok\xe9mon"}),(0,r.jsxs)(s.Z.Body,{children:[(0,r.jsx)(d.t,{meta:g.meta,setPerPage:S,setPage:m}),(0,r.jsx)(a.W,{pokemons:g.data,setSort:x,setOrder:k})]})]})})};var p=!0;t.default=l}},function(e){e.O(0,[976,425,664,119,114,444,218,774,888,179],function(){return e(e.s=9548)}),_N_E=e.O()}]);