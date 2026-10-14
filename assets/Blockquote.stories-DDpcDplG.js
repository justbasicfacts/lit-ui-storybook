import{R as p,j as e}from"./iframe-Bwx-W2wi.js";import{o as d,Z as l}from"./index-BSSMaTAd.js";import{T as n}from"./typography-DVGeTrVZ.js";import{G as y}from"./group-BTODrTj1.js";import"./preload-helper-Bs85Y4nq.js";const i=d({tagName:"ui-blockquote",elementClass:l,react:p}),v={title:"Components/Data display/Blockquote",component:i,parameters:{layout:"padded"},argTypes:{color:{control:"select",options:["primary","secondary","error","warning","info","success"]},cite:{control:"text"},icon:{control:"text"}},args:{color:"primary",cite:"",icon:""}},r={render:o=>e.jsx(i,{...o,children:e.jsx(n,{variant:"body1",component:"p",children:"A design system is a language, and a language only works if everybody speaks it."})})},a={args:{cite:"Someone sensible"},render:r.render},t={args:{icon:"“"},render:r.render},s={render:()=>e.jsx("div",{style:{display:"grid",gap:20,maxWidth:560},children:["primary","success","warning"].map(o=>e.jsx(i,{color:o,cite:o,children:e.jsx(n,{variant:"body2",component:"p",children:"The rail takes any palette key, so a quote can carry a tone without extra CSS."})},o))})},c={render:()=>e.jsxs("div",{style:{display:"grid",gap:16,maxWidth:560},children:[e.jsx(n,{variant:"body1",component:"p",children:"Components carry the opinions, and the theme carries the values."}),e.jsx(i,{cite:"The README, probably",children:e.jsx(n,{variant:"body1",component:"p",children:"Every component reads its design values from CSS custom properties, so one theme restyles the whole library."})}),e.jsx(y,{spacing:1,children:e.jsx(n,{variant:"caption",color:"text.secondary",component:"p",children:"Works in any flow content."})})]})},k=["Default","WithCite","WithIcon","Colors","InProse"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Blockquote {...args}>
      <Typography variant="body1" component="p">
        A design system is a language, and a language only works if everybody speaks it.
      </Typography>
    </Blockquote>
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    cite: 'Someone sensible'
  },
  render: Default.render
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    icon: '“'
  },
  render: Default.render
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 20,
    maxWidth: 560
  }}>
      {(['primary', 'success', 'warning'] as const).map(color => <Blockquote key={color} color={color} cite={color}>
          <Typography variant="body2" component="p">
            The rail takes any palette key, so a quote can carry a tone without extra
            CSS.
          </Typography>
        </Blockquote>)}
    </div>
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 16,
    maxWidth: 560
  }}>
      <Typography variant="body1" component="p">
        Components carry the opinions, and the theme carries the values.
      </Typography>
      <Blockquote cite="The README, probably">
        <Typography variant="body1" component="p">
          Every component reads its design values from CSS custom properties, so one theme
          restyles the whole library.
        </Typography>
      </Blockquote>
      <Group spacing={1}>
        <Typography variant="caption" color="text.secondary" component="p">
          Works in any flow content.
        </Typography>
      </Group>
    </div>
}`,...c.parameters?.docs?.source}}};export{s as Colors,r as Default,c as InProse,a as WithCite,t as WithIcon,k as __namedExportsOrder,v as default};
