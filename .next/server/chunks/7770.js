exports.id=7770,exports.ids=[7770],exports.modules={4011:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Image:()=>x});var r=s(80),o=s(9885),l=s.n(o),a=s(2451),i=s.n(a),c=s(7705),d=s.n(c),n=s(694),p=s.n(n);let{breakpoints:u}=d(),x=e=>{let t,s;let{imgClassName:o,onClick:a,onLoad:c,resource:d,priority:n,fill:x,src:m,alt:h}=e,[_,f]=l().useState(!0),g=h,j=m||"";if(!j&&d&&"string"!=typeof d){let{width:e,height:r,filename:o,alt:l}=d;t=e,s=r,g=l,j=`http://localhost:3000/media/${o}`}let v=Object.entries(u).map(([,e])=>`(max-width: ${e}px) ${e}px`).join(", ");return r.jsx(i(),{className:[_&&p().placeholder,p().image,o].filter(Boolean).join(" "),src:j,alt:g||"",onClick:a,onLoad:()=>{f(!1),"function"==typeof c&&c()},fill:x,width:x?void 0:t,height:x?void 0:s,sizes:v,priority:n})}},966:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Video:()=>i});var r=s(80),o=s(9885),l=s(6032),a=s.n(l);let i=e=>{let{videoClassName:t,resource:s,onClick:l}=e,i=(0,o.useRef)(null);if((0,o.useEffect)(()=>{let{current:e}=i;e&&e.addEventListener("suspend",()=>{})},[]),s&&"string"!=typeof s){let{filename:e}=s;return r.jsx("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,controls:!1,className:[a().video,t].filter(Boolean).join(" "),onClick:l,ref:i,children:r.jsx("source",{src:`http://localhost:3000/media/${e}`})})}return null}},7705:e=>{"use strict";e.exports={breakpoints:{s:768,m:1024,l:1440},colors:{base0:"rgb(255, 255, 255)",base100:"rgb(235, 235, 235)",base500:"rgb(128, 128, 128)",base850:"rgb(34, 34, 34)",base1000:"rgb(0, 0, 0)",error500:"rgb(255, 111, 118)"}}},8545:e=>{e.exports={mediaBlock:"MediaBlock_mediaBlock__kLxM0",caption:"MediaBlock_caption__vE6Rw"},e.exports.__checksum="9103938fdf7c"},694:e=>{e.exports={"placeholder-color-light":"Image_placeholder-color-light__lcTS4",placeholder:"Image_placeholder__kc6oy"},e.exports.__checksum="461ab99589dc"},6032:e=>{e.exports={video:"Video_video__skdZH",cover:"Video_cover__hLu9Z"},e.exports.__checksum="25491b85a2d0"},3466:(e,t,s)=>{"use strict";s.d(t,{P:()=>d});var r=s(8144);s(3830);var o=s(3205),l=s(6355),a=s(702),i=s(8545),c=s.n(i);let d=e=>{let t;let{media:s,position:i="default",staticImage:d}=e;return s&&"object"==typeof s&&(t=s.caption),(0,r.jsxs)("div",{className:c().mediaBlock,children:["fullscreen"===i&&r.jsx("div",{className:c().fullscreen,children:r.jsx(l.p,{resource:s,src:d})}),"default"===i&&r.jsx(o.T,{children:r.jsx(l.p,{resource:s,src:d})}),t&&r.jsx(o.T,{className:c().caption,children:r.jsx(a.Z,{content:t})})]})}},6355:(e,t,s)=>{"use strict";s.d(t,{p:()=>m});var r=s(8144),o=s(3830),l=s(7536);let a=(0,l.createProxy)(String.raw`C:\Users\masdu\Desktop\newproject\src\app\_components\Media\Image\index.tsx`),{__esModule:i,$$typeof:c}=a;a.default;let d=a.Image,n=(0,l.createProxy)(String.raw`C:\Users\masdu\Desktop\newproject\src\app\_components\Media\Video\index.tsx`),{__esModule:p,$$typeof:u}=n;n.default;let x=n.Video,m=e=>{let{className:t,resource:s,htmlElement:l="div"}=e,a="string"!=typeof s&&s?.mimeType?.includes("video"),i=l||o.Fragment;return r.jsx(i,{...null!==l?{className:t}:{},children:a?r.jsx(x,{...e}):r.jsx(d,{...e})})}}};