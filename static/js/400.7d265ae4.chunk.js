"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[400],{3382:function(n,t,e){e.d(t,{M1:function(){return g},t2:function(){return u},tx:function(){return h},Wf:function(){return m},Df:function(){return p}});var r=e(5861),i=e(4687),a=e.n(i),o=e(1243),c="fea301b61f4120262087afffe243e7c9",s="https://api.themoviedb.org/3";function p(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(c));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function u(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(s,"/movie/").concat(t,"?api_key=").concat(c));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(c));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function g(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(c));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(s,"/search/movie?query=").concat(t,"&api_key=").concat(c));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}},7400:function(n,t,e){e.r(t),e.d(t,{default:function(){return P}});var r,i,a,o,c,s=e(5861),p=e(9439),l=e(4687),u=e.n(l),d=e(2791),h=e(7689),x=e(8402),g=e(3382),f=e(168),m=e(8789),v=m.ZP.ul(r||(r=(0,f.Z)(["\n  margin-top: 20px;\n  display: grid;\n  width: 1200px;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 16px;\n  padding: 0px;\n  list-style: none;\n"]))),Z=m.ZP.li(i||(i=(0,f.Z)(["\n  box-shadow: 0 0 5px 3px rgba(11, 127, 171, 0.5);\n  width: 150px;\n  height: 300px;\n  margin: 0;\n"]))),w=m.ZP.img(a||(a=(0,f.Z)(["\n  width: 100%;\n"]))),y=m.ZP.p(o||(o=(0,f.Z)(["\n  color: lightgrey;\n  font-weight: 500;\n  font-size: 14px;\n  margin: 0;\n  padding: 0;\n  margin-left: 3px;\n  margin-bottom: 5px;\n"]))),b=m.ZP.p(c||(c=(0,f.Z)(["\n  color: lightgrey;\n  font-weight: 200;\n  font-size: 14px;\n  margin: 0;\n  padding: 0;\n  margin-left: 3px;\n"]))),j=e(7978),k=e(184),_=function(n){var t=n.actors;return(0,k.jsx)("section",{children:(0,k.jsx)(v,{children:t.map((function(n){var t=n.id,e=n.profile_path,r=n.name,i=n.character;return(0,k.jsxs)(Z,{children:[(0,k.jsx)(w,{src:e?"https://image.tmdb.org/t/p/w500/".concat(e):j.M,alt:r,width:"150px",height:"225px"}),(0,k.jsx)(y,{children:r}),(0,k.jsx)(b,{children:i})]},t)}))})})},P=function(){var n=(0,d.useState)([]),t=(0,p.Z)(n,2),e=t[0],r=t[1],i=(0,d.useState)(!1),a=(0,p.Z)(i,2),o=a[0],c=a[1],l=(0,d.useState)(""),f=(0,p.Z)(l,2),m=f[0],v=f[1],Z=(0,h.UO)().movieId;return(0,d.useEffect)((function(){var n=function(){var n=(0,s.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(!0),n.prev=1,n.next=4,(0,g.M1)(Z);case 4:t=n.sent,0===(e=t.cast.map((function(n){return{id:n.id,name:n.name,character:n.character,profile_path:n.profile_path}}))).length&&v("No actors list"),r(e),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),v(n.t0.message);case 13:return n.prev=13,c(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[1,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[Z]),(0,k.jsxs)(k.Fragment,{children:[0!==e.length?(0,k.jsx)(_,{actors:e}):(0,k.jsx)("div",{style:{color:"lightgrey",fontWeight:"400",fontSize:"14px",paddingLeft:"40px",paddingTop:"20px"},children:m})," ",o&&(0,k.jsx)(x.s5,{strokeColor:"rgb(11, 127, 171)",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})]})}},7978:function(n,t,e){e.d(t,{Z:function(){return N},M:function(){return D}});var r,i,a,o,c,s,p,l,u,d,h,x,g=e(7689),f=e(168),m=e(1087),v=e(8789),Z=v.ZP.section(r||(r=(0,f.Z)(["\n  /* display: flex; */\n  display: block;\n  /* padding: 20px; */\n  padding-top: 20px;\n  padding-bottom: 20px;\n"]))),w=v.ZP.div(i||(i=(0,f.Z)(["\n  display: flex;\n\n  margin-bottom: 20px;\n"]))),y=v.ZP.div(a||(a=(0,f.Z)(["\n  padding-left: 20px;\n  padding-top: 10px;\n"]))),b=v.ZP.h2(o||(o=(0,f.Z)(["\n  color: lightgrey;\n  font-weight: 500;\n  font-size: 25px;\n  margin: 0;\n  margin-bottom: 10px;\n"]))),j=v.ZP.p(c||(c=(0,f.Z)(["\n  color: lightgrey;\n  font-weight: 400;\n  font-size: 14px;\n\n  margin-bottom: 20px;\n  width: 700px;\n  line-height: 1.3;\n"]))),k=v.ZP.h3(s||(s=(0,f.Z)(["\n  color: lightgrey;\n  font-weight: 500;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),_=v.ZP.ul(p||(p=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  color: lightgrey;\n  font-weight: 400;\n  font-size: 14px;\n  padding-left: 12px;\n"]))),P=v.ZP.li(l||(l=(0,f.Z)(["\n  &:not(:last-child) {\n    /* margin-bottom: 5px; */\n  }\n"]))),z=v.ZP.ul(u||(u=(0,f.Z)(["\n  display: flex;\n  margin-top: 15px;\n"]))),S=v.ZP.li(d||(d=(0,f.Z)(["\n  margin-left: 12px;\n  &:not(:last-child) {\n    margin-right: 5px;\n  }\n"]))),M=(0,v.ZP)(m.OL)(h||(h=(0,f.Z)(["\n  padding: 5px 8px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: gray;\n  font-weight: 500;\n  &.active {\n    color: lightgray;\n    box-shadow: 0 0 5px 3px rgba(11, 127, 171, 0.7);\n  }\n"]))),U=(0,v.ZP)(m.rU)(x||(x=(0,f.Z)(["\n  cursor: pointer;\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: gray;\n  font-weight: 500;\n  box-shadow: 0 0 5px 3px rgba(11, 127, 171, 0.7);\n  margin-bottom: 25px;\n  width: 70px;\n  display: flex;\n  justify-content: center;\n\n  &:hover {\n    color: lightgray;\n  }\n"]))),C=e(184),D="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",N=function(n){var t,e,r=n.movie,i=null!==(t=null===(e=(0,g.TH)().state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/",a=r.title,o=r.release_date,c=r.overview,s=r.genres,p=r.vote_average,l=r.poster_path;return(0,C.jsxs)(Z,{children:[(0,C.jsx)(U,{to:i,children:"Go back"}),(0,C.jsxs)(w,{children:[(0,C.jsx)("img",{src:l?"https://image.tmdb.org/t/p/w500/".concat(l):D,alt:a,width:"250px",height:"375px"}),(0,C.jsxs)(y,{children:[(0,C.jsx)(b,{children:o?"".concat(a," (").concat(new Date(o).getFullYear(),")"):a}),(0,C.jsx)(j,{children:p?"User Score: ".concat(10*Math.round(p),"% "):"User Score: no score"}),(0,C.jsx)(k,{children:"Overview:"}),(0,C.jsx)(j,{children:c||"No overview"}),(0,C.jsx)(k,{children:"Genres:"}),(0,C.jsx)(_,{children:0!==s.length?s.map((function(n){return(0,C.jsx)(P,{children:n.name},n.id)})):"No genres"})]})]}),(0,C.jsx)(k,{children:"Additional information"}),(0,C.jsxs)(z,{children:[(0,C.jsx)(S,{children:(0,C.jsx)(M,{to:"cast",state:{from:i},children:"Cast"})}),(0,C.jsx)("li",{children:(0,C.jsx)(M,{to:"reviews",state:{from:i},children:"Reviews"})})]})]})}}}]);
//# sourceMappingURL=400.7d265ae4.chunk.js.map