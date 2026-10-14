import{j as t}from"./iframe-J_BAxJ5R.js";import"./index-BSSMaTAd.js";import{C as a}from"./card-actions-BEdbDwvg.js";import{C as o}from"./card-BOtFdmXA.js";import{C as s}from"./card-content-CAGkXbtk.js";import"./preload-helper-Bs85Y4nq.js";const m={title:"Components/Surfaces/CardActions",component:a,parameters:{layout:"centered"},decorators:[e=>t.jsx("div",{style:{width:360},children:t.jsx(e,{})})],argTypes:{disableSpacing:{control:"boolean"}},args:{disableSpacing:!1}},r={render:e=>t.jsxs(o,{elevated:!0,children:[t.jsx(s,{children:t.jsx("p",{style:{margin:0},children:"A card with an actions row."})}),t.jsxs(a,{...e,children:[t.jsx("button",{type:"button",children:"Share"}),t.jsx("button",{type:"button",children:"Learn more"})]})]})},n={args:{disableSpacing:!0},render:e=>t.jsxs(o,{elevated:!0,children:[t.jsx(s,{children:t.jsx("p",{style:{margin:0},children:"Actions packed together."})}),t.jsxs(a,{...e,children:[t.jsx("button",{type:"button",children:"Share"}),t.jsx("button",{type:"button",children:"Learn more"})]})]})},b=["Default","DisableSpacing"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};export{r as Default,n as DisableSpacing,b as __namedExportsOrder,m as default};
