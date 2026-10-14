import{j as e}from"./iframe-CwpzPtni.js";import"./index-qmVU2qX3.js";import{a,S as p}from"./step-BSkxXruJ.js";import{S as i}from"./step-label-Dzqq71xP.js";import"./preload-helper-Bs85Y4nq.js";const g={title:"Components/Navigation/Stepper",component:a,parameters:{layout:"padded"},argTypes:{activeStep:{control:{type:"number",min:0,max:4}},orientation:{control:"select",options:["horizontal","vertical"]},alternativeLabel:{control:"boolean"},nonLinear:{control:"boolean"},showConnector:{control:"boolean"}},args:{activeStep:1,orientation:"horizontal",alternativeLabel:!1,nonLinear:!1,showConnector:!0}},c=["Select campaign settings","Create an ad group","Create an ad"],n={render:t=>e.jsx(a,{...t,style:{width:720},children:c.map(r=>e.jsx(p,{children:e.jsx(i,{children:r})},r))})},o={args:{alternativeLabel:!0,activeStep:2},render:t=>e.jsx(a,{...t,style:{width:720},children:c.map(r=>e.jsx(p,{children:e.jsx(i,{children:r})},r))})},s={args:{orientation:"vertical",activeStep:1},render:t=>e.jsx(a,{...t,style:{width:480},children:c.map(r=>e.jsx(p,{children:e.jsx(i,{children:r})},r))})},l={args:{showConnector:!1,activeStep:2},render:t=>e.jsx(a,{...t,style:{width:720},children:c.map(r=>e.jsx(p,{children:e.jsx(i,{children:r})},r))})},u=["Horizontal","AlternativeLabel","Vertical","WithoutConnector"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Stepper {...args} style={{
    width: 720
  }}>
      {labels.map(label => <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>)}
    </Stepper>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    alternativeLabel: true,
    activeStep: 2
  },
  render: args => <Stepper {...args} style={{
    width: 720
  }}>
      {labels.map(label => <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>)}
    </Stepper>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    activeStep: 1
  },
  render: args => <Stepper {...args} style={{
    width: 480
  }}>
      {labels.map(label => <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>)}
    </Stepper>
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    showConnector: false,
    activeStep: 2
  },
  render: args => <Stepper {...args} style={{
    width: 720
  }}>
      {labels.map(label => <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>)}
    </Stepper>
}`,...l.parameters?.docs?.source}}};export{o as AlternativeLabel,n as Horizontal,s as Vertical,l as WithoutConnector,u as __namedExportsOrder,g as default};
