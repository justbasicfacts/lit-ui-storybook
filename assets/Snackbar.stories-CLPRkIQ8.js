import{o as t,aj as n}from"./index-3LxRijqB.js";import{R as s}from"./iframe-7KbjxAZ3.js";import"./preload-helper-Bs85Y4nq.js";const c=t({tagName:"ui-snackbar",elementClass:n,react:s,events:{onClose:"close",onActionClick:"action-click"}}),m={title:"Components/Feedback/Snackbar",component:c,parameters:{layout:"fullscreen"},argTypes:{open:{control:"boolean"},message:{control:"text"},action:{control:"text"},autoHideDuration:{control:{type:"number",min:0,step:1e3}},anchorVertical:{control:"select",options:["top","bottom"]},anchorHorizontal:{control:"select",options:["left","center","right"]},onClose:{action:"closed"},onActionClick:{action:"action-click"}},args:{open:!0,message:"Changes saved successfully.",action:"Undo",autoHideDuration:6e3,anchorVertical:"bottom",anchorHorizontal:"center"}},e={},o={args:{action:"",message:"Your changes have been saved."}},a={args:{anchorVertical:"top",anchorHorizontal:"left"}},r={args:{open:!1}},u=["Open","NoAction","TopLeft","Closed"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    action: '',
    message: 'Your changes have been saved.'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    anchorVertical: 'top',
    anchorHorizontal: 'left'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    open: false
  }
}`,...r.parameters?.docs?.source}}};export{r as Closed,o as NoAction,e as Open,a as TopLeft,u as __namedExportsOrder,m as default};
