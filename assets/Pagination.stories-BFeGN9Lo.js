import{R as i,j as t}from"./iframe-D-jlcKf7.js";import{o as u,ag as l}from"./index-A4XEOZPO.js";import"./preload-helper-Bs85Y4nq.js";const n=u({tagName:"ui-pagination",elementClass:l,react:i,events:{onChange:"change"}}),m={title:"Components/Pagination",component:n,parameters:{layout:"centered"},argTypes:{count:{control:{type:"number",min:1}},page:{control:{type:"number",min:1}},siblingCount:{control:{type:"number",min:0}},boundaryCount:{control:{type:"number",min:0}},variant:{control:"inline-radio",options:["text","outlined"]},shape:{control:"inline-radio",options:["circular","rounded"]},size:{control:"inline-radio",options:["small","medium","large"]},disabled:{control:"boolean"},showFirstButton:{control:"boolean"},showLastButton:{control:"boolean"},hidePrevButton:{control:"boolean"},hideNextButton:{control:"boolean"},onChange:{action:"changed"}},args:{count:10,page:3,siblingCount:1,boundaryCount:1,variant:"text",shape:"circular",size:"medium",disabled:!1,showFirstButton:!1,showLastButton:!1,hidePrevButton:!1,hideNextButton:!1}},e={},o={args:{variant:"outlined",shape:"rounded",page:6}},s={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"center"},children:[t.jsx(n,{count:20,page:10,size:"small",showFirstButton:!0,showLastButton:!0}),t.jsx(n,{count:20,page:10,size:"medium",showFirstButton:!0,showLastButton:!0}),t.jsx(n,{count:20,page:10,size:"large",showFirstButton:!0,showLastButton:!0})]})},a={args:{count:20,page:10,showFirstButton:!0,showLastButton:!0},render:r=>t.jsxs(n,{...r,children:[t.jsx("span",{slot:"first",children:"⇤"}),t.jsx("span",{slot:"previous",children:"←"}),t.jsx("span",{slot:"next",children:"→"}),t.jsx("span",{slot:"last",children:"⇥"})]})},g=["Default","Outlined","Sizes","CustomIcons"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    shape: 'rounded',
    page: 6
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    alignItems: 'center'
  }}>
      <Pagination count={20} page={10} size="small" showFirstButton showLastButton />
      <Pagination count={20} page={10} size="medium" showFirstButton showLastButton />
      <Pagination count={20} page={10} size="large" showFirstButton showLastButton />
    </div>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    count: 20,
    page: 10,
    showFirstButton: true,
    showLastButton: true
  },
  render: args => <Pagination {...args}>
      <span slot="first">⇤</span>
      <span slot="previous">←</span>
      <span slot="next">→</span>
      <span slot="last">⇥</span>
    </Pagination>
}`,...a.parameters?.docs?.source}}};export{a as CustomIcons,e as Default,o as Outlined,s as Sizes,g as __namedExportsOrder,m as default};
