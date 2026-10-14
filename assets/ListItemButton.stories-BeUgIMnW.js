import{j as e}from"./iframe-Bwx-W2wi.js";import"./index-BSSMaTAd.js";import{L as r}from"./list-item-button-0Fikx7mq.js";import{L as a,a as s}from"./list-item-text-Cy-Wcum5.js";import{L as l}from"./list-item-icon-DzKNBbnU.js";import"./preload-helper-Bs85Y4nq.js";const h={title:"Components/Data display/ListItemButton",component:r,parameters:{layout:"padded"},argTypes:{selected:{control:"boolean"},disabled:{control:"boolean"},dense:{control:"boolean"},divider:{control:"boolean"},href:{control:"text"},target:{control:"select",options:["","_blank","_self","_parent","_top"]},rel:{control:"text"}},args:{selected:!1,disabled:!1,dense:!1,divider:!1},decorators:[t=>e.jsx("div",{style:{width:320},children:e.jsx(t,{})})]},i={render:t=>e.jsxs(a,{children:[e.jsx(r,{...t,children:e.jsx(s,{primary:"Clickable row"})}),e.jsx(r,{...t,children:e.jsx(s,{primary:"Another row"})})]})},o={args:{selected:!0},render:t=>e.jsxs(a,{children:[e.jsx(r,{...t,children:e.jsx(s,{primary:"Selected row"})}),e.jsx(r,{children:e.jsx(s,{primary:"Unselected row"})})]})},c={args:{disabled:!0},render:t=>e.jsx(a,{children:e.jsx(r,{...t,children:e.jsx(s,{primary:"Disabled row"})})})},m={args:{href:"https://mui.com/material-ui/react-list/"},render:t=>e.jsx(a,{children:e.jsxs(r,{...t,children:[e.jsx(l,{children:"🔗"}),e.jsx(s,{primary:"Opens a link"})]})})},n={args:{href:"https://mui.com/material-ui/react-list/",target:"_blank",rel:"noopener"},render:t=>e.jsx(a,{children:e.jsxs(r,{...t,children:[e.jsx(l,{children:"↗"}),e.jsx(s,{primary:"Opens in a new tab",secondary:"mui.com"})]})})},g=["Default","Selected","Disabled","AsLink","NewTabLink"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <List>
      <ListItemButton {...args}>
        <ListItemText primary="Clickable row" />
      </ListItemButton>
      <ListItemButton {...args}>
        <ListItemText primary="Another row" />
      </ListItemButton>
    </List>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true
  },
  render: args => <List>
      <ListItemButton {...args}>
        <ListItemText primary="Selected row" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Unselected row" />
      </ListItemButton>
    </List>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <List>
      <ListItemButton {...args}>
        <ListItemText primary="Disabled row" />
      </ListItemButton>
    </List>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'https://mui.com/material-ui/react-list/'
  },
  render: args => <List>
      <ListItemButton {...args}>
        <ListItemIcon>🔗</ListItemIcon>
        <ListItemText primary="Opens a link" />
      </ListItemButton>
    </List>
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'https://mui.com/material-ui/react-list/',
    target: '_blank',
    rel: 'noopener'
  },
  render: args => <List>
      <ListItemButton {...args}>
        <ListItemIcon>↗</ListItemIcon>
        <ListItemText primary="Opens in a new tab" secondary="mui.com" />
      </ListItemButton>
    </List>
}`,...n.parameters?.docs?.source},description:{story:"A list of external links: `target` and `rel` reach the inner anchor.",...n.parameters?.docs?.description}}};export{m as AsLink,i as Default,c as Disabled,n as NewTabLink,o as Selected,g as __namedExportsOrder,h as default};
