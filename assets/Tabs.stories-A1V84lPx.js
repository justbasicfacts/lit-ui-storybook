import{j as e}from"./iframe-7KbjxAZ3.js";import"./index-3LxRijqB.js";import{a as r,T as l}from"./tab-Cx9jGEAd.js";import"./preload-helper-Bs85Y4nq.js";const g={title:"Components/Navigation/Tabs",component:r,parameters:{layout:"padded"},argTypes:{value:{control:"text"},orientation:{control:"inline-radio",options:["horizontal","vertical"]},variant:{control:"inline-radio",options:["standard","scrollable"]},centered:{control:"boolean"},fullWidth:{control:"boolean"},allowScrollButtonsMobile:{control:"boolean"},onChange:{action:"changed"}},args:{value:"one",orientation:"horizontal",variant:"standard",centered:!1,fullWidth:!1,allowScrollButtonsMobile:!1}},c=e.jsxs(e.Fragment,{children:[e.jsx(l,{value:"one",label:"One"}),e.jsx(l,{value:"two",label:"Two"}),e.jsx(l,{value:"three",label:"Three",disabled:!0})]}),s={render:a=>e.jsx(r,{...a,children:c})},t={args:{centered:!0},render:a=>e.jsx(r,{...a,children:c})},n={args:{orientation:"vertical"},render:a=>e.jsxs("div",{style:{display:"flex",gap:24},children:[e.jsx(r,{...a,children:c}),e.jsx("div",{children:"Panels sit next to a vertical tablist."})]})},o={args:{variant:"scrollable",value:"tab-8"},render:a=>e.jsx("div",{style:{width:420},children:e.jsx(r,{...a,children:Array.from({length:12},(d,i)=>e.jsx(l,{value:`tab-${i+1}`,label:`Tab ${i+1}`},i))})})},v=["Default","Centered","Vertical","Scrollable"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Tabs {...args}>{items}</Tabs>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    centered: true
  },
  render: args => <Tabs {...args}>{items}</Tabs>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  render: args => <div style={{
    display: 'flex',
    gap: 24
  }}>
      <Tabs {...args}>{items}</Tabs>
      <div>Panels sit next to a vertical tablist.</div>
    </div>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'scrollable',
    value: 'tab-8'
  },
  render: args => <div style={{
    width: 420
  }}>
      <Tabs {...args}>
        {Array.from({
        length: 12
      }, (_, i) => <Tab key={i} value={\`tab-\${i + 1}\`} label={\`Tab \${i + 1}\`} />)}
      </Tabs>
    </div>
}`,...o.parameters?.docs?.source}}};export{t as Centered,s as Default,o as Scrollable,n as Vertical,v as __namedExportsOrder,g as default};
