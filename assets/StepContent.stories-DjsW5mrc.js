import{j as e}from"./iframe-lGCTaxPj.js";import"./index-C-Hz80Os.js";import{S as t}from"./step-content-Ba3KPBaX.js";import{a as p,S as s}from"./step-D8NjBmLy.js";import{S as a}from"./step-label-DCjatLSD.js";import"./preload-helper-Bs85Y4nq.js";const m={title:"Components/StepContent",component:t,parameters:{layout:"padded"},argTypes:{active:{control:"boolean"},expanded:{control:"boolean"}},args:{active:!1,expanded:!1}},o=["Select campaign settings","Create an ad group","Create an ad"],n={render:i=>e.jsxs(p,{activeStep:1,orientation:"vertical",style:{width:520},children:[e.jsxs(s,{children:[e.jsx(a,{children:o[0]}),e.jsx(t,{children:"For each ad campaign that you create, you can control how much you are willing to spend and how many people you want to see your ad."})]}),e.jsxs(s,{children:[e.jsx(a,{children:o[1]}),e.jsxs(t,{...i,children:["An ad group contains one or more ads which target a shared set of keywords.",e.jsxs("div",{slot:"actions",children:[e.jsx("button",{type:"button",children:"Back"}),e.jsx("button",{type:"button",children:"Next"})]})]})]}),e.jsxs(s,{children:[e.jsx(a,{children:o[2]}),e.jsx(t,{children:"Try out the different ad formats."})]})]})},r={args:{expanded:!0},render:i=>e.jsxs(p,{activeStep:0,orientation:"vertical",style:{width:520},children:[e.jsxs(s,{children:[e.jsx(a,{children:o[0]}),e.jsx(t,{children:"Currently active step content."})]}),e.jsxs(s,{children:[e.jsx(a,{children:o[1]}),e.jsxs(t,{...i,children:["This step is not active but is marked `expanded`, so its content is visible.",e.jsx("div",{slot:"actions",children:e.jsx("button",{type:"button",children:"Continue"})})]})]})]})},x=["InsideVerticalStepper","ExpandedWhileInactive"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Stepper activeStep={1} orientation="vertical" style={{
    width: 520
  }}>
      <Step>
        <StepLabel>{steps[0]}</StepLabel>
        <StepContent>
          For each ad campaign that you create, you can control how much you are
          willing to spend and how many people you want to see your ad.
        </StepContent>
      </Step>
      <Step>
        <StepLabel>{steps[1]}</StepLabel>
        <StepContent {...args}>
          An ad group contains one or more ads which target a shared set of
          keywords.
          <div slot="actions">
            <button type="button">Back</button>
            <button type="button">Next</button>
          </div>
        </StepContent>
      </Step>
      <Step>
        <StepLabel>{steps[2]}</StepLabel>
        <StepContent>Try out the different ad formats.</StepContent>
      </Step>
    </Stepper>
}`,...n.parameters?.docs?.source},description:{story:"Step content sits inside a vertical step and is revealed while the step is\n active (the stepper drives `active`).",...n.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: true
  },
  render: args => <Stepper activeStep={0} orientation="vertical" style={{
    width: 520
  }}>
      <Step>
        <StepLabel>{steps[0]}</StepLabel>
        <StepContent>Currently active step content.</StepContent>
      </Step>
      <Step>
        <StepLabel>{steps[1]}</StepLabel>
        <StepContent {...args}>
          This step is not active but is marked \`expanded\`, so its content is
          visible.
          <div slot="actions">
            <button type="button">Continue</button>
          </div>
        </StepContent>
      </Step>
    </Stepper>
}`,...r.parameters?.docs?.source}}};export{r as ExpandedWhileInactive,n as InsideVerticalStepper,x as __namedExportsOrder,m as default};
