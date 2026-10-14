import{j as e}from"./iframe-DpZyQfZJ.js";import"./index-3LxRijqB.js";import{G as s}from"./group-CGVIY30l.js";import{B as d}from"./badge-Dua0dxEU.js";import{B as n}from"./button-C076rtPs.js";import{A as u}from"./avatar-BfwACaHE.js";import{C as c}from"./chip-C_boiHP0.js";import"./preload-helper-Bs85Y4nq.js";const f={title:"Components/Layout/Group",component:s,parameters:{layout:"padded"},argTypes:{spacing:{control:{type:"number",min:0,max:8,step:.5}},align:{control:"select",options:["","flex-start","center","flex-end","baseline","stretch"]},justify:{control:"select",options:["","flex-start","center","flex-end","space-between","space-around","space-evenly"]},wrap:{control:"boolean"},grow:{control:"boolean"}},args:{spacing:2,align:"center",justify:"",wrap:!0,grow:!1}},l=e.jsxs(e.Fragment,{children:[e.jsx(n,{size:"sm",children:"Save"}),e.jsx(n,{size:"sm",variant:"outline",children:"Cancel"}),e.jsx(n,{size:"sm",variant:"ghost",children:"Later"})]}),a={render:r=>e.jsx(s,{...r,children:l})},t={render:()=>e.jsx("div",{style:{display:"grid",gap:16},children:[.5,1,2,4].map(r=>e.jsx(s,{spacing:r,children:l},r))})},o={args:{justify:"space-between"},parameters:{layout:"padded"},render:r=>e.jsxs(s,{...r,style:{width:"100%"},children:[e.jsx("strong",{children:"Deployment"}),e.jsxs(s,{spacing:1,children:[e.jsx(d,{variant:"success",children:"Passing"}),e.jsx(n,{size:"sm",variant:"ghost",children:"Open logs"})]})]})},i={args:{grow:!0},render:r=>e.jsxs(s,{...r,style:{width:"100%"},children:[e.jsx(n,{children:"One"}),e.jsx(n,{variant:"outline",children:"Two"}),e.jsx(n,{variant:"ghost",children:"Three"})]})},p={render:()=>e.jsxs(s,{spacing:2,children:[e.jsx(u,{initials:"AO",color:"primary",size:32}),e.jsx(c,{label:"Design system",variant:"outlined",nowrap:!0}),e.jsx(c,{label:"v0.6",variant:"filled",nowrap:!0}),e.jsx(c,{label:"Lit",variant:"outlined",nowrap:!0})]})},G=["Default","Spacing","Between","Grow","WithChipsAndAvatar"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Group {...args}>{three}</Group>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 16
  }}>
      {[0.5, 1, 2, 4].map(spacing => <Group key={spacing} spacing={spacing}>
          {three}
        </Group>)}
    </div>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    justify: 'space-between'
  },
  parameters: {
    layout: 'padded'
  },
  render: args => <Group {...args} style={{
    width: '100%'
  }}>
      <strong>Deployment</strong>
      <Group spacing={1}>
        <Badge variant="success">Passing</Badge>
        <Button size="sm" variant="ghost">
          Open logs
        </Button>
      </Group>
    </Group>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    grow: true
  },
  render: args => <Group {...args} style={{
    width: '100%'
  }}>
      <Button>One</Button>
      <Button variant="outline">Two</Button>
      <Button variant="ghost">Three</Button>
    </Group>
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Group spacing={2}>
      <Avatar initials="AO" color="primary" size={32} />
      <Chip label="Design system" variant="outlined" nowrap />
      <Chip label="v0.6" variant="filled" nowrap />
      <Chip label="Lit" variant="outlined" nowrap />
    </Group>
}`,...p.parameters?.docs?.source}}};export{o as Between,a as Default,i as Grow,t as Spacing,p as WithChipsAndAvatar,G as __namedExportsOrder,f as default};
