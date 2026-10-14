import{R as c,j as n}from"./iframe-CteECbaa.js";import{o as l,ac as g}from"./index-CJ7Kg3ag.js";import{D as s}from"./dialog-BCP4IyGa.js";import{D as r}from"./dialog-content-V-PgMMO_.js";import{B as o}from"./button-DzjLxdZK.js";import"./preload-helper-Bs85Y4nq.js";const i=l({tagName:"ui-dialog-actions",elementClass:g,react:c}),C={title:"Components/Feedback/DialogActions",component:i,parameters:{layout:"fullscreen"},argTypes:{disableSpacing:{control:"boolean"}},args:{disableSpacing:!1}},e={render:t=>n.jsxs(s,{open:!0,label:"Dialog with actions",children:[n.jsx(r,{children:"Are you sure you want to continue? This action cannot be undone."}),n.jsxs(i,{...t,children:[n.jsx(o,{variant:"ghost",size:"sm",children:"Cancel"}),n.jsx(o,{variant:"primary",size:"sm",children:"Confirm"})]})]})},a={args:{disableSpacing:!0},render:t=>n.jsxs(s,{open:!0,label:"Dialog with packed actions",children:[n.jsx(r,{children:"Actions rendered without the gap between them."}),n.jsxs(i,{...t,children:[n.jsx(o,{variant:"ghost",size:"sm",children:"Cancel"}),n.jsx(o,{variant:"primary",size:"sm",children:"Confirm"})]})]})},b=["InsideDialog","WithoutSpacing"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <Dialog open label="Dialog with actions">
      <DialogContent>
        Are you sure you want to continue? This action cannot be undone.
      </DialogContent>
      <DialogActions {...args}>
        <Button variant="ghost" size="sm">
          Cancel
        </Button>
        <Button variant="primary" size="sm">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    disableSpacing: true
  },
  render: args => <Dialog open label="Dialog with packed actions">
      <DialogContent>Actions rendered without the gap between them.</DialogContent>
      <DialogActions {...args}>
        <Button variant="ghost" size="sm">
          Cancel
        </Button>
        <Button variant="primary" size="sm">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
}`,...a.parameters?.docs?.source}}};export{e as InsideDialog,a as WithoutSpacing,b as __namedExportsOrder,C as default};
