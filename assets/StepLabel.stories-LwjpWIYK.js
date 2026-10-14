import{j as e}from"./iframe-CI8tjnlt.js";import"./index-C156ONKY.js";import{S as t}from"./step-label-BZ61NeC2.js";import{a as i,S as a}from"./step-CyMj5FDk.js";import"./preload-helper-Bs85Y4nq.js";const m={title:"Components/StepLabel",component:t,parameters:{layout:"padded"},argTypes:{optional:{control:"boolean"},error:{control:"boolean"},active:{control:"boolean"},completed:{control:"boolean"},index:{control:{type:"number",min:-1,max:6}},alternativeLabel:{control:"boolean"}},args:{optional:!1,error:!1,active:!1,completed:!1,index:-1,alternativeLabel:!1}},r={render:n=>e.jsxs(i,{activeStep:1,style:{width:720},children:[e.jsx(a,{children:e.jsx(t,{children:"Select campaign settings"})}),e.jsx(a,{children:e.jsx(t,{...n,children:"Create an ad group"})}),e.jsx(a,{children:e.jsx(t,{children:"Create an ad"})})]})},s={render:n=>e.jsxs(i,{activeStep:1,style:{width:720},children:[e.jsx(a,{children:e.jsx(t,{children:"Select campaign settings"})}),e.jsx(a,{children:e.jsx(t,{...n,optional:!0,children:"Create an ad group"})}),e.jsx(a,{children:e.jsx(t,{error:!0,children:"Create an ad"})})]})},p={render:n=>e.jsxs(i,{activeStep:1,style:{width:720},children:[e.jsx(a,{children:e.jsxs(t,{...n,children:[e.jsx("span",{slot:"icon","aria-hidden":"true",children:"📦"}),"Select campaign settings"]})}),e.jsx(a,{children:e.jsxs(t,{children:[e.jsx("span",{slot:"icon","aria-hidden":"true",children:"🎯"}),"Create an ad group"]})}),e.jsx(a,{children:e.jsxs(t,{children:[e.jsx("span",{slot:"icon","aria-hidden":"true",children:"✅"}),"Create an ad"]})})]})},l={args:{alternativeLabel:!0},render:n=>e.jsxs(i,{activeStep:2,alternativeLabel:!0,style:{width:720},children:[e.jsx(a,{children:e.jsx(t,{...n,children:"Select campaign settings"})}),e.jsx(a,{children:e.jsx(t,{...n,optional:!0,children:"Create an ad group"})}),e.jsx(a,{children:e.jsx(t,{...n,children:"Create an ad"})})]})},b=["InsideStep","OptionalAndError","WithIcon","AlternativeLabel"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Stepper activeStep={1} style={{
    width: 720
  }}>
      <Step>
        <StepLabel>Select campaign settings</StepLabel>
      </Step>
      <Step>
        <StepLabel {...args}>Create an ad group</StepLabel>
      </Step>
      <Step>
        <StepLabel>Create an ad</StepLabel>
      </Step>
    </Stepper>
}`,...r.parameters?.docs?.source},description:{story:"Step labels live inside a step; the stepper drives active/completed.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Stepper activeStep={1} style={{
    width: 720
  }}>
      <Step>
        <StepLabel>Select campaign settings</StepLabel>
      </Step>
      <Step>
        <StepLabel {...args} optional>
          Create an ad group
        </StepLabel>
      </Step>
      <Step>
        <StepLabel error>Create an ad</StepLabel>
      </Step>
    </Stepper>
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Stepper activeStep={1} style={{
    width: 720
  }}>
      <Step>
        <StepLabel {...args}>
          <span slot="icon" aria-hidden="true">
            📦
          </span>
          Select campaign settings
        </StepLabel>
      </Step>
      <Step>
        <StepLabel>
          <span slot="icon" aria-hidden="true">
            🎯
          </span>
          Create an ad group
        </StepLabel>
      </Step>
      <Step>
        <StepLabel>
          <span slot="icon" aria-hidden="true">
            ✅
          </span>
          Create an ad
        </StepLabel>
      </Step>
    </Stepper>
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    alternativeLabel: true
  },
  render: args => <Stepper activeStep={2} alternativeLabel style={{
    width: 720
  }}>
      <Step>
        <StepLabel {...args}>Select campaign settings</StepLabel>
      </Step>
      <Step>
        <StepLabel {...args} optional>
          Create an ad group
        </StepLabel>
      </Step>
      <Step>
        <StepLabel {...args}>Create an ad</StepLabel>
      </Step>
    </Stepper>
}`,...l.parameters?.docs?.source}}};export{l as AlternativeLabel,r as InsideStep,s as OptionalAndError,p as WithIcon,b as __namedExportsOrder,m as default};
