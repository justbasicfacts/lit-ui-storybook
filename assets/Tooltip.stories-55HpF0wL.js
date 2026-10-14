import{R as p,j as r}from"./iframe-Bwx-W2wi.js";import{o as c,a9 as m}from"./index-BSSMaTAd.js";import{B as g}from"./button-vDSlttI_.js";import"./preload-helper-Bs85Y4nq.js";const t=c({tagName:"ui-tooltip",elementClass:m,react:p}),h={title:"Components/Data display/Tooltip",component:t,parameters:{layout:"centered"},argTypes:{content:{control:"text"},position:{control:"select",options:["top","bottom","left","right"]}},args:{content:"This is a tooltip",position:"top"}},i=r.jsx(g,{size:"sm",variant:"outline",children:"Hover me"}),e={render:o=>r.jsx(t,{...o,children:i})},s={args:{position:"bottom"},render:o=>r.jsx(t,{...o,children:i})},a={args:{position:"left"},render:o=>r.jsx(t,{...o,children:i})},n={args:{position:"right"},render:o=>r.jsx(t,{...o,children:i})},x=["Top","Bottom","Left","Right"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>{trigger}</Tooltip>
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'bottom'
  },
  render: args => <Tooltip {...args}>{trigger}</Tooltip>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'left'
  },
  render: args => <Tooltip {...args}>{trigger}</Tooltip>
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'right'
  },
  render: args => <Tooltip {...args}>{trigger}</Tooltip>
}`,...n.parameters?.docs?.source}}};export{s as Bottom,a as Left,n as Right,e as Top,x as __namedExportsOrder,h as default};
