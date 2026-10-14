import{j as e}from"./iframe-CteECbaa.js";import"./index-CJ7Kg3ag.js";import{A as s}from"./alert-Q-gbpCQ7.js";import"./preload-helper-Bs85Y4nq.js";const g={title:"Components/Feedback/Alert",component:s,parameters:{layout:"centered"},decorators:[r=>e.jsx("div",{style:{width:480},children:e.jsx(r,{})})],argTypes:{severity:{control:"select",options:["success","info","warning","error"]},color:{control:"select",options:["","primary","secondary","success","info","warning","error"],description:"A palette tone to take the colour from; empty follows the severity"},variant:{control:"select",options:["standard","filled","outlined"]},title:{control:"text"},dismissible:{control:"boolean"},children:{control:"text"},onClose:{action:"closed"}},args:{severity:"info",variant:"standard",children:"This is an informational message."}},t={},o={args:{severity:"success",children:"Deployment succeeded."}},a={args:{severity:"warning",variant:"filled",children:"Your trial ends in 3 days."}},n={args:{severity:"error",variant:"outlined",children:"Something went wrong."}},i={args:{severity:"error",title:"Upload failed",children:"The file was too large to process."}},l={args:{dismissible:!0}},c={args:{color:"primary",title:"Set up the last step",children:"This alert takes the primary tone, so it wears the brand colour."},argTypes:{severity:{control:!1}}},d={render:()=>e.jsxs("div",{style:{display:"grid",gap:12},children:[["primary","secondary","success","info","warning","error"].map(r=>e.jsx(s,{color:r,title:`color="${r}"`,children:"Any palette tone, including the brand colour."},r)),e.jsx(s,{color:"secondary",variant:"filled",title:'color="secondary" filled',children:"Filled takes the tone's contrast text."})]})},p={render:()=>e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx(s,{color:"primary",title:"Brand tone",children:"For announcements: it follows your theme's primary colour."}),e.jsx(s,{severity:"error",title:"error severity",children:"For status: it keeps the hue that makes it read as an error."})]})},v=["Info","Success","WarningFilled","ErrorOutlined","WithTitle","Dismissible","InTheBrandColor","Colors","BrandVersusSeverity"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    severity: 'success',
    children: 'Deployment succeeded.'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    severity: 'warning',
    variant: 'filled',
    children: 'Your trial ends in 3 days.'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    severity: 'error',
    variant: 'outlined',
    children: 'Something went wrong.'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    severity: 'error',
    title: 'Upload failed',
    children: 'The file was too large to process.'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    dismissible: true
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    title: 'Set up the last step',
    children: 'This alert takes the primary tone, so it wears the brand colour.'
  },
  argTypes: {
    severity: {
      control: false
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 12
  }}>
      {['primary', 'secondary', 'success', 'info', 'warning', 'error'].map(color => <Alert key={color} color={color as 'primary'} title={\`color="\${color}"\`}>
          Any palette tone, including the brand colour.
        </Alert>)}
      <Alert color="secondary" variant="filled" title="color=&quot;secondary&quot; filled">
        Filled takes the tone's contrast text.
      </Alert>
    </div>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 12
  }}>
      <Alert color="primary" title="Brand tone">
        For announcements: it follows your theme's primary colour.
      </Alert>
      <Alert severity="error" title="error severity">
        For status: it keeps the hue that makes it read as an error.
      </Alert>
    </div>
}`,...p.parameters?.docs?.source}}};export{p as BrandVersusSeverity,d as Colors,l as Dismissible,n as ErrorOutlined,c as InTheBrandColor,t as Info,o as Success,a as WarningFilled,i as WithTitle,v as __namedExportsOrder,g as default};
