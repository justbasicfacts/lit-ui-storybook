import{R as c,j as n}from"./iframe-lGCTaxPj.js";import{o as l,V as g}from"./index-C-Hz80Os.js";import{D as s}from"./dialog-DadCI-j5.js";import{D as r}from"./dialog-content-D3Qsrg_f.js";import{B as a}from"./button-BkvDz9MW.js";import"./preload-helper-Bs85Y4nq.js";const i=l({tagName:"ui-dialog-actions",elementClass:g,react:c}),C={title:"Components/DialogActions",component:i,parameters:{layout:"fullscreen"},argTypes:{disableSpacing:{control:"boolean"}},args:{disableSpacing:!1}},e={render:t=>n.jsxs(s,{open:!0,label:"Dialog with actions",children:[n.jsx(r,{children:"Are you sure you want to continue? This action cannot be undone."}),n.jsxs(i,{...t,children:[n.jsx(a,{variant:"ghost",size:"sm",children:"Cancel"}),n.jsx(a,{variant:"primary",size:"sm",children:"Confirm"})]})]})},o={args:{disableSpacing:!0},render:t=>n.jsxs(s,{open:!0,label:"Dialog with packed actions",children:[n.jsx(r,{children:"Actions rendered without the gap between them."}),n.jsxs(i,{...t,children:[n.jsx(a,{variant:"ghost",size:"sm",children:"Cancel"}),n.jsx(a,{variant:"primary",size:"sm",children:"Confirm"})]})]})},x=["InsideDialog","WithoutSpacing"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};export{e as InsideDialog,o as WithoutSpacing,x as __namedExportsOrder,C as default};
