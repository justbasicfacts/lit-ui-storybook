import{j as e}from"./iframe-BOtHSW94.js";import"./index-BSSMaTAd.js";import{b as t,T as l,a as d}from"./timeline-dot-CCKSa7lB.js";import"./preload-helper-Bs85Y4nq.js";const g={title:"Components/Data display/TimelineDot",component:t,parameters:{layout:"padded"},argTypes:{color:{control:"select",options:["grey","primary","secondary","error","info","success","warning"]},variant:{control:"select",options:["filled","outlined"]}},args:{color:"grey",variant:"filled"}},a=["grey","primary","secondary","error","info","success","warning"],o={},i={render:()=>e.jsx("div",{style:{display:"flex",gap:24,alignItems:"center"},children:a.map(r=>e.jsx(t,{color:r},r))})},s={render:()=>e.jsx("div",{style:{display:"flex",gap:24,alignItems:"center"},children:a.map(r=>e.jsx(t,{color:r,variant:"outlined"},r))})},n={render:()=>e.jsx(l,{position:"right",children:e.jsx(d,{children:e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"flex-start"},children:[e.jsx(t,{color:"primary",variant:"outlined"}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:500},children:"Order placed"}),e.jsx("div",{style:{fontSize:14,color:"rgba(0, 0, 0, 0.6)"},children:"We received your order."})]})]})})})},u=["Default","Colors","Outlined","InTimeline"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center'
  }}>
      {colors.map(color => <TimelineDot key={color} color={color} />)}
    </div>
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center'
  }}>
      {colors.map(color => <TimelineDot key={color} color={color} variant="outlined" />)}
    </div>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Timeline position="right">
      <TimelineItem>
        <div style={{
        display: 'flex',
        gap: 8,
        alignItems: 'flex-start'
      }}>
          <TimelineDot color="primary" variant="outlined" />
          <div>
            <div style={{
            fontWeight: 500
          }}>Order placed</div>
            <div style={{
            fontSize: 14,
            color: 'rgba(0, 0, 0, 0.6)'
          }}>
              We received your order.
            </div>
          </div>
        </div>
      </TimelineItem>
    </Timeline>
}`,...n.parameters?.docs?.source},description:{story:"Composed into a timeline item (the dot may hold a slotted icon).",...n.parameters?.docs?.description}}};export{i as Colors,o as Default,n as InTimeline,s as Outlined,u as __namedExportsOrder,g as default};
