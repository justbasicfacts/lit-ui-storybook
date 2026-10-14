import{j as a}from"./jsx-runtime-D8h-jwK5.js";import{o as n,ay as c}from"./index-CKKzZn3u.js";import{R as i}from"./iframe-DP7DDnfB.js";import"./preload-helper-Bs85Y4nq.js";const l=n({tagName:"ui-textarea",elementClass:c,react:i,events:{onChange:"change",onInput:"input"}}),x={title:"Components/Textarea",component:l,parameters:{layout:"centered"},decorators:[s=>a.jsx("div",{style:{width:360},children:a.jsx(s,{})})],argTypes:{label:{control:"text"},value:{control:"text"},placeholder:{control:"text"},rows:{control:"number",min:1,max:20},error:{control:"text"},helperText:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},onChange:{action:"changed"}},args:{label:"Notes",placeholder:"Write something…",rows:4}},e={},r={args:{helperText:"Markdown is supported"}},o={args:{error:"This field is required"}},t={args:{disabled:!0,value:"This is locked content"}},h=["Default","WithHelperText","WithError","Disabled"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};export{e as Default,t as Disabled,o as WithError,r as WithHelperText,h as __namedExportsOrder,x as default};
