import{j as e}from"./iframe-lGCTaxPj.js";import"./index-C-Hz80Os.js";import{C as a}from"./card-B6nrhUw4.js";import"./preload-helper-Bs85Y4nq.js";const p={title:"Components/Card",component:a,parameters:{layout:"centered"},argTypes:{padding:{control:"select",options:["none","sm","md","lg"]},elevated:{control:"boolean"}},args:{padding:"md",elevated:!1}},t={render:r=>e.jsxs(a,{...r,style:{width:360},children:[e.jsx("h3",{slot:"header",children:"Card title"}),e.jsx("p",{children:"Body content lives in the default slot."}),e.jsx("div",{slot:"footer",children:"Footer"})]})},d={args:{elevated:!0},render:r=>e.jsxs(a,{...r,style:{width:360},children:[e.jsx("h3",{slot:"header",children:"Elevated card"}),e.jsx("p",{children:"Rendered with a material shadow."})]})},n={render:r=>e.jsx(a,{...r,style:{width:360},children:e.jsx("p",{children:"A card with only body content."})})},s={args:{padding:"none"},render:r=>e.jsx(a,{...r,style:{width:360},children:e.jsx("p",{children:"Padding removed entirely."})})},h=["Default","Elevated","NoHeaderOrFooter","TightPadding"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args} style={{
    width: 360
  }}>
      <h3 slot="header">Card title</h3>
      <p>Body content lives in the default slot.</p>
      <div slot="footer">Footer</div>
    </Card>
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    elevated: true
  },
  render: args => <Card {...args} style={{
    width: 360
  }}>
      <h3 slot="header">Elevated card</h3>
      <p>Rendered with a material shadow.</p>
    </Card>
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args} style={{
    width: 360
  }}>
      <p>A card with only body content.</p>
    </Card>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    padding: 'none'
  },
  render: args => <Card {...args} style={{
    width: 360
  }}>
      <p>Padding removed entirely.</p>
    </Card>
}`,...s.parameters?.docs?.source}}};export{t as Default,d as Elevated,n as NoHeaderOrFooter,s as TightPadding,h as __namedExportsOrder,p as default};
