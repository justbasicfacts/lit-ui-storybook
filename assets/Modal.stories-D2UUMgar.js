import{R as l,j as e}from"./iframe-CteECbaa.js";import{o as t,af as c}from"./index-CJ7Kg3ag.js";import"./preload-helper-Bs85Y4nq.js";const r=t({tagName:"ui-modal",elementClass:c,react:l,events:{onOpen:"open",onClose:"close"}}),m={title:"Components/Feedback/Modal",component:r,parameters:{layout:"fullscreen"},argTypes:{open:{control:"boolean"},closeOnBackdropClick:{control:"boolean"},closeOnEsc:{control:"boolean"},label:{control:"text"},onOpen:{action:"opened"},onClose:{action:"closed"}},args:{open:!0,closeOnBackdropClick:!0,closeOnEsc:!0,label:"Example modal"}},s={render:a=>e.jsx(r,{...a,children:e.jsxs("div",{style:{padding:24,maxWidth:400},children:[e.jsx("h2",{style:{marginTop:0},children:"Modal title"}),e.jsx("p",{style:{marginBottom:0},children:"Press Escape or click the backdrop to close this dialog."})]})})},o={args:{closeOnBackdropClick:!1,closeOnEsc:!1},render:a=>e.jsx(r,{...a,children:e.jsxs("div",{style:{padding:24,maxWidth:400},children:[e.jsx("h2",{style:{marginTop:0},children:"Cannot dismiss"}),e.jsx("p",{style:{marginBottom:0},children:"Backdrop click and Escape are both disabled."})]})})},n={args:{open:!1}},g=["Open","NonDismissible","Closed"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Modal {...args}>
      <div style={{
      padding: 24,
      maxWidth: 400
    }}>
        <h2 style={{
        marginTop: 0
      }}>Modal title</h2>
        <p style={{
        marginBottom: 0
      }}>
          Press Escape or click the backdrop to close this dialog.
        </p>
      </div>
    </Modal>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    closeOnBackdropClick: false,
    closeOnEsc: false
  },
  render: args => <Modal {...args}>
      <div style={{
      padding: 24,
      maxWidth: 400
    }}>
        <h2 style={{
        marginTop: 0
      }}>Cannot dismiss</h2>
        <p style={{
        marginBottom: 0
      }}>
          Backdrop click and Escape are both disabled.
        </p>
      </div>
    </Modal>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    open: false
  }
}`,...n.parameters?.docs?.source}}};export{n as Closed,o as NonDismissible,s as Open,g as __namedExportsOrder,m as default};
