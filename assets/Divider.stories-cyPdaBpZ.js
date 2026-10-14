import{j as e}from"./iframe-jabNMnJM.js";import"./index-BSSMaTAd.js";import{D as i}from"./divider-DEeE-eMJ.js";import"./preload-helper-Bs85Y4nq.js";const a="var(--ui-font, 'Roboto Condensed', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif)",c={title:"Components/Data display/Divider",component:i,parameters:{layout:"centered"},argTypes:{orientation:{control:"inline-radio",options:["horizontal","vertical"]},inset:{control:"boolean"}},args:{orientation:"horizontal",inset:!1}},n={render:r=>e.jsxs("div",{style:{width:360,fontFamily:a},children:[e.jsx("p",{children:"Above the divider"}),e.jsx(i,{...r}),e.jsx("p",{children:"Below the divider"})]})},s={args:{inset:!0},render:r=>e.jsxs("div",{style:{width:360,fontFamily:a},children:[e.jsx("p",{children:"Above"}),e.jsx(i,{...r}),e.jsx("p",{children:"Below"})]})},t={args:{orientation:"vertical"},render:r=>e.jsxs("div",{style:{display:"flex",height:80,alignItems:"stretch",fontFamily:a},children:[e.jsx("span",{style:{padding:"0 12px"},children:"Left"}),e.jsx(i,{...r}),e.jsx("span",{style:{padding:"0 12px"},children:"Right"})]})},m=["Horizontal","Inset","Vertical"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 360,
    fontFamily
  }}>
      <p>Above the divider</p>
      <Divider {...args} />
      <p>Below the divider</p>
    </div>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    inset: true
  },
  render: args => <div style={{
    width: 360,
    fontFamily
  }}>
      <p>Above</p>
      <Divider {...args} />
      <p>Below</p>
    </div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  render: args => <div style={{
    display: 'flex',
    height: 80,
    alignItems: 'stretch',
    fontFamily
  }}>
      <span style={{
      padding: '0 12px'
    }}>Left</span>
      <Divider {...args} />
      <span style={{
      padding: '0 12px'
    }}>Right</span>
    </div>
}`,...t.parameters?.docs?.source}}};export{n as Horizontal,s as Inset,t as Vertical,m as __namedExportsOrder,c as default};
