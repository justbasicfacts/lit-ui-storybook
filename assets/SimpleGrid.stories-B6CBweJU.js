import{j as e}from"./iframe-jabNMnJM.js";import"./index-BSSMaTAd.js";import{S as s}from"./simple-grid-D97cLMuN.js";import{T as n}from"./typography-BHphbC37.js";import{B as d}from"./button-CzMEWmm5.js";import{C as m}from"./card-Ddvd0lC-.js";import{C as g}from"./card-content-BcTxhoUw.js";import"./preload-helper-Bs85Y4nq.js";const G={title:"Components/Layout/SimpleGrid",component:s,parameters:{layout:"padded"},argTypes:{cols:{control:{type:"number",min:0,max:6,step:1}},minColWidth:{control:"text"},spacing:{control:{type:"number",min:0,max:6,step:.5}}},args:{cols:0,minColWidth:"220px",spacing:2}},l=r=>Array.from({length:r},(u,c)=>e.jsx(m,{children:e.jsxs(g,{children:[e.jsxs(n,{variant:"subtitle2",component:"p",children:["Tile ",c+1]}),e.jsx(n,{variant:"caption",color:"text.secondary",component:"p",children:"Columns fit themselves to the width."})]})},c)),o={render:r=>e.jsx(s,{...r,children:l(6)})},a={args:{cols:3},render:r=>e.jsx(s,{...r,children:l(6)})},t={args:{minColWidth:"140px"},render:r=>e.jsx(s,{...r,children:l(8)})},i={args:{cols:3,spacing:4},render:r=>e.jsx(s,{...r,children:l(6)})},p={args:{cols:2,spacing:3},render:r=>e.jsxs(s,{...r,style:{maxWidth:640},children:[e.jsxs("div",{style:{display:"grid",gap:8},children:[e.jsx(n,{variant:"subtitle2",component:"p",children:"Deployments"}),e.jsx(n,{variant:"body2",color:"text.secondary",component:"p",children:"How many releases each week should trigger a rollout."}),e.jsx(d,{size:"sm",variant:"outline",children:"Configure"})]}),e.jsxs("div",{style:{display:"grid",gap:8},children:[e.jsx(n,{variant:"subtitle2",component:"p",children:"Notifications"}),e.jsx(n,{variant:"body2",color:"text.secondary",component:"p",children:"Where the release notes get posted."}),e.jsx(d,{size:"sm",variant:"outline",children:"Configure"})]})]})},T=["Default","FixedColumns","NarrowColumns","SpacingScale","FormLike"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <SimpleGrid {...args}>{tiles(6)}</SimpleGrid>
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 3
  },
  render: args => <SimpleGrid {...args}>{tiles(6)}</SimpleGrid>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    minColWidth: '140px'
  },
  render: args => <SimpleGrid {...args}>{tiles(8)}</SimpleGrid>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 3,
    spacing: 4
  },
  render: args => <SimpleGrid {...args}>{tiles(6)}</SimpleGrid>
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 2,
    spacing: 3
  },
  render: args => <SimpleGrid {...args} style={{
    maxWidth: 640
  }}>
      <div style={{
      display: 'grid',
      gap: 8
    }}>
        <Typography variant="subtitle2" component="p">
          Deployments
        </Typography>
        <Typography variant="body2" color="text.secondary" component="p">
          How many releases each week should trigger a rollout.
        </Typography>
        <Button size="sm" variant="outline">
          Configure
        </Button>
      </div>
      <div style={{
      display: 'grid',
      gap: 8
    }}>
        <Typography variant="subtitle2" component="p">
          Notifications
        </Typography>
        <Typography variant="body2" color="text.secondary" component="p">
          Where the release notes get posted.
        </Typography>
        <Button size="sm" variant="outline">
          Configure
        </Button>
      </div>
    </SimpleGrid>
}`,...p.parameters?.docs?.source}}};export{o as Default,a as FixedColumns,p as FormLike,t as NarrowColumns,i as SpacingScale,T as __namedExportsOrder,G as default};
