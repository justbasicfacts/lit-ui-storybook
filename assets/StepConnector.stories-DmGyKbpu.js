import{R as d,j as e}from"./iframe-CI8tjnlt.js";import{o as m,ay as S}from"./index-C156ONKY.js";import{a as l,S as c}from"./step-CyMj5FDk.js";import{S as p}from"./step-label-BZ61NeC2.js";import"./preload-helper-Bs85Y4nq.js";const s=m({tagName:"ui-step-connector",elementClass:S,react:d}),x={title:"Components/StepConnector",component:s,parameters:{layout:"padded"},argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},active:{control:"boolean"},completed:{control:"boolean"},disabled:{control:"boolean"}},args:{orientation:"horizontal",active:!1,completed:!1,disabled:!1}},i=["Select campaign settings","Create an ad group","Create an ad"],a={render:r=>e.jsxs(l,{activeStep:1,style:{width:720},children:[i.map(t=>e.jsx(c,{children:e.jsx(p,{children:t})},t)),e.jsx(s,{...r,slot:"connector",style:{display:"none"}})]})},n={parameters:{layout:"padded"},render:r=>e.jsxs(l,{activeStep:1,style:{width:720},children:[i.map(t=>e.jsx(c,{children:e.jsx(p,{children:t})},t)),e.jsx(s,{...r,slot:"connector",style:{height:2,background:"#7b1fa2"}})]})},o={args:{orientation:"vertical"},render:r=>e.jsxs(l,{activeStep:1,orientation:"vertical",style:{width:480},children:[i.map(t=>e.jsx(c,{children:e.jsx(p,{children:t})},t)),e.jsx(s,{...r,slot:"connector"})]})},j=["Default","CustomConnector","Vertical"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Stepper activeStep={1} style={{
    width: 720
  }}>
      {labels.map(label => <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>)}
      <StepConnector {...args} slot="connector" style={{
      display: 'none'
    }} />
    </Stepper>
}`,...a.parameters?.docs?.source},description:{story:"The connector lines are drawn by the stepper between steps.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: args => <Stepper activeStep={1} style={{
    width: 720
  }}>
      {labels.map(label => <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>)}
      <StepConnector {...args} slot="connector" style={{
      height: 2,
      background: '#7b1fa2'
    }} />
    </Stepper>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  render: args => <Stepper activeStep={1} orientation="vertical" style={{
    width: 480
  }}>
      {labels.map(label => <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>)}
      <StepConnector {...args} slot="connector" />
    </Stepper>
}`,...o.parameters?.docs?.source}}};export{n as CustomConnector,a as Default,o as Vertical,j as __namedExportsOrder,x as default};
