import{j as s}from"./jsx-runtime-D8h-jwK5.js";import{o as c,K as n}from"./index-CKKzZn3u.js";import{R as i}from"./iframe-DP7DDnfB.js";import"./preload-helper-Bs85Y4nq.js";const a=c({tagName:"ui-click-away-listener",elementClass:n,react:i,events:{onClickAway:"click-away"}}),p={title:"Components/ClickAwayListener",component:a,parameters:{layout:"centered"},argTypes:{mouseEvent:{control:"select",options:["click","mousedown","touchstart"]},onClickAway:{action:"click-away"}},args:{mouseEvent:"click"}},t=s.jsxs("div",{style:{padding:24,border:"1px solid #c4c4c4",borderRadius:4,background:"#fafafa"},children:["Click anywhere outside this box to trigger ",s.jsx("code",{children:"click-away"}),"."]}),e={render:o=>s.jsx(a,{...o,children:t})},r={args:{mouseEvent:"mousedown"},render:o=>s.jsx(a,{...o,children:t})},k=["Click","MouseDown"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <ClickAwayListener {...args}>{box}</ClickAwayListener>
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    mouseEvent: 'mousedown'
  },
  render: args => <ClickAwayListener {...args}>{box}</ClickAwayListener>
}`,...r.parameters?.docs?.source}}};export{e as Click,r as MouseDown,k as __namedExportsOrder,p as default};
