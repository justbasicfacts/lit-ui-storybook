import{R as l,j as e}from"./iframe-BGBv2Rkz.js";import{o as i,ay as d}from"./index-Ds1DpZoa.js";import"./preload-helper-Bs85Y4nq.js";const r=i({tagName:"ui-svg-icon",elementClass:d,react:l}),n=e.jsx("path",{d:"M12 2 2 22h20L12 2zm0 4.5 6.5 13h-13L12 6.5z"}),S={title:"Components/SvgIcon",component:r,parameters:{layout:"centered"},argTypes:{viewBox:{control:"text"},fontSize:{control:"select",options:["small","medium","large","inherit"]},color:{control:"text"},label:{control:"text"}},args:{viewBox:"0 0 24 24",fontSize:"medium",color:"inherit"}},o={render:c=>e.jsx(r,{...c,children:n})},s={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:24},children:[e.jsx(r,{fontSize:"small",children:n}),e.jsx(r,{fontSize:"medium",children:n}),e.jsx(r,{fontSize:"large",children:n})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:24},children:[e.jsx(r,{color:"primary",children:n}),e.jsx(r,{color:"error",children:n}),e.jsx(r,{color:"success",children:n})]})},t={args:{label:"Warning"},render:c=>e.jsx(r,{...c,children:n})},v=["Default","Sizes","Colors","Labelled"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <SvgIcon {...args}>{path}</SvgIcon>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};export{a as Colors,o as Default,t as Labelled,s as Sizes,v as __namedExportsOrder,S as default};
