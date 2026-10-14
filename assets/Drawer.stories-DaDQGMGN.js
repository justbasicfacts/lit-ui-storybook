import{j as e}from"./iframe-7KbjxAZ3.js";import"./index-3LxRijqB.js";import{D as n}from"./drawer-CXykUWii.js";import"./preload-helper-Bs85Y4nq.js";const h={title:"Components/Navigation/Drawer",component:n,parameters:{layout:"fullscreen"},argTypes:{open:{control:"boolean"},anchor:{control:"inline-radio",options:["left","right","top","bottom"]},variant:{control:"inline-radio",options:["temporary","persistent","permanent"]},width:{control:"text"},elevation:{control:{type:"number",min:0,max:24}},dismissible:{control:"boolean"},onOpen:{action:"opened"},onClose:{action:"closed"}},args:{open:!1,anchor:"left",variant:"temporary",width:"240px",elevation:16,dismissible:!0}},t=e.jsxs("nav",{style:{padding:16,display:"grid",gap:8},children:[e.jsx("strong",{children:"Navigation"}),e.jsx("a",{href:"#inbox",children:"Inbox"}),e.jsx("a",{href:"#starred",children:"Starred"}),e.jsx("a",{href:"#sent",children:"Sent"})]}),a={args:{open:!0},render:r=>e.jsxs("div",{style:{padding:24},children:[e.jsxs("p",{children:["Temporary drawers sit on top of a backdrop and close on backdrop click or Escape (while ",e.jsx("code",{children:"dismissible"}),")."]}),e.jsxs(n,{...r,children:[e.jsx("div",{slot:"header",children:"Mailbox"}),t]})]})},s={args:{open:!0,variant:"persistent"},render:r=>e.jsxs("div",{style:{padding:24},children:[e.jsx("p",{children:"Persistent drawers have no backdrop and stay in the layout flow when closed."}),e.jsxs(n,{...r,children:[e.jsx("div",{slot:"header",children:"Mailbox"}),t]})]})},o={args:{variant:"permanent"},render:r=>e.jsxs("div",{style:{display:"flex",minHeight:240},children:[e.jsxs(n,{...r,open:!1,children:[e.jsx("div",{slot:"header",children:"Mailbox"}),t]}),e.jsx("div",{style:{padding:24},children:e.jsxs("p",{children:["A permanent drawer is a static panel — it ignores ",e.jsx("code",{children:"open"})," ","and never renders a backdrop."]})})]})},i={args:{open:!0,anchor:"right",width:"280px"},render:r=>e.jsxs("div",{style:{padding:24},children:[e.jsxs("p",{children:[e.jsx("code",{children:'anchor="right"'})," mirrors the panel to the right edge;"," ",e.jsx("code",{children:"top"}),"/",e.jsx("code",{children:"bottom"})," use ",e.jsx("code",{children:"width"})," as a height."]}),e.jsxs(n,{...r,children:[e.jsx("div",{slot:"header",children:"Filters"}),e.jsx("div",{style:{padding:16},children:"Panel content"})]})]})},g=["Temporary","Persistent","Permanent","RightAnchored"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    open: true
  },
  render: args => <div style={{
    padding: 24
  }}>
      <p>
        Temporary drawers sit on top of a backdrop and close on backdrop click
        or Escape (while <code>dismissible</code>).
      </p>
      <Drawer {...args}>
        <div slot="header">Mailbox</div>
        {navigation}
      </Drawer>
    </div>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    variant: 'persistent'
  },
  render: args => <div style={{
    padding: 24
  }}>
      <p>
        Persistent drawers have no backdrop and stay in the layout flow when
        closed.
      </p>
      <Drawer {...args}>
        <div slot="header">Mailbox</div>
        {navigation}
      </Drawer>
    </div>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'permanent'
  },
  render: args => <div style={{
    display: 'flex',
    minHeight: 240
  }}>
      <Drawer {...args} open={false}>
        <div slot="header">Mailbox</div>
        {navigation}
      </Drawer>
      <div style={{
      padding: 24
    }}>
        <p>
          A permanent drawer is a static panel — it ignores <code>open</code>{' '}
          and never renders a backdrop.
        </p>
      </div>
    </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    anchor: 'right',
    width: '280px'
  },
  render: args => <div style={{
    padding: 24
  }}>
      <p>
        <code>anchor="right"</code> mirrors the panel to the right edge;{' '}
        <code>top</code>/<code>bottom</code> use <code>width</code> as a height.
      </p>
      <Drawer {...args}>
        <div slot="header">Filters</div>
        <div style={{
        padding: 16
      }}>Panel content</div>
      </Drawer>
    </div>
}`,...i.parameters?.docs?.source}}};export{o as Permanent,s as Persistent,i as RightAnchored,a as Temporary,g as __namedExportsOrder,h as default};
