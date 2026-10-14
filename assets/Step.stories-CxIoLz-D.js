import{j as e}from"./iframe-CI8tjnlt.js";import"./index-C156ONKY.js";import{S as t,a as d}from"./step-CyMj5FDk.js";import{S as r}from"./step-label-BZ61NeC2.js";import"./preload-helper-Bs85Y4nq.js";const m={title:"Components/Step",component:t,parameters:{layout:"padded"},argTypes:{active:{control:"boolean"},completed:{control:"boolean"},disabled:{control:"boolean"},expanded:{control:"boolean"},index:{control:{type:"number",min:-1,max:6}},orientation:{control:"select",options:["horizontal","vertical"]}},args:{active:!1,completed:!1,disabled:!1,expanded:!1,index:-1}},n={render:a=>e.jsxs(d,{activeStep:1,style:{width:720},children:[e.jsx(t,{...a,children:e.jsx(r,{children:"Select campaign settings"})}),e.jsx(t,{...a,children:e.jsx(r,{children:"Create an ad group"})}),e.jsx(t,{...a,children:e.jsx(r,{children:"Create an ad"})})]})},p={render:a=>e.jsxs(d,{activeStep:2,style:{width:720},children:[e.jsx(t,{...a,children:e.jsx(r,{children:"Select campaign settings"})}),e.jsx(t,{...a,children:e.jsx(r,{children:"Create an ad group"})}),e.jsx(t,{...a,children:e.jsx(r,{children:"Create an ad"})})]})},s={args:{disabled:!0},render:a=>e.jsxs(d,{activeStep:0,style:{width:720},children:[e.jsx(t,{children:e.jsx(r,{children:"Select campaign settings"})}),e.jsx(t,{...a,children:e.jsx(r,{children:"Create an ad group"})}),e.jsx(t,{children:e.jsx(r,{children:"Create an ad"})})]})},b=["InsideStepper","LastStepActive","DisabledStep"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Stepper activeStep={1} style={{
    width: 720
  }}>
      <Step {...args}>
        <StepLabel>Select campaign settings</StepLabel>
      </Step>
      <Step {...args}>
        <StepLabel>Create an ad group</StepLabel>
      </Step>
      <Step {...args}>
        <StepLabel>Create an ad</StepLabel>
      </Step>
    </Stepper>
}`,...n.parameters?.docs?.source},description:{story:"Steps are driven by the parent `ui-stepper`: active/completed/index come\n from `activeStep`, so the props above only matter when used stand-alone.",...n.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Stepper activeStep={2} style={{
    width: 720
  }}>
      <Step {...args}>
        <StepLabel>Select campaign settings</StepLabel>
      </Step>
      <Step {...args}>
        <StepLabel>Create an ad group</StepLabel>
      </Step>
      <Step {...args}>
        <StepLabel>Create an ad</StepLabel>
      </Step>
    </Stepper>
}`,...p.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <Stepper activeStep={0} style={{
    width: 720
  }}>
      <Step>
        <StepLabel>Select campaign settings</StepLabel>
      </Step>
      <Step {...args}>
        <StepLabel>Create an ad group</StepLabel>
      </Step>
      <Step>
        <StepLabel>Create an ad</StepLabel>
      </Step>
    </Stepper>
}`,...s.parameters?.docs?.source}}};export{s as DisabledStep,n as InsideStepper,p as LastStepActive,b as __namedExportsOrder,m as default};
