import{j as e}from"./iframe-DpZyQfZJ.js";import"./index-3LxRijqB.js";import{R as i,a}from"./radio-group-zOwcWRh6.js";import"./preload-helper-Bs85Y4nq.js";const m={title:"Components/Inputs/RadioGroup",component:i,parameters:{layout:"centered"},argTypes:{label:{control:"text"},orientation:{control:"inline-radio",options:["vertical","horizontal"]},disabled:{control:"boolean"},onChange:{action:"changed"}},args:{label:"Plan",value:"pro",orientation:"vertical"}},l=e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"basic",label:"Basic"}),e.jsx(a,{value:"pro",label:"Pro"}),e.jsx(a,{value:"enterprise",label:"Enterprise"})]}),o={render:r=>e.jsx(i,{...r,children:l})},s={args:{orientation:"horizontal"},render:r=>e.jsx(i,{...r,children:l})},n={args:{disabled:!0},render:r=>e.jsx(i,{...r,children:l})},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(a,{value:"a",label:"Option A",checked:!0}),e.jsx(a,{value:"b",label:"Option B"}),e.jsx(a,{value:"c",label:"Disabled",disabled:!0})]})},b=["Vertical","Horizontal","Disabled","StandaloneRadio"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <RadioGroup {...args}>{options}</RadioGroup>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  },
  render: args => <RadioGroup {...args}>{options}</RadioGroup>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <RadioGroup {...args}>{options}</RadioGroup>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16
  }}>
      <Radio value="a" label="Option A" checked />
      <Radio value="b" label="Option B" />
      <Radio value="c" label="Disabled" disabled />
    </div>
}`,...t.parameters?.docs?.source}}};export{n as Disabled,s as Horizontal,t as StandaloneRadio,o as Vertical,b as __namedExportsOrder,m as default};
