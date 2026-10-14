import{j as o}from"./jsx-runtime-D8h-jwK5.js";import{o as a,ae as c}from"./index-CKKzZn3u.js";import{R as l}from"./iframe-DP7DDnfB.js";import{B as p}from"./button-CRh5SSeW.js";import"./preload-helper-Bs85Y4nq.js";const s=a({tagName:"ui-popover",elementClass:c,react:l,events:{onOpen:"open",onClose:"close"}}),x={title:"Components/Popover",component:s,parameters:{layout:"centered"},argTypes:{open:{control:"boolean"},placement:{control:"select",options:["bottom","bottom-start","bottom-end","top","top-start","top-end","left","right"]},offset:{control:{type:"number",min:0,max:40}},withArrow:{control:"boolean"},dismissible:{control:"boolean"},onOpen:{action:"opened"},onClose:{action:"closed"}},args:{open:!0,placement:"bottom",offset:8,withArrow:!0,dismissible:!0}},n={render:e=>o.jsxs(s,{...e,children:[o.jsx(p,{slot:"anchor",size:"sm",children:"Toggle"}),o.jsx("div",{style:{padding:"8px 12px"},children:"Popover content"})]})},r={args:{placement:"top"},render:e=>o.jsxs(s,{...e,children:[o.jsx(p,{slot:"anchor",size:"sm",children:"Toggle"}),o.jsx("div",{style:{padding:"8px 12px"},children:"Popover on top"})]})},t={args:{open:!1},render:e=>o.jsxs(s,{...e,children:[o.jsx(p,{slot:"anchor",size:"sm",children:"Toggle"}),o.jsx("div",{style:{padding:"8px 12px"},children:"Popover content"})]})},u=["Open","Top","Closed"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Popover {...args}>
      <Button slot="anchor" size="sm">
        Toggle
      </Button>
      <div style={{
      padding: '8px 12px'
    }}>Popover content</div>
    </Popover>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'top'
  },
  render: args => <Popover {...args}>
      <Button slot="anchor" size="sm">
        Toggle
      </Button>
      <div style={{
      padding: '8px 12px'
    }}>Popover on top</div>
    </Popover>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    open: false
  },
  render: args => <Popover {...args}>
      <Button slot="anchor" size="sm">
        Toggle
      </Button>
      <div style={{
      padding: '8px 12px'
    }}>Popover content</div>
    </Popover>
}`,...t.parameters?.docs?.source}}};export{t as Closed,n as Open,r as Top,u as __namedExportsOrder,x as default};
