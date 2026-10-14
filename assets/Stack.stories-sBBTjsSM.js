import{j as r}from"./iframe-Bwx-W2wi.js";import"./index-BSSMaTAd.js";import{S as t}from"./stack-NamNPciv.js";import"./preload-helper-Bs85Y4nq.js";const u={title:"Components/Layout/Stack",component:t,parameters:{layout:"padded"},argTypes:{direction:{control:"select",options:["row","row-reverse","column","column-reverse"]},spacing:{control:{type:"number",min:0,max:10}},alignItems:{control:"text"},justifyContent:{control:"text"},wrap:{control:"boolean"},divider:{control:"boolean"}},args:{direction:"column",spacing:2,wrap:!1,divider:!1}},n=e=>r.jsx("div",{style:{background:"#e3f2fd",padding:8},children:e}),a={render:e=>r.jsxs(t,{...e,children:[n("Item one"),n("Item two"),n("Item three")]})},o={args:{direction:"row"},render:e=>r.jsxs(t,{...e,children:[n("A"),n("B"),n("C")]})},s={args:{divider:!0},render:e=>r.jsxs(t,{...e,children:[r.jsx("div",{style:{padding:8},children:"Section one"}),r.jsx("div",{style:{padding:8},children:"Section two"}),r.jsx("div",{style:{padding:8},children:"Section three"})]})},i={args:{direction:"row",wrap:!0,spacing:1},render:e=>r.jsx(t,{...e,children:Array.from({length:8}).map((c,d)=>r.jsxs("div",{style:{background:"#e3f2fd",padding:8,width:120},children:["Item ",d+1]},d))})},v=["Default","Row","WithDivider","Wrapped"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Stack {...args}>
      {item('Item one')}
      {item('Item two')}
      {item('Item three')}
    </Stack>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'row'
  },
  render: args => <Stack {...args}>
      {item('A')}
      {item('B')}
      {item('C')}
    </Stack>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    divider: true
  },
  render: args => <Stack {...args}>
      <div style={{
      padding: 8
    }}>Section one</div>
      <div style={{
      padding: 8
    }}>Section two</div>
      <div style={{
      padding: 8
    }}>Section three</div>
    </Stack>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'row',
    wrap: true,
    spacing: 1
  },
  render: args => <Stack {...args}>
      {Array.from({
      length: 8
    }).map((_, i) => <div key={i} style={{
      background: '#e3f2fd',
      padding: 8,
      width: 120
    }}>
          Item {i + 1}
        </div>)}
    </Stack>
}`,...i.parameters?.docs?.source}}};export{a as Default,o as Row,s as WithDivider,i as Wrapped,v as __namedExportsOrder,u as default};
