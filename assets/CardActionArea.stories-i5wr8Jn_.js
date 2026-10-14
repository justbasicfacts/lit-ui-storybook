import{R as c,j as r}from"./iframe-DpZyQfZJ.js";import{o as i,aG as l}from"./index-3LxRijqB.js";import{C as o}from"./card-BLQXnK0a.js";import{C as m}from"./card-content-T4JEgZPu.js";import"./preload-helper-Bs85Y4nq.js";const n=i({tagName:"ui-card-action-area",elementClass:l,react:c,events:{onCardActionClick:"card-action-click"}}),h={title:"Components/Surfaces/CardActionArea",component:n,parameters:{layout:"centered"},decorators:[e=>r.jsx("div",{style:{width:320},children:r.jsx(e,{})})],argTypes:{disabled:{control:"boolean"},href:{control:"text"},onCardActionClick:{action:"card-action-click"}},args:{disabled:!1,href:""}},d=r.jsx(m,{children:r.jsx("p",{style:{margin:0},children:"Clickable card content."})}),a={render:e=>r.jsx(o,{elevated:!0,children:r.jsx(n,{...e,children:d})})},t={args:{href:"https://mui.com"},render:e=>r.jsx(o,{elevated:!0,children:r.jsx(n,{...e,children:d})})},s={args:{disabled:!0},render:e=>r.jsx(o,{elevated:!0,children:r.jsx(n,{...e,children:d})})},x=["Default","Link","Disabled"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};export{a as Default,s as Disabled,t as Link,x as __namedExportsOrder,h as default};
