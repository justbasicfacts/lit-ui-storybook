import{j as r}from"./iframe-D-jlcKf7.js";import"./index-A4XEOZPO.js";import{L as d}from"./list-subheader-Bkp2G7NS.js";import{L as m,a as i}from"./list-item-text-BppybHIN.js";import{L as c}from"./list-item-CQegprj6.js";import"./preload-helper-Bs85Y4nq.js";const y={title:"Components/ListSubheader",component:d,parameters:{layout:"padded"},argTypes:{disableSticky:{control:"boolean"},inset:{control:"boolean"},color:{control:"text"},children:{control:"text"}},args:{children:"Subheader",disableSticky:!1,inset:!1},decorators:[n=>r.jsx("div",{style:{width:320},children:r.jsx(n,{})})]},a=n=>r.jsxs(m,{children:[r.jsx(d,{...n,slot:"subheader"}),r.jsx(c,{children:r.jsx(i,{primary:"Item one"})}),r.jsx(c,{children:r.jsx(i,{primary:"Item two"})})]}),e={render:a},s={args:{inset:!0},render:a},t={args:{color:"primary"},render:a},o={args:{disableSticky:!0,children:"Static subheader"},render:a},L=["Default","Inset","Colored","NotSticky"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};export{t as Colored,e as Default,s as Inset,o as NotSticky,L as __namedExportsOrder,y as default};
