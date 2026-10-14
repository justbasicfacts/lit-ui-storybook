import{j as e}from"./iframe-BOtHSW94.js";import"./index-BSSMaTAd.js";import{T as i,a as c,b as d}from"./timeline-dot-CCKSa7lB.js";import"./preload-helper-Bs85Y4nq.js";const j={title:"Components/Data display/Timeline",component:i,parameters:{layout:"padded"},argTypes:{position:{control:"select",options:["left","right","alternate","alternate-reverse"]}},args:{position:"right"}},p=[{time:"09:30",title:"Order placed",body:"We received your order.",color:"primary"},{time:"10:15",title:"Packed",body:"Your parcel left the warehouse.",color:"info"},{time:"12:40",title:"Out for delivery",body:"The courier is on the way.",color:"warning"},{time:"14:05",title:"Delivered",body:"Handed to the recipient.",color:"success"}],m={display:"flex",gap:8,alignItems:"flex-start"},u={fontWeight:500},y={fontSize:14,color:"rgba(0, 0, 0, 0.6)"},g={fontSize:13,color:"rgba(0, 0, 0, 0.6)"},a=l=>e.jsx(i,{...l,children:p.map(r=>e.jsxs(c,{children:[e.jsxs("div",{style:m,children:[e.jsx(d,{color:r.color}),e.jsxs("div",{children:[e.jsx("div",{style:u,children:r.title}),e.jsx("div",{style:y,children:r.body})]})]}),e.jsx("div",{slot:"opposite",style:g,children:r.time})]},r.time))}),t={render:a},o={args:{position:"alternate"},render:a},s={args:{position:"left"},render:a},n={args:{position:"alternate-reverse"},render:a},v=["Default","Alternate","Left","AlternateReverse"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: renderTimeline
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'alternate'
  },
  render: renderTimeline
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'left'
  },
  render: renderTimeline
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'alternate-reverse'
  },
  render: renderTimeline
}`,...n.parameters?.docs?.source}}};export{o as Alternate,n as AlternateReverse,t as Default,s as Left,v as __namedExportsOrder,j as default};
