import{R as d,j as t}from"./iframe-D-jlcKf7.js";import{o as i,ah as p}from"./index-A4XEOZPO.js";import"./preload-helper-Bs85Y4nq.js";const o=i({tagName:"ui-paper",elementClass:p,react:d}),u={title:"Components/Paper",component:o,parameters:{layout:"centered"},argTypes:{elevation:{control:{type:"number",min:0,max:24}},variant:{control:"select",options:["elevation","outlined"]},square:{control:"boolean"}},args:{elevation:1,variant:"elevation",square:!1,children:"Paper"}},r={},a={args:{variant:"outlined"},render:e=>t.jsx(o,{...e,style:{padding:16},children:e.children})},n={args:{square:!0},render:e=>t.jsx(o,{...e,style:{padding:16},children:e.children})},s={parameters:{layout:"padded"},render:()=>t.jsx("div",{style:{display:"flex",gap:24},children:[0,1,4,8,16,24].map(e=>t.jsxs(o,{elevation:e,style:{padding:16},children:["elevation ",e]},e))})},g=["Default","Outlined","Square","Elevations"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outlined'
  },
  render: args => <Paper {...args} style={{
    padding: 16
  }}>
      {args.children}
    </Paper>
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    square: true
  },
  render: args => <Paper {...args} style={{
    padding: 16
  }}>
      {args.children}
    </Paper>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24
  }}>
      {[0, 1, 4, 8, 16, 24].map(e => <Paper key={e} elevation={e} style={{
      padding: 16
    }}>
          elevation {e}
        </Paper>)}
    </div>
}`,...s.parameters?.docs?.source}}};export{r as Default,s as Elevations,a as Outlined,n as Square,g as __namedExportsOrder,u as default};
