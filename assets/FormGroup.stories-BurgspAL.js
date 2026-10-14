import{j as e}from"./jsx-runtime-D8h-jwK5.js";import{o as l,X as c}from"./index-CKKzZn3u.js";import{R as m}from"./iframe-DP7DDnfB.js";import{C as r}from"./checkbox-BSDNbGFB.js";import{S as t}from"./switch-54zIqpNk.js";import"./preload-helper-Bs85Y4nq.js";const n=l({tagName:"ui-form-group",elementClass:c,react:m}),x={title:"Components/FormGroup",component:n,parameters:{layout:"centered"},argTypes:{row:{control:"boolean"}},args:{row:!1}},o={render:s=>e.jsxs(n,{...s,children:[e.jsx(r,{label:"Design"}),e.jsx(r,{label:"Engineering",checked:!0}),e.jsx(r,{label:"Product"}),e.jsx(r,{label:"Support"})]})},a={args:{row:!0},render:s=>e.jsxs(n,{...s,children:[e.jsx(t,{label:"Email",checked:!0}),e.jsx(t,{label:"SMS"}),e.jsx(t,{label:"Push"})]})},h=["Default","Row"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <FormGroup {...args}>
      <Checkbox label="Design" />
      <Checkbox label="Engineering" checked />
      <Checkbox label="Product" />
      <Checkbox label="Support" />
    </FormGroup>
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    row: true
  },
  render: args => <FormGroup {...args}>
      <Switch label="Email" checked />
      <Switch label="SMS" />
      <Switch label="Push" />
    </FormGroup>
}`,...a.parameters?.docs?.source}}};export{o as Default,a as Row,h as __namedExportsOrder,x as default};
