import{r as a,u as y,j as e,T as l,B as m}from"./index-Cdqi_yau.js";import{T as C}from"./TeamList-DEN3-iXu.js";import{u as P,S as v,L as h,A as B,P as F}from"./ListSkeleton-CBzyakC8.js";import"./TextField-D-ULi0DR.js";const D=()=>{const[c,g]=a.useState(1),[i,u]=a.useState(""),x=10,j=P(i,300),{data:s,error:n,isLoading:r,isFetching:d}=y({page:c,limit:x,search:j}),o=(s==null?void 0:s.teams)||[],p=(s==null?void 0:s.totalPages)||1,T=a.useCallback(t=>{g(t)},[]),S=a.useCallback(t=>{u(t.target.value)},[]),b=a.useMemo(()=>[...o].sort((t,f)=>f.points-t.points),[o]);return e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"h4",align:"center",gutterBottom:!0,children:"Teams"}),e.jsx(m,{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px",children:e.jsx(v,{value:i,onChange:S,placeholder:"Search teams..."})}),e.jsxs(m,{children:[r&&e.jsx(h,{}),n&&!r&&e.jsxs(B,{severity:"error",children:["Error: ",n.message]}),r&&d?e.jsx(h,{}):e.jsxs(e.Fragment,{children:[e.jsx(C,{teams:b}),e.jsx(F,{page:c,totalPages:p,onPageChange:T})]}),!r&&!n&&o.length===0&&e.jsx(l,{align:"center",variant:"body1",children:"No teams found."})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{})]})};export{D as default};
