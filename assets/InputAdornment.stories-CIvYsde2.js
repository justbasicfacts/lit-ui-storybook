import{j as e}from"./jsx-runtime-D8h-jwK5.js";import{o as l,a3 as c}from"./index-CKKzZn3u.js";import{R as i}from"./iframe-DP7DDnfB.js";import{I as a}from"./input-ZSzgr6Ja.js";import"./preload-helper-Bs85Y4nq.js";const o=l({tagName:"ui-input-adornment",elementClass:c,react:i}),d={display:"flex",alignItems:"center",width:320},h={title:"Components/InputAdornment",component:o,parameters:{layout:"centered"},argTypes:{position:{control:"select",options:["start","end"]}},args:{position:"start",children:"$"}},n={render:r=>e.jsxs("div",{style:d,children:[e.jsx(o,{...r}),e.jsx(a,{style:{flex:1},placeholder:"0.00"})]})},s={args:{position:"end",children:"kg"},render:r=>e.jsxs("div",{style:d,children:[e.jsx(a,{style:{flex:1},placeholder:"0"}),e.jsx(o,{...r})]})},t={args:{children:"@"},render:r=>e.jsxs("div",{style:d,children:[e.jsx(o,{...r}),e.jsx(a,{style:{flex:1},placeholder:"username"})]})},y=["Start","End","WithIcon"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};export{s as End,n as Start,t as WithIcon,y as __namedExportsOrder,h as default};
