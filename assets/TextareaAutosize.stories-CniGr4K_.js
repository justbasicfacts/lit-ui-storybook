import{R as c,j as t}from"./iframe-CI8tjnlt.js";import{o as i,aC as l}from"./index-C156ONKY.js";import"./preload-helper-Bs85Y4nq.js";const d=i({tagName:"ui-textarea-autosize",elementClass:l,react:c,events:{onChange:"change",onInput:"input"}}),g={title:"Components/TextareaAutosize",component:d,parameters:{layout:"centered"},decorators:[s=>t.jsx("div",{style:{width:340},children:t.jsx(s,{})})],argTypes:{value:{control:"text"},placeholder:{control:"text"},minRows:{control:{type:"number",min:1}},maxRows:{control:{type:"number",min:0}},disabled:{control:"boolean"},readOnly:{control:"boolean"},onInput:{action:"input"},onChange:{action:"changed"}},args:{placeholder:"Write a message…",minRows:3,maxRows:6,value:""}},e={},a={args:{minRows:2,value:`This textarea grows as you type.
Add a few lines and watch it expand.`}},o={args:{minRows:1,placeholder:"One row until you need more"}},r={args:{disabled:!0,value:"Read only content"}},n={args:{readOnly:!0,minRows:2,value:"Plain, non-editable text."}},w=["Default","GrowWithContent","SingleRow","Disabled","ReadOnly"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    minRows: 2,
    value: 'This textarea grows as you type.\\nAdd a few lines and watch it expand.'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    minRows: 1,
    placeholder: 'One row until you need more'
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'Read only content'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    minRows: 2,
    value: 'Plain, non-editable text.'
  }
}`,...n.parameters?.docs?.source}}};export{e as Default,r as Disabled,a as GrowWithContent,n as ReadOnly,o as SingleRow,w as __namedExportsOrder,g as default};
