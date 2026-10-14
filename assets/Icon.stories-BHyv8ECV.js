import{R as l,j as e}from"./iframe-EaglJ-EY.js";import{o as i,a0 as d}from"./index-qmVU2qX3.js";import"./preload-helper-Bs85Y4nq.js";const r=i({tagName:"ui-icon",elementClass:d,react:l}),n=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})}),x={title:"Components/Data display/Icon",component:r,parameters:{layout:"centered"},argTypes:{color:{control:"text"},fontSize:{control:"select",options:["small","medium","large","inherit"]},size:{control:"text"}},args:{color:"inherit",fontSize:"medium"}},o={render:t=>e.jsx(r,{...t,children:e.jsx(n,{})})},s={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:24},children:[e.jsx(r,{fontSize:"small",children:e.jsx(n,{})}),e.jsx(r,{fontSize:"medium",children:e.jsx(n,{})}),e.jsx(r,{fontSize:"large",children:e.jsx(n,{})})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:24},children:[e.jsx(r,{color:"primary",children:e.jsx(n,{})}),e.jsx(r,{color:"secondary",children:e.jsx(n,{})}),e.jsx(r,{color:"error",children:e.jsx(n,{})}),e.jsx(r,{color:"success",children:e.jsx(n,{})})]})},a={render:()=>e.jsx(r,{fontSize:"large",color:"warning",children:"★"})},u=["Default","Sizes","Colors","WithGlyph"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Icon {...args}>
      <StarIcon />
    </Icon>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 24
  }}>
      <Icon fontSize="small">
        <StarIcon />
      </Icon>
      <Icon fontSize="medium">
        <StarIcon />
      </Icon>
      <Icon fontSize="large">
        <StarIcon />
      </Icon>
    </div>
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 24
  }}>
      <Icon color="primary">
        <StarIcon />
      </Icon>
      <Icon color="secondary">
        <StarIcon />
      </Icon>
      <Icon color="error">
        <StarIcon />
      </Icon>
      <Icon color="success">
        <StarIcon />
      </Icon>
    </div>
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Icon fontSize="large" color="warning">
      ★
    </Icon>
}`,...a.parameters?.docs?.source}}};export{c as Colors,o as Default,s as Sizes,a as WithGlyph,u as __namedExportsOrder,x as default};
