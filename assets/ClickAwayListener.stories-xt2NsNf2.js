import{R as c,j as s}from"./iframe-DpZyQfZJ.js";import{o as n,aK as i}from"./index-3LxRijqB.js";import"./preload-helper-Bs85Y4nq.js";const o=n({tagName:"ui-click-away-listener",elementClass:i,react:c,events:{onClickAway:"click-away"}}),u={title:"Components/Utils/ClickAwayListener",component:o,parameters:{layout:"centered"},argTypes:{mouseEvent:{control:"select",options:["click","mousedown","touchstart"]},onClickAway:{action:"click-away"}},args:{mouseEvent:"click"}},t=s.jsxs("div",{style:{padding:24,border:"1px solid #c4c4c4",borderRadius:4,background:"#fafafa"},children:["Click anywhere outside this box to trigger ",s.jsx("code",{children:"click-away"}),"."]}),e={render:a=>s.jsx(o,{...a,children:t})},r={args:{mouseEvent:"mousedown"},render:a=>s.jsx(o,{...a,children:t})},p=["Click","MouseDown"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <ClickAwayListener {...args}>{box}</ClickAwayListener>
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    mouseEvent: 'mousedown'
  },
  render: args => <ClickAwayListener {...args}>{box}</ClickAwayListener>
}`,...r.parameters?.docs?.source}}};export{e as Click,r as MouseDown,p as __namedExportsOrder,u as default};
