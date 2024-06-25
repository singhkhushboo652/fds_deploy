"use strict";(self.webpackChunk_coreui_coreui_pro_react_admin_template_cra=self.webpackChunk_coreui_coreui_pro_react_admin_template_cra||[]).push([[8984],{78984:(e,a,l)=>{l.r(a),l.d(a,{default:()=>j});var t=l(65043),n=l(73216),i=l(64716),s=l(56267),c=l(50280),o=l(63821),r=l(67603),d=l(4522),m=l(25943),u=l(44261),p=l(9447),f=l(81267),b=l(24685),h=l(70362),v=l(20035),g=l(52171),y=(l(6145),l(77154)),x=l(70579);const j=()=>{const e=(0,n.Zp)(),[a,l]=(0,t.useState)(""),[j,N]=(0,t.useState)(""),[k,C]=(0,t.useState)(),[E,I]=(0,t.useState)(""),[A,T]=(0,t.useState)(""),[F,D]=(0,t.useState)(""),[O,S]=(0,t.useState)({}),[B,w]=(0,t.useState)(!1),[_,z]=(0,t.useState)([]),[L,R]=(0,t.useState)([]),[V,M]=(0,t.useState)(),[P,U]=(0,t.useState)([]);(0,t.useEffect)((()=>{y.A.get("user/findAll",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((e=>z(e.data.data))).catch((e=>console.error("error fetching users",e))),y.A.get("brand/findAll",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((e=>{const a=e.data.data.map((e=>({value:e.id,label:e.name})));console.log(a),R(a)})).catch((e=>console.error("error fetching brand",e)))}),[]);const q=e=>{if(document.getElementById("unspecified").checked)document.getElementById("imageDisplay1").disabled=!0,document.getElementById("imageDisplay2").disabled=!0,document.getElementById("imageDisplay3").disabled=!0,document.getElementById("imageDisplay4").disabled=!0,D("unspecified");else{document.getElementById("imageDisplay1").disabled=!1,document.getElementById("imageDisplay2").disabled=!1,document.getElementById("imageDisplay3").disabled=!1,document.getElementById("imageDisplay4").disabled=!1;let e=document.getElementById("imageDisplay1").value,a=document.getElementById("imageDisplay2").value,l=document.getElementById("imageDisplay3").value,t=document.getElementById("imageDisplay4").value;D(e+","+a+","+l+","+t)}},Q=async l=>{l.preventDefault(),w(!0);let t="";var n;k&&(t=await(n=k,new Promise(((e,a)=>{const l=new FileReader;l.readAsDataURL(n),l.onload=()=>e(l.result),l.onerror=e=>a(e)})))),console.log(t);let i={companyName:a,contactId:E,clientType:j,imageDisplayOrder:F,brandIds:P,logo:t};y.A.post("/client/create",i,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((a=>{w(!1),e("/companies")})).catch((e=>{w(!1),void 0!=e.response.data.errors&&S(e.response.data.errors)}))};return(0,x.jsx)("div",{className:"bg-body-tertiary min-vh-75 d-flex flex-row align-items-center",children:(0,x.jsx)(i.T,{children:(0,x.jsxs)(s.q,{className:"row g-3",onSubmit:e=>Q(e),children:[(0,x.jsx)(c.s,{className:"justify-content-center",children:(0,x.jsx)(o.U,{md:9,lg:7,xl:12,children:(0,x.jsxs)(r.E,{className:"mb-4",children:[(0,x.jsx)(d.V,{children:"Company Information"}),(0,x.jsxs)(m.W,{className:"p-4",children:[(0,x.jsxs)(c.s,{className:"mb-3",children:[(0,x.jsx)(u.A,{htmlFor:"companyName",className:"col-sm-3 col-form-label",children:"Company Name"}),(0,x.jsx)("div",{className:"col-sm-8",children:(0,x.jsx)(p.O,{type:"text",id:"companyName",onChange:e=>{l(e.target.value)},value:a,name:"companyName"})})]}),(0,x.jsxs)(c.s,{className:"mb-4",children:[(0,x.jsx)(u.A,{htmlFor:"clientType",className:"col-sm-3 col-form-label",children:"Company Type"}),(0,x.jsx)("div",{className:"col-sm-8",children:(0,x.jsxs)(f.M,{id:"clientType",name:"clientType",onChange:e=>{N(e.target.value)},value:j,children:[(0,x.jsx)("option",{children:"Choose..."}),(0,x.jsx)("option",{value:"broker",children:"Broker"}),(0,x.jsx)("option",{value:"distributer",children:"Distributer"}),(0,x.jsx)("option",{value:"Manufacturer",children:"Manufacturer"})]})})]}),(0,x.jsxs)(c.s,{className:"mb-3",children:[(0,x.jsx)(u.A,{htmlFor:"Logo",className:"col-sm-3 col-form-label",children:"Logo"}),(0,x.jsxs)("div",{className:"col-sm-8",children:[(0,x.jsx)(p.O,{type:"file",id:"logo",onChange:e=>{const a=e.target.files[0];if(a){const e=URL.createObjectURL(a);C(a),M(e)}},name:"logo"}),(0,x.jsx)(b.t,{rounded:!0,thumbnail:!0,src:V,width:200,height:200})]})]}),(0,x.jsxs)(c.s,{className:"mb-3",children:[(0,x.jsx)(u.A,{htmlFor:"Brands",className:"col-sm-3 col-form-label",children:"Brands"}),(0,x.jsx)("div",{className:"col-sm-8",children:(0,x.jsx)(h.x,{options:L,onChange:e=>{const a=e.map((e=>e.value));console.log(a),U(a)},value:L.filter((e=>P.includes(e.value)))})})]}),(0,x.jsxs)(c.s,{className:"mb-4",children:[(0,x.jsx)(u.A,{htmlFor:"imageDisplayOrder",className:"col-sm-3 col-form-label",children:"Image Display Order"}),(0,x.jsxs)("div",{className:"col-sm-9",children:[(0,x.jsx)(v.C,{id:"unspecified",label:"Unspecified",className:"col-sm-2",onChange:e=>{q(e.target.value)}}),(0,x.jsx)("div",{className:"col-sm-2 float-start ml-5",children:(0,x.jsxs)(f.M,{id:"imageDisplay1",className:"col-sm-2 float-start",onChange:e=>{q(e.target.value)},children:[(0,x.jsx)("option",{value:"c",children:"Closed Case"}),(0,x.jsx)("option",{value:"o",children:"Open Case"}),(0,x.jsx)("option",{value:"e",children:"Inner Package"}),(0,x.jsx)("option",{value:"i",children:"Raw"})]})}),(0,x.jsx)("div",{className:"col-sm-2 float-start ml-5",children:(0,x.jsxs)(f.M,{id:"imageDisplay2",className:"col-sm-2",onChange:e=>{q(e.target.value)},children:[(0,x.jsx)("option",{value:"c",children:"Closed Case"}),(0,x.jsx)("option",{value:"o",children:"Open Case"}),(0,x.jsx)("option",{value:"e",children:"Inner Package"}),(0,x.jsx)("option",{value:"i",children:"Raw"})]})}),(0,x.jsx)("div",{className:"col-sm-2 float-start ml-5",children:(0,x.jsxs)(f.M,{id:"imageDisplay3",className:"col-sm-2",onChange:e=>{q(e.target.value)},children:[(0,x.jsx)("option",{value:"c",children:"Closed Case"}),(0,x.jsx)("option",{value:"o",children:"Open Case"}),(0,x.jsx)("option",{value:"e",children:"Inner Package"}),(0,x.jsx)("option",{value:"i",children:"Raw"})]})}),(0,x.jsx)("div",{className:"col-sm-2 float-start ml-5",children:(0,x.jsxs)(f.M,{id:"imageDisplay4",className:"col-sm-2",onChange:e=>{q(e.target.value)},children:[(0,x.jsx)("option",{value:"c",children:"Closed Case"}),(0,x.jsx)("option",{value:"o",children:"Open Case"}),(0,x.jsx)("option",{value:"e",children:"Inner Package"}),(0,x.jsx)("option",{value:"i",children:"Raw"})]})})]})]}),(0,x.jsxs)(c.s,{className:"mb-4",children:[(0,x.jsx)(u.A,{htmlFor:"contactPerson",className:"col-sm-3 col-form-label",children:"Contact Person"}),(0,x.jsx)("div",{className:"col-sm-8",children:(0,x.jsxs)(f.M,{id:"contactId",name:"contactId",onChange:e=>{I(e.target.value)},value:E,children:[(0,x.jsx)("option",{children:"...Choose"}),_.map(((e,a)=>(0,x.jsx)("option",{value:e.id,children:e.username},a)))]})})]})]})]})})}),(0,x.jsx)(c.s,{className:"p-4",children:(0,x.jsx)(o.U,{xs:12,children:(0,x.jsx)(g.Q,{color:"primary",type:"submit",disabled:B,className:"float-end",children:"Set Client"})})})]})})})}},56267:(e,a,l)=>{l.d(a,{q:()=>o});var t=l(5664),n=l(65043),i=l(65173),s=l.n(i),c=l(65689),o=(0,n.forwardRef)((function(e,a){var l=e.children,i=e.className,s=e.validated,o=(0,t.Tt)(e,["children","className","validated"]);return n.createElement("form",(0,t.Cl)({className:(0,c.A)({"was-validated":s},i)||void 0},o,{ref:a}),l)}));o.propTypes={children:s().node,className:s().string,validated:s().bool},o.displayName="CForm"},20035:(e,a,l)=>{l.d(a,{C:()=>m});var t=l(5664),n=l(65043),i=l(65173),s=l.n(i),c=l(65689),o=l(48377),r=l(44261),d=l(95188),m=(0,n.forwardRef)((function(e,a){var l=e.className,i=e.button,s=e.feedback,m=e.feedbackInvalid,u=e.feedbackValid,p=e.floatingLabel,f=e.tooltipFeedback,b=e.hitArea,h=e.id,v=e.indeterminate,g=e.inline,y=e.invalid,x=e.label,j=e.reverse,N=e.type,k=void 0===N?"checkbox":N,C=e.valid,E=(0,t.Tt)(e,["className","button","feedback","feedbackInvalid","feedbackValid","floatingLabel","tooltipFeedback","hitArea","id","indeterminate","inline","invalid","label","reverse","type","valid"]),I=(0,n.useRef)(null),A=(0,d.E2)(a,I);(0,n.useEffect)((function(){I.current&&v&&(I.current.indeterminate=v)}),[v,I.current]);var T=function(){return n.createElement("input",(0,t.Cl)({type:k,className:(0,c.A)(i?"btn-check":"form-check-input",{"is-invalid":y,"is-valid":C,"me-2":b}),id:h},E,{ref:A}))},F=function(){return n.createElement(o._,{describedby:E["aria-describedby"],feedback:s,feedbackInvalid:m,feedbackValid:u,floatingLabel:p,invalid:y,tooltipFeedback:f,valid:C})},D=function(){var e;return n.createElement(r.A,(0,t.Cl)({customClassName:(0,c.A)(i?(0,c.A)("btn",i.variant?"btn-".concat(i.variant,"-").concat(i.color):"btn-".concat(i.color),(e={},e["btn-".concat(i.size)]=i.size,e),"".concat(i.shape)):"form-check-label")},h&&{htmlFor:h}),x)};return n.createElement((function(){return i?n.createElement(n.Fragment,null,n.createElement(T,null),x&&n.createElement(D,null),n.createElement(F,null)):x?b?n.createElement(n.Fragment,null,n.createElement(T,null),n.createElement(r.A,(0,t.Cl)({customClassName:(0,c.A)("form-check-label stretched-link",l)},h&&{htmlFor:h}),x),n.createElement(F,null)):n.createElement("div",{className:(0,c.A)("form-check",{"form-check-inline":g,"form-check-reverse":j,"is-invalid":y,"is-valid":C},l)},n.createElement(T,null),n.createElement(D,null),n.createElement(F,null)):n.createElement(T,null)}),null)}));m.propTypes=(0,t.Cl)({button:s().object,className:s().string,hitArea:s().oneOf(["full"]),id:s().string,indeterminate:s().bool,inline:s().bool,label:s().oneOfType([s().string,s().node]),reverse:s().bool,type:s().oneOf(["checkbox","radio"])},o._.propTypes),m.displayName="CFormCheck"},9447:(e,a,l)=>{l.d(a,{O:()=>r});var t=l(5664),n=l(65043),i=l(65173),s=l.n(i),c=l(65689),o=l(95755),r=(0,n.forwardRef)((function(e,a){var l,i=e.children,s=e.className,r=e.delay,d=void 0!==r&&r,m=e.feedback,u=e.feedbackInvalid,p=e.feedbackValid,f=e.floatingClassName,b=e.floatingLabel,h=e.id,v=e.invalid,g=e.label,y=e.onChange,x=e.plainText,j=e.size,N=e.text,k=e.tooltipFeedback,C=e.type,E=void 0===C?"text":C,I=e.valid,A=(0,t.Tt)(e,["children","className","delay","feedback","feedbackInvalid","feedbackValid","floatingClassName","floatingLabel","id","invalid","label","onChange","plainText","size","text","tooltipFeedback","type","valid"]),T=(0,n.useState)(),F=T[0],D=T[1];return(0,n.useEffect)((function(){var e=setTimeout((function(){return F&&y&&y(F)}),"number"===typeof d?d:500);return function(){return clearTimeout(e)}}),[F]),n.createElement(o.O,{describedby:A["aria-describedby"],feedback:m,feedbackInvalid:u,feedbackValid:p,floatingClassName:f,floatingLabel:b,id:h,invalid:v,label:g,text:N,tooltipFeedback:k,valid:I},n.createElement("input",(0,t.Cl)({className:(0,c.A)(x?"form-control-plaintext":"form-control",(l={},l["form-control-".concat(j)]=j,l["form-control-color"]="color"===E,l["is-invalid"]=v,l["is-valid"]=I,l),s),id:h,type:E,onChange:function(e){return d?D(e):y&&y(e)}},A,{ref:a}),i))}));r.propTypes=(0,t.Cl)({className:s().string,id:s().string,delay:s().oneOfType([s().bool,s().number]),plainText:s().bool,size:s().oneOf(["sm","lg"]),type:s().oneOfType([s().oneOf(["color","file","text"]),s().string])},o.O.propTypes),r.displayName="CFormInput"},81267:(e,a,l)=>{l.d(a,{M:()=>r});var t=l(5664),n=l(65043),i=l(65173),s=l.n(i),c=l(65689),o=l(95755),r=(0,n.forwardRef)((function(e,a){var l,i=e.children,s=e.className,r=e.feedback,d=e.feedbackInvalid,m=e.feedbackValid,u=e.floatingClassName,p=e.floatingLabel,f=e.htmlSize,b=e.id,h=e.invalid,v=e.label,g=e.options,y=e.size,x=e.text,j=e.tooltipFeedback,N=e.valid,k=(0,t.Tt)(e,["children","className","feedback","feedbackInvalid","feedbackValid","floatingClassName","floatingLabel","htmlSize","id","invalid","label","options","size","text","tooltipFeedback","valid"]);return n.createElement(o.O,{describedby:k["aria-describedby"],feedback:r,feedbackInvalid:d,feedbackValid:m,floatingClassName:u,floatingLabel:p,id:b,invalid:h,label:v,text:x,tooltipFeedback:j,valid:N},n.createElement("select",(0,t.Cl)({id:b,className:(0,c.A)("form-select",(l={},l["form-select-".concat(y)]=y,l["is-invalid"]=h,l["is-valid"]=N,l),s),size:f},k,{ref:a}),g?g.map((function(e,a){return n.createElement("option",(0,t.Cl)({},"object"===typeof e&&e.disabled&&{disabled:e.disabled},"object"===typeof e&&void 0!==e.value&&{value:e.value},{key:a}),"string"===typeof e?e:e.label)})):i))}));r.propTypes=(0,t.Cl)({className:s().string,htmlSize:s().number,options:s().array},o.O.propTypes),r.displayName="CFormSelect"}}]);
//# sourceMappingURL=8984.a78cfbe4.chunk.js.map