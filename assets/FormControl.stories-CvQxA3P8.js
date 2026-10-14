import{j as e}from"./jsx-runtime-D8h-jwK5.js";import{o as c,V as d}from"./index-CKKzZn3u.js";import{R as p}from"./iframe-DP7DDnfB.js";import{I as l}from"./input-ZSzgr6Ja.js";import{I as m}from"./input-label-DXZsOq13.js";import{F as i}from"./form-helper-text-B2j9C9mX.js";import{S as u}from"./select-Ce_9XRS6.js";import"./preload-helper-Bs85Y4nq.js";const o=c({tagName:"ui-form-control",elementClass:d,react:p}),C={title:"Components/FormControl",component:o,parameters:{layout:"centered"},decorators:[r=>e.jsx("div",{style:{width:320},children:e.jsx(r,{})})],argTypes:{fullWidth:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"},required:{control:"boolean"},size:{control:"select",options:["small","medium"]},variant:{control:"select",options:["standard","outlined","filled"]}},args:{fullWidth:!0,size:"medium",variant:"outlined"}},a={render:r=>e.jsx(o,{...r,children:e.jsx(l,{label:"Email",placeholder:"you@example.com"})})},n={render:r=>e.jsx(o,{...r,children:e.jsx(u,{label:"Team",options:["Design","Engineering","Product"],value:"Engineering"})})},t={render:r=>e.jsxs(o,{...r,children:[e.jsx(m,{children:"Email address"}),e.jsx(l,{placeholder:"you@example.com"}),e.jsx(i,{children:"We will never share your email."})]})},s={args:{error:!0},render:r=>e.jsxs(o,{...r,children:[e.jsx(m,{error:!0,children:"Email address"}),e.jsx(l,{value:"not-an-email"}),e.jsx(i,{error:!0,children:"Enter a valid email address."})]})},v=["Default","WithSelect","WithHelperText","Error"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <FormControl {...args}>
      <Input label="Email" placeholder="you@example.com" />
    </FormControl>
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <FormControl {...args}>
      <Select label="Team" options={['Design', 'Engineering', 'Product']} value="Engineering" />
    </FormControl>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FormControl {...args}>
      <InputLabel>Email address</InputLabel>
      <Input placeholder="you@example.com" />
      <FormHelperText>We will never share your email.</FormHelperText>
    </FormControl>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    error: true
  },
  render: args => <FormControl {...args}>
      <InputLabel error>Email address</InputLabel>
      <Input value="not-an-email" />
      <FormHelperText error>Enter a valid email address.</FormHelperText>
    </FormControl>
}`,...s.parameters?.docs?.source}}};export{a as Default,s as Error,t as WithHelperText,n as WithSelect,v as __namedExportsOrder,C as default};
