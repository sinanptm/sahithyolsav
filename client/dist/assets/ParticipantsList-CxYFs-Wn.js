import{j as e,$ as x,g as n}from"./index-CLFLJj7i.js";import{T as h,a as j,b as m,c as i,d as s,e as t}from"./Pagination-TmjqAlHS.js";const T=({participants:a,actions:r,handleRemove:d,handleAddProgram:o})=>e.jsx("div",{children:e.jsx(h,{component:x,children:e.jsxs(j,{"aria-label":"participants table",children:[e.jsx(m,{children:e.jsxs(i,{children:[e.jsx(s,{children:"#"}),e.jsx(s,{children:"Name"}),e.jsx(s,{children:"Team"}),e.jsx(s,{align:"left",children:"Points"}),e.jsx(s,{children:"Category"}),r&&e.jsx(s,{align:"right",children:"Actions"})]})}),e.jsx(t,{children:a.map((l,c)=>e.jsxs(i,{children:[e.jsx(s,{children:c+1}),e.jsx(s,{children:l.name}),e.jsx(s,{children:l.teamName}),e.jsx(s,{align:"left",children:l.points}),e.jsx(s,{children:l.category}),r&&e.jsxs(s,{align:"right",children:[r.remove&&l.points<=1&&e.jsx(n,{size:"small",variant:"contained",color:"secondary",onClick:()=>d(l.id),children:"Remove"}),r.addProgram&&e.jsx(n,{size:"small",variant:"contained",color:"success",onClick:()=>o(l.id),style:{marginLeft:10},children:"Add Program"})]})]},l.id))})]})})});export{T as P};
