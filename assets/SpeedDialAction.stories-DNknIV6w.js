import{j as e}from"./iframe-EaglJ-EY.js";import"./index-qmVU2qX3.js";import{a as i,S as l}from"./speed-dial-action-lZWCwuDP.js";import"./preload-helper-Bs85Y4nq.js";const c={title:"Components/Navigation/SpeedDialAction",component:i,parameters:{layout:"fullscreen"},argTypes:{tooltipTitle:{control:"text"},delay:{control:{type:"number",min:0,max:2e3}},open:{control:"boolean"},onSpeedDialActionClick:{action:"speed-dial-action-click"}},args:{tooltipTitle:"Copy",delay:0,open:!0}},t={render:a=>e.jsxs(l,{open:!0,direction:"up","aria-label":"Speed dial",children:[e.jsx(i,{tooltipTitle:"Copy",delay:0,onSpeedDialActionClick:a.onSpeedDialActionClick,children:"📋"}),e.jsx(i,{tooltipTitle:"Save",children:"💾"}),e.jsx(i,{tooltipTitle:"Share",children:"🔗"})]})},o={args:{tooltipTitle:"Delete",delay:300},render:a=>e.jsxs(l,{open:!0,direction:"up","aria-label":"Speed dial",children:[e.jsx(i,{...a,children:"🗑️"}),e.jsx(i,{tooltipTitle:"Edit",delay:600,children:"✏️"})]})},s=["InsideSpeedDial","WithDelay"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <SpeedDial open direction="up" aria-label="Speed dial">
      <SpeedDialAction tooltipTitle="Copy" delay={0} onSpeedDialActionClick={args.onSpeedDialActionClick}>
        📋
      </SpeedDialAction>
      <SpeedDialAction tooltipTitle="Save">💾</SpeedDialAction>
      <SpeedDialAction tooltipTitle="Share">🔗</SpeedDialAction>
    </SpeedDial>
}`,...t.parameters?.docs?.source},description:{story:"Actions are slotted into a `ui-speed-dial`, which drives their `open`\n state.",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    tooltipTitle: 'Delete',
    delay: 300
  },
  render: args => <SpeedDial open direction="up" aria-label="Speed dial">
      <SpeedDialAction {...args}>🗑️</SpeedDialAction>
      <SpeedDialAction tooltipTitle="Edit" delay={600}>
        ✏️
      </SpeedDialAction>
    </SpeedDial>
}`,...o.parameters?.docs?.source}}};export{t as InsideSpeedDial,o as WithDelay,s as __namedExportsOrder,c as default};
