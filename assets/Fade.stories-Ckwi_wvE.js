import{R as c,j as r}from"./iframe-BGBv2Rkz.js";import{o as d,_ as l}from"./index-Ds1DpZoa.js";import{B as g}from"./button-umO8R3TU.js";import"./preload-helper-Bs85Y4nq.js";const p=d({tagName:"ui-fade",elementClass:l,react:c}),E={title:"Components/Fade",component:p,parameters:{layout:"centered"},argTypes:{timeout:{control:{type:"number",min:0,max:2e3,step:50}},appear:{control:"boolean"},unmountOnExit:{control:"boolean"}},args:{timeout:300,appear:!0,unmountOnExit:!1}},x={padding:24,background:"var(--ui-color-primary, #1976d2)",color:"#fff",borderRadius:4},n=e=>{const[m,i]=c.useState(!0);return r.jsxs("div",{style:{display:"grid",gap:16,justifyItems:"center"},children:[r.jsx(g,{variant:"outline",size:"sm",onClick:()=>i(u=>!u),children:m?"Hide":"Show"}),r.jsx(p,{...e,show:m,children:r.jsx("div",{style:x,children:"Fade content"})})]})},a={render:e=>r.jsx(n,{...e})},o={args:{unmountOnExit:!0},render:e=>r.jsx(n,{...e})},s={args:{appear:!1},render:e=>r.jsx(n,{...e})},t={args:{timeout:1e3},render:e=>r.jsx(n,{...e})},h=["Default","UnmountOnExit","NoAppear","Slow"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <ToggleDemo {...args} />
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    unmountOnExit: true
  },
  render: (args: any) => <ToggleDemo {...args} />
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    appear: false
  },
  render: (args: any) => <ToggleDemo {...args} />
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    timeout: 1000
  },
  render: (args: any) => <ToggleDemo {...args} />
}`,...t.parameters?.docs?.source}}};export{a as Default,s as NoAppear,t as Slow,o as UnmountOnExit,h as __namedExportsOrder,E as default};
