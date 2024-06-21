"use strict";(self.webpackChunk_coreui_coreui_pro_react_admin_template_cra=self.webpackChunk_coreui_coreui_pro_react_admin_template_cra||[]).push([[1519],{81519:(e,a,l)=>{l.r(a),l.d(a,{default:()=>f});var s=l(65043),t=l(73216),n=l(64716),i=l(56267),c=l(50280),o=l(63821),d=l(67603),r=l(4522),m=l(25943),u=l(44261),h=l(9447),p=l(81267),g=l(24685),x=l(20035),y=l(52171),j=(l(6145),l(77154)),v=l(63401),b=l(95778),N=l(70579);const f=()=>{var e;const a=null===(e=(0,t.zy)().state)||void 0===e?void 0:e.clientId,[l,f]=((0,t.Zp)(),(0,s.useState)("")),[B,I]=(0,s.useState)(!1),[D,E]=(0,s.useState)(""),[C,S]=(0,s.useState)(""),[A,k]=(0,s.useState)(),[_,w]=(0,s.useState)(),[O,M]=(0,s.useState)(""),[P,R]=(0,s.useState)(""),[T,F]=(0,s.useState)({}),[z,U]=(0,s.useState)(!1),[L,q]=(0,s.useState)([]),[Q,V]=(0,s.useState)([]),[W,Z]=(0,s.useState)([]);(0,s.useEffect)((()=>{j.A.get("user/findAll",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((e=>q(e.data.data))).catch((e=>console.error("error fetching users",e))),j.A.get("brand/findAll",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((e=>{const a=e.data.data.map((e=>({value:e.id,label:e.name})));V(a)})).catch((e=>console.error("error fetching brand",e))),j.A.get("client/"+a,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((e=>{if(e.data){let a=e.data.data;E(a.companyName),S(a.clientType),M(a.contactId),Z(a.brands.map((e=>({value:e.id,label:e.name})))),w("http://node93696-pimgmt.j.scaleforce.net:11064/"+a.logo);let l=a.imageDisplayOrder;R(l),"unspecified"==l?(document.getElementById("unspecified").checked=!0,document.getElementById("imageDisplay1").disabled=!0,document.getElementById("imageDisplay2").disabled=!0,document.getElementById("imageDisplay3").disabled=!0,document.getElementById("imageDisplay4").disabled=!0):(l=l.split(","),document.getElementById("imageDisplay1").value=l[0],document.getElementById("imageDisplay2").value=l[1],document.getElementById("imageDisplay3").value=l[2],document.getElementById("imageDisplay4").value=l[3])}}))}),[]);const G=e=>{if(document.getElementById("unspecified").checked)document.getElementById("imageDisplay1").disabled=!0,document.getElementById("imageDisplay2").disabled=!0,document.getElementById("imageDisplay3").disabled=!0,document.getElementById("imageDisplay4").disabled=!0,R("unspecified");else{document.getElementById("imageDisplay1").disabled=!1,document.getElementById("imageDisplay2").disabled=!1,document.getElementById("imageDisplay3").disabled=!1,document.getElementById("imageDisplay4").disabled=!1;let e=document.getElementById("imageDisplay1").value,a=document.getElementById("imageDisplay2").value,l=document.getElementById("imageDisplay3").value,s=document.getElementById("imageDisplay4").value;R(e+","+a+","+l+","+s)}},H=async e=>{e.preventDefault(),U(!0);let l="";var s;A&&(l=await(s=A,new Promise(((e,a)=>{const l=new FileReader;l.readAsDataURL(s),l.onload=()=>e(l.result),l.onerror=e=>a(e)})))),console.log(l);let t={companyName:D,contactId:O,clientType:C,imageDisplayOrder:P,brandIds:W.map((e=>e.value)),logo:l};j.A.patch("/client/update/"+a,t,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")),"Contetnt-Type":"multipart/form-data"}}).then((e=>{v.oR.success(e.data.message),U(!1)})).catch((e=>{U(!1),void 0!=e.response.data.errors&&F(e.response.data.errors)}))};return(0,N.jsx)("div",{className:"bg-body-tertiary min-vh-75 d-flex flex-row align-items-center",children:(0,N.jsx)(n.T,{children:(0,N.jsxs)(i.q,{className:"row g-3",onSubmit:e=>H(e),children:[(0,N.jsx)(c.s,{className:"justify-content-center",children:(0,N.jsx)(o.U,{md:9,lg:7,xl:12,children:(0,N.jsxs)(d.E,{className:"mb-4",children:[(0,N.jsx)(r.V,{children:"Client Information"}),(0,N.jsxs)(m.W,{className:"p-4",children:[(0,N.jsxs)(c.s,{className:"mb-3",children:[(0,N.jsx)(u.A,{htmlFor:"companyName",className:"col-sm-3 col-form-label",children:"Company Name"}),(0,N.jsx)("div",{className:"col-sm-8",children:(0,N.jsx)(h.O,{type:"text",id:"companyName",onChange:e=>{E(e.target.value)},value:D,name:"companyName"})})]}),(0,N.jsxs)(c.s,{className:"mb-4",children:[(0,N.jsx)(u.A,{htmlFor:"clientType",className:"col-sm-3 col-form-label",children:"Company Type"}),(0,N.jsx)("div",{className:"col-sm-8",children:(0,N.jsxs)(p.M,{id:"clientType",name:"clientType",onChange:e=>{S(e.target.value)},value:C,children:[(0,N.jsx)("option",{children:"Choose..."}),(0,N.jsx)("option",{value:"broker",children:"Broker"}),(0,N.jsx)("option",{value:"distributer",children:"Distributer"}),(0,N.jsx)("option",{value:"Manufacturer",children:"Manufacturer"})]})})]}),(0,N.jsxs)(c.s,{className:"mb-3",children:[(0,N.jsx)(u.A,{htmlFor:"Logo",className:"col-sm-3 col-form-label",children:"Logo"}),(0,N.jsxs)("div",{className:"col-sm-8",children:[(0,N.jsx)(h.O,{type:"file",id:"logo",onChange:e=>{k(e.target.files[0])},name:"logo"}),(0,N.jsx)(g.t,{rounded:!0,thumbnail:!0,src:_,width:200,height:200})]})]}),(0,N.jsxs)(c.s,{className:"mb-3",children:[(0,N.jsx)(u.A,{htmlFor:"Brands",className:"col-sm-3 col-form-label",children:"Brands"}),(0,N.jsx)("div",{className:"col-sm-8",children:(0,N.jsx)(b.Ay,{options:Q,isMulti:!0,value:W,onChange:e=>Z(e),placeholder:"Select brands...",className:"basic-multi-select",classNamePrefix:"select",isClearable:!1,closeMenuOnSelect:!1,styles:{control:e=>({...e,borderRadius:0,borderColor:"#ced4da"}),menu:e=>({...e,zIndex:9999})}})})]}),(0,N.jsxs)(c.s,{className:"mb-4",children:[(0,N.jsx)(u.A,{htmlFor:"imageDisplayOrder",className:"col-sm-3 col-form-label",children:"Image Display Order"}),(0,N.jsxs)("div",{className:"col-sm-9",children:[(0,N.jsx)(x.C,{id:"unspecified",label:"Unspecified",className:"col-sm-2",onChange:e=>{G(e.target.value)}}),(0,N.jsx)("div",{className:"col-sm-2 float-start ml-5",children:(0,N.jsxs)(p.M,{id:"imageDisplay1",className:"col-sm-2 float-start",onChange:e=>{G(e.target.value)},children:[(0,N.jsx)("option",{value:"c",children:"Boxed"}),(0,N.jsx)("option",{value:"o",children:"Open Boxed"}),(0,N.jsx)("option",{value:"e",children:"Packaged"}),(0,N.jsx)("option",{value:"i",children:"Raw"})]})}),(0,N.jsx)("div",{className:"col-sm-2 float-start ml-5",children:(0,N.jsxs)(p.M,{id:"imageDisplay2",className:"col-sm-2",onChange:e=>{G(e.target.value)},children:[(0,N.jsx)("option",{value:"c",children:"Boxed"}),(0,N.jsx)("option",{value:"o",children:"Open Boxed"}),(0,N.jsx)("option",{value:"e",children:"Packaged"}),(0,N.jsx)("option",{value:"i",children:"Raw"})]})}),(0,N.jsx)("div",{className:"col-sm-2 float-start ml-5",children:(0,N.jsxs)(p.M,{id:"imageDisplay3",className:"col-sm-2",onChange:e=>{G(e.target.value)},children:[(0,N.jsx)("option",{value:"c",children:"Boxed"}),(0,N.jsx)("option",{value:"o",children:"Open Boxed"}),(0,N.jsx)("option",{value:"e",children:"Packaged"}),(0,N.jsx)("option",{value:"i",children:"Raw"})]})}),(0,N.jsx)("div",{className:"col-sm-2 float-start ml-5",children:(0,N.jsxs)(p.M,{id:"imageDisplay4",className:"col-sm-2",onChange:e=>{G(e.target.value)},children:[(0,N.jsx)("option",{value:"c",children:"Boxed"}),(0,N.jsx)("option",{value:"o",children:"Open Boxed"}),(0,N.jsx)("option",{value:"e",children:"Packaged"}),(0,N.jsx)("option",{value:"i",children:"Raw"})]})})]})]}),(0,N.jsxs)(c.s,{className:"mb-4",children:[(0,N.jsx)(u.A,{htmlFor:"contactPerson",className:"col-sm-3 col-form-label",children:"Contact Person"}),(0,N.jsx)("div",{className:"col-sm-8",children:(0,N.jsx)(p.M,{id:"contactId",name:"contactId",onChange:e=>{M(e.target.value)},value:O,children:L.map(((e,a)=>(0,N.jsx)("option",{value:e.id,children:e.username},a)))})})]})]})]})})}),(0,N.jsx)(c.s,{className:"p-4",children:(0,N.jsx)(o.U,{xs:12,children:(0,N.jsx)(y.Q,{color:"primary",type:"submit",disabled:z,className:"float-end",children:"Update Company"})})})]})})})}}}]);
//# sourceMappingURL=1519.683d15a8.chunk.js.map