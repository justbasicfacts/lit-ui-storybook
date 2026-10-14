import{j as t}from"./jsx-runtime-D8h-jwK5.js";import"./index-CKKzZn3u.js";import{C as a}from"./card-actions-Bdho0obH.js";import{C as o}from"./card-BnkBwm4v.js";import{C as s}from"./card-content-hYUT8MGZ.js";import"./iframe-DP7DDnfB.js";import"./preload-helper-Bs85Y4nq.js";const b={title:"Components/CardActions",component:a,parameters:{layout:"centered"},decorators:[e=>t.jsx("div",{style:{width:360},children:t.jsx(e,{})})],argTypes:{disableSpacing:{control:"boolean"}},args:{disableSpacing:!1}},r={render:e=>t.jsxs(o,{elevated:!0,children:[t.jsx(s,{children:t.jsx("p",{style:{margin:0},children:"A card with an actions row."})}),t.jsxs(a,{...e,children:[t.jsx("button",{type:"button",children:"Share"}),t.jsx("button",{type:"button",children:"Learn more"})]})]})},n={args:{disableSpacing:!0},render:e=>t.jsxs(o,{elevated:!0,children:[t.jsx(s,{children:t.jsx("p",{style:{margin:0},children:"Actions packed together."})}),t.jsxs(a,{...e,children:[t.jsx("button",{type:"button",children:"Share"}),t.jsx("button",{type:"button",children:"Learn more"})]})]})},C=["Default","DisableSpacing"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Card elevated>
      <CardContent>
        <p style={{
        margin: 0
      }}>A card with an actions row.</p>
      </CardContent>
      <CardActions {...args}>
        <button type="button">Share</button>
        <button type="button">Learn more</button>
      </CardActions>
    </Card>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    disableSpacing: true
  },
  render: args => <Card elevated>
      <CardContent>
        <p style={{
        margin: 0
      }}>Actions packed together.</p>
      </CardContent>
      <CardActions {...args}>
        <button type="button">Share</button>
        <button type="button">Learn more</button>
      </CardActions>
    </Card>
}`,...n.parameters?.docs?.source}}};export{r as Default,n as DisableSpacing,C as __namedExportsOrder,b as default};
