"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[75],{3382:function(n,t,e){e.d(t,{M1:function(){return g},t2:function(){return l},tx:function(){return h},Wf:function(){return x},Df:function(){return s}});var r=e(5861),o=e(4687),a=e.n(o),c=e(1243),i="fea301b61f4120262087afffe243e7c9",u="https://api.themoviedb.org/3";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat(u,"/trending/movie/day?api_key=").concat(i));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat(u,"/movie/").concat(t,"?api_key=").concat(i));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(i));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(i));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat(u,"/search/movie?query=").concat(t,"&api_key=").concat(i));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}},3075:function(n,t,e){e.r(t),e.d(t,{default:function(){return D}});var r,o,a,c,i,u,s=e(5861),p=e(9439),l=e(4687),f=e.n(l),h=e(2791),d=e(1087),g=e(9014),v=e(168),x=e(8789),m=x.ZP.form(r||(r=(0,v.Z)(["\n  display: flex;\n\n  margin-top: 25px;\n  gap: 20px;\n"]))),y=x.ZP.input(o||(o=(0,v.Z)(["\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 1.15;\n  margin: 0;\n\n  line-height: 1.3;\n  color: lightgray;\n  /* background-color: rgb(10 130 170 / 30%); */\n  background-color: gray;\n  width: 300px;\n  height: 30px;\n  margin-right: 10px;\n\n  border-radius: 4px;\n  padding: 4px;\n  /* border-color: lightgray; */\n  border-color: gray;\n  outline: 1px solid lightgray;\n"]))),b=x.ZP.button(a||(a=(0,v.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  background-color: #444;\n  font-size: 18px;\n  font-weight: 500;\n  border: none;\n  color: gray;\n  font-weight: 500;\n  box-shadow: 0 0 5px 3px rgba(11, 127, 171, 0.7);\n  cursor: pointer;\n\n  &:hover {\n    color: lightgray;\n  }\n"]))),Z=e(184),w=function(n){var t=n.handleSubmit,e=n.value,r=n.setInputValue;return(0,Z.jsxs)(m,{onSubmit:t,children:[(0,Z.jsx)(y,{type:"text",name:"query",autoComplete:"off",placeholder:"Search movie",value:e,onChange:function(n){return r(n.target.value)}}),(0,Z.jsx)(b,{type:"submit",children:"Search"})]})},k=e(7689),j=x.ZP.ul(c||(c=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-top: 20px;\n  padding-left: 12px;\n"]))),_=x.ZP.li(i||(i=(0,v.Z)(["\n  color: lightgrey;\n  /* \n  &:not(:last-child) {\n    margin-bottom: 5px;\n  } */\n"]))),S=(0,x.ZP)(d.rU)(u||(u=(0,v.Z)(["\n  color: inherit;\n  text-decoration: none;\n  &:hover {\n    color: gray;\n    font-weight: 500;\n  }\n"]))),P=function(n){var t=n.movies,e=(0,k.TH)();return(0,Z.jsx)(j,{children:t.map((function(n){return(0,Z.jsx)(_,{children:(0,Z.jsx)(S,{to:"".concat(n.id),state:{from:e},children:n.title})},n.id)}))})},q=e(3382),C=e(8402),D=function(){var n,t=(0,d.lr)(),e=(0,p.Z)(t,2),r=e[0],o=e[1],a=(0,h.useState)([]),c=(0,p.Z)(a,2),i=c[0],u=c[1],l=(0,h.useState)(""),v=(0,p.Z)(l,2),x=v[0],m=v[1],y=null!==(n=r.get("query"))&&void 0!==n?n:"",b=(0,h.useState)(!1),k=(0,p.Z)(b,2),j=k[0],_=k[1];(0,h.useEffect)((function(){var n=function(){var n=(0,s.Z)(f().mark((function n(){var t,e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==y){n.next=2;break}return n.abrupt("return");case 2:return _(!0),n.prev=3,n.next=6,(0,q.Wf)(y);case 6:t=n.sent,0===(e=t.results).length&&g.ZP.error("Sorry, the movies you requested: ".concat(y," not found.")),u(e),m(""),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(3),console.log(n.t0);case 16:return n.prev=16,_(!1),n.finish(16);case 19:case"end":return n.stop()}}),n,null,[[3,13,16,19]])})));return function(){return n.apply(this,arguments)}}();n()}),[y]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)("section",{children:[(0,Z.jsxs)("div",{children:[(0,Z.jsx)(w,{handleSubmit:function(n){if(n.preventDefault(),""!==x.trim()){var t=n.target.elements.query.value.toLowerCase();o(""!==x?{query:t}:{})}else g.ZP.error("Fill in the search field")},value:x,setInputValue:m}),(0,Z.jsx)(P,{movies:i})]}),j&&(0,Z.jsx)(C.s5,{strokeColor:"rgb(11, 127, 171)",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})]}),(0,Z.jsx)(g.x7,{position:"top-right",reverseOrder:!1,toastOptions:{style:{background:"rgb(11, 127, 171)",color:"#fff"}}})]})}}}]);
//# sourceMappingURL=75.0490b974.chunk.js.map