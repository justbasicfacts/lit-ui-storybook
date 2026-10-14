import{j as o}from"./iframe-lGCTaxPj.js";import"./index-C-Hz80Os.js";import{F as e}from"./form-control-label-IPUYddVd.js";import{C as l}from"./checkbox-C--D5YRW.js";import{S as c}from"./switch-jsDYIBw_.js";import"./preload-helper-Bs85Y4nq.js";const g={title:"Components/FormControlLabel",component:e,parameters:{layout:"centered"},argTypes:{label:{control:"text"},required:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"},controlPosition:{control:"select",options:["start","end","top","bottom"]}},args:{label:"Accept terms and conditions",controlPosition:"end"}},t={render:r=>o.jsx(e,{...r,children:o.jsx(l,{slot:"control"})})},s={args:{controlPosition:"start"},render:r=>o.jsx(e,{...r,children:o.jsx(c,{slot:"control"})})},n={args:{controlPosition:"top"},render:r=>o.jsx(e,{...r,children:o.jsx(l,{slot:"control"})})},a={args:{disabled:!0},render:r=>o.jsx(e,{...r,children:o.jsx(l,{slot:"control",disabled:!0})})},x=["Default","Start","Top","Disabled"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};export{t as Default,a as Disabled,s as Start,n as Top,x as __namedExportsOrder,g as default};
