exports.id=571,exports.ids=[571],exports.modules={3264:(e,r,s)=>{"use strict";s.r(r),s.d(r,{RenderParamsComponent:()=>d});var a=s(80),t=s(9885),n=s(7114),o=s(2655),l=s(6822),c=s.n(l);let d=({params:e=["error","warning","success","message"],className:r,onParams:s})=>{let l=(0,n.useSearchParams)(),d=e.map(e=>l?.get(e));return((0,t.useEffect)(()=>{d.length&&s&&s(d)},[d,s]),d.length)?a.jsx("div",{className:r,children:d.map((r,s)=>r?a.jsx(o.v,{className:c().renderParams,[e[s]]:r},r):null)}):null}},6822:e=>{e.exports={renderParams:"RenderParams_renderParams__vMrJE"},e.exports.__checksum="de28888c7fde"},7979:(e,r,s)=>{"use strict";s.d(r,{n:()=>m});var a=s(8144),t=s(3830),n=s(7536);let o=(0,n.createProxy)(String.raw`C:\Users\masdu\Desktop\newproject\src\app\_components\RenderParams\Component.tsx`),{__esModule:l,$$typeof:c}=o;o.default;let d=o.RenderParamsComponent,m=e=>a.jsx(t.Suspense,{fallback:null,children:a.jsx(d,{...e})})},1978:(e,r,s)=>{"use strict";s.d(r,{S:()=>n});var a=s(9859),t=s(6465);let n=async e=>{let{nullUserRedirect:r,validUserRedirect:s}=e||{},n=(0,a.cookies)(),o=n.get("payload-token")?.value,l=await fetch("http://localhost:3000/api/users/me",{headers:{Authorization:`JWT ${o}`}}),{user:c}=await l.json();return s&&l.ok&&c&&(0,t.redirect)(s),!r||l.ok&&c||(0,t.redirect)(r),{user:c,token:o}}}};