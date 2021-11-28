var F=Object.defineProperty;var L=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var M=(t,o,s)=>o in t?F(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s,R=(t,o)=>{for(var s in o||(o={}))G.call(o,s)&&M(t,s,o[s]);if(L)for(var s of L(o))I.call(o,s)&&M(t,s,o[s]);return t};import{d as h,s as U}from"./index.49f7eb21.js";import{x as z,y as A,z as d,k as x,j as T,u as m,i as E,A as J,o as g,c as y,a as f,B as k,F as q,b as K,t as $,e as Q}from"./vendor.344a7b7f.js";function Z(t){return z()?(A(t),!0):!1}const N=typeof window!="undefined",ee=t=>typeof t=="string",P=()=>{};function j(t){var o;const s=m(t);return(o=s==null?void 0:s.$el)!=null?o:s}const w=N?window:void 0;N&&window.document;N&&window.navigator;function p(...t){let o,s,e,n;if(ee(t[0])?([s,e,n]=t,o=w):[o,s,e,n]=t,!o)return P;let r=P;const a=x(()=>m(o),u=>{r(),!!u&&(u.addEventListener(s,e,n),r=()=>{u.removeEventListener(s,e,n),r=P})},{immediate:!0,flush:"post"}),i=()=>{a(),r()};return Z(i),i}function te(t={}){const{touch:o=!0,resetOnTouchEnds:s=!1,initialValue:e={x:0,y:0},window:n=w}=t,r=d(e.x),a=d(e.y),i=d(null),u=v=>{r.value=v.pageX,a.value=v.pageY,i.value="mouse"},l=()=>{r.value=e.x,a.value=e.y},c=v=>{v.touches.length>0&&(r.value=v.touches[0].clientX,a.value=v.touches[0].clientY,i.value="touch")};return n&&(p(n,"mousemove",u,{passive:!0}),p(n,"dragover",u,{passive:!0}),o&&(p(n,"touchstart",c,{passive:!0}),p(n,"touchmove",c,{passive:!0}),s&&p(n,"touchend",l,{passive:!0}))),{x:r,y:a,sourceType:i}}function se(t,o={}){const{handleOutside:s=!0,window:e=w}=o,{x:n,y:r,sourceType:a}=te(o),i=d(t!=null?t:e==null?void 0:e.document.body),u=d(0),l=d(0),c=d(0),v=d(0),_=d(0),b=d(0),X=d(!1);let B=()=>{};return e&&(B=x([i,n,r],()=>{const C=j(i);if(!C)return;const{left:S,top:V,width:W,height:D}=C.getBoundingClientRect();c.value=S+e.pageXOffset,v.value=V+e.pageYOffset,_.value=D,b.value=W;const Y=n.value-c.value,O=r.value-v.value;X.value=Y<0||O<0||Y>b.value||O>_.value,(s||!X.value)&&(u.value=Y,l.value=O)},{immediate:!0})),{x:n,y:r,sourceType:a,elementX:u,elementY:l,elementPositionX:c,elementPositionY:v,elementHeight:_,elementWidth:b,isOutside:X,stop:B}}function ne(t={}){const{touch:o=!0,drag:s=!0,initialValue:e=!1,window:n=w}=t,r=d(e),a=d(null);if(!n)return{pressed:r,sourceType:a};const i=c=>()=>{r.value=!0,a.value=c},u=()=>{r.value=!1,a.value=null},l=T(()=>j(t.target)||n);return p(l,"mousedown",i("mouse"),{passive:!0}),p(n,"mouseleave",u,{passive:!0}),p(n,"mouseup",u,{passive:!0}),s&&(p(l,"dragstart",i("mouse"),{passive:!0}),p(n,"drop",u,{passive:!0}),p(n,"dragend",u,{passive:!0})),o&&(p(l,"touchstart",i("touch"),{passive:!0}),p(n,"touchend",u,{passive:!0}),p(n,"touchcancel",u,{passive:!0})),{pressed:r,sourceType:a}}var H;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(H||(H={}));function oe(){const t=d(null),o=d(null),{pressed:s}=ne(),e=E({x:0,y:0,normX:0,normY:0,pressed:s,inside:!1});J(()=>{t.value.addEventListener("mousemove",n);const{isOutside:r}=se(o);x(r,a=>{e.inside=!a})});function n(r,a=t.value,i=o.value){if(!a)return;var u=a.createSVGPoint();u.x=r.clientX,u.y=r.clientY;let l=u.matrixTransform(a.getScreenCTM().inverse());if(i){let c=i.getBBox();e.x=l.x<c.width?l.x<0?0:l.x:c.width,e.y=l.y<c.height?l.y<0?0:l.y:c.height,e.normY=1-e.y/c.height,e.normX=e.x/c.width}else e.x=l.x,e.y=l.y}return{svg:t,area:o,mouse:e}}function ue(){const{svg:t,area:o,mouse:s}=oe(),e=E({pair:null,num:null,pub:null,x:T(()=>s.normX),y:T(()=>1-s.normY)}),n=E({next:0,max:10,list:{}});h.get("playersNext").on(a=>n.next=a),h.get("players").map().on((a,i)=>{a!=null&&(n.list[i]=R({},a))});async function r(){e.pair=await U.pair(),e.pub=e.pair.pub,e.num=n.next%n.max;const a=h.get("players").get(e.num);x(s,u=>{a.put({x:u.normX,y:1-u.normY})}),setInterval(()=>{a.get("pulse").put(Date.now())},500);let i={pub:e.pair.pub,pulse:Date.now(),x:s.normX,y:1-s.normY};a.put(i),h.get("playersNext").put(e.num+1)}return{svg:t,area:o,players:n,my:e,join:r}}const ae={class:"flex flex-col p-4"},re={class:"text-2xl font-bold"},ie=Q("Map"),le=["transform"],ce=f("circle",{fill:"red",r:"4"},null,-1),de=[ce],pe={class:"players"},ve=["transform"],fe=f("circle",{r:"10"},null,-1),me=[fe],he={class:"p-4"},xe={class:"p-4"},_e={setup(t){const{svg:o,area:s,my:e,players:n,join:r}=ue();return(a,i)=>(g(),y("div",ae,[f("div",re,[ie,f("button",{class:"p-4 shadow-xl",onClick:i[0]||(i[0]=u=>m(r)())},"Join")]),(g(),y("svg",{class:"m-4 shadow-xl rounded-xl",ref:(u,l)=>{l.svg=u,k(o)&&(o.value=u)},version:"1.1",baseProfile:"full",viewBox:"0 0 1000 1000",xmlns:"http://www.w3.org/2000/svg","font-family":"Commissioner , sans-serif","text-anchor":"middle","dominant-baseline":"middle"},[f("rect",{ref:(u,l)=>{l.area=u,k(s)&&(s.value=u)},x:"2",y:"0",width:"1000",height:"1000",fill:"none","stroke-width":"0",opacity:"0.5"},null,512),f("g",{class:"me",transform:`translate(${m(e).x*1e3} ${m(e).y*1e3})`},de,8,le),f("g",pe,[(g(!0),y(q,null,K(m(n).list,u=>(g(),y("g",{class:"player",key:u,transform:`translate(${u.x*1e3} ${u.y*1e3})`},me,8,ve))),128))])],512)),f("div",he,$(m(e)),1),f("div",xe,$(m(n)),1)]))}};export{_e as default};
