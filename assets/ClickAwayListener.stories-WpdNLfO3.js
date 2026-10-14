import{R as t,j as s}from"./iframe-D-jlcKf7.js";import{o as n,S as i}from"./index-A4XEOZPO.js";import"./preload-helper-Bs85Y4nq.js";const o=n({tagName:"ui-click-away-listener",elementClass:i,react:t,events:{onClickAway:"click-away"}}),u={title:"Components/ClickAwayListener",component:o,parameters:{layout:"centered"},argTypes:{mouseEvent:{control:"select",options:["click","mousedown","touchstart"]},onClickAway:{action:"click-away"}},args:{mouseEvent:"click"}},c=s.jsxs("div",{style:{padding:24,border:"1px solid #c4c4c4",borderRadius:4,background:"#fafafa"},children:["Click anywhere outside this box to trigger ",s.jsx("code",{children:"click-away"}),"."]}),e={render:a=>s.jsx(o,{...a,children:c})},r={args:{mouseEvent:"mousedown"},render:a=>s.jsx(o,{...a,children:c})},p=["Click","MouseDown"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <ClickAwayListener {...args}>{box}</ClickAwayListener>
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    mouseEvent: 'mousedown'
  },
  render: args => <ClickAwayListener {...args}>{box}</ClickAwayListener>
}`,...r.parameters?.docs?.source}}};export{e as Click,r as MouseDown,p as __namedExportsOrder,u as default};
