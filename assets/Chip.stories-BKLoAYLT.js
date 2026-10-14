import{j as e}from"./iframe-CI8tjnlt.js";import"./index-C156ONKY.js";import{C as r}from"./chip-CLInR1RO.js";import"./preload-helper-Bs85Y4nq.js";const m={title:"Components/Chip",component:r,parameters:{layout:"centered"},argTypes:{label:{control:"text"},variant:{control:"select",options:["filled","outlined"]},color:{control:"select",options:["default","primary","secondary","success","warning","error","info"]},disabled:{control:"boolean"},deletable:{control:"boolean"},clickable:{control:"boolean"},onDelete:{action:"deleted"}},args:{label:"React",variant:"filled",color:"primary"}},o={},l={args:{variant:"outlined"}},s={args:{label:"Removable",color:"info",deletable:!0}},n={args:{disabled:!0}},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(r,{label:"Default"}),e.jsx(r,{label:"Primary",color:"primary"}),e.jsx(r,{label:"Success",color:"success",variant:"outlined"}),e.jsx(r,{label:"Warning",color:"warning",variant:"outlined"}),e.jsx(r,{label:"Error",color:"error"}),e.jsx(r,{label:"Info",color:"info"})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:6,flexWrap:"wrap",maxWidth:260},children:[e.jsx(r,{label:"TypeScript"}),e.jsx(r,{label:"Roboto Condensed"}),e.jsx(r,{label:"Web Components",nowrap:!0}),e.jsx(r,{label:"Design Tokens",nowrap:!0})]})},b=["Filled","Outlined","Deletable","Disabled","Colors","NoWrap"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outlined'
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Removable',
    color: 'info',
    deletable: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap'
  }}>
      <Chip label="Default" />
      <Chip label="Primary" color="primary" />
      <Chip label="Success" color="success" variant="outlined" />
      <Chip label="Warning" color="warning" variant="outlined" />
      <Chip label="Error" color="error" />
      <Chip label="Info" color="info" />
    </div>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 6,
    flexWrap: 'wrap',
    maxWidth: 260
  }}>
      <Chip label="TypeScript" />
      <Chip label="Roboto Condensed" />
      <Chip label="Web Components" nowrap />
      <Chip label="Design Tokens" nowrap />
    </div>
}`,...a.parameters?.docs?.source},description:{story:"`nowrap` keeps a technical label on one line inside a wrapping row.",...a.parameters?.docs?.description}}};export{t as Colors,s as Deletable,n as Disabled,o as Filled,a as NoWrap,l as Outlined,b as __namedExportsOrder,m as default};
