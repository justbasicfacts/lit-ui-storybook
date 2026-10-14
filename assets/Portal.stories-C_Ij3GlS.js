import{R as i,j as r}from"./iframe-DpZyQfZJ.js";import{o as u,aP as y}from"./index-3LxRijqB.js";import"./preload-helper-Bs85Y4nq.js";const t=u({tagName:"ui-portal",elementClass:y,react:i}),x={title:"Components/Utils/Portal",component:t,parameters:{layout:"padded"},argTypes:{container:{control:"text"},disablePortal:{control:"boolean"}},args:{container:"",disablePortal:!1}},l={padding:16,background:"var(--ui-color-primary, #1976d2)",color:"#fff",borderRadius:4},c={padding:8,minHeight:48,border:"1px dashed var(--ui-color-divider, rgba(0, 0, 0, 0.36))",fontSize:13,color:"rgba(0, 0, 0, 0.6)"},a={render:e=>r.jsx(t,{...e,children:r.jsx("div",{style:l,children:"This panel lives in document.body."})})},o={render:e=>r.jsxs("div",{style:{display:"grid",gap:12},children:[r.jsx("div",{id:"portal-target",style:c,children:"target container"}),r.jsx(t,{...e,container:"#portal-target",children:r.jsx("div",{style:l,children:"This panel was moved into #portal-target."})})]})},n={args:{disablePortal:!0},render:e=>r.jsx(t,{...e,children:r.jsx("div",{style:l,children:"Rendered in place (portal disabled)."})})},v=e=>{const[p,g]=i.useState(0);return i.useEffect(()=>{const m=window.setTimeout(()=>{const d=document.getElementById("portal-proof-target");g(d?d.querySelectorAll("[data-ui-portal]").length:0)},0);return()=>window.clearTimeout(m)},[]),r.jsxs("div",{style:{display:"grid",gap:12},children:[r.jsx("div",{id:"portal-proof-target",style:c,children:"portal target"}),r.jsx(t,{...e,container:"#portal-proof-target",children:r.jsx("div",{style:l,children:"Portaled panel"})}),r.jsxs("strong",{children:[p," [data-ui-portal] node(s) inside the target."]})]})},s={render:e=>r.jsx(v,{...e,container:"#portal-proof-target"})},b=["Default","TargetContainer","DisablePortal","Proof"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <Portal {...args}>
      <div style={panelStyle}>This panel lives in document.body.</div>
    </Portal>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <div style={{
    display: 'grid',
    gap: 12
  }}>
      <div id="portal-target" style={targetStyle}>
        target container
      </div>
      <Portal {...args} container="#portal-target">
        <div style={panelStyle}>This panel was moved into #portal-target.</div>
      </Portal>
    </div>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    disablePortal: true
  },
  render: (args: any) => <Portal {...args}>
      <div style={panelStyle}>Rendered in place (portal disabled).</div>
    </Portal>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <PortalProof {...args} container="#portal-proof-target" />
}`,...s.parameters?.docs?.source}}};export{a as Default,n as DisablePortal,s as Proof,o as TargetContainer,b as __namedExportsOrder,x as default};
