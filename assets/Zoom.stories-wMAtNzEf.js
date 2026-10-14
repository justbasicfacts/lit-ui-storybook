import{j as r}from"./jsx-runtime-D8h-jwK5.js";import{R as c}from"./iframe-DP7DDnfB.js";import{o as l,aF as d}from"./index-CKKzZn3u.js";import{B as g}from"./button-CRh5SSeW.js";import"./preload-helper-Bs85Y4nq.js";const i=l({tagName:"ui-zoom",elementClass:d,react:c}),E={title:"Components/Zoom",component:i,parameters:{layout:"centered"},argTypes:{timeout:{control:{type:"number",min:0,max:2e3,step:50}},appear:{control:"boolean"},unmountOnExit:{control:"boolean"}},args:{timeout:300,appear:!0,unmountOnExit:!1}},x={display:"inline-flex",alignItems:"center",justifyContent:"center",width:96,height:96,background:"var(--ui-color-secondary, #9c27b0)",color:"#fff",borderRadius:8},n=e=>{const[m,p]=c.useState(!0);return r.jsxs("div",{style:{display:"grid",gap:16,justifyItems:"center"},children:[r.jsx(g,{variant:"outline",size:"sm",onClick:()=>p(u=>!u),children:m?"Hide":"Show"}),r.jsx(i,{...e,show:m,children:r.jsx("div",{style:x,children:"Zoom"})})]})},o={render:e=>r.jsx(n,{...e})},a={args:{unmountOnExit:!0},render:e=>r.jsx(n,{...e})},s={args:{appear:!1},render:e=>r.jsx(n,{...e})},t={args:{timeout:1e3},render:e=>r.jsx(n,{...e})},D=["Default","UnmountOnExit","NoAppear","Slow"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <ToggleDemo {...args} />
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    unmountOnExit: true
  },
  render: (args: any) => <ToggleDemo {...args} />
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    appear: false
  },
  render: (args: any) => <ToggleDemo {...args} />
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    timeout: 1000
  },
  render: (args: any) => <ToggleDemo {...args} />
}`,...t.parameters?.docs?.source}}};export{o as Default,s as NoAppear,t as Slow,a as UnmountOnExit,D as __namedExportsOrder,E as default};
