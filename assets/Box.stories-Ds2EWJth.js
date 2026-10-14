import{j as e}from"./iframe-CteECbaa.js";import"./index-CJ7Kg3ag.js";import{B as o}from"./box-CS7snuKQ.js";import"./preload-helper-Bs85Y4nq.js";const i={title:"Components/Layout/Box",component:o,parameters:{layout:"padded"},argTypes:{display:{control:"select",options:["block","inline-block","flex","grid","inline-flex","none"]},padding:{control:"text"},margin:{control:"text"},gap:{control:"text"},radius:{control:"text"},bgcolor:{control:"text"},color:{control:"text"},border:{control:"text"},elevation:{control:{type:"number",min:-1,max:24}}},args:{display:"block",padding:"16px",margin:"0",gap:"0",bgcolor:"background.paper",elevation:-1,children:"Box content"}},a={render:r=>e.jsx(o,{...r,border:"1px solid rgba(0,0,0,0.12)",children:r.children})},n={args:{display:"flex",gap:"12px",bgcolor:"primary",color:"primary.contrastText"},render:r=>e.jsxs(o,{...r,children:[e.jsx("span",{children:"One"}),e.jsx("span",{children:"Two"}),e.jsx("span",{children:"Three"})]})},s={args:{elevation:8,padding:"24px",bgcolor:"background.paper"},render:r=>e.jsx(o,{...r,children:"Elevation 8"})},t={args:{padding:"24px 32px",bgcolor:"#e3f2fd",color:"#0d47a1",radius:"12px",border:"1px dashed #1976d2"},render:r=>e.jsx(o,{...r,children:"Raw CSS values pass through."})},x=["Default","Flex","Elevated","RawCssValues"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Box {...args} border="1px solid rgba(0,0,0,0.12)">
      {args.children}
    </Box>
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    display: 'flex',
    gap: '12px',
    bgcolor: 'primary',
    color: 'primary.contrastText'
  },
  render: args => <Box {...args}>
      <span>One</span>
      <span>Two</span>
      <span>Three</span>
    </Box>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    elevation: 8,
    padding: '24px',
    bgcolor: 'background.paper'
  },
  render: args => <Box {...args}>Elevation 8</Box>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    padding: '24px 32px',
    bgcolor: '#e3f2fd',
    color: '#0d47a1',
    radius: '12px',
    border: '1px dashed #1976d2'
  },
  render: args => <Box {...args}>Raw CSS values pass through.</Box>
}`,...t.parameters?.docs?.source}}};export{a as Default,s as Elevated,n as Flex,t as RawCssValues,x as __namedExportsOrder,i as default};
