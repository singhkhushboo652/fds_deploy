"use strict";(self.webpackChunk_coreui_coreui_pro_react_admin_template_cra=self.webpackChunk_coreui_coreui_pro_react_admin_template_cra||[]).push([[3908],{62770:(e,r,a)=>{a.d(r,{Xh:()=>t});const t={Admin:"admin",Manufacturer:"Manufacturer",Distributor:"Distributor"}},83908:(e,r,a)=>{a.r(r),a.d(r,{default:()=>j});var t=a(65043),l=a(73216),c=a(35475),o=a(64716),s=a(50280),n=a(63821),i=a(67603),d=a(25943),m=a(52171),h=a(77608),u=a(6145),p=a(64214),b=a(11974),g=a(77154),x=(a(63401),a(62770),a(70579));const j=()=>{const e=(0,l.Zp)(),[r,a]=(0,t.useState)([]);(0,t.useEffect)((()=>{g.A.get("brand/findAll",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((e=>a(e.data.data))).catch((e=>console.error("error fetching brands",e)))}),[]);return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:"bg-body-tertiary min-vh-100 d-flex flex-row align-items-center",children:(0,x.jsx)(o.T,{children:(0,x.jsx)(s.s,{className:"justify-content-center",children:(0,x.jsx)(n.U,{xl:12,children:(0,x.jsx)(i.E,{className:"mb-4",children:(0,x.jsxs)(d.W,{className:"p-4",children:[(0,x.jsxs)(s.s,{className:"p-4",children:[(0,x.jsx)(n.U,{sm:5,children:(0,x.jsx)("h4",{children:"Brands"})}),(0,x.jsx)(n.U,{sm:7,className:"d-none d-md-block",children:(0,x.jsx)(c.N_,{to:"/addBrand",children:(0,x.jsx)(m.Q,{className:"btn btn-primary float-end",type:"button",children:"Add Brand"})})})]}),(0,x.jsx)(n.U,{md:12,children:(0,x.jsx)(h.P,{activePage:2,cleaner:!0,clickableRows:!0,columns:[{key:"name",label:"Name"},{key:"logo",label:"Logo"},{key:"actions",label:"Actions",filter:!1,sorter:!1,_style:{width:"20%"}}],columnFilter:!0,columnSorter:!0,items:r,itemsPerPageSelect:!0,itemsPerPage:5,pagination:!0,onFilteredItemsChange:e=>{console.log(e)},onSelectedItemsChange:e=>{console.log(e)},scopedColumns:{actions:r=>(0,x.jsxs)("td",{children:[(0,x.jsx)("div",{onClick:a=>e("/editBrand",{state:{brandId:r.id}}),children:(0,x.jsx)(u.A,{icon:p.I,className:"me-2"})}),r.permission?(0,x.jsx)(u.A,{icon:b.W,className:"me-2",onClick:e=>((e,r,a)=>{e.preventDefault(),window.confirm("You are about to Delete ".concat(a," and it will not be able to be retrieved. Are you sure?"))?g.A.delete("/brand/delete/".concat(r),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((e=>{window.location.reload()})).catch((e=>{console.error("Error deleting product:",e)})):console.log("Deletion canceled")})(e,r.id,r.name)}):""]})},selectable:!0,sorterValue:{column:"createdAt",state:"desc"},tableFilter:!0,tableProps:{className:"add-this-class",responsive:!0,striped:!0,hover:!0},tableBodyProps:{className:"align-middle"}})})]})})})})})})})}},11974:(e,r,a)=>{a.d(r,{W:()=>t});var t=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='227.313 363.313 312 278.627 396.687 363.313 419.313 340.687 334.627 256 419.313 171.313 396.687 148.687 312 233.373 227.313 148.687 204.687 171.313 289.373 256 204.687 340.687 227.313 363.313' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M472,64H194.644a24.091,24.091,0,0,0-17.42,7.492L16,241.623v28.754L177.224,440.508A24.091,24.091,0,0,0,194.644,448H472a24.028,24.028,0,0,0,24-24V88A24.028,24.028,0,0,0,472,64Zm-8,352H198.084L48,257.623v-3.246L198.084,96H464Z' class='ci-primary'/>"]},64214:(e,r,a)=>{a.d(r,{I:()=>t});var t=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M345.994,42.019,179.531,208.481A646.3,646.3,0,0,0,25.325,456.521a24.845,24.845,0,0,0,6,25.708l.087.087a24.84,24.84,0,0,0,17.611,7.342,25.172,25.172,0,0,0,8.1-1.344,646.283,646.283,0,0,0,248.04-154.207L471.62,167.646A88.831,88.831,0,0,0,345.994,42.019ZM282.531,311.48A614.445,614.445,0,0,1,60.419,453.221,614.435,614.435,0,0,1,202.158,231.108l99.162-99.161,80.372,80.372ZM448.993,145.019l-44.674,44.673L323.947,109.32l44.674-44.674a56.832,56.832,0,1,1,80.372,80.373Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=3908.976db391.chunk.js.map