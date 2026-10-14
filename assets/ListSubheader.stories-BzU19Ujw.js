import{j as r}from"./iframe-J_BAxJ5R.js";import"./index-BSSMaTAd.js";import{L as d}from"./list-subheader-Dd29fCpm.js";import{L as m,a as i}from"./list-item-text-DVJ7rLIB.js";import{L as c}from"./list-item-BDjIoMOm.js";import"./preload-helper-Bs85Y4nq.js";const y={title:"Components/Data display/ListSubheader",component:d,parameters:{layout:"padded"},argTypes:{disableSticky:{control:"boolean"},inset:{control:"boolean"},color:{control:"text"},children:{control:"text"}},args:{children:"Subheader",disableSticky:!1,inset:!1},decorators:[n=>r.jsx("div",{style:{width:320},children:r.jsx(n,{})})]},o=n=>r.jsxs(m,{children:[r.jsx(d,{...n,slot:"subheader"}),r.jsx(c,{children:r.jsx(i,{primary:"Item one"})}),r.jsx(c,{children:r.jsx(i,{primary:"Item two"})})]}),e={render:o},s={args:{inset:!0},render:o},t={args:{color:"primary"},render:o},a={args:{disableSticky:!0,children:"Static subheader"},render:o},L=["Default","Inset","Colored","NotSticky"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: inList
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    inset: true
  },
  render: inList
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'primary'
  },
  render: inList
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    disableSticky: true,
    children: 'Static subheader'
  },
  render: inList
}`,...a.parameters?.docs?.source}}};export{t as Colored,e as Default,s as Inset,a as NotSticky,L as __namedExportsOrder,y as default};
