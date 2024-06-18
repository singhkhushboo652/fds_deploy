"use strict";(self.webpackChunk_coreui_coreui_pro_react_admin_template_cra=self.webpackChunk_coreui_coreui_pro_react_admin_template_cra||[]).push([[9797],{29797:(e,a,t)=>{t.r(a),t.d(a,{default:()=>g});var l=t(65043),s=t(73216),n=t(64716),r=t(56267),d=t(50280),i=t(63821),o=t(67603),c=t(4522),m=t(25943),h=t(9447),u=t(81267),p=t(68524),b=t(52171),x=(t(6145),t(77154)),f=t(63401),v=t(70579);const g=()=>{const e=(0,s.g)(),[a,t]=((0,s.Zp)(),(0,l.useState)("")),[g,j]=(0,l.useState)(!1),[C,y]=(0,l.useState)(""),[N,k]=(0,l.useState)(""),[A,S]=(0,l.useState)(""),[w,O]=(0,l.useState)(""),[U,T]=(0,l.useState)(""),[z,I]=(0,l.useState)(""),[_,E]=(0,l.useState)(""),[P,V]=(0,l.useState)(""),[F,D]=(0,l.useState)(""),[L,R]=(0,l.useState)(""),[M,Z]=(0,l.useState)(""),[W,B]=(0,l.useState)(""),[q,H]=(0,l.useState)(""),[Q,G]=(0,l.useState)(""),[J,K]=(0,l.useState)(""),[X,Y]=(0,l.useState)(""),[$,ee]=(0,l.useState)(""),[ae,te]=(0,l.useState)(""),[le,se]=(0,l.useState)(""),[ne,re]=(0,l.useState)(""),[de,ie]=(0,l.useState)(""),[oe,ce]=(0,l.useState)(0),[me,he]=(0,l.useState)(!1),[ue,pe]=(0,l.useState)(""),[be,xe]=(0,l.useState)("");(0,l.useEffect)((()=>{x.A.get("user/"+e.userId,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((e=>{if(e.data){let a=e.data;S(a.firstName),O(a.lastName),ee(a.role),k(a.email),y(a.username),a.person&&(ce(a.person.age),te(a.person.dob),se(a.person.homePhone),re(a.person.workPhone),ie(a.person.mobile),T(a.person.homeAdd.street1),I(a.person.homeAdd.street2),E(a.person.homeAdd.street3),V(a.person.homeAdd.city),D(a.person.homeAdd.state),R(a.person.homeAdd.zip),pe(a.person.homeAddId),Z(a.person.workAdd.street1),B(a.person.workAdd.street2),H(a.person.workAdd.street3),G(a.person.workAdd.city),K(a.person.workAdd.state),Y(a.person.workAdd.zip),xe(a.person.workAddId))}}))}),[]);return(0,v.jsx)("div",{className:"bg-body-tertiary min-vh-75 d-flex flex-row align-items-center",children:(0,v.jsx)(n.T,{children:(0,v.jsxs)(r.q,{className:"row g-3",onSubmit:a=>(a=>{a.preventDefault(),he(!0);let t={username:C,firstName:A,lastName:w,email:N,role:$,hstreet1:U,hstreet2:z,hstreet3:_,hcity:P,hstate:F,hzip:L,homeAddId:ue,wstreet1:M,wstreet2:W,wstreet3:q,wcity:Q,wstate:J,wzip:X,workAddId:be,homePhone:le,workPhone:ne,mobile:de,age:oe,dob:ae};x.A.patch("/user/update/"+e.userId,t,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((e=>{f.oR.success(e.data.message),j(e.data.message),he(!1)})).catch((e=>{he(!1),console.log(e)}))})(a),children:[(0,v.jsx)(d.s,{className:"justify-content-center",children:(0,v.jsx)(i.U,{md:9,lg:7,xl:12,children:(0,v.jsxs)(o.E,{className:"mb-4",children:[(0,v.jsx)(c.V,{children:"Account Information"}),(0,v.jsxs)(m.W,{className:"p-4",children:[(0,v.jsxs)(d.s,{className:"mb-4",children:[(0,v.jsx)(i.U,{md:6,children:(0,v.jsx)(h.O,{type:"text",id:"firstName",label:"First Name",onChange:e=>{S(e.target.value)},value:A,name:"firstName"})}),(0,v.jsx)(i.U,{md:6,children:(0,v.jsx)(h.O,{type:"text",id:"lastName",label:"Last Name",onChange:e=>{O(e.target.value)},value:w,name:"lastName"})})]}),(0,v.jsxs)(d.s,{className:"mb-4",children:[(0,v.jsx)(i.U,{md:6,children:(0,v.jsx)(h.O,{type:"email",id:"email",label:"Email",onChange:e=>{k(e.target.value)},value:N,name:"email"})}),(0,v.jsx)(i.U,{md:6,children:(0,v.jsx)(h.O,{type:"text",id:"username",label:"Username",onChange:e=>{y(e.target.value)},value:C,name:"username"})})]}),(0,v.jsx)(d.s,{className:"mb-4",children:(0,v.jsx)(i.U,{md:6,children:(0,v.jsxs)(u.M,{id:"role",label:"Role",name:"role",onChange:e=>{ee(e.target.value)},value:$,children:[(0,v.jsx)("option",{children:"Choose..."}),(0,v.jsx)("option",{value:"admin",children:"Admin"}),(0,v.jsx)("option",{value:"client",children:"Client"}),(0,v.jsx)("option",{value:"clientViewOnly",children:"Client View Only"})]})})}),(0,v.jsxs)(d.s,{className:"mb-4",children:[(0,v.jsx)(i.U,{md:6,children:(0,v.jsx)(h.O,{type:"text",id:"age",label:"Age",onChange:e=>{ce(e.target.value)},value:oe,name:"age"})}),(0,v.jsx)(i.U,{md:6,children:(0,v.jsx)(p.c,{locale:"en-US",id:"dob",label:"DOB",onChange:e=>{te(e.target.value)},value:ae,name:"dob"})})]}),(0,v.jsxs)(d.s,{children:[(0,v.jsx)(i.U,{children:(0,v.jsx)(h.O,{type:"text",id:"homePhone",label:"Home Phone",onChange:e=>{se(e.target.value)},value:le,name:"homePhone"})}),(0,v.jsx)(i.U,{children:(0,v.jsx)(h.O,{type:"text",id:"workPhone",label:"Work Phone",onChange:e=>{re(e.target.value)},value:ne,name:"workPhone"})}),(0,v.jsx)(i.U,{children:(0,v.jsx)(h.O,{type:"text",id:"mobile",label:"Mobile",onChange:e=>{ie(e.target.value)},value:de,name:"mobile"})})]})]})]})})}),(0,v.jsx)(d.s,{children:(0,v.jsx)(i.U,{md:9,lg:7,xl:12,children:(0,v.jsxs)(o.E,{className:"mb-4",children:[(0,v.jsx)(c.V,{children:"Home Address"}),(0,v.jsxs)(m.W,{className:"p-4",children:[(0,v.jsx)(i.U,{xs:12,className:"mb-4",children:(0,v.jsx)(h.O,{id:"inputAddress",name:"hstreet1",label:"Address",placeholder:"1234 Main St",onChange:e=>{T(e.target.value)},value:U})}),(0,v.jsx)(i.U,{xs:12,className:"mb-4",children:(0,v.jsx)(h.O,{id:"inputAddress2",label:"Address 2",name:"hstreet2",placeholder:"Apartment, studio, or floor",onChange:e=>{I(e.target.value)},value:z})}),(0,v.jsx)(i.U,{xs:12,className:"mb-4",children:(0,v.jsx)(h.O,{id:"inputAddress3",label:"Address 3",name:"hstreet3",placeholder:"Apartment, studio, or floor",onChange:e=>{E(e.target.value)},value:_})}),(0,v.jsxs)(d.s,{children:[(0,v.jsx)(i.U,{md:6,children:(0,v.jsx)(h.O,{id:"inputCity",label:"City",name:"hcity",onChange:e=>{V(e.target.value)},value:P})}),(0,v.jsx)(i.U,{md:4,children:(0,v.jsx)(h.O,{id:"hstate",label:"State",name:"hstate",onChange:e=>{D(e.target.value)},value:F})}),(0,v.jsx)(i.U,{md:2,children:(0,v.jsx)(h.O,{id:"inputZip",label:"Zip",name:"hzip",onChange:e=>{R(e.target.value)},value:L})})]})]})]})})}),(0,v.jsx)(d.s,{children:(0,v.jsxs)(o.E,{children:[(0,v.jsx)(c.V,{children:"Office Address"}),(0,v.jsxs)(m.W,{className:"p-4",children:[(0,v.jsx)(i.U,{xs:12,className:"mb-4",children:(0,v.jsx)(h.O,{id:"inputAddress",name:"wstreet1",label:"Address",placeholder:"1234 Main St",onChange:e=>{Z(e.target.value)},value:M})}),(0,v.jsx)(i.U,{xs:12,className:"mb-4",children:(0,v.jsx)(h.O,{id:"inputAddress2",label:"Address 2",name:"wstreet2",placeholder:"Apartment, studio, or floor",onChange:e=>{B(e.target.value)},value:W})}),(0,v.jsx)(i.U,{xs:12,className:"mb-4",children:(0,v.jsx)(h.O,{id:"inputAddress3",label:"Address 3",name:"wstreet3",placeholder:"Apartment, studio, or floor",onChange:e=>{H(e.target.value)},value:q})}),(0,v.jsxs)(d.s,{children:[(0,v.jsx)(i.U,{md:6,children:(0,v.jsx)(h.O,{id:"inputCity",label:"City",name:"wcity",onChange:e=>{G(e.target.value)},value:Q})}),(0,v.jsx)(i.U,{md:4,children:(0,v.jsx)(h.O,{id:"wstate",label:"State",name:"wstate",onChange:e=>{K(e.target.value)},value:J})}),(0,v.jsx)(i.U,{md:2,children:(0,v.jsx)(h.O,{id:"inputZip",label:"Zip",name:"wzip",onChange:e=>{Y(e.target.value)},value:X})})]})]})]})}),(0,v.jsx)(d.s,{className:"p-4",children:(0,v.jsx)(i.U,{xs:12,children:(0,v.jsx)(b.Q,{color:"primary",type:"submit",disabled:me,className:"float-end",children:"Update User"})})})]})})})}},68524:(e,a,t)=>{t.d(a,{c:()=>i});var l=t(5664),s=t(65043),n=t(65173),r=t.n(n),d=t(78306),i=(0,s.forwardRef)((function(e,a){var t=e.date,n=e.id,r=e.onDateChange,i=e.placeholder,o=void 0===i?"Select date":i,c=(0,l.Tt)(e,["date","id","onDateChange","placeholder"]);return s.createElement(d.p,(0,l.Cl)({calendars:1,id:n,startDate:t,onStartDateChange:r,placeholder:o,range:!1,ref:a},c))}));i.displayName="CDatePicker",i.propTypes=(0,l.Cl)((0,l.Cl)({},d.p.propTypes),{date:r().oneOfType([r().instanceOf(Date),r().string]),onDateChange:r().func})},56267:(e,a,t)=>{t.d(a,{q:()=>i});var l=t(5664),s=t(65043),n=t(65173),r=t.n(n),d=t(65689),i=(0,s.forwardRef)((function(e,a){var t=e.children,n=e.className,r=e.validated,i=(0,l.Tt)(e,["children","className","validated"]);return s.createElement("form",(0,l.Cl)({className:(0,d.A)({"was-validated":r},n)||void 0},i,{ref:a}),t)}));i.propTypes={children:r().node,className:r().string,validated:r().bool},i.displayName="CForm"},9447:(e,a,t)=>{t.d(a,{O:()=>o});var l=t(5664),s=t(65043),n=t(65173),r=t.n(n),d=t(65689),i=t(95755),o=(0,s.forwardRef)((function(e,a){var t,n=e.children,r=e.className,o=e.delay,c=void 0!==o&&o,m=e.feedback,h=e.feedbackInvalid,u=e.feedbackValid,p=e.floatingClassName,b=e.floatingLabel,x=e.id,f=e.invalid,v=e.label,g=e.onChange,j=e.plainText,C=e.size,y=e.text,N=e.tooltipFeedback,k=e.type,A=void 0===k?"text":k,S=e.valid,w=(0,l.Tt)(e,["children","className","delay","feedback","feedbackInvalid","feedbackValid","floatingClassName","floatingLabel","id","invalid","label","onChange","plainText","size","text","tooltipFeedback","type","valid"]),O=(0,s.useState)(),U=O[0],T=O[1];return(0,s.useEffect)((function(){var e=setTimeout((function(){return U&&g&&g(U)}),"number"===typeof c?c:500);return function(){return clearTimeout(e)}}),[U]),s.createElement(i.O,{describedby:w["aria-describedby"],feedback:m,feedbackInvalid:h,feedbackValid:u,floatingClassName:p,floatingLabel:b,id:x,invalid:f,label:v,text:y,tooltipFeedback:N,valid:S},s.createElement("input",(0,l.Cl)({className:(0,d.A)(j?"form-control-plaintext":"form-control",(t={},t["form-control-".concat(C)]=C,t["form-control-color"]="color"===A,t["is-invalid"]=f,t["is-valid"]=S,t),r),id:x,type:A,onChange:function(e){return c?T(e):g&&g(e)}},w,{ref:a}),n))}));o.propTypes=(0,l.Cl)({className:r().string,id:r().string,delay:r().oneOfType([r().bool,r().number]),plainText:r().bool,size:r().oneOf(["sm","lg"]),type:r().oneOfType([r().oneOf(["color","file","text"]),r().string])},i.O.propTypes),o.displayName="CFormInput"},81267:(e,a,t)=>{t.d(a,{M:()=>o});var l=t(5664),s=t(65043),n=t(65173),r=t.n(n),d=t(65689),i=t(95755),o=(0,s.forwardRef)((function(e,a){var t,n=e.children,r=e.className,o=e.feedback,c=e.feedbackInvalid,m=e.feedbackValid,h=e.floatingClassName,u=e.floatingLabel,p=e.htmlSize,b=e.id,x=e.invalid,f=e.label,v=e.options,g=e.size,j=e.text,C=e.tooltipFeedback,y=e.valid,N=(0,l.Tt)(e,["children","className","feedback","feedbackInvalid","feedbackValid","floatingClassName","floatingLabel","htmlSize","id","invalid","label","options","size","text","tooltipFeedback","valid"]);return s.createElement(i.O,{describedby:N["aria-describedby"],feedback:o,feedbackInvalid:c,feedbackValid:m,floatingClassName:h,floatingLabel:u,id:b,invalid:x,label:f,text:j,tooltipFeedback:C,valid:y},s.createElement("select",(0,l.Cl)({id:b,className:(0,d.A)("form-select",(t={},t["form-select-".concat(g)]=g,t["is-invalid"]=x,t["is-valid"]=y,t),r),size:p},N,{ref:a}),v?v.map((function(e,a){return s.createElement("option",(0,l.Cl)({},"object"===typeof e&&e.disabled&&{disabled:e.disabled},"object"===typeof e&&void 0!==e.value&&{value:e.value},{key:a}),"string"===typeof e?e:e.label)})):n))}));o.propTypes=(0,l.Cl)({className:r().string,htmlSize:r().number,options:r().array},i.O.propTypes),o.displayName="CFormSelect"}}]);
//# sourceMappingURL=9797.d7870955.chunk.js.map