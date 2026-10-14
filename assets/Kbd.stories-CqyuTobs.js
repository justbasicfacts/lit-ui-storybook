import{R as i,j as e}from"./iframe-DpZyQfZJ.js";import{o as m,a4 as l}from"./index-3LxRijqB.js";import{T as c}from"./typography-DUgdpZ8o.js";import{G as d}from"./group-CGVIY30l.js";import"./preload-helper-Bs85Y4nq.js";const r=m({tagName:"ui-kbd",elementClass:l,react:i}),K={title:"Components/Data display/Kbd",component:r,parameters:{layout:"padded"},argTypes:{size:{control:"select",options:["sm","md","lg"]}},args:{size:"md"}},n={render:s=>e.jsx(r,{...s,children:"K"})},a={render:()=>e.jsxs(d,{spacing:2,children:[e.jsx(r,{size:"sm",children:"⌘"}),e.jsx(r,{size:"md",children:"⌘"}),e.jsx(r,{size:"lg",children:"⌘"})]})},o={render:()=>e.jsx("div",{style:{display:"grid",gap:12,maxWidth:420},children:[{label:"Open the command palette",keys:["⌘","K"]},{label:"Search the components",keys:["/"]},{label:"Save and release",keys:["⌘","Shift","Enter"]}].map(s=>e.jsxs(d,{spacing:2,justify:"space-between",children:[e.jsx(c,{variant:"body2",component:"p",children:s.label}),e.jsx(d,{spacing:1,children:s.keys.map(p=>e.jsx(r,{children:p},p))})]},s.label))})},t={render:()=>e.jsxs(c,{variant:"body1",component:"p",children:["Press ",e.jsx(r,{children:"/"})," to search, then ",e.jsx(r,{children:"Enter"})," to open the component and"," ",e.jsx(r,{children:"Esc"})," to come back."]})},x=["Default","Sizes","ShortcutRow","InProse"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Kbd {...args}>K</Kbd>
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Group spacing={2}>
      <Kbd size="sm">⌘</Kbd>
      <Kbd size="md">⌘</Kbd>
      <Kbd size="lg">⌘</Kbd>
    </Group>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 12,
    maxWidth: 420
  }}>
      {[{
      label: 'Open the command palette',
      keys: ['⌘', 'K']
    }, {
      label: 'Search the components',
      keys: ['/']
    }, {
      label: 'Save and release',
      keys: ['⌘', 'Shift', 'Enter']
    }].map(row => <Group key={row.label} spacing={2} justify="space-between">
          <Typography variant="body2" component="p">
            {row.label}
          </Typography>
          <Group spacing={1}>
            {row.keys.map(key => <Kbd key={key}>{key}</Kbd>)}
          </Group>
        </Group>)}
    </div>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Typography variant="body1" component="p">
      Press <Kbd>/</Kbd> to search, then <Kbd>Enter</Kbd> to open the component and{' '}
      <Kbd>Esc</Kbd> to come back.
    </Typography>
}`,...t.parameters?.docs?.source}}};export{n as Default,t as InProse,o as ShortcutRow,a as Sizes,x as __namedExportsOrder,K as default};
