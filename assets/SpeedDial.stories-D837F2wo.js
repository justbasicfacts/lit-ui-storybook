import{j as e}from"./iframe-D-jlcKf7.js";import"./index-A4XEOZPO.js";import{S as a,a as d}from"./speed-dial-action-BlcIfve-.js";import"./preload-helper-Bs85Y4nq.js";const u={title:"Components/SpeedDial",component:a,parameters:{layout:"fullscreen"},argTypes:{open:{control:"boolean"},direction:{control:"select",options:["up","down","left","right"]},dismissible:{control:"boolean"},onOpen:{action:"opened"},onClose:{action:"closed"}},args:{open:!0,direction:"up",dismissible:!0}},i=e.jsxs(e.Fragment,{children:[e.jsx(d,{tooltipTitle:"Copy",children:"📋"}),e.jsx(d,{tooltipTitle:"Save",children:"💾"}),e.jsx(d,{tooltipTitle:"Share",children:"🔗"})]}),s={render:r=>e.jsx(a,{...r,children:i})},o={args:{open:!1},render:r=>e.jsx(a,{...r,children:i})},n={args:{direction:"left"},render:r=>e.jsx(a,{...r,"aria-label":"Speed dial",children:i})},t={render:r=>e.jsxs(a,{...r,"aria-label":"Speed dial",children:[e.jsx("span",{slot:"icon","aria-hidden":"true",children:"☰"}),i]})},S=["Open","Closed","Left","CustomIcon"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <SpeedDial {...args}>{actions}</SpeedDial>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    open: false
  },
  render: args => <SpeedDial {...args}>{actions}</SpeedDial>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'left'
  },
  render: args => <SpeedDial {...args} aria-label="Speed dial">
      {actions}
    </SpeedDial>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <SpeedDial {...args} aria-label="Speed dial">
      <span slot="icon" aria-hidden="true">
        ☰
      </span>
      {actions}
    </SpeedDial>
}`,...t.parameters?.docs?.source}}};export{o as Closed,t as CustomIcon,n as Left,s as Open,S as __namedExportsOrder,u as default};
