import{R as l,j as e}from"./iframe-D-jlcKf7.js";import{o as c,a8 as i}from"./index-A4XEOZPO.js";import{I as a}from"./input-BnpK5BIo.js";import"./preload-helper-Bs85Y4nq.js";const o=c({tagName:"ui-input-adornment",elementClass:i,react:l}),d={display:"flex",alignItems:"center",width:320},g={title:"Components/InputAdornment",component:o,parameters:{layout:"centered"},argTypes:{position:{control:"select",options:["start","end"]}},args:{position:"start",children:"$"}},n={render:r=>e.jsxs("div",{style:d,children:[e.jsx(o,{...r}),e.jsx(a,{style:{flex:1},placeholder:"0.00"})]})},s={args:{position:"end",children:"kg"},render:r=>e.jsxs("div",{style:d,children:[e.jsx(a,{style:{flex:1},placeholder:"0"}),e.jsx(o,{...r})]})},t={args:{children:"@"},render:r=>e.jsxs("div",{style:d,children:[e.jsx(o,{...r}),e.jsx(a,{style:{flex:1},placeholder:"username"})]})},h=["Start","End","WithIcon"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div style={row}>
      <InputAdornment {...args} />
      <Input style={{
      flex: 1
    }} placeholder="0.00" />
    </div>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'end',
    children: 'kg'
  },
  render: args => <div style={row}>
      <Input style={{
      flex: 1
    }} placeholder="0" />
      <InputAdornment {...args} />
    </div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: '@'
  },
  render: args => <div style={row}>
      <InputAdornment {...args} />
      <Input style={{
      flex: 1
    }} placeholder="username" />
    </div>
}`,...t.parameters?.docs?.source}}};export{s as End,n as Start,t as WithIcon,h as __namedExportsOrder,g as default};
