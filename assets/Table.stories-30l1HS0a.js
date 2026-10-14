import{j as e}from"./iframe-DpZyQfZJ.js";import"./index-3LxRijqB.js";import{a as p,T as b,b as u,c as g,d as a,e as j}from"./table-cell-DsBDIKB-.js";import"./preload-helper-Bs85Y4nq.js";const d=[{id:1,name:"Frozen yoghurt",calories:159,fat:6,carbs:24,protein:4},{id:2,name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3},{id:3,name:"Eclair",calories:262,fat:16,carbs:24,protein:6},{id:4,name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3},{id:5,name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9}];function t({size:r,padding:h,stickyHeader:l,maxHeight:m}){const x=l?[...d,...d.map(s=>({...s,id:s.id+100}))]:d;return e.jsx("div",{style:m?{maxHeight:m}:void 0,children:e.jsx(b,{children:e.jsxs(p,{size:r,padding:h,stickyHeader:l,children:[e.jsx(u,{children:e.jsxs(g,{children:[e.jsx(a,{variant:"head",scope:"col",children:"Dessert (100g serving)"}),e.jsx(a,{variant:"head",scope:"col",align:"right",children:"Calories"}),e.jsx(a,{variant:"head",scope:"col",align:"right",children:"Fat (g)"}),e.jsx(a,{variant:"head",scope:"col",align:"right",children:"Carbs (g)"}),e.jsx(a,{variant:"head",scope:"col",align:"right",children:"Protein (g)"})]})}),e.jsx(j,{children:x.map(s=>e.jsxs(g,{hover:!0,children:[e.jsx(a,{children:s.name}),e.jsx(a,{align:"right",children:s.calories}),e.jsx(a,{align:"right",children:s.fat}),e.jsx(a,{align:"right",children:s.carbs}),e.jsx(a,{align:"right",children:s.protein})]},s.id))})]})})})}const v={title:"Components/Data display/Table",component:p,parameters:{layout:"padded"},argTypes:{size:{control:"select",options:["small","medium"]},padding:{control:"select",options:["normal","checkbox","none"]},stickyHeader:{control:"boolean"}},args:{size:"medium",padding:"normal",stickyHeader:!1}},n={render:r=>e.jsx(t,{...r})},o={args:{size:"small"},render:r=>e.jsx(t,{...r})},i={args:{padding:"checkbox"},render:r=>e.jsx(t,{...r})},c={args:{stickyHeader:!0},render:r=>e.jsx(t,{...r,maxHeight:240})},D=["Default","Small","CheckboxPadding","StickyHeader"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <TableDemo {...args} />
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  },
  render: args => <TableDemo {...args} />
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    padding: 'checkbox'
  },
  render: args => <TableDemo {...args} />
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    stickyHeader: true
  },
  render: args => <TableDemo {...args} maxHeight={240} />
}`,...c.parameters?.docs?.source}}};export{i as CheckboxPadding,n as Default,o as Small,c as StickyHeader,D as __namedExportsOrder,v as default};
