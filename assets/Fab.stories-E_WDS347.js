import{R as t,j as e}from"./iframe-Bwx-W2wi.js";import{o as d,O as m}from"./index-BSSMaTAd.js";import"./preload-helper-Bs85Y4nq.js";const r=d({tagName:"ui-fab",elementClass:m,react:t}),c=()=>e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})}),a=()=>e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"})}),u={title:"Components/Inputs/Fab",component:r,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["small","medium","large"]},color:{control:"select",options:["default","primary","secondary","success","error","info","warning","inherit"]},variant:{control:"select",options:["circular","extended","square"]},disabled:{control:"boolean"},href:{control:"text"},label:{control:"text"},children:{control:!1},onClick:{action:"clicked"}},args:{size:"large",color:"primary",variant:"circular",label:"Add"}},n={render:i=>e.jsx(r,{...i,children:e.jsx(c,{})})},s={args:{variant:"extended",label:"Add"},render:i=>e.jsxs(r,{...i,children:[e.jsx(c,{}),"Add"]})},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(r,{size:"small",color:"primary",label:"Edit",children:e.jsx(a,{})}),e.jsx(r,{size:"medium",color:"primary",label:"Edit",children:e.jsx(a,{})}),e.jsx(r,{size:"large",color:"primary",label:"Edit",children:e.jsx(a,{})})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(r,{color:"default",label:"Default",children:e.jsx(a,{})}),e.jsx(r,{color:"primary",label:"Primary",children:e.jsx(a,{})}),e.jsx(r,{color:"secondary",label:"Secondary",children:e.jsx(a,{})}),e.jsx(r,{color:"success",label:"Success",size:"medium",children:e.jsx(a,{})}),e.jsx(r,{color:"error",label:"Error",size:"medium",variant:"square",children:e.jsx(a,{})}),e.jsx(r,{color:"warning",label:"Warning",size:"small",children:e.jsx(a,{})}),e.jsx(r,{color:"inherit",label:"Inherit",size:"small",variant:"square",children:e.jsx(a,{})})]})},h=["Default","Extended","Sizes","Colors"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Fab {...args}>
      <AddIcon />
    </Fab>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'extended',
    label: 'Add'
  },
  render: args => <Fab {...args}>
      <AddIcon />
      Add
    </Fab>
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      <Fab size="small" color="primary" label="Edit">
        <EditIcon />
      </Fab>
      <Fab size="medium" color="primary" label="Edit">
        <EditIcon />
      </Fab>
      <Fab size="large" color="primary" label="Edit">
        <EditIcon />
      </Fab>
    </div>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      <Fab color="default" label="Default">
        <EditIcon />
      </Fab>
      <Fab color="primary" label="Primary">
        <EditIcon />
      </Fab>
      <Fab color="secondary" label="Secondary">
        <EditIcon />
      </Fab>
      <Fab color="success" label="Success" size="medium">
        <EditIcon />
      </Fab>
      <Fab color="error" label="Error" size="medium" variant="square">
        <EditIcon />
      </Fab>
      <Fab color="warning" label="Warning" size="small">
        <EditIcon />
      </Fab>
      <Fab color="inherit" label="Inherit" size="small" variant="square">
        <EditIcon />
      </Fab>
    </div>
}`,...o.parameters?.docs?.source}}};export{o as Colors,n as Default,s as Extended,l as Sizes,h as __namedExportsOrder,u as default};
