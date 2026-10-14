import{j as e}from"./jsx-runtime-D8h-jwK5.js";import{o as p,af as s}from"./index-CKKzZn3u.js";import{R as i}from"./iframe-DP7DDnfB.js";import"./preload-helper-Bs85Y4nq.js";const r=p({tagName:"ui-popper",elementClass:s,react:i,events:{onOpen:"open",onClose:"close"}}),m={title:"Components/Popper",component:r,parameters:{layout:"fullscreen"},argTypes:{open:{control:"boolean"},anchorEl:{control:"text"},placement:{control:"select",options:["bottom","bottom-start","bottom-end","top","top-start","top-end","left","right"]},offset:{control:{type:"number",min:0,max:40}},modifiersFlip:{control:"boolean"},onOpen:{action:"opened"},onClose:{action:"closed"}},args:{open:!0,anchorEl:"popper-anchor",placement:"bottom",offset:8,modifiersFlip:!0}},n={render:t=>e.jsxs("div",{style:{padding:80},children:[e.jsx("button",{id:"popper-anchor",type:"button",children:"Anchor element"}),e.jsx(r,{...t,children:e.jsx("div",{style:{padding:"8px 12px"},children:"Positioned from the anchor's bounding rect."})})]})},o={args:{modifiersFlip:!1},render:t=>e.jsxs("div",{style:{padding:80},children:[e.jsx("button",{id:"popper-anchor",type:"button",children:"Anchor element"}),e.jsx(r,{...t,children:e.jsx("div",{style:{padding:"8px 12px"},children:"Flip modifier disabled — stays at the given placement."})})]})},u=["Open","NoFlip"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: 80
  }}>
      <button id="popper-anchor" type="button">
        Anchor element
      </button>
      <Popper {...args}>
        <div style={{
        padding: '8px 12px'
      }}>
          Positioned from the anchor's bounding rect.
        </div>
      </Popper>
    </div>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    modifiersFlip: false
  },
  render: args => <div style={{
    padding: 80
  }}>
      <button id="popper-anchor" type="button">
        Anchor element
      </button>
      <Popper {...args}>
        <div style={{
        padding: '8px 12px'
      }}>
          Flip modifier disabled — stays at the given placement.
        </div>
      </Popper>
    </div>
}`,...o.parameters?.docs?.source}}};export{o as NoFlip,n as Open,u as __namedExportsOrder,m as default};
