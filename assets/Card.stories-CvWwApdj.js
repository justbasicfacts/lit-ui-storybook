import{j as e}from"./iframe-D-jlcKf7.js";import"./index-A4XEOZPO.js";import{C as t}from"./card-CAT1QohE.js";import{C as l}from"./card-header-7gFyWjoy.js";import{C as c}from"./card-content-Bf1UPm3O.js";import{C as p}from"./card-actions-YtxxfC9G.js";import{B as i}from"./button-C1kQXKc2.js";import"./preload-helper-Bs85Y4nq.js";const j={title:"Components/Card",component:t,parameters:{layout:"centered"},argTypes:{padding:{control:"select",options:["none","sm","md","lg"]},elevated:{control:"boolean"}},args:{padding:"md",elevated:!1}},s={render:r=>e.jsxs(t,{...r,style:{width:360},children:[e.jsx("h3",{slot:"header",children:"Card title"}),e.jsx("p",{children:"Body content lives in the default slot."}),e.jsx("div",{slot:"footer",children:"Footer"})]})},n={args:{elevated:!0},render:r=>e.jsxs(t,{...r,style:{width:360},children:[e.jsx("h3",{slot:"header",children:"Elevated card"}),e.jsx("p",{children:"Rendered with a material shadow."})]})},a={render:()=>e.jsxs(t,{style:{width:380},children:[e.jsx(l,{title:"Card title",subheader:"Header and content parts"}),e.jsx(c,{children:e.jsx("div",{children:"The parts pad themselves, so this sits 16px from the edge."})}),e.jsxs(p,{children:[e.jsx(i,{size:"sm",children:"Save"}),e.jsx(i,{size:"sm",variant:"ghost",children:"Cancel"})]})]})},d={render:r=>e.jsx(t,{...r,style:{width:360},children:e.jsx("p",{children:"A card with only body content."})})},o={args:{padding:"none"},render:r=>e.jsx(t,{...r,style:{width:360},children:e.jsx("p",{children:"Padding removed entirely."})})},w=["Default","Elevated","Parts","NoHeaderOrFooter","TightPadding"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args} style={{
    width: 360
  }}>
      <h3 slot="header">Card title</h3>
      <p>Body content lives in the default slot.</p>
      <div slot="footer">Footer</div>
    </Card>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    elevated: true
  },
  render: args => <Card {...args} style={{
    width: 360
  }}>
      <h3 slot="header">Elevated card</h3>
      <p>Rendered with a material shadow.</p>
    </Card>
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: 380
  }}>
      <CardHeader title="Card title" subheader="Header and content parts" />
      <CardContent>
        <div>The parts pad themselves, so this sits 16px from the edge.</div>
      </CardContent>
      <CardActions>
        <Button size="sm">Save</Button>
        <Button size="sm" variant="ghost">
          Cancel
        </Button>
      </CardActions>
    </Card>
}`,...a.parameters?.docs?.source},description:{story:"The MUI composition: the parts carry the padding, so the card leaves its own\ndefault out of the way rather than stacking another 16px inside them. An\nexplicit `padding` still applies when a card needs it.",...a.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args} style={{
    width: 360
  }}>
      <p>A card with only body content.</p>
    </Card>
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    padding: 'none'
  },
  render: args => <Card {...args} style={{
    width: 360
  }}>
      <p>Padding removed entirely.</p>
    </Card>
}`,...o.parameters?.docs?.source}}};export{s as Default,n as Elevated,d as NoHeaderOrFooter,a as Parts,o as TightPadding,w as __namedExportsOrder,j as default};
