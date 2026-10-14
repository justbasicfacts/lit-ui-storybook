import{R as m,j as s}from"./iframe-CI8tjnlt.js";import{o as p,ad as d}from"./index-C156ONKY.js";import"./preload-helper-Bs85Y4nq.js";const n=p({tagName:"ui-masonry",elementClass:d,react:m}),y={title:"Components/Masonry",component:n,parameters:{layout:"padded"},argTypes:{columns:{control:{type:"number",min:1,max:6}},spacing:{control:{type:"number",min:0,max:32}}},args:{columns:3,spacing:4}},l=[220,160,280,200,240,180,300,150,260],c=s.jsx(s.Fragment,{children:l.map((r,t)=>s.jsx("div",{style:{height:r,background:"#e3f2fd",borderRadius:4}},t))}),a={render:r=>s.jsx(n,{...r,children:c})},e={args:{columns:2,spacing:8},render:r=>s.jsx(n,{...r,children:c})},o={args:{columns:4,spacing:16},render:r=>s.jsx(n,{...r,children:c})},x=["Default","TwoColumns","FourColumns"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Masonry {...args}>{blocks}</Masonry>
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    columns: 2,
    spacing: 8
  },
  render: args => <Masonry {...args}>{blocks}</Masonry>
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    columns: 4,
    spacing: 16
  },
  render: args => <Masonry {...args}>{blocks}</Masonry>
}`,...o.parameters?.docs?.source}}};export{a as Default,o as FourColumns,e as TwoColumns,x as __namedExportsOrder,y as default};
