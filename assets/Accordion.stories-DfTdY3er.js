import{R as c,j as e}from"./iframe-CI8tjnlt.js";import{o as t,J as i}from"./index-C156ONKY.js";import"./preload-helper-Bs85Y4nq.js";const r=t({tagName:"ui-accordion",elementClass:i,react:c,events:{onChange:"change"}}),u={title:"Components/Accordion",component:r,parameters:{layout:"padded"},decorators:[n=>e.jsx("div",{style:{width:480},children:e.jsx(n,{})})],argTypes:{expanded:{control:"boolean"},disabled:{control:"boolean"},square:{control:"boolean"},disableGutters:{control:"boolean"},elevation:{control:{type:"number",min:0,max:24}},headingLevel:{control:{type:"number",min:1,max:6}},onChange:{action:"change"}},args:{expanded:!0,disabled:!1,square:!1,disableGutters:!1,elevation:1,headingLevel:3}},a={render:n=>e.jsxs(r,{...n,children:[e.jsx("span",{slot:"summary",children:"Accordion summary"}),e.jsx("p",{style:{margin:0},children:"This is the accordion details content, revealed when expanded."})]})},s={args:{expanded:!1},render:n=>e.jsxs(r,{...n,children:[e.jsx("span",{slot:"summary",children:"Accordion summary"}),e.jsx("p",{style:{margin:0},children:"Hidden until the summary is clicked."})]})},o={args:{disabled:!0,expanded:!1},render:n=>e.jsxs(r,{...n,children:[e.jsx("span",{slot:"summary",children:"Disabled accordion"}),e.jsx("p",{style:{margin:0},children:"This panel cannot be toggled."})]})},d={args:{elevation:0,square:!0},render:n=>e.jsxs(r,{...n,children:[e.jsx("span",{slot:"summary",children:"Elevation-free accordion"}),e.jsx("p",{style:{margin:0},children:"Uses a divider border instead of a shadow."})]})},g=["Expanded","Collapsed","Disabled","Outlined"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Accordion {...args}>
      <span slot="summary">Accordion summary</span>
      <p style={{
      margin: 0
    }}>
        This is the accordion details content, revealed when expanded.
      </p>
    </Accordion>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: false
  },
  render: args => <Accordion {...args}>
      <span slot="summary">Accordion summary</span>
      <p style={{
      margin: 0
    }}>Hidden until the summary is clicked.</p>
    </Accordion>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    expanded: false
  },
  render: args => <Accordion {...args}>
      <span slot="summary">Disabled accordion</span>
      <p style={{
      margin: 0
    }}>This panel cannot be toggled.</p>
    </Accordion>
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    elevation: 0,
    square: true
  },
  render: args => <Accordion {...args}>
      <span slot="summary">Elevation-free accordion</span>
      <p style={{
      margin: 0
    }}>Uses a divider border instead of a shadow.</p>
    </Accordion>
}`,...d.parameters?.docs?.source}}};export{s as Collapsed,o as Disabled,a as Expanded,d as Outlined,g as __namedExportsOrder,u as default};
