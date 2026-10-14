import{R as n,j as t}from"./iframe-CwpzPtni.js";import{o as c,ae as i}from"./index-qmVU2qX3.js";import"./preload-helper-Bs85Y4nq.js";const m=c({tagName:"ui-linear-progress",elementClass:i,react:n}),d={title:"Components/Feedback/LinearProgress",component:m,parameters:{layout:"centered"},decorators:[o=>t.jsx("div",{style:{width:320},children:t.jsx(o,{})})],argTypes:{value:{control:{type:"range",min:0,max:100,step:1}},valueBuffer:{control:{type:"range",min:-1,max:100,step:1}},variant:{control:"select",options:["determinate","indeterminate","buffer"]},color:{control:"select",options:["primary","secondary","success","warning","error","info"]}},args:{value:60,valueBuffer:-1,variant:"determinate",color:"primary"}},e={},r={args:{variant:"indeterminate"}},a={args:{variant:"buffer",value:40,valueBuffer:70}},s={args:{value:100,color:"success"}},f=["Determinate","Indeterminate","Buffer","Success"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'indeterminate'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'buffer',
    value: 40,
    valueBuffer: 70
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100,
    color: 'success'
  }
}`,...s.parameters?.docs?.source}}};export{a as Buffer,e as Determinate,r as Indeterminate,s as Success,f as __namedExportsOrder,d as default};
