import{j as e}from"./iframe-DpZyQfZJ.js";import"./index-3LxRijqB.js";import{D as a}from"./dialog-CEKqPqgD.js";import{B as t}from"./button-C076rtPs.js";import"./preload-helper-Bs85Y4nq.js";const u={title:"Components/Feedback/Dialog",component:a,parameters:{layout:"centered"},argTypes:{open:{control:"boolean"},label:{control:"text"},dismissible:{control:"boolean"},onOpen:{action:"opened"},onClose:{action:"closed"}},args:{open:!0,label:"Confirm deletion",dismissible:!0}},n=i=>e.jsxs(a,{...i,children:[e.jsx("h3",{slot:"header",children:"Delete item?"}),e.jsx("p",{children:"This action cannot be undone. The item will be permanently removed."}),e.jsxs("div",{slot:"footer",children:[e.jsx(t,{variant:"ghost",size:"sm",children:"Cancel"}),e.jsx(t,{variant:"error",size:"sm",children:"Delete"})]})]}),r={render:n},s={args:{open:!1},render:n},o={args:{dismissible:!1},render:n},b=["Open","Closed","NonDismissible"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: content
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    open: false
  },
  render: content
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    dismissible: false
  },
  render: content
}`,...o.parameters?.docs?.source}}};export{s as Closed,o as NonDismissible,r as Open,b as __namedExportsOrder,u as default};
