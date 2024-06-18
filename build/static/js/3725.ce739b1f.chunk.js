"use strict";(self.webpackChunk_coreui_coreui_pro_react_admin_template_cra=self.webpackChunk_coreui_coreui_pro_react_admin_template_cra||[]).push([[3725],{83725:(e,a,l)=>{l.r(a),l.d(a,{default:()=>N});var t=l(65043),n=l(73216),i=l(64716),s=l(56267),c=l(50280),o=l(63821),d=l(67603),r=l(4522),m=l(25943),u=l(44261),p=l(9447),f=l(81267),h=l(24685),b=l(70362),g=l(20035),v=l(52171),y=(l(6145),l(77154)),x=l(63401),j=l(70579);const N=()=>{const e=(0,n.g)(),[a,l]=((0,n.Zp)(),(0,t.useState)("")),[N,k]=(0,t.useState)(!1),[E,C]=(0,t.useState)(""),[I,B]=(0,t.useState)(""),[D,A]=(0,t.useState)(),[T,F]=(0,t.useState)(),[S,O]=(0,t.useState)(""),[_,w]=(0,t.useState)(""),[z,L]=(0,t.useState)({}),[V,R]=(0,t.useState)(!1),[M,P]=(0,t.useState)([]),[U,q]=(0,t.useState)([]),[Q,W]=(0,t.useState)([]);(0,t.useEffect)((()=>{y.A.get("user/findAll",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((e=>P(e.data.data))).catch((e=>console.error("error fetching users",e))),y.A.get("brand/findAll",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((e=>{const a=e.data.data.map((e=>({value:e.id,label:e.name})));console.log(a),q(a)})).catch((e=>console.error("error fetching brand",e))),y.A.get("client/"+e.clientId,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((e=>{if(e.data){let a=e.data.data;C(a.companyName),B(a.clientType),O(a.contactId),W(a.brandIds),console.log(Q,typeof Q,"brand detail"),F("http://node93696-pimgmt.j.scaleforce.net:11064/"+a.logo);let l=a.imageDisplayOrder;w(l),"unspecified"==l?(document.getElementById("unspecified").checked=!0,document.getElementById("imageDisplay1").disabled=!0,document.getElementById("imageDisplay2").disabled=!0,document.getElementById("imageDisplay3").disabled=!0,document.getElementById("imageDisplay4").disabled=!0):(l=l.split(","),document.getElementById("imageDisplay1").value=l[0],document.getElementById("imageDisplay2").value=l[1],document.getElementById("imageDisplay3").value=l[2],document.getElementById("imageDisplay4").value=l[3])}}))}),[]);const Z=e=>{if(document.getElementById("unspecified").checked)document.getElementById("imageDisplay1").disabled=!0,document.getElementById("imageDisplay2").disabled=!0,document.getElementById("imageDisplay3").disabled=!0,document.getElementById("imageDisplay4").disabled=!0,w("unspecified");else{document.getElementById("imageDisplay1").disabled=!1,document.getElementById("imageDisplay2").disabled=!1,document.getElementById("imageDisplay3").disabled=!1,document.getElementById("imageDisplay4").disabled=!1;let e=document.getElementById("imageDisplay1").value,a=document.getElementById("imageDisplay2").value,l=document.getElementById("imageDisplay3").value,t=document.getElementById("imageDisplay4").value;w(e+","+a+","+l+","+t)}};return(0,j.jsx)("div",{className:"bg-body-tertiary min-vh-75 d-flex flex-row align-items-center",children:(0,j.jsx)(i.T,{children:(0,j.jsxs)(s.q,{className:"row g-3",onSubmit:a=>(a=>{a.preventDefault(),R(!0);const l=new FormData;"undefined"!=typeof D&&(console.log("enter"),l.append("logo",D)),l.append("companyName",E),l.append("contactId",S),l.append("clientType",I),l.append("imageDisplayOrder",_),y.A.patch("/client/update/"+e.clientId,l,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")),"Contetnt-Type":"multipart/form-data"}}).then((e=>{x.oR.success(e.data.message),R(!1)})).catch((e=>{R(!1),void 0!=e.response.data.errors&&L(e.response.data.errors)}))})(a),children:[(0,j.jsx)(c.s,{className:"justify-content-center",children:(0,j.jsx)(o.U,{md:9,lg:7,xl:12,children:(0,j.jsxs)(d.E,{className:"mb-4",children:[(0,j.jsx)(r.V,{children:"Client Information"}),(0,j.jsxs)(m.W,{className:"p-4",children:[(0,j.jsxs)(c.s,{className:"mb-3",children:[(0,j.jsx)(u.A,{htmlFor:"companyName",className:"col-sm-3 col-form-label",children:"Company Name"}),(0,j.jsx)("div",{className:"col-sm-8",children:(0,j.jsx)(p.O,{type:"text",id:"companyName",onChange:e=>{C(e.target.value)},value:E,name:"companyName"})})]}),(0,j.jsxs)(c.s,{className:"mb-4",children:[(0,j.jsx)(u.A,{htmlFor:"clientType",className:"col-sm-3 col-form-label",children:"Client Type"}),(0,j.jsx)("div",{className:"col-sm-8",children:(0,j.jsxs)(f.M,{id:"clientType",name:"clientType",onChange:e=>{B(e.target.value)},value:I,children:[(0,j.jsx)("option",{children:"Choose..."}),(0,j.jsx)("option",{value:"broker",children:"Broker"}),(0,j.jsx)("option",{value:"distributer",children:"Distributer"}),(0,j.jsx)("option",{value:"vendor",children:"Vendor"}),(0,j.jsx)("option",{value:"Manufacturer",children:"Manufacturer"})]})})]}),(0,j.jsxs)(c.s,{className:"mb-3",children:[(0,j.jsx)(u.A,{htmlFor:"Logo",className:"col-sm-3 col-form-label",children:"Logo"}),(0,j.jsxs)("div",{className:"col-sm-8",children:[(0,j.jsx)(p.O,{type:"file",id:"logo",onChange:e=>{A(e.target.files[0])},name:"logo"}),(0,j.jsx)(h.t,{rounded:!0,thumbnail:!0,src:T,width:200,height:200})]})]}),(0,j.jsxs)(c.s,{className:"mb-3",children:[(0,j.jsx)(u.A,{htmlFor:"Brands",className:"col-sm-3 col-form-label",children:"Brands"}),(0,j.jsx)("div",{className:"col-sm-8",children:(0,j.jsx)(b.x,{options:U,onChange:e=>{const a=e.map((e=>e.value));console.log(typeof a,a),W(a)},value:U.filter((e=>Q.includes(e.value)))})})]}),(0,j.jsxs)(c.s,{className:"mb-4",children:[(0,j.jsx)(u.A,{htmlFor:"imageDisplayOrder",className:"col-sm-3 col-form-label",children:"Image Display Order"}),(0,j.jsxs)("div",{className:"col-sm-9",children:[(0,j.jsx)(g.C,{id:"unspecified",label:"Unspecified",className:"col-sm-2",onChange:e=>{Z(e.target.value)}}),(0,j.jsx)("div",{className:"col-sm-2 float-start ml-5",children:(0,j.jsxs)(f.M,{id:"imageDisplay1",className:"col-sm-2 float-start",onChange:e=>{Z(e.target.value)},children:[(0,j.jsx)("option",{value:"c",children:"Boxed"}),(0,j.jsx)("option",{value:"o",children:"Open Boxed"}),(0,j.jsx)("option",{value:"e",children:"Packaged"}),(0,j.jsx)("option",{value:"i",children:"Raw"})]})}),(0,j.jsx)("div",{className:"col-sm-2 float-start ml-5",children:(0,j.jsxs)(f.M,{id:"imageDisplay2",className:"col-sm-2",onChange:e=>{Z(e.target.value)},children:[(0,j.jsx)("option",{value:"c",children:"Boxed"}),(0,j.jsx)("option",{value:"o",children:"Open Boxed"}),(0,j.jsx)("option",{value:"e",children:"Packaged"}),(0,j.jsx)("option",{value:"i",children:"Raw"})]})}),(0,j.jsx)("div",{className:"col-sm-2 float-start ml-5",children:(0,j.jsxs)(f.M,{id:"imageDisplay3",className:"col-sm-2",onChange:e=>{Z(e.target.value)},children:[(0,j.jsx)("option",{value:"c",children:"Boxed"}),(0,j.jsx)("option",{value:"o",children:"Open Boxed"}),(0,j.jsx)("option",{value:"e",children:"Packaged"}),(0,j.jsx)("option",{value:"i",children:"Raw"})]})}),(0,j.jsx)("div",{className:"col-sm-2 float-start ml-5",children:(0,j.jsxs)(f.M,{id:"imageDisplay4",className:"col-sm-2",onChange:e=>{Z(e.target.value)},children:[(0,j.jsx)("option",{value:"c",children:"Boxed"}),(0,j.jsx)("option",{value:"o",children:"Open Boxed"}),(0,j.jsx)("option",{value:"e",children:"Packaged"}),(0,j.jsx)("option",{value:"i",children:"Raw"})]})})]})]}),(0,j.jsxs)(c.s,{className:"mb-4",children:[(0,j.jsx)(u.A,{htmlFor:"contactPerson",className:"col-sm-3 col-form-label",children:"Contact Person"}),(0,j.jsx)("div",{className:"col-sm-8",children:(0,j.jsx)(f.M,{id:"contactId",name:"contactId",onChange:e=>{O(e.target.value)},value:S,children:M.map(((e,a)=>(0,j.jsx)("option",{value:e.id,children:e.username},a)))})})]})]})]})})}),(0,j.jsx)(c.s,{className:"p-4",children:(0,j.jsx)(o.U,{xs:12,children:(0,j.jsx)(v.Q,{color:"primary",type:"submit",disabled:V,className:"float-end",children:"Update Client"})})})]})})})}},56267:(e,a,l)=>{l.d(a,{q:()=>o});var t=l(5664),n=l(65043),i=l(65173),s=l.n(i),c=l(65689),o=(0,n.forwardRef)((function(e,a){var l=e.children,i=e.className,s=e.validated,o=(0,t.Tt)(e,["children","className","validated"]);return n.createElement("form",(0,t.Cl)({className:(0,c.A)({"was-validated":s},i)||void 0},o,{ref:a}),l)}));o.propTypes={children:s().node,className:s().string,validated:s().bool},o.displayName="CForm"},20035:(e,a,l)=>{l.d(a,{C:()=>m});var t=l(5664),n=l(65043),i=l(65173),s=l.n(i),c=l(65689),o=l(48377),d=l(44261),r=l(95188),m=(0,n.forwardRef)((function(e,a){var l=e.className,i=e.button,s=e.feedback,m=e.feedbackInvalid,u=e.feedbackValid,p=e.floatingLabel,f=e.tooltipFeedback,h=e.hitArea,b=e.id,g=e.indeterminate,v=e.inline,y=e.invalid,x=e.label,j=e.reverse,N=e.type,k=void 0===N?"checkbox":N,E=e.valid,C=(0,t.Tt)(e,["className","button","feedback","feedbackInvalid","feedbackValid","floatingLabel","tooltipFeedback","hitArea","id","indeterminate","inline","invalid","label","reverse","type","valid"]),I=(0,n.useRef)(null),B=(0,r.E2)(a,I);(0,n.useEffect)((function(){I.current&&g&&(I.current.indeterminate=g)}),[g,I.current]);var D=function(){return n.createElement("input",(0,t.Cl)({type:k,className:(0,c.A)(i?"btn-check":"form-check-input",{"is-invalid":y,"is-valid":E,"me-2":h}),id:b},C,{ref:B}))},A=function(){return n.createElement(o._,{describedby:C["aria-describedby"],feedback:s,feedbackInvalid:m,feedbackValid:u,floatingLabel:p,invalid:y,tooltipFeedback:f,valid:E})},T=function(){var e;return n.createElement(d.A,(0,t.Cl)({customClassName:(0,c.A)(i?(0,c.A)("btn",i.variant?"btn-".concat(i.variant,"-").concat(i.color):"btn-".concat(i.color),(e={},e["btn-".concat(i.size)]=i.size,e),"".concat(i.shape)):"form-check-label")},b&&{htmlFor:b}),x)};return n.createElement((function(){return i?n.createElement(n.Fragment,null,n.createElement(D,null),x&&n.createElement(T,null),n.createElement(A,null)):x?h?n.createElement(n.Fragment,null,n.createElement(D,null),n.createElement(d.A,(0,t.Cl)({customClassName:(0,c.A)("form-check-label stretched-link",l)},b&&{htmlFor:b}),x),n.createElement(A,null)):n.createElement("div",{className:(0,c.A)("form-check",{"form-check-inline":v,"form-check-reverse":j,"is-invalid":y,"is-valid":E},l)},n.createElement(D,null),n.createElement(T,null),n.createElement(A,null)):n.createElement(D,null)}),null)}));m.propTypes=(0,t.Cl)({button:s().object,className:s().string,hitArea:s().oneOf(["full"]),id:s().string,indeterminate:s().bool,inline:s().bool,label:s().oneOfType([s().string,s().node]),reverse:s().bool,type:s().oneOf(["checkbox","radio"])},o._.propTypes),m.displayName="CFormCheck"},9447:(e,a,l)=>{l.d(a,{O:()=>d});var t=l(5664),n=l(65043),i=l(65173),s=l.n(i),c=l(65689),o=l(95755),d=(0,n.forwardRef)((function(e,a){var l,i=e.children,s=e.className,d=e.delay,r=void 0!==d&&d,m=e.feedback,u=e.feedbackInvalid,p=e.feedbackValid,f=e.floatingClassName,h=e.floatingLabel,b=e.id,g=e.invalid,v=e.label,y=e.onChange,x=e.plainText,j=e.size,N=e.text,k=e.tooltipFeedback,E=e.type,C=void 0===E?"text":E,I=e.valid,B=(0,t.Tt)(e,["children","className","delay","feedback","feedbackInvalid","feedbackValid","floatingClassName","floatingLabel","id","invalid","label","onChange","plainText","size","text","tooltipFeedback","type","valid"]),D=(0,n.useState)(),A=D[0],T=D[1];return(0,n.useEffect)((function(){var e=setTimeout((function(){return A&&y&&y(A)}),"number"===typeof r?r:500);return function(){return clearTimeout(e)}}),[A]),n.createElement(o.O,{describedby:B["aria-describedby"],feedback:m,feedbackInvalid:u,feedbackValid:p,floatingClassName:f,floatingLabel:h,id:b,invalid:g,label:v,text:N,tooltipFeedback:k,valid:I},n.createElement("input",(0,t.Cl)({className:(0,c.A)(x?"form-control-plaintext":"form-control",(l={},l["form-control-".concat(j)]=j,l["form-control-color"]="color"===C,l["is-invalid"]=g,l["is-valid"]=I,l),s),id:b,type:C,onChange:function(e){return r?T(e):y&&y(e)}},B,{ref:a}),i))}));d.propTypes=(0,t.Cl)({className:s().string,id:s().string,delay:s().oneOfType([s().bool,s().number]),plainText:s().bool,size:s().oneOf(["sm","lg"]),type:s().oneOfType([s().oneOf(["color","file","text"]),s().string])},o.O.propTypes),d.displayName="CFormInput"},81267:(e,a,l)=>{l.d(a,{M:()=>d});var t=l(5664),n=l(65043),i=l(65173),s=l.n(i),c=l(65689),o=l(95755),d=(0,n.forwardRef)((function(e,a){var l,i=e.children,s=e.className,d=e.feedback,r=e.feedbackInvalid,m=e.feedbackValid,u=e.floatingClassName,p=e.floatingLabel,f=e.htmlSize,h=e.id,b=e.invalid,g=e.label,v=e.options,y=e.size,x=e.text,j=e.tooltipFeedback,N=e.valid,k=(0,t.Tt)(e,["children","className","feedback","feedbackInvalid","feedbackValid","floatingClassName","floatingLabel","htmlSize","id","invalid","label","options","size","text","tooltipFeedback","valid"]);return n.createElement(o.O,{describedby:k["aria-describedby"],feedback:d,feedbackInvalid:r,feedbackValid:m,floatingClassName:u,floatingLabel:p,id:h,invalid:b,label:g,text:x,tooltipFeedback:j,valid:N},n.createElement("select",(0,t.Cl)({id:h,className:(0,c.A)("form-select",(l={},l["form-select-".concat(y)]=y,l["is-invalid"]=b,l["is-valid"]=N,l),s),size:f},k,{ref:a}),v?v.map((function(e,a){return n.createElement("option",(0,t.Cl)({},"object"===typeof e&&e.disabled&&{disabled:e.disabled},"object"===typeof e&&void 0!==e.value&&{value:e.value},{key:a}),"string"===typeof e?e:e.label)})):i))}));d.propTypes=(0,t.Cl)({className:s().string,htmlSize:s().number,options:s().array},o.O.propTypes),d.displayName="CFormSelect"}}]);
//# sourceMappingURL=3725.ce739b1f.chunk.js.map