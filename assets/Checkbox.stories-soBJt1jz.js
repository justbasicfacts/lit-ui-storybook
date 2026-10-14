import{j as e}from"./iframe-CI8tjnlt.js";import"./index-C156ONKY.js";import{C as r}from"./checkbox-DpRus3Ca.js";import"./preload-helper-Bs85Y4nq.js";const p={title:"Components/Checkbox",component:r,parameters:{layout:"centered"},argTypes:{label:{control:"text"},checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"},onChange:{action:"changed"}},args:{label:"Accept terms and conditions",checked:!1}},a={},s={args:{checked:!0}},o={args:{indeterminate:!0}},c={args:{checked:!0,disabled:!0}},t={render:()=>e.jsxs("div",{style:{display:"grid",gap:8},children:[e.jsx(r,{label:"Design",checked:!0}),e.jsx(r,{label:"Engineering",checked:!0}),e.jsx(r,{label:"Product"}),e.jsx(r,{label:"Support"})]})},m=["Unchecked","Checked","Indeterminate","Disabled","Group"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 8
  }}>
      <Checkbox label="Design" checked />
      <Checkbox label="Engineering" checked />
      <Checkbox label="Product" />
      <Checkbox label="Support" />
    </div>
}`,...t.parameters?.docs?.source}}};export{s as Checked,c as Disabled,t as Group,o as Indeterminate,a as Unchecked,m as __namedExportsOrder,p as default};
