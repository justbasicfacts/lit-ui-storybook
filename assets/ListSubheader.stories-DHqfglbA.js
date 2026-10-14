import{j as r}from"./jsx-runtime-D8h-jwK5.js";import"./index-CKKzZn3u.js";import{L as d}from"./list-subheader-BQse6M2T.js";import{L as m,a as i}from"./list-item-text-Cxwlby2u.js";import{L as c}from"./list-item-Bkg0VV7O.js";import"./iframe-DP7DDnfB.js";import"./preload-helper-Bs85Y4nq.js";const L={title:"Components/ListSubheader",component:d,parameters:{layout:"padded"},argTypes:{disableSticky:{control:"boolean"},inset:{control:"boolean"},color:{control:"text"},children:{control:"text"}},args:{children:"Subheader",disableSticky:!1,inset:!1},decorators:[n=>r.jsx("div",{style:{width:320},children:r.jsx(n,{})})]},a=n=>r.jsxs(m,{children:[r.jsx(d,{...n,slot:"subheader"}),r.jsx(c,{children:r.jsx(i,{primary:"Item one"})}),r.jsx(c,{children:r.jsx(i,{primary:"Item two"})})]}),e={render:a},s={args:{inset:!0},render:a},t={args:{color:"primary"},render:a},o={args:{disableSticky:!0,children:"Static subheader"},render:a},b=["Default","Inset","Colored","NotSticky"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    disableSticky: true,
    children: 'Static subheader'
  },
  render: inList
}`,...o.parameters?.docs?.source}}};export{t as Colored,e as Default,s as Inset,o as NotSticky,b as __namedExportsOrder,L as default};
