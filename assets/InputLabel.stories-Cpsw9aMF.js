import{j as r}from"./iframe-CI8tjnlt.js";import"./index-C156ONKY.js";import{I as n}from"./input-label-B06IZNvw.js";import{I as c}from"./input-Da7zFpfK.js";import"./preload-helper-Bs85Y4nq.js";const u={title:"Components/InputLabel",component:n,parameters:{layout:"centered"},decorators:[t=>r.jsx("div",{style:{width:320},children:r.jsx(t,{})})],argTypes:{required:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"},focused:{control:"boolean"},shrink:{control:"boolean"},size:{control:"select",options:["small","medium"]},variant:{control:"select",options:["standard","outlined","filled"]}},args:{children:"Email address"}},e={},o={render:t=>r.jsxs("div",{children:[r.jsx(n,{...t}),r.jsx(c,{placeholder:"you@example.com"})]})},s={args:{required:!0}},a={args:{error:!0}},g=["Default","WithInput","Required","Error"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div>
      <InputLabel {...args} />
      <Input placeholder="you@example.com" />
    </div>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    error: true
  }
}`,...a.parameters?.docs?.source}}};export{e as Default,a as Error,s as Required,o as WithInput,g as __namedExportsOrder,u as default};
