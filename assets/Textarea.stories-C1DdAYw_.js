import{j as s}from"./iframe-CwpzPtni.js";import"./index-qmVU2qX3.js";import{T as n}from"./textarea-UL58cNfT.js";import"./preload-helper-Bs85Y4nq.js";const p={title:"Components/Inputs/Textarea",component:n,parameters:{layout:"centered"},decorators:[a=>s.jsx("div",{style:{width:360},children:s.jsx(a,{})})],argTypes:{label:{control:"text"},value:{control:"text"},placeholder:{control:"text"},rows:{control:"number",min:1,max:20},error:{control:"text"},helperText:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},onChange:{action:"changed"}},args:{label:"Notes",placeholder:"Write something…",rows:4}},e={},r={args:{helperText:"Markdown is supported"}},o={args:{error:"This field is required"}},t={args:{disabled:!0,value:"This is locked content"}},m=["Default","WithHelperText","WithError","Disabled"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    helperText: 'Markdown is supported'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    error: 'This field is required'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'This is locked content'
  }
}`,...t.parameters?.docs?.source}}};export{e as Default,t as Disabled,o as WithError,r as WithHelperText,m as __namedExportsOrder,p as default};
