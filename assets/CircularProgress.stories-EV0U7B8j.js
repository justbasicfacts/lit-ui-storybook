import{o as t,ab as o}from"./index-BSSMaTAd.js";import{R as n}from"./iframe-jabNMnJM.js";import"./preload-helper-Bs85Y4nq.js";const c=t({tagName:"ui-circular-progress",elementClass:o,react:n}),p={title:"Components/Feedback/CircularProgress",component:c,parameters:{layout:"centered"},argTypes:{value:{control:{type:"range",min:-1,max:100,step:1}},variant:{control:"select",options:["","determinate","indeterminate"]},color:{control:"select",options:["primary","secondary","success","warning","error","info"]},size:{control:{type:"number",min:20,max:120}},thickness:{control:{type:"number",min:1,max:10,step:.1}},label:{control:"text"}},args:{value:60,variant:"determinate",color:"primary",size:40,thickness:3.6,label:"Loading"}},e={},r={args:{variant:"indeterminate",value:-1}},a={args:{value:100,color:"success"}},s={args:{size:80,thickness:5}},u=["Determinate","Indeterminate","Success","Large"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'indeterminate',
    value: -1
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100,
    color: 'success'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 80,
    thickness: 5
  }
}`,...s.parameters?.docs?.source}}};export{e as Determinate,r as Indeterminate,s as Large,a as Success,u as __namedExportsOrder,p as default};
