"use strict";(self.webpackChunk_coreui_coreui_pro_react_admin_template_cra=self.webpackChunk_coreui_coreui_pro_react_admin_template_cra||[]).push([[4229],{54229:(e,a,t)=>{t.r(a),t.d(a,{default:()=>y});var n=t(65043),l=t(73216),r=t(64716),o=t(56267),s=t(50280),c=t(63821),d=t(67603),i=t(4522),m=t(25943),p=t(44261),f=t(9447),u=t(24685),b=t(52171),g=(t(6145),t(77154)),v=t(63401),h=t(70579);const y=()=>{var e;const a=null===(e=(0,l.zy)().state)||void 0===e?void 0:e.brandId,[t,y]=((0,l.Zp)(),(0,n.useState)("")),[N,x]=(0,n.useState)(),[T,C]=(0,n.useState)(),[k,E]=(0,n.useState)({}),[O,j]=(0,n.useState)(!1);(0,n.useEffect)((()=>{g.A.get("brand/"+a,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((e=>{if(e.data){let a=e.data.data;y(a.name),C("http://node93696-pimgmt.j.scaleforce.net:11064/uploads/"+a.logo)}}))}),[]);return(0,h.jsx)("div",{className:"bg-body-tertiary min-vh-75 d-flex flex-row align-items-center",children:(0,h.jsx)(r.T,{children:(0,h.jsxs)(o.q,{className:"row g-3",onSubmit:e=>(e=>{e.preventDefault(),j(!0);const n=new FormData;"undefined"!=typeof N&&n.append("logo",N),n.append("name",t),g.A.patch("/brand/update/"+a,n,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")),"Contetnt-Type":"multipart/form-data"}}).then((e=>{v.oR.success(e.data.message),j(!1)})).catch((e=>{j(!1),void 0!=e.response.data.errors&&E(e.response.data.errors)}))})(e),children:[(0,h.jsx)(s.s,{className:"justify-content-center",children:(0,h.jsx)(c.U,{md:9,lg:7,xl:12,children:(0,h.jsxs)(d.E,{className:"mb-4",children:[(0,h.jsx)(i.V,{children:"Brand Information"}),(0,h.jsxs)(m.W,{className:"p-4",children:[(0,h.jsxs)(s.s,{className:"mb-3",children:[(0,h.jsx)(p.A,{htmlFor:"companyName",className:"col-sm-3 col-form-label",children:"Name"}),(0,h.jsx)("div",{className:"col-sm-8",children:(0,h.jsx)(f.O,{type:"text",id:"name",onChange:e=>{y(e.target.value)},value:t,name:"name"})})]}),(0,h.jsxs)(s.s,{className:"mb-3",children:[(0,h.jsx)(p.A,{htmlFor:"Logo",className:"col-sm-3 col-form-label",children:"Logo"}),(0,h.jsxs)("div",{className:"col-sm-8",children:[(0,h.jsx)(f.O,{type:"file",id:"logo",onChange:e=>{x(e.target.files[0])},name:"logo"}),(0,h.jsx)(u.t,{rounded:!0,thumbnail:!0,src:T,width:200,height:200})]})]})]})]})})}),(0,h.jsx)(s.s,{className:"p-4",children:(0,h.jsx)(c.U,{xs:12,children:(0,h.jsx)(b.Q,{color:"primary",type:"submit",disabled:O,className:"float-end",children:"Update Brand"})})})]})})})}},67603:(e,a,t)=>{t.d(a,{E:()=>d});var n=t(5664),l=t(65043),r=t(65173),o=t.n(r),s=t(65689),c=t(53766),d=(0,l.forwardRef)((function(e,a){var t,r=e.children,o=e.className,c=e.color,d=e.textBgColor,i=e.textColor,m=(0,n.Tt)(e,["children","className","color","textBgColor","textColor"]);return l.createElement("div",(0,n.Cl)({className:(0,s.A)("card",(t={},t["bg-".concat(c)]=c,t["text-".concat(i)]=i,t["text-bg-".concat(d)]=d,t),o)},m,{ref:a}),r)}));d.propTypes={children:o().node,className:o().string,color:o().oneOfType([c.TX,c.db]),textBgColor:c.TX,textColor:o().string},d.displayName="CCard"},25943:(e,a,t)=>{t.d(a,{W:()=>c});var n=t(5664),l=t(65043),r=t(65173),o=t.n(r),s=t(65689),c=(0,l.forwardRef)((function(e,a){var t=e.children,r=e.className,o=(0,n.Tt)(e,["children","className"]);return l.createElement("div",(0,n.Cl)({className:(0,s.A)("card-body",r)},o,{ref:a}),t)}));c.propTypes={children:o().node,className:o().string},c.displayName="CCardBody"},4522:(e,a,t)=>{t.d(a,{V:()=>c});var n=t(5664),l=t(65043),r=t(65173),o=t.n(r),s=t(65689),c=(0,l.forwardRef)((function(e,a){var t=e.children,r=e.as,o=void 0===r?"div":r,c=e.className,d=(0,n.Tt)(e,["children","as","className"]);return l.createElement(o,(0,n.Cl)({className:(0,s.A)("card-header",c)},d,{ref:a}),t)}));c.propTypes={as:o().elementType,children:o().node,className:o().string},c.displayName="CCardHeader"},56267:(e,a,t)=>{t.d(a,{q:()=>c});var n=t(5664),l=t(65043),r=t(65173),o=t.n(r),s=t(65689),c=(0,l.forwardRef)((function(e,a){var t=e.children,r=e.className,o=e.validated,c=(0,n.Tt)(e,["children","className","validated"]);return l.createElement("form",(0,n.Cl)({className:(0,s.A)({"was-validated":o},r)||void 0},c,{ref:a}),t)}));c.propTypes={children:o().node,className:o().string,validated:o().bool},c.displayName="CForm"},48377:(e,a,t)=>{t.d(a,{_:()=>c});var n=t(5664),l=t(65043),r=t(65173),o=t.n(r),s=t(43664),c=function(e){var a=e.describedby,t=e.feedback,r=e.feedbackInvalid,o=e.feedbackValid,c=e.invalid,d=e.tooltipFeedback,i=e.valid;return l.createElement(l.Fragment,null,t&&(i||c)&&l.createElement(s.T,(0,n.Cl)({},c&&{id:a},{invalid:c,tooltip:d,valid:i}),t),r&&l.createElement(s.T,{id:a,invalid:!0,tooltip:d},r),o&&l.createElement(s.T,{valid:!0,tooltip:d},o))};c.propTypes={describedby:o().string,feedback:o().oneOfType([o().node,o().string]),feedbackValid:o().oneOfType([o().node,o().string]),feedbackInvalid:o().oneOfType([o().node,o().string]),invalid:o().bool,tooltipFeedback:o().bool,valid:o().bool},c.displayName="CFormControlValidation"},95755:(e,a,t)=>{t.d(a,{O:()=>p});var n=t(5664),l=t(65043),r=t(65173),o=t.n(r),s=t(48377),c=t(68109),d=t(44261),i=t(65689),m=(0,l.forwardRef)((function(e,a){var t=e.children,r=e.as,o=void 0===r?"div":r,s=e.className,c=(0,n.Tt)(e,["children","as","className"]);return l.createElement(o,(0,n.Cl)({className:(0,i.A)("form-text",s)},c,{ref:a}),t)}));m.propTypes={as:o().elementType,children:o().node,className:o().string},m.displayName="CFormText";var p=function(e){var a=e.children,t=e.describedby,n=e.feedback,r=e.feedbackInvalid,o=e.feedbackValid,i=e.floatingClassName,p=e.floatingLabel,f=e.id,u=e.invalid,b=e.label,g=e.text,v=e.tooltipFeedback,h=e.valid,y=function(){return l.createElement(s._,{describedby:t,feedback:n,feedbackInvalid:r,feedbackValid:o,floatingLabel:p,invalid:u,tooltipFeedback:v,valid:h})};return p?l.createElement(c.S,{className:i},a,l.createElement(d.A,{htmlFor:f},b||p),g&&l.createElement(m,{id:t},g),l.createElement(y,null)):l.createElement(l.Fragment,null,b&&l.createElement(d.A,{htmlFor:f},b),a,g&&l.createElement(m,{id:t},g),l.createElement(y,null))};p.propTypes=(0,n.Cl)({children:o().node,floatingClassName:o().string,floatingLabel:o().oneOfType([o().node,o().string]),label:o().oneOfType([o().node,o().string]),text:o().oneOfType([o().node,o().string])},s._.propTypes),p.displayName="CFormControlWrapper"},43664:(e,a,t)=>{t.d(a,{T:()=>c});var n=t(5664),l=t(65043),r=t(65173),o=t.n(r),s=t(65689),c=(0,l.forwardRef)((function(e,a){var t,r=e.children,o=e.as,c=void 0===o?"div":o,d=e.className,i=e.invalid,m=e.tooltip,p=e.valid,f=(0,n.Tt)(e,["children","as","className","invalid","tooltip","valid"]);return l.createElement(c,(0,n.Cl)({className:(0,s.A)((t={},t["invalid-".concat(m?"tooltip":"feedback")]=i,t["valid-".concat(m?"tooltip":"feedback")]=p,t),d)},f,{ref:a}),r)}));c.propTypes={as:o().elementType,children:o().node,className:o().string,invalid:o().bool,tooltip:o().bool,valid:o().bool},c.displayName="CFormFeedback"},68109:(e,a,t)=>{t.d(a,{S:()=>c});var n=t(5664),l=t(65043),r=t(65173),o=t.n(r),s=t(65689),c=(0,l.forwardRef)((function(e,a){var t=e.children,r=e.className,o=(0,n.Tt)(e,["children","className"]);return l.createElement("div",(0,n.Cl)({className:(0,s.A)("form-floating",r)},o,{ref:a}),t)}));c.propTypes={children:o().node,className:o().string},c.displayName="CFormFloating"},9447:(e,a,t)=>{t.d(a,{O:()=>d});var n=t(5664),l=t(65043),r=t(65173),o=t.n(r),s=t(65689),c=t(95755),d=(0,l.forwardRef)((function(e,a){var t,r=e.children,o=e.className,d=e.delay,i=void 0!==d&&d,m=e.feedback,p=e.feedbackInvalid,f=e.feedbackValid,u=e.floatingClassName,b=e.floatingLabel,g=e.id,v=e.invalid,h=e.label,y=e.onChange,N=e.plainText,x=e.size,T=e.text,C=e.tooltipFeedback,k=e.type,E=void 0===k?"text":k,O=e.valid,j=(0,n.Tt)(e,["children","className","delay","feedback","feedbackInvalid","feedbackValid","floatingClassName","floatingLabel","id","invalid","label","onChange","plainText","size","text","tooltipFeedback","type","valid"]),F=(0,l.useState)(),w=F[0],A=F[1];return(0,l.useEffect)((function(){var e=setTimeout((function(){return w&&y&&y(w)}),"number"===typeof i?i:500);return function(){return clearTimeout(e)}}),[w]),l.createElement(c.O,{describedby:j["aria-describedby"],feedback:m,feedbackInvalid:p,feedbackValid:f,floatingClassName:u,floatingLabel:b,id:g,invalid:v,label:h,text:T,tooltipFeedback:C,valid:O},l.createElement("input",(0,n.Cl)({className:(0,s.A)(N?"form-control-plaintext":"form-control",(t={},t["form-control-".concat(x)]=x,t["form-control-color"]="color"===E,t["is-invalid"]=v,t["is-valid"]=O,t),o),id:g,type:E,onChange:function(e){return i?A(e):y&&y(e)}},j,{ref:a}),r))}));d.propTypes=(0,n.Cl)({className:o().string,id:o().string,delay:o().oneOfType([o().bool,o().number]),plainText:o().bool,size:o().oneOf(["sm","lg"]),type:o().oneOfType([o().oneOf(["color","file","text"]),o().string])},c.O.propTypes),d.displayName="CFormInput"},63821:(e,a,t)=>{t.d(a,{U:()=>d});var n=t(5664),l=t(65043),r=t(65173),o=t.n(r),s=t(65689),c=["xxl","xl","lg","md","sm","xs"],d=(0,l.forwardRef)((function(e,a){var t=e.children,r=e.className,o=(0,n.Tt)(e,["children","className"]),d=[];return c.forEach((function(e){var a=o[e];delete o[e];var t="xs"===e?"":"-".concat(e);"number"!==typeof a&&"string"!==typeof a||d.push("col".concat(t,"-").concat(a)),"boolean"===typeof a&&d.push("col".concat(t)),a&&"object"===typeof a&&("number"!==typeof a.span&&"string"!==typeof a.span||d.push("col".concat(t,"-").concat(a.span)),"boolean"===typeof a.span&&d.push("col".concat(t)),"number"!==typeof a.order&&"string"!==typeof a.order||d.push("order".concat(t,"-").concat(a.order)),"number"===typeof a.offset&&d.push("offset".concat(t,"-").concat(a.offset)))})),l.createElement("div",(0,n.Cl)({className:(0,s.A)(d.length>0?d:"col",r)},o,{ref:a}),t)})),i=o().oneOfType([o().bool,o().number,o().string,o().oneOf(["auto"])]),m=o().oneOfType([i,o().shape({span:i,offset:o().oneOfType([o().number,o().string]),order:o().oneOfType([o().oneOf(["first","last"]),o().number,o().string])})]);d.propTypes={children:o().node,className:o().string,xs:m,sm:m,md:m,lg:m,xl:m,xxl:m},d.displayName="CCol"},50280:(e,a,t)=>{t.d(a,{s:()=>d});var n=t(5664),l=t(65043),r=t(65173),o=t.n(r),s=t(65689),c=["xxl","xl","lg","md","sm","xs"],d=(0,l.forwardRef)((function(e,a){var t=e.children,r=e.className,o=(0,n.Tt)(e,["children","className"]),d=[];return c.forEach((function(e){var a=o[e];delete o[e];var t="xs"===e?"":"-".concat(e);"object"===typeof a&&(a.cols&&d.push("row-cols".concat(t,"-").concat(a.cols)),"number"===typeof a.gutter&&d.push("g".concat(t,"-").concat(a.gutter)),"number"===typeof a.gutterX&&d.push("gx".concat(t,"-").concat(a.gutterX)),"number"===typeof a.gutterY&&d.push("gy".concat(t,"-").concat(a.gutterY)))})),l.createElement("div",{className:(0,s.A)("row",d,r),ref:a},t)})),i=o().shape({cols:o().oneOfType([o().oneOf(["auto"]),o().number,o().string]),gutter:o().oneOfType([o().string,o().number]),gutterX:o().oneOfType([o().string,o().number]),gutterY:o().oneOfType([o().string,o().number])});d.propTypes={children:o().node,className:o().string,xs:i,sm:i,md:i,lg:i,xl:i,xxl:i},d.displayName="CRow"}}]);
//# sourceMappingURL=4229.839e6936.chunk.js.map