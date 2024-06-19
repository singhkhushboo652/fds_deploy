"use strict";(self.webpackChunk_coreui_coreui_pro_react_admin_template_cra=self.webpackChunk_coreui_coreui_pro_react_admin_template_cra||[]).push([[8920],{78920:(e,s,t)=>{t.r(s),t.d(s,{default:()=>C});var n=t(65043),a=t(50280),o=t(63821),r=t(67603),i=t(4522),c=t(25943),l=t(5664),d=t(65173),h=t.n(d),u=t(65689),p=(0,n.createContext)({}),m=(0,n.forwardRef)((function(e,s){var t=e.children,a=e.activeItemKey,o=e.alwaysOpen,r=void 0!==o&&o,i=e.className,c=e.flush,d=(0,l.Tt)(e,["children","activeItemKey","alwaysOpen","className","flush"]),h=(0,n.useState)(a),m=h[0],f=h[1];return n.createElement("div",(0,l.Cl)({className:(0,u.A)("accordion",{"accordion-flush":c},i)},d,{ref:s}),n.createElement(p.Provider,{value:{_activeItemKey:m,alwaysOpen:r,setActiveKey:f}},t))}));m.propTypes={alwaysOpen:h().bool,activeItemKey:h().oneOfType([h().number,h().string]),children:h().node,className:h().string,flush:h().bool},m.displayName="CAccordion";var f=(0,n.createContext)({}),y=(0,n.forwardRef)((function(e,s){var t=e.children,a=e.className,o=e.itemKey,r=(0,l.Tt)(e,["children","className","itemKey"]),i=(0,n.useRef)(null!==o&&void 0!==o?o:Math.random().toString(36).slice(2,11)),c=(0,n.useContext)(p),d=c._activeItemKey,h=c.alwaysOpen,m=c.setActiveKey,y=(0,n.useState)(Boolean(d===i.current)),g=y[0],v=y[1];return(0,n.useEffect)((function(){!h&&g&&m(i.current)}),[g]),(0,n.useEffect)((function(){v(Boolean(d===i.current))}),[d]),n.createElement("div",(0,l.Cl)({className:(0,u.A)("accordion-item",a)},r,{ref:s}),n.createElement(f.Provider,{value:{setVisible:v,visible:g}},t))}));y.propTypes={children:h().node,className:h().string,itemKey:h().oneOfType([h().number,h().string])},y.displayName="CAccordionItem";var g=(0,n.forwardRef)((function(e,s){var t=e.children,a=e.className,o=(0,l.Tt)(e,["children","className"]),r=(0,n.useContext)(f),i=r.visible,c=r.setVisible;return n.createElement("button",(0,l.Cl)({type:"button",className:(0,u.A)("accordion-button",{collapsed:!i},a),"aria-expanded":!i,onClick:function(){return c(!i)}},o,{ref:s}),t)}));g.propTypes={children:h().node,className:h().string},g.displayName="CAccordionButton";var v=(0,n.forwardRef)((function(e,s){var t=e.children,a=e.className,o=(0,l.Tt)(e,["children","className"]);return n.createElement("div",(0,l.Cl)({className:(0,u.A)("accordion-header",a)},o,{ref:s}),n.createElement(g,null,t))}));v.propTypes={children:h().node,className:h().string},v.displayName="CAccordionHeader";var x=t(14457),b=(0,n.forwardRef)((function(e,s){var t=e.children,a=e.className,o=(0,l.Tt)(e,["children","className"]),r=(0,n.useContext)(f).visible;return n.createElement(x.x,{className:"accordion-collapse",visible:r},n.createElement("div",(0,l.Cl)({className:(0,u.A)("accordion-body",a)},o,{ref:s}),t))}));b.propTypes={children:h().node,className:h().string},b.displayName="CAccordionBody";var w=t(92883),j=t(70579);const C=()=>(0,j.jsx)(a.s,{children:(0,j.jsxs)(o.U,{xs:12,children:[(0,j.jsxs)(r.E,{className:"mb-4",children:[(0,j.jsx)(i.V,{children:(0,j.jsx)("strong",{children:"React Accordion"})}),(0,j.jsxs)(c.W,{children:[(0,j.jsx)("p",{className:"text-body-secondary small",children:"Click the accordions below to expand/collapse the accordion content."}),(0,j.jsx)(w.Eb,{href:"components/accordion",children:(0,j.jsxs)(m,{activeItemKey:2,children:[(0,j.jsxs)(y,{itemKey:1,children:[(0,j.jsx)(v,{children:"Accordion Item #1"}),(0,j.jsxs)(b,{children:[(0,j.jsx)("strong",{children:"This is the first item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",(0,j.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),(0,j.jsxs)(y,{itemKey:2,children:[(0,j.jsx)(v,{children:"Accordion Item #2"}),(0,j.jsxs)(b,{children:[(0,j.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",(0,j.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),(0,j.jsxs)(y,{itemKey:3,children:[(0,j.jsx)(v,{children:"Accordion Item #3"}),(0,j.jsxs)(b,{children:[(0,j.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",(0,j.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]})]})})]})]}),(0,j.jsxs)(r.E,{className:"mb-4",children:[(0,j.jsxs)(i.V,{children:[(0,j.jsx)("strong",{children:"React Accordion"})," ",(0,j.jsx)("small",{children:"Flush"})]}),(0,j.jsxs)(c.W,{children:[(0,j.jsxs)("p",{className:"text-body-secondary small",children:["Add ",(0,j.jsx)("code",{children:"flush"})," to remove the default ",(0,j.jsx)("code",{children:"background-color"}),", some borders, and some rounded corners to render accordions edge-to-edge with their parent container."]}),(0,j.jsx)(w.Eb,{href:"components/accordion#flush",children:(0,j.jsxs)(m,{flush:!0,children:[(0,j.jsxs)(y,{itemKey:1,children:[(0,j.jsx)(v,{children:"Accordion Item #1"}),(0,j.jsxs)(b,{children:[(0,j.jsx)("strong",{children:"This is the first item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",(0,j.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),(0,j.jsxs)(y,{itemKey:2,children:[(0,j.jsx)(v,{children:"Accordion Item #2"}),(0,j.jsxs)(b,{children:[(0,j.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",(0,j.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),(0,j.jsxs)(y,{itemKey:3,children:[(0,j.jsx)(v,{children:"Accordion Item #3"}),(0,j.jsxs)(b,{children:[(0,j.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",(0,j.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]})]})})]})]}),(0,j.jsxs)(r.E,{className:"mb-4",children:[(0,j.jsxs)(i.V,{children:[(0,j.jsx)("strong",{children:"React Accordion"})," ",(0,j.jsx)("small",{children:"Always open"})]}),(0,j.jsxs)(c.W,{children:[(0,j.jsxs)("p",{className:"text-body-secondary small",children:["Add ",(0,j.jsx)("code",{children:"alwaysOpen"})," property to make accordion items stay open when another item is opened."]}),(0,j.jsx)(w.Eb,{href:"components/accordion#flush",children:(0,j.jsxs)(m,{alwaysOpen:!0,children:[(0,j.jsxs)(y,{itemKey:1,children:[(0,j.jsx)(v,{children:"Accordion Item #1"}),(0,j.jsxs)(b,{children:[(0,j.jsx)("strong",{children:"This is the first item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",(0,j.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),(0,j.jsxs)(y,{itemKey:2,children:[(0,j.jsx)(v,{children:"Accordion Item #2"}),(0,j.jsxs)(b,{children:[(0,j.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",(0,j.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),(0,j.jsxs)(y,{itemKey:3,children:[(0,j.jsx)(v,{children:"Accordion Item #3"}),(0,j.jsxs)(b,{children:[(0,j.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",(0,j.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]})]})})]})]})]})})},67603:(e,s,t)=>{t.d(s,{E:()=>l});var n=t(5664),a=t(65043),o=t(65173),r=t.n(o),i=t(65689),c=t(53766),l=(0,a.forwardRef)((function(e,s){var t,o=e.children,r=e.className,c=e.color,l=e.textBgColor,d=e.textColor,h=(0,n.Tt)(e,["children","className","color","textBgColor","textColor"]);return a.createElement("div",(0,n.Cl)({className:(0,i.A)("card",(t={},t["bg-".concat(c)]=c,t["text-".concat(d)]=d,t["text-bg-".concat(l)]=l,t),r)},h,{ref:s}),o)}));l.propTypes={children:r().node,className:r().string,color:r().oneOfType([c.TX,c.db]),textBgColor:c.TX,textColor:r().string},l.displayName="CCard"},25943:(e,s,t)=>{t.d(s,{W:()=>c});var n=t(5664),a=t(65043),o=t(65173),r=t.n(o),i=t(65689),c=(0,a.forwardRef)((function(e,s){var t=e.children,o=e.className,r=(0,n.Tt)(e,["children","className"]);return a.createElement("div",(0,n.Cl)({className:(0,i.A)("card-body",o)},r,{ref:s}),t)}));c.propTypes={children:r().node,className:r().string},c.displayName="CCardBody"},4522:(e,s,t)=>{t.d(s,{V:()=>c});var n=t(5664),a=t(65043),o=t(65173),r=t.n(o),i=t(65689),c=(0,a.forwardRef)((function(e,s){var t=e.children,o=e.as,r=void 0===o?"div":o,c=e.className,l=(0,n.Tt)(e,["children","as","className"]);return a.createElement(r,(0,n.Cl)({className:(0,i.A)("card-header",c)},l,{ref:s}),t)}));c.propTypes={as:r().elementType,children:r().node,className:r().string},c.displayName="CCardHeader"},14457:(e,s,t)=>{t.d(s,{x:()=>x});var n=t(5664),a=t(65043),o=t(65173),r=t.n(o),i=t(65689),c=t(95188);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l.apply(this,arguments)}var d=t(13400),h=t(37631);function u(e,s){return e.replace(new RegExp("(^|\\s)"+s+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var p=t(9595),m=t(58964),f=function(e,s){return e&&s&&s.split(" ").forEach((function(s){return n=s,void((t=e).classList?t.classList.add(n):function(e,s){return e.classList?!!s&&e.classList.contains(s):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+s+" ")}(t,n)||("string"===typeof t.className?t.className=t.className+" "+n:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+n)));var t,n}))},y=function(e,s){return e&&s&&s.split(" ").forEach((function(s){return n=s,void((t=e).classList?t.classList.remove(n):"string"===typeof t.className?t.className=u(t.className,n):t.setAttribute("class",u(t.className&&t.className.baseVal||"",n)));var t,n}))},g=function(e){function s(){for(var s,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(s=e.call.apply(e,[this].concat(n))||this).appliedClasses={appear:{},enter:{},exit:{}},s.onEnter=function(e,t){var n=s.resolveArguments(e,t),a=n[0],o=n[1];s.removeClasses(a,"exit"),s.addClass(a,o?"appear":"enter","base"),s.props.onEnter&&s.props.onEnter(e,t)},s.onEntering=function(e,t){var n=s.resolveArguments(e,t),a=n[0],o=n[1]?"appear":"enter";s.addClass(a,o,"active"),s.props.onEntering&&s.props.onEntering(e,t)},s.onEntered=function(e,t){var n=s.resolveArguments(e,t),a=n[0],o=n[1]?"appear":"enter";s.removeClasses(a,o),s.addClass(a,o,"done"),s.props.onEntered&&s.props.onEntered(e,t)},s.onExit=function(e){var t=s.resolveArguments(e)[0];s.removeClasses(t,"appear"),s.removeClasses(t,"enter"),s.addClass(t,"exit","base"),s.props.onExit&&s.props.onExit(e)},s.onExiting=function(e){var t=s.resolveArguments(e)[0];s.addClass(t,"exit","active"),s.props.onExiting&&s.props.onExiting(e)},s.onExited=function(e){var t=s.resolveArguments(e)[0];s.removeClasses(t,"exit"),s.addClass(t,"exit","done"),s.props.onExited&&s.props.onExited(e)},s.resolveArguments=function(e,t){return s.props.nodeRef?[s.props.nodeRef.current,e]:[e,t]},s.getClassNames=function(e){var t=s.props.classNames,n="string"===typeof t,a=n?""+(n&&t?t+"-":"")+e:t[e];return{baseClassName:a,activeClassName:n?a+"-active":t[e+"Active"],doneClassName:n?a+"-done":t[e+"Done"]}},s}(0,h.A)(s,e);var t=s.prototype;return t.addClass=function(e,s,t){var n=this.getClassNames(s)[t+"ClassName"],a=this.getClassNames("enter").doneClassName;"appear"===s&&"done"===t&&a&&(n+=" "+a),"active"===t&&e&&(0,m.F)(e),n&&(this.appliedClasses[s][t]=n,f(e,n))},t.removeClasses=function(e,s){var t=this.appliedClasses[s],n=t.base,a=t.active,o=t.done;this.appliedClasses[s]={},n&&y(e,n),a&&y(e,a),o&&y(e,o)},t.render=function(){var e=this.props;e.classNames;var s=(0,d.A)(e,["classNames"]);return a.createElement(p.Ay,l({},s,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},s}(a.Component);g.defaultProps={classNames:""},g.propTypes={};var v=g,x=(0,a.forwardRef)((function(e,s){var t=e.children,o=e.className,r=e.horizontal,l=e.onHide,d=e.onShow,h=e.visible,u=(0,n.Tt)(e,["children","className","horizontal","onHide","onShow","visible"]),p=(0,a.useRef)(null),m=(0,c.E2)(s,p),f=(0,a.useState)(),y=f[0],g=f[1],x=(0,a.useState)(),b=x[0],w=x[1];return a.createElement(v,{in:h,nodeRef:p,onEntering:function(){d&&d(),r?p.current&&w(p.current.scrollWidth):p.current&&g(p.current.scrollHeight)},onEntered:function(){r?w(0):g(0)},onExit:function(){r?p.current&&w(p.current.scrollWidth):p.current&&g(p.current.scrollHeight)},onExiting:function(){l&&l(),r?w(0):g(0)},onExited:function(){r?w(0):g(0)},timeout:350},(function(e){var s=0===y?null:{height:y},c=0===b?null:{width:b};return a.createElement("div",(0,n.Cl)({className:(0,i.A)(o,{"collapse-horizontal":r,collapsing:"entering"===e||"exiting"===e,"collapse show":"entered"===e,collapse:"exited"===e}),style:(0,n.Cl)((0,n.Cl)({},s),c)},u,{ref:m}),t)}))}));x.propTypes={children:r().node,className:r().string,horizontal:r().bool,onHide:r().func,onShow:r().func,visible:r().bool},x.displayName="CCollapse"},63821:(e,s,t)=>{t.d(s,{U:()=>l});var n=t(5664),a=t(65043),o=t(65173),r=t.n(o),i=t(65689),c=["xxl","xl","lg","md","sm","xs"],l=(0,a.forwardRef)((function(e,s){var t=e.children,o=e.className,r=(0,n.Tt)(e,["children","className"]),l=[];return c.forEach((function(e){var s=r[e];delete r[e];var t="xs"===e?"":"-".concat(e);"number"!==typeof s&&"string"!==typeof s||l.push("col".concat(t,"-").concat(s)),"boolean"===typeof s&&l.push("col".concat(t)),s&&"object"===typeof s&&("number"!==typeof s.span&&"string"!==typeof s.span||l.push("col".concat(t,"-").concat(s.span)),"boolean"===typeof s.span&&l.push("col".concat(t)),"number"!==typeof s.order&&"string"!==typeof s.order||l.push("order".concat(t,"-").concat(s.order)),"number"===typeof s.offset&&l.push("offset".concat(t,"-").concat(s.offset)))})),a.createElement("div",(0,n.Cl)({className:(0,i.A)(l.length>0?l:"col",o)},r,{ref:s}),t)})),d=r().oneOfType([r().bool,r().number,r().string,r().oneOf(["auto"])]),h=r().oneOfType([d,r().shape({span:d,offset:r().oneOfType([r().number,r().string]),order:r().oneOfType([r().oneOf(["first","last"]),r().number,r().string])})]);l.propTypes={children:r().node,className:r().string,xs:h,sm:h,md:h,lg:h,xl:h,xxl:h},l.displayName="CCol"},50280:(e,s,t)=>{t.d(s,{s:()=>l});var n=t(5664),a=t(65043),o=t(65173),r=t.n(o),i=t(65689),c=["xxl","xl","lg","md","sm","xs"],l=(0,a.forwardRef)((function(e,s){var t=e.children,o=e.className,r=(0,n.Tt)(e,["children","className"]),l=[];return c.forEach((function(e){var s=r[e];delete r[e];var t="xs"===e?"":"-".concat(e);"object"===typeof s&&(s.cols&&l.push("row-cols".concat(t,"-").concat(s.cols)),"number"===typeof s.gutter&&l.push("g".concat(t,"-").concat(s.gutter)),"number"===typeof s.gutterX&&l.push("gx".concat(t,"-").concat(s.gutterX)),"number"===typeof s.gutterY&&l.push("gy".concat(t,"-").concat(s.gutterY)))})),a.createElement("div",{className:(0,i.A)("row",l,o),ref:s},t)})),d=r().shape({cols:r().oneOfType([r().oneOf(["auto"]),r().number,r().string]),gutter:r().oneOfType([r().string,r().number]),gutterX:r().oneOfType([r().string,r().number]),gutterY:r().oneOfType([r().string,r().number])});l.propTypes={children:r().node,className:r().string,xs:d,sm:d,md:d,lg:d,xl:d,xxl:d},l.displayName="CRow"}}]);
//# sourceMappingURL=8920.a0bc3f45.chunk.js.map