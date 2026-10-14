import{j as n}from"./jsx-runtime-D8h-jwK5.js";import{o as c,M as l}from"./index-CKKzZn3u.js";import{R as g}from"./iframe-DP7DDnfB.js";import{D as r}from"./dialog-C14k8La4.js";import{D as s}from"./dialog-content-DI_NsCdf.js";import{B as a}from"./button-CRh5SSeW.js";import"./preload-helper-Bs85Y4nq.js";const i=c({tagName:"ui-dialog-actions",elementClass:l,react:g}),x={title:"Components/DialogActions",component:i,parameters:{layout:"fullscreen"},argTypes:{disableSpacing:{control:"boolean"}},args:{disableSpacing:!1}},o={render:t=>n.jsxs(r,{open:!0,label:"Dialog with actions",children:[n.jsx(s,{children:"Are you sure you want to continue? This action cannot be undone."}),n.jsxs(i,{...t,children:[n.jsx(a,{variant:"ghost",size:"sm",children:"Cancel"}),n.jsx(a,{variant:"primary",size:"sm",children:"Confirm"})]})]})},e={args:{disableSpacing:!0},render:t=>n.jsxs(r,{open:!0,label:"Dialog with packed actions",children:[n.jsx(s,{children:"Actions rendered without the gap between them."}),n.jsxs(i,{...t,children:[n.jsx(a,{variant:"ghost",size:"sm",children:"Cancel"}),n.jsx(a,{variant:"primary",size:"sm",children:"Confirm"})]})]})},b=["InsideDialog","WithoutSpacing"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};export{o as InsideDialog,e as WithoutSpacing,b as __namedExportsOrder,x as default};
