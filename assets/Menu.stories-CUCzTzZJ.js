import{j as e}from"./iframe-D-jlcKf7.js";import"./index-A4XEOZPO.js";import{M as r,a as s}from"./menu-item-BPNXXsUa.js";import"./preload-helper-Bs85Y4nq.js";const m={title:"Components/Menu",component:r,parameters:{layout:"fullscreen"},argTypes:{open:{control:"boolean"},anchorEl:{control:"text"},placement:{control:"select",options:["bottom","top","left","right","bottom-start","bottom-end","top-start","top-end"]},offset:{control:{type:"number",min:0,max:32}},dismissible:{control:"boolean"},onOpen:{action:"opened"},onClose:{action:"closed"},onSelect:{action:"selected"}},args:{open:!1,anchorEl:"",placement:"bottom",offset:8,dismissible:!0}},d=e.jsxs(e.Fragment,{children:[e.jsx(s,{value:"profile",children:"Profile"}),e.jsx(s,{value:"settings",children:"Settings"}),e.jsx(s,{value:"archive",children:"Archive"}),e.jsx(s,{value:"logout",disabled:!0,children:"Log out"})]}),t={args:{open:!0,anchorEl:"menu-anchor",placement:"bottom-start"},render:n=>e.jsxs("div",{style:{padding:32},children:[e.jsx("button",{id:"menu-anchor",type:"button",children:"Open menu"}),e.jsx(r,{...n,children:d})]})},a={args:{open:!0,anchorEl:"menu-anchor-end",placement:"bottom-end"},render:n=>e.jsxs("div",{style:{padding:32},children:[e.jsx("button",{id:"menu-anchor-end",type:"button",children:"Right-aligned menu"}),e.jsx(r,{...n,children:d})]})},o={args:{open:!0,anchorEl:""},render:n=>e.jsxs("div",{style:{padding:32},children:[e.jsx("p",{children:"Unanchored: the panel is centred in the viewport."}),e.jsx(r,{...n,children:d})]})},c={args:{open:!1,anchorEl:"menu-anchor-closed"},render:n=>e.jsxs("div",{style:{padding:32},children:[e.jsx("button",{id:"menu-anchor-closed",type:"button",children:"Menu is closed"}),e.jsx(r,{...n,children:d})]})},h=["OpenAtAnchor","PlacementEnd","Unanchored","Closed"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    anchorEl: 'menu-anchor',
    placement: 'bottom-start'
  },
  render: args => <div style={{
    padding: 32
  }}>
      <button id="menu-anchor" type="button">
        Open menu
      </button>
      <Menu {...args}>{items}</Menu>
    </div>
}`,...t.parameters?.docs?.source},description:{story:"The panel is positioned from the anchor element's viewport rect, so the story\nputs a button with the matching `anchorEl` id in the markup.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    anchorEl: 'menu-anchor-end',
    placement: 'bottom-end'
  },
  render: args => <div style={{
    padding: 32
  }}>
      <button id="menu-anchor-end" type="button">
        Right-aligned menu
      </button>
      <Menu {...args}>{items}</Menu>
    </div>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    anchorEl: ''
  },
  render: args => <div style={{
    padding: 32
  }}>
      <p>Unanchored: the panel is centred in the viewport.</p>
      <Menu {...args}>{items}</Menu>
    </div>
}`,...o.parameters?.docs?.source},description:{story:"With no `anchorEl` (or an id that is not in the document) the panel falls back\nto the centre of the viewport — used here to show the closed state styling.",...o.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    anchorEl: 'menu-anchor-closed'
  },
  render: args => <div style={{
    padding: 32
  }}>
      <button id="menu-anchor-closed" type="button">
        Menu is closed
      </button>
      <Menu {...args}>{items}</Menu>
    </div>
}`,...c.parameters?.docs?.source}}};export{c as Closed,t as OpenAtAnchor,a as PlacementEnd,o as Unanchored,h as __namedExportsOrder,m as default};
