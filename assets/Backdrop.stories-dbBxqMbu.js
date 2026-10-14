import{j as n}from"./jsx-runtime-D8h-jwK5.js";import{o as c,y as t}from"./index-CKKzZn3u.js";import{R as p}from"./iframe-DP7DDnfB.js";import"./preload-helper-Bs85Y4nq.js";const a=c({tagName:"ui-backdrop",elementClass:t,react:p,events:{onBackdropClick:"backdrop-click"}}),f={title:"Components/Backdrop",component:a,parameters:{layout:"fullscreen"},argTypes:{open:{control:"boolean"},invisible:{control:"boolean"},onBackdropClick:{action:"backdrop-click"}},args:{open:!0,invisible:!1}},e={render:s=>n.jsx(a,{...s,children:n.jsx("span",{style:{color:"#fff",fontSize:20},children:"Backdrop content"})})},r={args:{invisible:!0},render:s=>n.jsx(a,{...s,children:n.jsx("span",{style:{color:"#333",fontSize:20},children:"No scrim, content only"})})},o={args:{open:!1}},k=["Open","Invisible","Closed"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <Backdrop {...args}>
      <span style={{
      color: '#fff',
      fontSize: 20
    }}>Backdrop content</span>
    </Backdrop>
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    invisible: true
  },
  render: args => <Backdrop {...args}>
      <span style={{
      color: '#333',
      fontSize: 20
    }}>
        No scrim, content only
      </span>
    </Backdrop>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    open: false
  }
}`,...o.parameters?.docs?.source}}};export{o as Closed,r as Invisible,e as Open,k as __namedExportsOrder,f as default};
