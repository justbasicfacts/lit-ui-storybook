import{j as r}from"./iframe-CteECbaa.js";import"./index-CJ7Kg3ag.js";import{B as e}from"./button-DzjLxdZK.js";import"./preload-helper-Bs85Y4nq.js";const T={title:"Components/Inputs/Button",component:e,parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["primary","secondary","outline","ghost","error"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},loading:{control:"boolean"},fullWidth:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]},children:{control:"text"},onClick:{action:"clicked"}},args:{variant:"primary",size:"md",children:"Button"}},a={},n={args:{variant:"secondary"}},s={args:{variant:"outline"}},t={args:{variant:"ghost"}},o={args:{variant:"error"}},i={args:{size:"sm"}},c={args:{size:"lg"}},l={args:{loading:!0}},p={args:{disabled:!0}},d={args:{fullWidth:!0},parameters:{layout:"padded"}},m={render:()=>r.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[r.jsx(e,{variant:"primary",children:"Primary"}),r.jsx(e,{variant:"secondary",children:"Secondary"}),r.jsx(e,{variant:"outline",children:"Outline"}),r.jsx(e,{variant:"ghost",children:"Ghost"}),r.jsx(e,{variant:"error",children:"Error"})]})},u={args:{shape:"pill"}},g={args:{textTransform:"none"}},h={args:{shape:"pill",size:"lg",textTransform:"none",children:"View the work"}},x={args:{href:"#work",shape:"pill",textTransform:"none",children:"Jump to work"},parameters:{layout:"padded"}},y={render:()=>r.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[r.jsx(e,{shape:"pill",textTransform:"none",children:"Pill / sentence"}),r.jsx(e,{shape:"pill",variant:"outline",textTransform:"none",children:"Outline pill"}),r.jsx(e,{shape:"pill",variant:"secondary",textTransform:"none",children:"Secondary pill"}),r.jsx(e,{variant:"ghost",textTransform:"none",children:"Theme radius"})]})},j=["Primary","Secondary","Outline","Ghost","Error","Small","Large","Loading","Disabled","FullWidth","AllVariants","Pill","SentenceCase","PillCta","AsLink","Shapes"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  },
  parameters: {
    layout: 'padded'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap'
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="error">Error</Button>
    </div>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    shape: 'pill'
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    textTransform: 'none'
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    shape: 'pill',
    size: 'lg',
    textTransform: 'none',
    children: 'View the work'
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    href: '#work',
    shape: 'pill',
    textTransform: 'none',
    children: 'Jump to work'
  },
  parameters: {
    layout: 'padded'
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Button shape="pill" textTransform="none">
        Pill / sentence
      </Button>
      <Button shape="pill" variant="outline" textTransform="none">
        Outline pill
      </Button>
      <Button shape="pill" variant="secondary" textTransform="none">
        Secondary pill
      </Button>
      <Button variant="ghost" textTransform="none">
        Theme radius
      </Button>
    </div>
}`,...y.parameters?.docs?.source}}};export{m as AllVariants,x as AsLink,p as Disabled,o as Error,d as FullWidth,t as Ghost,c as Large,l as Loading,s as Outline,u as Pill,h as PillCta,a as Primary,n as Secondary,g as SentenceCase,y as Shapes,i as Small,j as __namedExportsOrder,T as default};
