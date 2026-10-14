import{R as c,j as r}from"./iframe-CI8tjnlt.js";import{o as p,ar as g}from"./index-C156ONKY.js";import{B as u}from"./button-DmY5hG_z.js";import"./preload-helper-Bs85Y4nq.js";const d=p({tagName:"ui-slide",elementClass:g,react:c}),j={title:"Components/Slide",component:d,parameters:{layout:"centered"},argTypes:{direction:{control:"select",options:["up","down","left","right"]},timeout:{control:{type:"number",min:0,max:2e3,step:50}},appear:{control:"boolean"},unmountOnExit:{control:"boolean"}},args:{direction:"down",timeout:300,appear:!0,unmountOnExit:!1}},f={width:260,padding:24,background:"var(--ui-color-success, #2e7d32)",color:"#fff",borderRadius:4,textAlign:"center"},a=e=>{const[i,m]=c.useState(!0);return r.jsxs("div",{style:{display:"grid",gap:16,justifyItems:"center"},children:[r.jsx(u,{variant:"outline",size:"sm",onClick:()=>m(l=>!l),children:i?"Hide":"Show"}),r.jsx(d,{...e,show:i,children:r.jsx("div",{style:f,children:"Sliding content"})})]})},o={render:e=>r.jsx(a,{...e})},t={args:{direction:"up"},render:e=>r.jsx(a,{...e})},s={args:{direction:"left"},render:e=>r.jsx(a,{...e})},n={args:{direction:"right"},render:e=>r.jsx(a,{...e})},D=["Default","FromUp","FromLeft","FromRight"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <ToggleDemo {...args} />
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'up'
  },
  render: (args: any) => <ToggleDemo {...args} />
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'left'
  },
  render: (args: any) => <ToggleDemo {...args} />
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'right'
  },
  render: (args: any) => <ToggleDemo {...args} />
}`,...n.parameters?.docs?.source}}};export{o as Default,s as FromLeft,n as FromRight,t as FromUp,D as __namedExportsOrder,j as default};
