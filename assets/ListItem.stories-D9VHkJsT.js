import{j as e}from"./iframe-CwpzPtni.js";import"./index-qmVU2qX3.js";import{L as t}from"./list-item-fa6Gyh9o.js";import{L as m,a as s}from"./list-item-text-HBqDRGEP.js";import{L as c}from"./list-item-icon-DEvxfACi.js";import"./preload-helper-Bs85Y4nq.js";const g={title:"Components/Data display/ListItem",component:t,parameters:{layout:"padded"},argTypes:{alignItems:{control:"select",options:["flex-start","center"]},dense:{control:"boolean"},divider:{control:"boolean"}},args:{alignItems:"center",dense:!1,divider:!1},decorators:[r=>e.jsx("div",{style:{width:320},children:e.jsx(r,{})})]},i={render:r=>e.jsxs(m,{children:[e.jsx(t,{...r,children:e.jsx(s,{primary:"Single line item"})}),e.jsx(t,{...r,children:e.jsx(s,{primary:"Another item"})})]})},n={args:{divider:!0},render:r=>e.jsxs(m,{children:[e.jsx(t,{...r,children:e.jsx(s,{primary:"Divider between rows"})}),e.jsx(t,{...r,children:e.jsx(s,{primary:"Second row"})})]})},a={args:{alignItems:"flex-start"},render:r=>e.jsx(m,{children:e.jsxs(t,{...r,children:[e.jsx(c,{children:"📄"}),e.jsx(s,{primary:"Multi-line item",secondary:"Secondary text that wraps onto several lines so the top alignment is visible."})]})})},o={render:r=>e.jsx(m,{children:e.jsxs(t,{...r,children:[e.jsx(s,{primary:"Notifications"}),e.jsx("span",{slot:"secondary-action",children:"On"})]})})},y=["Default","Divider","AlignTop","SecondaryAction"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <List>
      <ListItem {...args}>
        <ListItemText primary="Single line item" />
      </ListItem>
      <ListItem {...args}>
        <ListItemText primary="Another item" />
      </ListItem>
    </List>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    divider: true
  },
  render: args => <List>
      <ListItem {...args}>
        <ListItemText primary="Divider between rows" />
      </ListItem>
      <ListItem {...args}>
        <ListItemText primary="Second row" />
      </ListItem>
    </List>
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    alignItems: 'flex-start'
  },
  render: args => <List>
      <ListItem {...args}>
        <ListItemIcon>📄</ListItemIcon>
        <ListItemText primary="Multi-line item" secondary="Secondary text that wraps onto several lines so the top alignment is visible." />
      </ListItem>
    </List>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <List>
      <ListItem {...args}>
        <ListItemText primary="Notifications" />
        <span slot="secondary-action">On</span>
      </ListItem>
    </List>
}`,...o.parameters?.docs?.source}}};export{a as AlignTop,i as Default,n as Divider,o as SecondaryAction,y as __namedExportsOrder,g as default};
