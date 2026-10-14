import{j as r}from"./iframe-BGBv2Rkz.js";import"./index-Ds1DpZoa.js";import{A as a}from"./avatar-CDKBBxIv.js";import"./preload-helper-Bs85Y4nq.js";const m={title:"Components/Avatar",component:a,parameters:{layout:"centered"},argTypes:{initials:{control:"text"},src:{control:"text"},alt:{control:"text"},size:{control:"number",min:16,max:120},variant:{control:"select",options:["circular","rounded","square"]},color:{control:"color"}},args:{initials:"AK",size:40,variant:"circular"}},s={},t={args:{variant:"rounded",color:"#1976d2"}},i={args:{variant:"square",color:"#0f766e"}},o={render:()=>r.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[r.jsx(a,{initials:"S",size:24}),r.jsx(a,{initials:"M",size:40}),r.jsx(a,{initials:"L",size:64})]})},n={args:{src:"https://i.pravatar.cc/120",alt:"Avatar",initials:""}},e={render:()=>r.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[r.jsx(a,{initials:"P",color:"primary"}),r.jsx(a,{initials:"S",color:"secondary"}),r.jsx(a,{initials:"E",color:"error"}),r.jsx(a,{initials:"W",color:"warning"}),r.jsx(a,{initials:"I",color:"info"}),r.jsx(a,{initials:"O",color:"success"})]})},u=["Initials","Rounded","Square","Sizes","WithImage","PaletteTone"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'rounded',
    color: '#1976d2'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'square',
    color: '#0f766e'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>
      <Avatar initials="S" size={24} />
      <Avatar initials="M" size={40} />
      <Avatar initials="L" size={64} />
    </div>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/120',
    alt: 'Avatar',
    initials: ''
  }
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>
      <Avatar initials="P" color="primary" />
      <Avatar initials="S" color="secondary" />
      <Avatar initials="E" color="error" />
      <Avatar initials="W" color="warning" />
      <Avatar initials="I" color="info" />
      <Avatar initials="O" color="success" />
    </div>
}`,...e.parameters?.docs?.source},description:{story:"A palette key picks the fill and its contrast tone, both from the theme.",...e.parameters?.docs?.description}}};export{s as Initials,e as PaletteTone,t as Rounded,o as Sizes,i as Square,n as WithImage,u as __namedExportsOrder,m as default};
