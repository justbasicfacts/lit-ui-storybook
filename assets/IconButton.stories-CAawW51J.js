import{j as e}from"./iframe-Bwx-W2wi.js";import"./index-BSSMaTAd.js";import{I as n}from"./icon-button-DNEZ5MOS.js";import"./preload-helper-Bs85Y4nq.js";const s=()=>e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})}),c=()=>e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})}),r=()=>e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"m12 17.27 6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})}),I={title:"Components/Inputs/IconButton",component:n,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["small","medium","large"]},color:{control:"select",options:["default","primary","secondary","error","warning","info","success","inherit"]},disabled:{control:"boolean"},edge:{control:"select",options:["","start","end"]},label:{control:"text"},children:{control:!1},onClick:{action:"clicked"}},args:{size:"medium",color:"default",edge:"",label:"Delete"}},o={render:d=>e.jsx(n,{...d,children:e.jsx(s,{})})},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(n,{label:"Default",color:"default",children:e.jsx(r,{})}),e.jsx(n,{label:"Primary",color:"primary",children:e.jsx(r,{})}),e.jsx(n,{label:"Secondary",color:"secondary",children:e.jsx(r,{})}),e.jsx(n,{label:"Success",color:"success",children:e.jsx(r,{})}),e.jsx(n,{label:"Warning",color:"warning",children:e.jsx(r,{})}),e.jsx(n,{label:"Error",color:"error",children:e.jsx(r,{})}),e.jsx(n,{label:"Info",color:"info",children:e.jsx(r,{})})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(n,{label:"Small add",size:"small",color:"primary",children:e.jsx(c,{})}),e.jsx(n,{label:"Medium add",size:"medium",color:"primary",children:e.jsx(c,{})}),e.jsx(n,{label:"Large add",size:"large",color:"primary",children:e.jsx(c,{})})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsx(n,{label:"Disabled",disabled:!0,color:"primary",children:e.jsx(s,{})}),e.jsx(n,{label:"Flush start",edge:"start",color:"primary",children:e.jsx(s,{})}),e.jsx(n,{label:"Flush end",edge:"end",color:"primary",children:e.jsx(s,{})})]})},x=["Default","Colors","Sizes","DisabledAndEdges"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <IconButton {...args}>
      <DeleteIcon />
    </IconButton>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center'
  }}>
      <IconButton label="Default" color="default">
        <StarIcon />
      </IconButton>
      <IconButton label="Primary" color="primary">
        <StarIcon />
      </IconButton>
      <IconButton label="Secondary" color="secondary">
        <StarIcon />
      </IconButton>
      <IconButton label="Success" color="success">
        <StarIcon />
      </IconButton>
      <IconButton label="Warning" color="warning">
        <StarIcon />
      </IconButton>
      <IconButton label="Error" color="error">
        <StarIcon />
      </IconButton>
      <IconButton label="Info" color="info">
        <StarIcon />
      </IconButton>
    </div>
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center'
  }}>
      <IconButton label="Small add" size="small" color="primary">
        <AddIcon />
      </IconButton>
      <IconButton label="Medium add" size="medium" color="primary">
        <AddIcon />
      </IconButton>
      <IconButton label="Large add" size="large" color="primary">
        <AddIcon />
      </IconButton>
    </div>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center'
  }}>
      <IconButton label="Disabled" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton label="Flush start" edge="start" color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton label="Flush end" edge="end" color="primary">
        <DeleteIcon />
      </IconButton>
    </div>
}`,...t.parameters?.docs?.source}}};export{l as Colors,o as Default,t as DisabledAndEdges,a as Sizes,x as __namedExportsOrder,I as default};
