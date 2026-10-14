import{j as o}from"./jsx-runtime-D8h-jwK5.js";import{o as c,W as m}from"./index-CKKzZn3u.js";import{R as i}from"./iframe-DP7DDnfB.js";import{C as l}from"./checkbox-BSDNbGFB.js";import{S as d}from"./switch-54zIqpNk.js";import"./preload-helper-Bs85Y4nq.js";const e=c({tagName:"ui-form-control-label",elementClass:m,react:i}),F={title:"Components/FormControlLabel",component:e,parameters:{layout:"centered"},argTypes:{label:{control:"text"},required:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"},controlPosition:{control:"select",options:["start","end","top","bottom"]}},args:{label:"Accept terms and conditions",controlPosition:"end"}},t={render:r=>o.jsx(e,{...r,children:o.jsx(l,{slot:"control"})})},s={args:{controlPosition:"start"},render:r=>o.jsx(e,{...r,children:o.jsx(d,{slot:"control"})})},n={args:{controlPosition:"top"},render:r=>o.jsx(e,{...r,children:o.jsx(l,{slot:"control"})})},a={args:{disabled:!0},render:r=>o.jsx(e,{...r,children:o.jsx(l,{slot:"control",disabled:!0})})},L=["Default","Start","Top","Disabled"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FormControlLabel {...args}>
      <Checkbox slot="control" />
    </FormControlLabel>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    controlPosition: 'start'
  },
  render: args => <FormControlLabel {...args}>
      <Switch slot="control" />
    </FormControlLabel>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    controlPosition: 'top'
  },
  render: args => <FormControlLabel {...args}>
      <Checkbox slot="control" />
    </FormControlLabel>
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <FormControlLabel {...args}>
      <Checkbox slot="control" disabled />
    </FormControlLabel>
}`,...a.parameters?.docs?.source}}};export{t as Default,a as Disabled,s as Start,n as Top,L as __namedExportsOrder,F as default};
