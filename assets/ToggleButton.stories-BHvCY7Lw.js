import{j as e}from"./iframe-7KbjxAZ3.js";import"./index-3LxRijqB.js";import{T as o,a as s}from"./toggle-button-group-BOJ73Efn.js";import"./preload-helper-Bs85Y4nq.js";const d={title:"Components/Inputs/ToggleButton",component:o,parameters:{layout:"centered"},argTypes:{value:{control:"text"},selected:{control:"boolean"},disabled:{control:"boolean"},size:{control:"select",options:["small","medium","large"]},color:{control:"select",options:["primary","secondary","error","warning","info","success"]},children:{control:"text"},onToggleSelect:{action:"toggled"}},args:{value:"bold",selected:!0,size:"medium",color:"primary",children:"Bold"}},t={},l={render:()=>e.jsxs(s,{value:"bold italic",children:[e.jsx(o,{value:"bold",children:"Bold"}),e.jsx(o,{value:"italic",children:"Italic"}),e.jsx(o,{value:"underlined",children:"Underlined"})]})},r={render:()=>e.jsxs(s,{value:"center",exclusive:!0,children:[e.jsx(o,{value:"left",children:"Left"}),e.jsx(o,{value:"center",children:"Center"}),e.jsx(o,{value:"right",children:"Right"})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(o,{value:"s",size:"small",selected:!0,children:"Small"}),e.jsx(o,{value:"m",size:"medium",selected:!0,children:"Medium"}),e.jsx(o,{value:"l",size:"large",selected:!0,color:"secondary",children:"Large"}),e.jsx(o,{value:"d",disabled:!0,children:"Disabled"})]})},g=["Default","InGroup","ExclusiveInGroup","Sizes"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source},description:{story:"A single button on its own; the group drives `selected` in real usage.",...t.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleButtonGroup value="bold italic">
      <ToggleButton value="bold">Bold</ToggleButton>
      <ToggleButton value="italic">Italic</ToggleButton>
      <ToggleButton value="underlined">Underlined</ToggleButton>
    </ToggleButtonGroup>
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleButtonGroup value="center" exclusive>
      <ToggleButton value="left">Left</ToggleButton>
      <ToggleButton value="center">Center</ToggleButton>
      <ToggleButton value="right">Right</ToggleButton>
    </ToggleButtonGroup>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      <ToggleButton value="s" size="small" selected>
        Small
      </ToggleButton>
      <ToggleButton value="m" size="medium" selected>
        Medium
      </ToggleButton>
      <ToggleButton value="l" size="large" selected color="secondary">
        Large
      </ToggleButton>
      <ToggleButton value="d" disabled>
        Disabled
      </ToggleButton>
    </div>
}`,...n.parameters?.docs?.source}}};export{t as Default,r as ExclusiveInGroup,l as InGroup,n as Sizes,g as __namedExportsOrder,d as default};
