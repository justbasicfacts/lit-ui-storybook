import{j as t}from"./iframe-7KbjxAZ3.js";import"./index-3LxRijqB.js";import{S as n}from"./slider-bf8Ysirb.js";import"./preload-helper-Bs85Y4nq.js";const p={title:"Components/Inputs/Slider",component:n,parameters:{layout:"padded"},decorators:[l=>t.jsx("div",{style:{width:360},children:t.jsx(l,{})})],argTypes:{value:{control:{type:"number"}},min:{control:{type:"number"}},max:{control:{type:"number"}},step:{control:{type:"number",min:1}},size:{control:"select",options:["small","medium"]},color:{control:"select",options:["primary","secondary","error","warning","info","success"]},disabled:{control:"boolean"},showValue:{control:"boolean"},label:{control:"text"},onChange:{action:"changed"}},args:{value:40,min:0,max:100,step:1,size:"medium",color:"primary",label:"Volume"}},e={},r={args:{value:50,step:10,markValues:[0,25,50,75,100],label:"Quality"}},a={args:{showValue:!0,value:65,label:"Opacity"}},s={args:{size:"small",value:25,color:"secondary"}},o={args:{disabled:!0,value:30}},d=["Default","WithMarks","WithValue","Small","Disabled"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50,
    step: 10,
    markValues: [0, 25, 50, 75, 100],
    label: 'Quality'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    showValue: true,
    value: 65,
    label: 'Opacity'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    value: 25,
    color: 'secondary'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 30
  }
}`,...o.parameters?.docs?.source}}};export{e as Default,o as Disabled,s as Small,r as WithMarks,a as WithValue,d as __namedExportsOrder,p as default};
