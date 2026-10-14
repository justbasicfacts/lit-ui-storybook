import{j as e}from"./iframe-jabNMnJM.js";import"./index-BSSMaTAd.js";import{C as d}from"./card-header-CYlOX3nM.js";import{C as n}from"./card-Ddvd0lC-.js";import"./preload-helper-Bs85Y4nq.js";const p={title:"Components/Surfaces/CardHeader",component:d,parameters:{layout:"centered"},decorators:[r=>e.jsx("div",{style:{width:360},children:e.jsx(r,{})})],argTypes:{title:{control:"text"},subheader:{control:"text"}},args:{title:"Card title",subheader:"Supporting text"}},a={render:r=>e.jsx(n,{elevated:!0,children:e.jsx(d,{...r})})},t={args:{subheader:""},render:r=>e.jsx(n,{elevated:!0,children:e.jsx(d,{...r})})},s={render:r=>e.jsx(n,{elevated:!0,children:e.jsxs(d,{...r,children:[e.jsx("div",{slot:"avatar",style:{width:40,height:40,borderRadius:"50%",background:"#1976d2"}}),e.jsx("button",{slot:"action",type:"button","aria-label":"More options",children:"⋮"})]})})},m=["Default","TitleOnly","WithAvatarAndAction"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Card elevated>
      <CardHeader {...args} />
    </Card>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    subheader: ''
  },
  render: args => <Card elevated>
      <CardHeader {...args} />
    </Card>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Card elevated>
      <CardHeader {...args}>
        <div slot="avatar" style={{
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: '#1976d2'
      }} />
        <button slot="action" type="button" aria-label="More options">
          ⋮
        </button>
      </CardHeader>
    </Card>
}`,...s.parameters?.docs?.source}}};export{a as Default,t as TitleOnly,s as WithAvatarAndAction,m as __namedExportsOrder,p as default};
