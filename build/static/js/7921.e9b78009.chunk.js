"use strict";(self.webpackChunk_coreui_coreui_pro_react_admin_template_cra=self.webpackChunk_coreui_coreui_pro_react_admin_template_cra||[]).push([[7921],{7921:(e,a,t)=>{t.r(a),t.d(a,{default:()=>S});var s=t(65043),l=t(73216),n=t(64716),i=t(56267),r=t(50280),o=t(63821),u=t(67603),d=t(4522),c=t(25943),m=t(81267),h=t(9447),g=t(1289),x=t(24685),j=t(52171),v=t(77154),p=t(63401),b=t(70579);const S=()=>{var e;(0,l.Zp)();const a=null===(e=(0,l.zy)().state)||void 0===e?void 0:e.productId,[t,S]=(0,s.useState)(""),[y,C]=(0,s.useState)(""),[U,f]=(0,s.useState)(""),[N,F]=(0,s.useState)(""),[D,I]=(0,s.useState)(""),[O,z]=(0,s.useState)(""),[P,L]=(0,s.useState)(0),[M,T]=(0,s.useState)(0),[k,W]=(0,s.useState)(0),[A,_]=(0,s.useState)(""),[R,w]=(0,s.useState)(""),[Q,B]=(0,s.useState)(""),[E,V]=(0,s.useState)(""),[H,G]=(0,s.useState)(""),[Y,q]=(0,s.useState)(""),[Z,J]=(0,s.useState)(""),[K,X]=(0,s.useState)(""),[$,ee]=(0,s.useState)(""),[ae,te]=(0,s.useState)(""),[se,le]=(0,s.useState)(""),[ne,ie]=(0,s.useState)(""),[re,oe]=(0,s.useState)(""),[ue,de]=(0,s.useState)(""),[ce,me]=(0,s.useState)(""),[he,ge]=(0,s.useState)(""),[xe,je]=(0,s.useState)(""),[ve,pe]=(0,s.useState)(""),[be,Se]=(0,s.useState)(""),[ye,Ce]=(0,s.useState)(""),[Ue,fe]=(0,s.useState)(""),[Ne,Fe]=(0,s.useState)(""),[De,Ie]=(0,s.useState)(""),[Oe,ze]=(0,s.useState)(""),[Pe,Le]=(0,s.useState)(""),[Me,Te]=(0,s.useState)(""),[ke,We]=(0,s.useState)(""),[Ae,_e]=(0,s.useState)(""),[Re,we]=(0,s.useState)(""),[Qe,Be]=(0,s.useState)(""),[Ee,Ve]=(0,s.useState)(""),[He,Ge]=(0,s.useState)(""),[Ye,qe]=(0,s.useState)(""),[Ze,Je]=(0,s.useState)([]),[Ke,Xe]=(0,s.useState)([]),[$e,ea]=(0,s.useState)([]),[aa,ta]=(0,s.useState)([]),[sa,la]=(0,s.useState)([{imageType:"",logo:"",logoFile:null,base64Image:""}]),[na,ia]=(0,s.useState)(!1),[ra,oa]=(0,s.useState)([]),[ua,da]=(0,s.useState)({}),ca=async(e,a)=>{const{name:t,value:s,files:l}=a.target,n=[...sa];if(l){const a=l[0];n[e].logoFile=URL.createObjectURL(a);const t=new FileReader;t.readAsDataURL(a),t.onloadend=()=>{n[e].base64Image=t.result,la(n)}}else n[e][t]=s,la(n)};(0,s.useEffect)((()=>{v.A.get("client/findAll/distributer",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((e=>oa(e.data.data))).catch((e=>console.error("error fetching clients",e)))}),[]),(0,s.useEffect)((()=>{v.A.get("product/"+a,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((e=>{if(e.data){let a=e.data.data;f(a.name),I(a.productType),F(a.manuItemNum),S(a.manuDesc),C(a.distItemNum),le(a.manuMarkStmt),te(a.manufacturerId),ge(a.gtinNum),ie(a.caseCount),oe(a.masterPack),de(a.grossCaseWeight),me(a.masterUnitSize),z(a.caseDimeTitle),L(a.caseDimeLength),T(a.caseDimeWidth),W(a.caseDimeHeight),_(a.servingSize),w(a.shelfLifeManu),B(a.storageMethod),ee(a.shelfLife),G(a.ingreList),V(a.tips),q(a.servicePerCont),J(a.serviceSizeQty),X(a.serviceSizeWt),je(a.calories),pe(a.cholestrol),Fe(a.sodium),Se(a.totalFat),Ce(a.saturatedFat),fe(a.transFat),Le(a.totalSugar),Te(a.addedSugar),Ie(a.totalCarboht),ze(a.dietaryFiber),We(a.protein),_e(a.vitD),we(a.calcuim),Be(a.iron),Ve(a.potassium),Ge(a.cnLabel),qe(a.isActive);let t=a.images,s=[];t.map((e=>{let a={imageType:e.imageType,logo:e.imagePath,logoFile:"http://node93696-pimgmt.j.scaleforce.net:11064/"+e.imagePath,base64Image:"",id:e.id};s.push(a)})),la(s)}}))}),[]);return(0,b.jsx)("div",{className:"bg-body-tertiary min-vh-75 d-flex flex-row align-items-center",children:(0,b.jsx)(n.T,{children:(0,b.jsxs)(i.q,{className:"row g-3",onSubmit:e=>(async e=>{e.preventDefault(),ia(!0);const s=sa.map((e=>({imageType:e.imageType,image:e.base64Image||e.logo,id:e.id||null})));let l={manuDesc:t,name:U,distItemNum:y,manuItemNum:N,manuMarkStmt:se,manufacturerId:ae,productType:D,caseDimeTitle:O,caseDimeLength:P,caseDimeWidth:M,caseDimeHeight:k,servingSize:A,shelfLifeManu:R,storageMethod:Q,tips:E,ingreList:H,servicePerCont:Y,serviceSizeQty:Z,serviceSizeWt:K,shelfLife:$,masterPack:re,grossCaseWeight:ue,masterUnitSize:ce,gtinNum:he,caseCount:ne,calories:xe,cholestrol:ve,totalFat:be,saturatedFat:ye,transFat:Ue,sodium:Ne,totalCarboht:De,dietaryFiber:Oe,totalSugar:Pe,addedSugar:Me,protein:ke,vitD:Ae,calcuim:Re,iron:Qe,potassium:Ee,cnLabel:He,isActive:Ye,images:s};v.A.patch("/product/update/"+a,l,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((e=>{p.oR.success(e.data.message),ia(!1)})).catch((e=>{ia(!1),console.log(e)}))})(e),children:[(0,b.jsx)(r.s,{className:"justify-content-center",children:(0,b.jsx)(o.U,{md:9,lg:7,xl:12,children:(0,b.jsxs)(u.E,{className:"mb-4",children:[(0,b.jsx)(d.V,{children:"MFG Product Information"}),(0,b.jsxs)(c.W,{className:"p-4",children:[(0,b.jsxs)(r.s,{className:"mb-4",children:[(0,b.jsx)(o.U,{md:6,children:(0,b.jsxs)(m.M,{id:"manufacturerId",label:"Manufacturer",name:"manufacturerId",onChange:e=>{te(e.target.value)},value:ae,children:[(0,b.jsx)("option",{children:"...Choose"}),ra.map(((e,a)=>(0,b.jsx)("option",{value:e.id,children:e.companyName},a)))]})}),(0,b.jsx)(o.U,{md:6,children:(0,b.jsx)(h.O,{type:"number",id:"manuItemNum",label:"Manufacturer Item Number",onChange:e=>{F(e.target.value)},value:N,name:"manuItemNum"})})]}),(0,b.jsxs)(r.s,{className:"mb-4",children:[(0,b.jsx)(o.U,{md:6,children:(0,b.jsx)(h.O,{type:"text",id:"distItemNum",label:"Distributor Item Number",onChange:e=>{C(e.target.value)},value:y,name:"distItemNum"})}),(0,b.jsx)(o.U,{md:6,children:(0,b.jsx)(h.O,{type:"number",id:"gtinNum",label:"GTIN Number",onChange:e=>{ge(e.target.value)},value:he,name:"gtinNum"})})]}),(0,b.jsx)(r.s,{className:"mb-4",children:(0,b.jsx)(o.U,{md:12,children:(0,b.jsx)(h.O,{type:"text",id:"name",label:"Name",onChange:e=>{f(e.target.value)},value:U,name:"name"})})}),(0,b.jsx)(r.s,{className:"mb-4",children:(0,b.jsx)(o.U,{md:12,children:(0,b.jsx)(g.I,{id:"manuDesc",label:"Product Description",onChange:e=>{S(e.target.value)},value:t,name:"manuDesc"})})}),(0,b.jsx)(r.s,{className:"mb-4",children:(0,b.jsx)(o.U,{md:12,children:(0,b.jsx)(g.I,{id:"manuMarkStmt",label:"Product Marketing Statement",onChange:e=>{le(e.target.value)},value:se,name:"manuMarkStmt"})})}),(0,b.jsx)(r.s,{className:"mb-4",children:(0,b.jsx)(o.U,{md:6,children:(0,b.jsxs)(m.M,{id:"productType",label:"Product Type",name:"productType",onChange:e=>{I(e.target.value)},value:D,children:[(0,b.jsx)("option",{children:"Choose..."}),(0,b.jsx)("option",{value:"Paper",children:"Paper"}),(0,b.jsx)("option",{value:"Disposables",children:"Disposables"}),(0,b.jsx)("option",{value:"Beverages",children:"Beverages"}),(0,b.jsx)("option",{value:"Food-Frozen",children:"Food-Frozen"}),(0,b.jsx)("option",{value:"Food-Fresh",children:"Food-Fresh"}),(0,b.jsx)("option",{value:"DryFoods",children:"Dry Foods"}),(0,b.jsx)("option",{value:"SmallWares",children:"Small Wares"})]})})})]})]})})}),(0,b.jsx)(r.s,{children:(0,b.jsx)(o.U,{md:9,lg:7,xl:12,children:(0,b.jsxs)(u.E,{className:"mb-4",children:[(0,b.jsx)(d.V,{children:"Product Images"}),(0,b.jsxs)(c.W,{className:"p-4",children:[sa.map(((e,a)=>(0,b.jsxs)(r.s,{className:"mb-3",children:[(0,b.jsx)(o.U,{children:(0,b.jsxs)(m.M,{id:"imageType".concat(a),name:"imageType",value:e.imageType,onChange:e=>ca(a,e),children:[(0,b.jsx)("option",{value:"",children:"...Choose"}),(0,b.jsx)("option",{value:"close",children:"Closed Case"}),(0,b.jsx)("option",{value:"open",children:"Open Case"}),(0,b.jsx)("option",{value:"innerPack",children:"Inner Pack"}),(0,b.jsx)("option",{value:"raw",children:"Raw/Uncooked"}),(0,b.jsx)("option",{value:"plated",children:"Plated"}),(0,b.jsx)("option",{value:"styled",children:"Styled"})]})}),(0,b.jsxs)(o.U,{children:[(0,b.jsx)(h.O,{type:"file",id:"productImage".concat(a),name:"logo",onChange:e=>ca(a,e)}),e.logoFile&&(0,b.jsx)(x.t,{rounded:!0,thumbnail:!0,width:200,height:200,src:e.logoFile})]}),(0,b.jsx)(o.U,{children:(0,b.jsx)(j.Q,{color:"danger",onClick:()=>(e=>{const a=[...sa];a.splice(e,1),la(a)})(a),children:"Remove"})})]},a))),(0,b.jsx)(j.Q,{type:"button",onClick:()=>{la([...sa,{imageType:"",logo:"",logoFile:null,base64Image:""}])},className:"btn btn-primary",children:"Add Image"})]})]})})}),(0,b.jsx)(r.s,{children:(0,b.jsx)(o.U,{md:9,lg:7,xl:12,children:(0,b.jsxs)(u.E,{className:"mb-4",children:[(0,b.jsx)(d.V,{children:"Product Attributes"}),(0,b.jsxs)(c.W,{className:"p-4",children:[(0,b.jsxs)(r.s,{className:"mb-4",children:[(0,b.jsx)(o.U,{children:(0,b.jsx)(h.O,{type:"number",locale:"en-US",id:"caseCount",label:"Case Count",onChange:e=>{ie(e.target.value)},value:ne,name:"caseCount"})}),(0,b.jsx)(o.U,{children:(0,b.jsx)(h.O,{type:"number",id:"masterPack",label:"Master Pack",onChange:e=>{oe(e.target.value)},value:re,name:"masterPack"})}),(0,b.jsx)(o.U,{children:(0,b.jsx)(h.O,{type:"number",id:"grossCaseWeight",label:"Gross Case Weight",onChange:e=>{de(e.target.value)},value:ue,name:"grossCaseWeight"})}),(0,b.jsx)(o.U,{children:(0,b.jsx)(h.O,{type:"number",id:"masterUnitSize",label:"Master Unit Size",onChange:e=>{me(e.target.value)},value:ce,name:"masterUnitSize"})})]}),(0,b.jsxs)(r.s,{className:"mb-4",children:[(0,b.jsx)(o.U,{children:(0,b.jsx)(h.O,{type:"text",id:"caseDimeTitle",name:"caseDimeTitle",label:"Case Dimensions",placeholder:"title",onChange:e=>{z(e.target.value)},value:O,invalid:!!ua.caseDimeTitle})}),(0,b.jsx)(o.U,{children:(0,b.jsx)(h.O,{type:"number",id:"caseDimeLength",label:"Length",onChange:e=>{L(e.target.value)},value:P,name:"masterUnitSize",invalid:!!ua.caseDimeLength})}),(0,b.jsx)(o.U,{children:(0,b.jsx)(h.O,{type:"number",id:"caseDimeWidth",label:"Width",onChange:e=>{T(e.target.value)},value:M,name:"masterUnitSize",invalid:!!ua.caseDimeWidth})}),(0,b.jsx)(o.U,{children:(0,b.jsx)(h.O,{type:"number",id:"caseDimeHeight",label:"Height",onChange:e=>{W(e.target.value)},value:k,name:"masterUnitSize",invalid:!!ua.caseDimeHeight})})]}),(0,b.jsxs)(r.s,{className:"mb-4",children:[(0,b.jsx)(o.U,{children:(0,b.jsx)(h.O,{type:"text",id:"shelfLifeManu",label:"Shelf Life from Manufacturer",name:"shelfLifeManu",onChange:e=>{w(e.target.value)},value:R})}),(0,b.jsx)(o.U,{children:(0,b.jsxs)(m.M,{id:"storageMethod",label:"Storage Method",name:"storageMethod",onChange:e=>{B(e.target.value)},value:Q,children:[(0,b.jsx)("option",{children:"Choose..."}),(0,b.jsx)("option",{value:"Dry",children:"Dry"}),(0,b.jsx)("option",{value:"Refrigerated",children:"Refrigerated"}),(0,b.jsx)("option",{value:"Frozen",children:"Frozen"})]})}),(0,b.jsx)(o.U,{children:(0,b.jsxs)(m.M,{id:"shelfLife",label:"Shelf Life",name:"shelfLife",onChange:e=>{ee(e.target.value)},value:$,children:[(0,b.jsx)("option",{children:"Choose..."}),(0,b.jsx)("option",{value:"UseByDate",children:"Use By Date"}),(0,b.jsx)("option",{value:"days365",children:"365 days"}),(0,b.jsx)("option",{value:"days365Plus",children:"365 days plus"})]})})]}),(0,b.jsx)(r.s,{className:"mb-4",children:(0,b.jsx)(o.U,{md:12,children:(0,b.jsx)(g.I,{id:"ingreList",label:"List of all Ingredients",onChange:e=>{G(e.target.value)},value:H,name:"ingreList"})})}),(0,b.jsx)(r.s,{className:"mb-4",children:(0,b.jsx)(o.U,{md:12,children:(0,b.jsx)(g.I,{id:"tips",label:"Tips & Handling",onChange:e=>{V(e.target.value)},value:E,name:"tips"})})})]})]})})}),(0,b.jsx)(r.s,{children:(0,b.jsxs)(u.E,{children:[(0,b.jsx)(d.V,{children:"Nutritional Facts"}),(0,b.jsxs)(c.W,{className:"p-4",children:[(0,b.jsxs)(r.s,{children:[(0,b.jsx)(o.U,{children:(0,b.jsx)(h.O,{type:"number",id:"calories",label:"Calories",onChange:e=>{je(e.target.value)},value:xe,name:"calories"})}),(0,b.jsx)(o.U,{children:(0,b.jsx)(h.O,{type:"number",id:"cholestrol",label:"Cholesterol (mg)",onChange:e=>{pe(e.target.value)},value:ve,name:"cholestrol"})}),(0,b.jsx)(o.U,{children:(0,b.jsx)(h.O,{type:"number",id:"sodium",label:"Sodium (mg)",onChange:e=>{Fe(e.target.value)},value:Ne,name:"sodium"})})]}),(0,b.jsxs)(r.s,{children:[(0,b.jsx)(o.U,{children:(0,b.jsx)(h.O,{type:"number",id:"totalFat",label:"Total Fat (g)",onChange:e=>{Se(e.target.value)},value:be,name:"totalFat"})}),(0,b.jsx)(o.U,{children:(0,b.jsx)(h.O,{type:"number",id:"saturatedFat",label:"Saturated Fat (g)",onChange:e=>{Ce(e.target.value)},value:ye,name:"saturatedFat"})}),(0,b.jsx)(o.U,{children:(0,b.jsx)(h.O,{type:"number",id:"transFat",label:"Trans Fat (g)",onChange:e=>{fe(e.target.value)},value:Ue,name:"transFat"})})]}),(0,b.jsxs)(r.s,{children:[(0,b.jsx)(o.U,{children:(0,b.jsx)(h.O,{type:"number",id:"totalCarboht",label:"Total Carbohydrate (g)",onChange:e=>{Ie(e.target.value)},value:De,name:"totalCarboht"})}),(0,b.jsx)(o.U,{children:(0,b.jsx)(h.O,{type:"number",id:"totalSugar",label:"Total Sugars (g)",onChange:e=>{Le(e.target.value)},value:Pe,name:"totalSugar"})}),(0,b.jsx)(o.U,{children:(0,b.jsx)(h.O,{type:"number",id:"addedSugar",label:"Added Sugars (g)",onChange:e=>{Te(e.target.value)},value:Me,name:"addedSugar"})})]}),(0,b.jsxs)(r.s,{children:[(0,b.jsx)(o.U,{children:(0,b.jsx)(h.O,{type:"number",id:"protein",label:"Protein (g)",onChange:e=>{We(e.target.value)},value:ke,name:"protein"})}),(0,b.jsx)(o.U,{children:(0,b.jsx)(h.O,{type:"number",id:"dietaryFiber",label:"Dietary Fiber (g)",onChange:e=>{ze(e.target.value)},value:Oe,name:"dietaryFiber"})}),(0,b.jsx)(o.U,{children:(0,b.jsx)(h.O,{type:"number",id:"vitD",label:" Vitamin D (mcg)",onChange:e=>{_e(e.target.value)},value:Ae,name:"vitD"})})]}),(0,b.jsxs)(r.s,{children:[(0,b.jsx)(o.U,{children:(0,b.jsx)(h.O,{type:"number",id:"calcuim",label:"Calcium (mg)",onChange:e=>{we(e.target.value)},value:Re,name:"calcuim"})}),(0,b.jsx)(o.U,{children:(0,b.jsx)(h.O,{type:"number",id:"iron",label:"Iron (mg)",onChange:e=>{Be(e.target.value)},value:Qe,name:"iron"})}),(0,b.jsx)(o.U,{children:(0,b.jsx)(h.O,{type:"number",id:"potassium",label:"Potassium (mg)",onChange:e=>{Ve(e.target.value)},value:Ee,name:"potassium"})})]}),(0,b.jsxs)(r.s,{children:[(0,b.jsx)(o.U,{children:(0,b.jsx)(h.O,{type:"number",id:"servingSize",label:"Serving Size",name:"servingSize",onChange:e=>{_(e.target.value)},value:A})}),(0,b.jsx)(o.U,{children:(0,b.jsx)(h.O,{type:"number",id:"servicePerCont",label:"Servings per Container",onChange:e=>{q(e.target.value)},value:Y,name:"servicePerCont"})}),(0,b.jsx)(o.U,{children:(0,b.jsx)(h.O,{type:"number",id:"serviceSizeQty",label:"Serving Size Qty",onChange:e=>{J(e.target.value)},value:Z,name:"serviceSizeQty"})}),(0,b.jsx)(o.U,{children:(0,b.jsx)(h.O,{type:"number",id:"serviceSizeWt",label:"Serving Size Weight (g)",onChange:e=>{X(e.target.value)},value:K,name:"serviceSizeWt"})})]}),(0,b.jsx)(r.s,{className:"mb-4",children:(0,b.jsx)(o.U,{children:(0,b.jsxs)(m.M,{id:"cnLabel",label:"C N Label",name:"cnLabel",onChange:e=>{Ge(e.target.value)},value:He,children:[(0,b.jsx)("option",{value:"Yes",children:"Yes"}),(0,b.jsx)("option",{value:"No",children:"No"})]})})})]})]})}),(0,b.jsx)(r.s,{children:(0,b.jsxs)(u.E,{className:"mb-4",children:[(0,b.jsx)(d.V,{children:"Visibility"}),(0,b.jsx)(c.W,{className:"p-4",children:(0,b.jsx)(r.s,{className:"mb-4",children:(0,b.jsx)(o.U,{children:(0,b.jsxs)(m.M,{id:"isActive",label:"Published Product",name:"isActive",onChange:e=>{qe(e.target.value)},value:Ye,children:[(0,b.jsx)("option",{value:"true",children:"Published"}),(0,b.jsx)("option",{value:"false",children:"Unpublished"})]})})})})]})}),(0,b.jsx)(r.s,{className:"p-4",children:(0,b.jsx)(o.U,{xs:12,children:(0,b.jsx)(j.Q,{color:"primary",type:"submit",disabled:na,className:"float-end",children:"Update Product"})})})]})})})}}}]);
//# sourceMappingURL=7921.e9b78009.chunk.js.map