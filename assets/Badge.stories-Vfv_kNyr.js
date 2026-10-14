import{j as r}from"./jsx-runtime-D8h-jwK5.js";import{o as c,z as d}from"./index-CKKzZn3u.js";import{R as l}from"./iframe-DP7DDnfB.js";import"./preload-helper-Bs85Y4nq.js";const a=c({tagName:"ui-badge",elementClass:d,react:l}),f={title:"Components/Badge",component:a,parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["default","primary","secondary","success","warning","error","info"]},pill:{control:"boolean"},children:{control:"text"}},args:{variant:"default",children:"Badge"}},e={},n={args:{variant:"success",children:"Shipped"}},s={args:{variant:"warning",children:"Pending"}},i={args:{variant:"error",children:"Failed"}},o={args:{variant:"info",pill:!0,children:"Info"}},t={render:()=>r.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[r.jsx(a,{children:"Default"}),r.jsx(a,{variant:"primary",children:"Primary"}),r.jsx(a,{variant:"secondary",children:"Secondary"}),r.jsx(a,{variant:"success",children:"Success"}),r.jsx(a,{variant:"warning",children:"Warning"}),r.jsx(a,{variant:"error",children:"Error"}),r.jsx(a,{variant:"info",pill:!0,children:"Info pill"})]})},v=["Default","Success","Warning","Error","InfoPill","AllVariants"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: 'Shipped'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'Pending'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    children: 'Failed'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    pill: true,
    children: 'Info'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap'
  }}>
      <Badge>Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info" pill>
        Info pill
      </Badge>
    </div>
}`,...t.parameters?.docs?.source}}};export{t as AllVariants,e as Default,i as Error,o as InfoPill,n as Success,s as Warning,v as __namedExportsOrder,f as default};
