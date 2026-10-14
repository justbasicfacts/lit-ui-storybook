import{j as n}from"./jsx-runtime-D8h-jwK5.js";import{o as c,v as l}from"./index-CKKzZn3u.js";import{R as d}from"./iframe-DP7DDnfB.js";import"./preload-helper-Bs85Y4nq.js";const m=c({tagName:"ui-alert",elementClass:l,react:d,events:{onClose:"close"}}),v={title:"Components/Alert",component:m,parameters:{layout:"centered"},decorators:[i=>n.jsx("div",{style:{width:480},children:n.jsx(i,{})})],argTypes:{severity:{control:"select",options:["success","info","warning","error"]},variant:{control:"select",options:["standard","filled","outlined"]},title:{control:"text"},dismissible:{control:"boolean"},children:{control:"text"},onClose:{action:"closed"}},args:{severity:"info",variant:"standard",children:"This is an informational message."}},e={},r={args:{severity:"success",children:"Deployment succeeded."}},s={args:{severity:"warning",variant:"filled",children:"Your trial ends in 3 days."}},o={args:{severity:"error",variant:"outlined",children:"Something went wrong."}},t={args:{severity:"error",title:"Upload failed",children:"The file was too large to process."}},a={args:{dismissible:!0}},y=["Info","Success","WarningFilled","ErrorOutlined","WithTitle","Dismissible"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    severity: 'success',
    children: 'Deployment succeeded.'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    severity: 'warning',
    variant: 'filled',
    children: 'Your trial ends in 3 days.'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    severity: 'error',
    variant: 'outlined',
    children: 'Something went wrong.'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    severity: 'error',
    title: 'Upload failed',
    children: 'The file was too large to process.'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    dismissible: true
  }
}`,...a.parameters?.docs?.source}}};export{a as Dismissible,o as ErrorOutlined,e as Info,r as Success,s as WarningFilled,t as WithTitle,y as __namedExportsOrder,v as default};
