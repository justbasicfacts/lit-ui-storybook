import{R as i,j as e}from"./iframe-EaglJ-EY.js";import{o as l,T as c}from"./index-qmVU2qX3.js";import"./preload-helper-Bs85Y4nq.js";const o=l({tagName:"ui-rating",elementClass:c,react:i,events:{onChange:"change"}}),p={title:"Components/Inputs/Rating",component:o,parameters:{layout:"centered"},argTypes:{value:{control:{type:"number",min:0,max:10,step:1}},max:{control:{type:"number",min:1,max:10}},precision:{control:{type:"number",min:.5,step:.5}},size:{control:"select",options:["small","medium","large"]},readOnly:{control:"boolean"},disabled:{control:"boolean"},icon:{control:"text"},emptyIcon:{control:"text"},onChange:{action:"changed"}},args:{value:3,max:5,precision:1,size:"medium"}},a={},r={args:{readOnly:!0,value:4}},s={parameters:{layout:"centered"},render:()=>e.jsxs("div",{style:{display:"grid",gap:16,justifyItems:"start"},children:[e.jsx(o,{value:2,size:"small"}),e.jsx(o,{value:3,size:"medium"}),e.jsx(o,{value:4,size:"large"})]})},t={args:{max:10,value:7}},n={args:{disabled:!0,value:3}},g=["Default","ReadOnly","Sizes","TenStars","Disabled"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    value: 4
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: () => <div style={{
    display: 'grid',
    gap: 16,
    justifyItems: 'start'
  }}>
      <Rating value={2} size="small" />
      <Rating value={3} size="medium" />
      <Rating value={4} size="large" />
    </div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    max: 10,
    value: 7
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 3
  }
}`,...n.parameters?.docs?.source}}};export{a as Default,n as Disabled,r as ReadOnly,s as Sizes,t as TenStars,g as __namedExportsOrder,p as default};
