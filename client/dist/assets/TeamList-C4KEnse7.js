import{j as e,ad as h,L as o}from"./index-Y2TAvrbt.js";import{T as t,a as x,b as j,c as l,d as n,e as g}from"./ListSkeleton-DIHVgHpc.js";const p=({teams:a,isDelete:i=!1,handleRemove:c,isAdmin:r=!1})=>e.jsx("div",{children:e.jsx(t,{component:h,children:e.jsxs(x,{"aria-label":"teams table",children:[e.jsx(j,{children:e.jsxs(l,{children:[e.jsx(n,{children:"#"}),e.jsx(n,{children:"Name"}),e.jsx(n,{align:"right",children:"Points"}),e.jsx(n,{align:"right",children:r&&"Members"}),i&&e.jsx(n,{align:"right",children:"Actions"})]})}),e.jsx(g,{children:a.map((s,d)=>e.jsxs(l,{children:[e.jsx(n,{component:"th",scope:"row",children:d+1}),e.jsx(n,{children:s.name}),e.jsx(n,{align:"right",children:s.points}),e.jsx(n,{align:"right",children:r&&s.members.length}),i&&e.jsx(n,{align:"right",children:e.jsx(o,{variant:"contained",color:"secondary",onClick:()=>c(s.id),children:"Remove"})})]},s.id))})]})})});export{p as T};
