import{R as c,j as n}from"./iframe-BGBv2Rkz.js";import{o as t,J as p}from"./index-Ds1DpZoa.js";import"./preload-helper-Bs85Y4nq.js";const a=t({tagName:"ui-backdrop",elementClass:p,react:c,events:{onBackdropClick:"backdrop-click"}}),m={title:"Components/Backdrop",component:a,parameters:{layout:"fullscreen"},argTypes:{open:{control:"boolean"},invisible:{control:"boolean"},onBackdropClick:{action:"backdrop-click"}},args:{open:!0,invisible:!1}},e={render:s=>n.jsx(a,{...s,children:n.jsx("span",{style:{color:"#fff",fontSize:20},children:"Backdrop content"})})},r={args:{invisible:!0},render:s=>n.jsx(a,{...s,children:n.jsx("span",{style:{color:"#333",fontSize:20},children:"No scrim, content only"})})},o={args:{open:!1}},k=["Open","Invisible","Closed"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};export{o as Closed,r as Invisible,e as Open,k as __namedExportsOrder,m as default};
