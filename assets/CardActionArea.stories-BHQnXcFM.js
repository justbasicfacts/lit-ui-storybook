import{j as r}from"./jsx-runtime-D8h-jwK5.js";import{o as c,F as i}from"./index-CKKzZn3u.js";import{R as l}from"./iframe-DP7DDnfB.js";import{C as n}from"./card-BnkBwm4v.js";import{C as m}from"./card-content-hYUT8MGZ.js";import"./preload-helper-Bs85Y4nq.js";const o=c({tagName:"ui-card-action-area",elementClass:i,react:l,events:{onCardActionClick:"card-action-click"}}),x={title:"Components/CardActionArea",component:o,parameters:{layout:"centered"},decorators:[e=>r.jsx("div",{style:{width:320},children:r.jsx(e,{})})],argTypes:{disabled:{control:"boolean"},href:{control:"text"},onCardActionClick:{action:"card-action-click"}},args:{disabled:!1,href:""}},d=r.jsx(m,{children:r.jsx("p",{style:{margin:0},children:"Clickable card content."})}),a={render:e=>r.jsx(n,{elevated:!0,children:r.jsx(o,{...e,children:d})})},t={args:{href:"https://mui.com"},render:e=>r.jsx(n,{elevated:!0,children:r.jsx(o,{...e,children:d})})},s={args:{disabled:!0},render:e=>r.jsx(n,{elevated:!0,children:r.jsx(o,{...e,children:d})})},f=["Default","Link","Disabled"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Card elevated>
      <CardActionArea {...args}>{body}</CardActionArea>
    </Card>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'https://mui.com'
  },
  render: args => <Card elevated>
      <CardActionArea {...args}>{body}</CardActionArea>
    </Card>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <Card elevated>
      <CardActionArea {...args}>{body}</CardActionArea>
    </Card>
}`,...s.parameters?.docs?.source}}};export{a as Default,s as Disabled,t as Link,f as __namedExportsOrder,x as default};
