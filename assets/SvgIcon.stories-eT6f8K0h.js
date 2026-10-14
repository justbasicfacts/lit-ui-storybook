import{j as e}from"./iframe-DpZyQfZJ.js";import"./index-3LxRijqB.js";import{S as r}from"./svg-icon-P6s0BOFD.js";import"./preload-helper-Bs85Y4nq.js";const o=e.jsx("path",{d:"M12 2 2 22h20L12 2zm0 4.5 6.5 13h-13L12 6.5z"}),m={title:"Components/Data display/SvgIcon",component:r,parameters:{layout:"centered"},argTypes:{viewBox:{control:"text"},fontSize:{control:"select",options:["small","medium","large","inherit"]},color:{control:"text"},label:{control:"text"}},args:{viewBox:"0 0 24 24",fontSize:"medium",color:"inherit"}},n={render:c=>e.jsx(r,{...c,children:o})},s={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:24},children:[e.jsx(r,{fontSize:"small",children:o}),e.jsx(r,{fontSize:"medium",children:o}),e.jsx(r,{fontSize:"large",children:o})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:24},children:[e.jsx(r,{color:"primary",children:o}),e.jsx(r,{color:"error",children:o}),e.jsx(r,{color:"success",children:o})]})},t={args:{label:"Warning"},render:c=>e.jsx(r,{...c,children:o})},g=["Default","Sizes","Colors","Labelled"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <SvgIcon {...args}>{path}</SvgIcon>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 24
  }}>
      <SvgIcon fontSize="small">{path}</SvgIcon>
      <SvgIcon fontSize="medium">{path}</SvgIcon>
      <SvgIcon fontSize="large">{path}</SvgIcon>
    </div>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 24
  }}>
      <SvgIcon color="primary">{path}</SvgIcon>
      <SvgIcon color="error">{path}</SvgIcon>
      <SvgIcon color="success">{path}</SvgIcon>
    </div>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Warning'
  },
  render: args => <SvgIcon {...args}>{path}</SvgIcon>
}`,...t.parameters?.docs?.source}}};export{a as Colors,n as Default,t as Labelled,s as Sizes,g as __namedExportsOrder,m as default};
