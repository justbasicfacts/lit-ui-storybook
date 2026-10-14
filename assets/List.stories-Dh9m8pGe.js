import{j as e}from"./iframe-Bwx-W2wi.js";import"./index-BSSMaTAd.js";import{L as i,a as r}from"./list-item-text-Cy-Wcum5.js";import{L as d}from"./list-item-button-0Fikx7mq.js";import{L as s}from"./list-item-NCjpcDyK.js";import{L as c}from"./list-item-icon-DzKNBbnU.js";import{L}from"./list-subheader-DQVQ984K.js";import"./preload-helper-Bs85Y4nq.js";const g={title:"Components/Data display/List",component:i,parameters:{layout:"padded"},argTypes:{dense:{control:"boolean"},disablePadding:{control:"boolean"}},args:{dense:!1,disablePadding:!1},decorators:[t=>e.jsx("div",{style:{width:320},children:e.jsx(t,{})})]},n={render:t=>e.jsxs(i,{...t,children:[e.jsx(s,{children:e.jsx(r,{primary:"Inbox",secondary:"12 unread"})}),e.jsx(s,{children:e.jsx(r,{primary:"Drafts",secondary:"3 drafts"})}),e.jsx(s,{divider:!0,children:e.jsx(r,{primary:"Sent"})})]})},a={render:t=>e.jsxs(i,{...t,children:[e.jsx(d,{selected:!0,children:e.jsx(r,{primary:"Selected row"})}),e.jsx(d,{children:e.jsx(r,{primary:"Another row"})}),e.jsx(d,{disabled:!0,children:e.jsx(r,{primary:"Disabled row"})})]})},o={render:t=>e.jsxs(i,{...t,children:[e.jsx(L,{slot:"subheader",children:"Categories"}),e.jsx(s,{children:e.jsx(r,{primary:"Starred",secondary:"4 items"})}),e.jsx(s,{children:e.jsx(r,{primary:"Archive"})})]})},m={render:t=>e.jsxs(i,{...t,children:[e.jsxs(s,{children:[e.jsx(c,{children:"📁"}),e.jsx(r,{primary:"Folder"})]}),e.jsxs(s,{children:[e.jsx(c,{children:"📝"}),e.jsx(r,{primary:"Notes"})]})]})},b=["Default","Buttons","WithSubheader","WithIcons"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <List {...args}>
      <ListItem>
        <ListItemText primary="Inbox" secondary="12 unread" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Drafts" secondary="3 drafts" />
      </ListItem>
      <ListItem divider>
        <ListItemText primary="Sent" />
      </ListItem>
    </List>
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <List {...args}>
      <ListItemButton selected>
        <ListItemText primary="Selected row" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Another row" />
      </ListItemButton>
      <ListItemButton disabled>
        <ListItemText primary="Disabled row" />
      </ListItemButton>
    </List>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <List {...args}>
      <ListSubheader slot="subheader">Categories</ListSubheader>
      <ListItem>
        <ListItemText primary="Starred" secondary="4 items" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Archive" />
      </ListItem>
    </List>
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <List {...args}>
      <ListItem>
        <ListItemIcon>📁</ListItemIcon>
        <ListItemText primary="Folder" />
      </ListItem>
      <ListItem>
        <ListItemIcon>📝</ListItemIcon>
        <ListItemText primary="Notes" />
      </ListItem>
    </List>
}`,...m.parameters?.docs?.source}}};export{a as Buttons,n as Default,m as WithIcons,o as WithSubheader,b as __namedExportsOrder,g as default};
