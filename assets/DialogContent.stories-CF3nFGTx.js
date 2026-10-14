import{j as e}from"./jsx-runtime-D8h-jwK5.js";import"./index-CKKzZn3u.js";import{D as t}from"./dialog-content-DI_NsCdf.js";import{D as o}from"./dialog-C14k8La4.js";import"./iframe-DP7DDnfB.js";import"./preload-helper-Bs85Y4nq.js";const c={title:"Components/DialogContent",component:t,parameters:{layout:"fullscreen"},argTypes:{dividers:{control:"boolean"},children:{control:"text"}},args:{dividers:!1,children:"Dialog content sits inside the Dialog React binding."}},n={render:r=>e.jsxs(o,{open:!0,label:"Dialog with content",children:[e.jsx("h3",{style:{margin:0,padding:"16px 24px 8px",fontSize:18},children:"Title"}),e.jsx(t,{...r})]})},i={args:{dividers:!0},render:r=>e.jsxs(o,{open:!0,label:"Dialog with divided content",children:[e.jsx("h3",{style:{margin:0,padding:"16px 24px 8px",fontSize:18},children:"Title"}),e.jsx(t,{...r})]})},m=["InsideDialog","WithDividers"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Dialog open label="Dialog with content">
      <h3 style={{
      margin: 0,
      padding: '16px 24px 8px',
      fontSize: 18
    }}>
        Title
      </h3>
      <DialogContent {...args} />
    </Dialog>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    dividers: true
  },
  render: args => <Dialog open label="Dialog with divided content">
      <h3 style={{
      margin: 0,
      padding: '16px 24px 8px',
      fontSize: 18
    }}>
        Title
      </h3>
      <DialogContent {...args} />
    </Dialog>
}`,...i.parameters?.docs?.source}}};export{n as InsideDialog,i as WithDividers,m as __namedExportsOrder,c as default};
