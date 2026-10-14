import{R as p,j as e}from"./iframe-BOtHSW94.js";import{o as l,aJ as h}from"./index-BSSMaTAd.js";import{C as m}from"./card-HAj1jThK.js";import{C as c}from"./card-content-KILzrGcc.js";import{T as o}from"./typography-Cc_iDT_f.js";import"./preload-helper-Bs85Y4nq.js";const d=l({tagName:"ui-spoiler",elementClass:h,react:p}),C={title:"Components/Disclosure/Spoiler",component:d,parameters:{layout:"padded"},argTypes:{maxHeight:{control:{type:"number",min:40,max:400,step:10}},expanded:{control:"boolean"},showLabel:{control:"text"},hideLabel:{control:"text"},hideToggle:{control:"boolean"}},args:{maxHeight:96,expanded:!1,showLabel:"Show more",hideLabel:"Show less",hideToggle:!1}},i=e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"body2",component:"p",children:"A component library is only half the work. The other half is the argument about naming, and that argument never really ends."}),e.jsx(o,{variant:"body2",component:"p",children:"The trick is to make the argument cheap: one folder per component, one tag, one entry in the register table, and a parity test that fails the moment those three drift apart."}),e.jsx(o,{variant:"body2",component:"p",children:"Then a reviewer can spend their attention on the component itself instead of the wiring, which is the only part of this that anybody remembers afterwards."})]}),r={render:s=>e.jsx("div",{style:{maxWidth:520},children:e.jsx(d,{...s,children:i})})},a={args:{maxHeight:160},render:r.render},n={args:{expanded:!0},render:r.render},t={args:{maxHeight:88,showLabel:"Read the note",hideLabel:"Collapse"},render:s=>e.jsx(m,{style:{maxWidth:520},children:e.jsxs(c,{children:[e.jsx(o,{variant:"h6",component:"h3",children:"Release note"}),e.jsx(d,{...s,children:i})]})})},S=["Default","Wider","Expanded","InACard"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    maxWidth: 520
  }}><Spoiler {...args}>{paragraphs}</Spoiler></div>
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    maxHeight: 160
  },
  render: Default.render
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: true
  },
  render: Default.render
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    maxHeight: 88,
    showLabel: 'Read the note',
    hideLabel: 'Collapse'
  },
  render: args => <Card style={{
    maxWidth: 520
  }}>
      <CardContent>
        <Typography variant="h6" component="h3">
          Release note
        </Typography>
        <Spoiler {...args}>{paragraphs}</Spoiler>
      </CardContent>
    </Card>
}`,...t.parameters?.docs?.source}}};export{r as Default,n as Expanded,t as InACard,a as Wider,S as __namedExportsOrder,C as default};
