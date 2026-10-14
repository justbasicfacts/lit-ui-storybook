import{j as e}from"./iframe-DpZyQfZJ.js";import"./index-3LxRijqB.js";import{a as n,T as o}from"./toggle-button-group-CvY0RYxn.js";import"./preload-helper-Bs85Y4nq.js";const d={title:"Components/Inputs/ToggleButtonGroup",component:n,parameters:{layout:"centered"},argTypes:{value:{control:"text"},exclusive:{control:"boolean"},orientation:{control:"select",options:["horizontal","vertical"]},size:{control:"select",options:["small","medium","large"]},color:{control:"select",options:["primary","secondary","error","warning","info","success"]},disabled:{control:"boolean"},fullWidth:{control:"boolean"},children:{control:!1},onChange:{action:"change"}},args:{value:"bold italic",exclusive:!1,orientation:"horizontal",size:"medium",color:"primary",disabled:!1,fullWidth:!1}},r={render:t=>e.jsxs(n,{...t,children:[e.jsx(o,{value:"bold",children:"Bold"}),e.jsx(o,{value:"italic",children:"Italic"}),e.jsx(o,{value:"underlined",children:"Underlined"})]})},l={args:{exclusive:!0,value:"center"},render:t=>e.jsxs(n,{...t,children:[e.jsx(o,{value:"left",children:"Left"}),e.jsx(o,{value:"center",children:"Center"}),e.jsx(o,{value:"right",children:"Right"})]})},a={args:{orientation:"vertical",value:"top"},render:t=>e.jsxs(n,{...t,exclusive:!0,children:[e.jsx(o,{value:"top",children:"Top"}),e.jsx(o,{value:"middle",children:"Middle"}),e.jsx(o,{value:"bottom",children:"Bottom"})]})},s={args:{disabled:!0},render:t=>e.jsxs(n,{...t,children:[e.jsx(o,{value:"bold",children:"Bold"}),e.jsx(o,{value:"italic",children:"Italic"}),e.jsx(o,{value:"underlined",children:"Underlined"})]})},p=["Default","Exclusive","Vertical","Disabled"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <ToggleButtonGroup {...args}>
      <ToggleButton value="bold">Bold</ToggleButton>
      <ToggleButton value="italic">Italic</ToggleButton>
      <ToggleButton value="underlined">Underlined</ToggleButton>
    </ToggleButtonGroup>
}`,...r.parameters?.docs?.source},description:{story:"`value` is a space separated list while the group is not exclusive.",...r.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    exclusive: true,
    value: 'center'
  },
  render: args => <ToggleButtonGroup {...args}>
      <ToggleButton value="left">Left</ToggleButton>
      <ToggleButton value="center">Center</ToggleButton>
      <ToggleButton value="right">Right</ToggleButton>
    </ToggleButtonGroup>
}`,...l.parameters?.docs?.source},description:{story:"Exclusive groups behave like a radio group: one value, clicking it clears.",...l.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    value: 'top'
  },
  render: args => <ToggleButtonGroup {...args} exclusive>
      <ToggleButton value="top">Top</ToggleButton>
      <ToggleButton value="middle">Middle</ToggleButton>
      <ToggleButton value="bottom">Bottom</ToggleButton>
    </ToggleButtonGroup>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <ToggleButtonGroup {...args}>
      <ToggleButton value="bold">Bold</ToggleButton>
      <ToggleButton value="italic">Italic</ToggleButton>
      <ToggleButton value="underlined">Underlined</ToggleButton>
    </ToggleButtonGroup>
}`,...s.parameters?.docs?.source}}};export{r as Default,s as Disabled,l as Exclusive,a as Vertical,p as __namedExportsOrder,d as default};
