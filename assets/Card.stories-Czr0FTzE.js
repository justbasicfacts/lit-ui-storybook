import{j as e}from"./jsx-runtime-D8h-jwK5.js";import"./index-CKKzZn3u.js";import{C as t}from"./card-BnkBwm4v.js";import"./iframe-DP7DDnfB.js";import"./preload-helper-Bs85Y4nq.js";const h={title:"Components/Card",component:t,parameters:{layout:"centered"},argTypes:{padding:{control:"select",options:["none","sm","md","lg"]},elevated:{control:"boolean"}},args:{padding:"md",elevated:!1}},a={render:r=>e.jsxs(t,{...r,style:{width:360},children:[e.jsx("h3",{slot:"header",children:"Card title"}),e.jsx("p",{children:"Body content lives in the default slot."}),e.jsx("div",{slot:"footer",children:"Footer"})]})},d={args:{elevated:!0},render:r=>e.jsxs(t,{...r,style:{width:360},children:[e.jsx("h3",{slot:"header",children:"Elevated card"}),e.jsx("p",{children:"Rendered with a material shadow."})]})},n={render:r=>e.jsx(t,{...r,style:{width:360},children:e.jsx("p",{children:"A card with only body content."})})},s={args:{padding:"none"},render:r=>e.jsx(t,{...r,style:{width:360},children:e.jsx("p",{children:"Padding removed entirely."})})},m=["Default","Elevated","NoHeaderOrFooter","TightPadding"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args} style={{
    width: 360
  }}>
      <h3 slot="header">Card title</h3>
      <p>Body content lives in the default slot.</p>
      <div slot="footer">Footer</div>
    </Card>
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};export{a as Default,d as Elevated,n as NoHeaderOrFooter,s as TightPadding,m as __namedExportsOrder,h as default};
