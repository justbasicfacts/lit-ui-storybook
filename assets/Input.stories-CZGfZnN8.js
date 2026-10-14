import{j as s}from"./iframe-BGBv2Rkz.js";import"./index-Ds1DpZoa.js";import{I as l}from"./input-BMmwR3ji.js";import"./preload-helper-Bs85Y4nq.js";const m={title:"Components/Input",component:l,parameters:{layout:"centered"},decorators:[t=>s.jsx("div",{style:{width:320},children:s.jsx(t,{})})],argTypes:{type:{control:"select",options:["text","email","password","number","tel","url","search"]},label:{control:"text"},value:{control:"text"},placeholder:{control:"text"},error:{control:"text"},helperText:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},onChange:{action:"changed"}},args:{label:"Email",type:"email",placeholder:"you@example.com"}},e={},r={args:{label:"Password",type:"password",helperText:"At least 8 characters"}},a={args:{label:"Username",error:"That name is already taken"}},o={args:{disabled:!0,value:"locked@example.com"}},i=["Default","Password","WithError","Disabled"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    helperText: 'At least 8 characters'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    error: 'That name is already taken'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'locked@example.com'
  }
}`,...o.parameters?.docs?.source}}};export{e as Default,o as Disabled,r as Password,a as WithError,i as __namedExportsOrder,m as default};
