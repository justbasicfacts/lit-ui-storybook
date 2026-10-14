import{j as r}from"./jsx-runtime-D8h-jwK5.js";import"./index-CKKzZn3u.js";import{T as n,A as i}from"./toolbar-DD-HtQzB.js";import"./iframe-DP7DDnfB.js";import"./preload-helper-Bs85Y4nq.js";const b={title:"Components/Toolbar",component:n,parameters:{layout:"fullscreen"},argTypes:{variant:{control:"inline-radio",options:["regular","dense"]},disableGutters:{control:"boolean"}},args:{variant:"regular",disableGutters:!1}},s={render:e=>r.jsxs(n,{...e,children:[r.jsx("button",{type:"button",children:"Menu"}),r.jsx("strong",{style:{flex:1},children:"Title"}),r.jsx("button",{type:"button",children:"Actions"})]})},a={args:{variant:"dense"},render:e=>r.jsx(n,{...e,children:r.jsx("span",{children:"Dense toolbar"})})},o={args:{disableGutters:!0},render:e=>r.jsx(n,{...e,children:r.jsx("span",{children:"No inline padding"})})},t={render:()=>r.jsx(i,{position:"static",children:r.jsxs(n,{variant:"dense",children:[r.jsx("strong",{style:{flex:1},children:"Toolbar inside an AppBar"}),r.jsx("span",{children:"v1.0"})]})})},m=["Default","Dense","DisableGutters","InAppBar"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Toolbar {...args}>
      <button type="button">Menu</button>
      <strong style={{
      flex: 1
    }}>Title</strong>
      <button type="button">Actions</button>
    </Toolbar>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dense'
  },
  render: args => <Toolbar {...args}>
      <span>Dense toolbar</span>
    </Toolbar>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    disableGutters: true
  },
  render: args => <Toolbar {...args}>
      <span>No inline padding</span>
    </Toolbar>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <AppBar position="static">
      <Toolbar variant="dense">
        <strong style={{
        flex: 1
      }}>Toolbar inside an AppBar</strong>
        <span>v1.0</span>
      </Toolbar>
    </AppBar>
}`,...t.parameters?.docs?.source}}};export{s as Default,a as Dense,o as DisableGutters,t as InAppBar,m as __namedExportsOrder,b as default};
