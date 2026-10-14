import{j as t}from"./jsx-runtime-D8h-jwK5.js";import{o as c,as as d}from"./index-CKKzZn3u.js";import{R as l}from"./iframe-DP7DDnfB.js";import{a as i,S as o}from"./step-vpD5zMN9.js";import{S as r}from"./step-content-BmuuiO8D.js";import"./preload-helper-Bs85Y4nq.js";const n=c({tagName:"ui-step-button",elementClass:d,react:l,events:{onStepClick:"step-click"}}),C={title:"Components/StepButton",component:n,parameters:{layout:"padded"},argTypes:{optional:{control:"boolean"},disabled:{control:"boolean"},active:{control:"boolean"},completed:{control:"boolean"},index:{control:{type:"number",min:-1,max:6}},onStepClick:{action:"step-click"}},args:{optional:!1,disabled:!1,active:!1,completed:!1,index:-1}},p=["Select campaign settings","Create an ad group","Create an ad"],s={render:e=>t.jsxs(i,{activeStep:1,style:{width:720},children:[t.jsx(o,{children:t.jsx(n,{...e,children:"Select campaign settings"})}),t.jsx(o,{children:t.jsx(n,{...e,children:"Create an ad group"})}),t.jsx(o,{children:t.jsx(n,{...e,children:"Create an ad"})})]})},a={render:e=>t.jsxs(i,{activeStep:1,orientation:"vertical",style:{width:520},children:[t.jsxs(o,{children:[t.jsx(n,{...e,children:p[0]}),t.jsx(r,{children:"Campaign settings content."})]}),t.jsxs(o,{children:[t.jsx(n,{...e,children:p[1]}),t.jsxs(r,{children:["Pick the keywords the ads should target.",t.jsx("div",{slot:"actions",children:t.jsx("button",{type:"button",children:"Next"})})]})]}),t.jsxs(o,{children:[t.jsx(n,{...e,optional:!0,children:p[2]}),t.jsx(r,{children:"Choose an ad format."})]})]})},j=["InsideStepper","WithVerticalContent"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Stepper activeStep={1} style={{
    width: 720
  }}>
      <Step>
        <StepButton {...args}>Select campaign settings</StepButton>
      </Step>
      <Step>
        <StepButton {...args}>Create an ad group</StepButton>
      </Step>
      <Step>
        <StepButton {...args}>Create an ad</StepButton>
      </Step>
    </Stepper>
}`,...s.parameters?.docs?.source},description:{story:"Step buttons are used instead of step labels to make steps clickable.",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Stepper activeStep={1} orientation="vertical" style={{
    width: 520
  }}>
      <Step>
        <StepButton {...args}>{steps[0]}</StepButton>
        <StepContent>Campaign settings content.</StepContent>
      </Step>
      <Step>
        <StepButton {...args}>{steps[1]}</StepButton>
        <StepContent>
          Pick the keywords the ads should target.
          <div slot="actions">
            <button type="button">Next</button>
          </div>
        </StepContent>
      </Step>
      <Step>
        <StepButton {...args} optional>
          {steps[2]}
        </StepButton>
        <StepContent>Choose an ad format.</StepContent>
      </Step>
    </Stepper>
}`,...a.parameters?.docs?.source}}};export{s as InsideStepper,a as WithVerticalContent,j as __namedExportsOrder,C as default};
