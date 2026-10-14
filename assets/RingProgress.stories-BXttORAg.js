import{R as l,j as r}from"./iframe-EaglJ-EY.js";import{o as m,ah as d}from"./index-qmVU2qX3.js";import{S as u}from"./simple-grid-d3i3NK4b.js";import{S as g}from"./stack-B_-bpG59.js";import{T as i}from"./typography-DlYrMEhm.js";import{G as p}from"./group-7ekCSdz3.js";import"./preload-helper-Bs85Y4nq.js";const s=m({tagName:"ui-ring-progress",elementClass:d,react:l}),j={title:"Components/Feedback/RingProgress",component:s,parameters:{layout:"padded"},argTypes:{value:{control:{type:"range",min:0,max:100,step:1}},size:{control:{type:"number",min:40,max:240,step:4}},thickness:{control:{type:"number",min:2,max:24,step:1}},color:{control:"select",options:["primary","secondary","error","warning","info","success"]},label:{control:"text"},roundCaps:{control:"boolean"}},args:{value:68,size:140,thickness:10,color:"primary",label:"",roundCaps:!0}},a={render:e=>r.jsx(s,{...e,label:`${e.value}%`})},o={render:()=>r.jsx(p,{spacing:3,wrap:!0,children:[12,38,64,92].map(e=>r.jsx(s,{value:e,size:110,thickness:8,label:`${e}%`},e))})},n={render:()=>r.jsx(u,{cols:3,spacing:2,style:{maxWidth:560},children:["primary","success","warning","error","info","secondary"].map(e=>r.jsx(s,{value:70,color:e,size:104,thickness:8,label:e},e))})},c={render:()=>r.jsx(p,{spacing:3,wrap:!0,children:[4,8,14].map(e=>r.jsx(s,{value:55,thickness:e,size:120,label:`${e}px`},e))})},t={render:()=>r.jsx(s,{value:82,size:160,thickness:12,color:"success",children:r.jsxs(g,{spacing:0,children:[r.jsx(i,{variant:"h5",component:"p",children:"82"}),r.jsx(i,{variant:"caption",color:"text.secondary",component:"p",children:"score"})]})})},f=["Default","Values","Colors","Thickness","SlottedContent"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{\n  render: args => <RingProgress {...args} label={`${args.value}%`} />\n}",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Group spacing={3} wrap>
      {[12, 38, 64, 92].map(value => <RingProgress key={value} value={value} size={110} thickness={8} label={\`\${value}%\`} />)}
    </Group>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <SimpleGrid cols={3} spacing={2} style={{
    maxWidth: 560
  }}>
      {(['primary', 'success', 'warning', 'error', 'info', 'secondary'] as const).map(color => <RingProgress key={color} value={70} color={color} size={104} thickness={8} label={color} />)}
    </SimpleGrid>
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Group spacing={3} wrap>
      {[4, 8, 14].map(thickness => <RingProgress key={thickness} value={55} thickness={thickness} size={120} label={\`\${thickness}px\`} />)}
    </Group>
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <RingProgress value={82} size={160} thickness={12} color="success">
      <Stack spacing={0}>
        <Typography variant="h5" component="p">
          82
        </Typography>
        <Typography variant="caption" color="text.secondary" component="p">
          score
        </Typography>
      </Stack>
    </RingProgress>
}`,...t.parameters?.docs?.source}}};export{n as Colors,a as Default,t as SlottedContent,c as Thickness,o as Values,f as __namedExportsOrder,j as default};
