import{R as m,j as r}from"./iframe-CteECbaa.js";import{o as d,aM as l}from"./index-CJ7Kg3ag.js";import{B as g}from"./button-DzjLxdZK.js";import"./preload-helper-Bs85Y4nq.js";const p=d({tagName:"ui-grow",elementClass:l,react:m}),S={title:"Components/Utils/Grow",component:p,parameters:{layout:"centered"},argTypes:{timeout:{control:{type:"number",min:0,max:2e3,step:50}},appear:{control:"boolean"},unmountOnExit:{control:"boolean"}},args:{timeout:300,appear:!0,unmountOnExit:!1}},x={padding:24,background:"var(--ui-color-bg-paper, #fff)",border:"1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12))",borderRadius:4,boxShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2)"},n=e=>{const[c,i]=m.useState(!0);return r.jsxs("div",{style:{display:"grid",gap:16,justifyItems:"center"},children:[r.jsx(g,{variant:"outline",size:"sm",onClick:()=>i(u=>!u),children:c?"Hide":"Show"}),r.jsx(p,{...e,show:c,children:r.jsx("div",{style:x,children:"Growing content"})})]})},o={render:e=>r.jsx(n,{...e})},a={args:{unmountOnExit:!0},render:e=>r.jsx(n,{...e})},s={args:{appear:!1},render:e=>r.jsx(n,{...e})},t={args:{timeout:1e3},render:e=>r.jsx(n,{...e})},b=["Default","UnmountOnExit","NoAppear","Slow"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};export{o as Default,s as NoAppear,t as Slow,a as UnmountOnExit,b as __namedExportsOrder,S as default};
