import{R as d,j as r}from"./iframe-7KbjxAZ3.js";import{o as i,aB as l}from"./index-3LxRijqB.js";import"./preload-helper-Bs85Y4nq.js";const n=i({tagName:"ui-container",elementClass:l,react:d}),p={title:"Components/Layout/Container",component:n,parameters:{layout:"fullscreen"},argTypes:{maxWidth:{control:"select",options:["xs","sm","md","lg","xl","false"]},fixed:{control:"boolean"},disableGutters:{control:"boolean"}},args:{maxWidth:"lg",fixed:!1,disableGutters:!1,children:"Container content"}},a={render:e=>r.jsx(n,{...e,style:{background:"#e3f2fd"},children:e.children})},s={args:{fixed:!0},render:e=>r.jsx(n,{...e,style:{background:"#e3f2fd"},children:e.children})},t={args:{disableGutters:!0,children:"No inline gutters"},render:e=>r.jsx(n,{...e,style:{background:"#e3f2fd"},children:e.children})},o={parameters:{layout:"padded"},render:()=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:["xs","sm","md","lg","xl"].map(e=>r.jsxs(n,{maxWidth:e,style:{background:"#e3f2fd",paddingBlock:8},children:["maxWidth ",e]},e))})},g=["Default","Fixed","DisableGutters","MaxWidths"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Container {...args} style={{
    background: '#e3f2fd'
  }}>
      {args.children}
    </Container>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    fixed: true
  },
  render: args => <Container {...args} style={{
    background: '#e3f2fd'
  }}>
      {args.children}
    </Container>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    disableGutters: true,
    children: 'No inline gutters'
  },
  render: args => <Container {...args} style={{
    background: '#e3f2fd'
  }}>
      {args.children}
    </Container>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(mw => <Container key={mw} maxWidth={mw} style={{
      background: '#e3f2fd',
      paddingBlock: 8
    }}>
          maxWidth {mw}
        </Container>)}
    </div>
}`,...o.parameters?.docs?.source}}};export{a as Default,t as DisableGutters,s as Fixed,o as MaxWidths,g as __namedExportsOrder,p as default};
