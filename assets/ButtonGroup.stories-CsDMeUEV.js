import{R as u,j as t}from"./iframe-jabNMnJM.js";import{o as l,N as c}from"./index-BSSMaTAd.js";import{B as n}from"./button-CzMEWmm5.js";import"./preload-helper-Bs85Y4nq.js";const e=l({tagName:"ui-button-group",elementClass:c,react:u}),v={title:"Components/Inputs/ButtonGroup",component:e,parameters:{layout:"centered"},argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},variant:{control:"select",options:["contained","outlined","text"]},size:{control:"select",options:["small","medium","large"]},color:{control:"select",options:["primary","secondary","error","warning","info","success"]},disableElevation:{control:"boolean"},fullWidth:{control:"boolean"},disabled:{control:"boolean"},children:{control:!1}},args:{orientation:"horizontal",variant:"outlined",size:"medium",color:"primary",disabled:!1}},o={render:r=>t.jsxs(e,{...r,children:[t.jsx(n,{variant:"outline",children:"One"}),t.jsx(n,{variant:"outline",children:"Two"}),t.jsx(n,{variant:"outline",children:"Three"})]})},a={render:r=>t.jsxs(e,{...r,variant:"contained",children:[t.jsx(n,{variant:"primary",children:"Save"}),t.jsx(n,{variant:"primary",children:"Save as"}),t.jsx(n,{variant:"primary",children:"Cancel"})]})},i={args:{orientation:"vertical"},render:r=>t.jsxs(e,{...r,children:[t.jsx(n,{variant:"outline",children:"Top"}),t.jsx(n,{variant:"outline",children:"Middle"}),t.jsx(n,{variant:"outline",children:"Bottom"})]})},s={args:{fullWidth:!0,disabled:!0},parameters:{layout:"padded"},render:r=>t.jsxs(e,{...r,children:[t.jsx(n,{variant:"outline",children:"One"}),t.jsx(n,{variant:"outline",children:"Two"}),t.jsx(n,{variant:"outline",children:"Three"})]})},h=["Default","Contained","Vertical","FullWidthDisabled"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <ButtonGroup {...args}>
      <Button variant="outline">One</Button>
      <Button variant="outline">Two</Button>
      <Button variant="outline">Three</Button>
    </ButtonGroup>
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <ButtonGroup {...args} variant="contained">
      <Button variant="primary">Save</Button>
      <Button variant="primary">Save as</Button>
      <Button variant="primary">Cancel</Button>
    </ButtonGroup>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  render: args => <ButtonGroup {...args}>
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    disabled: true
  },
  parameters: {
    layout: 'padded'
  },
  render: args => <ButtonGroup {...args}>
      <Button variant="outline">One</Button>
      <Button variant="outline">Two</Button>
      <Button variant="outline">Three</Button>
    </ButtonGroup>
}`,...s.parameters?.docs?.source}}};export{a as Contained,o as Default,s as FullWidthDisabled,i as Vertical,h as __namedExportsOrder,v as default};
