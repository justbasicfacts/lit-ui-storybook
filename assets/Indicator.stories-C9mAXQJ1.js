import{R as d,j as r}from"./iframe-jabNMnJM.js";import{o as m,a3 as u}from"./index-BSSMaTAd.js";import{G as p}from"./group-CcVEkrQD.js";import{A as l}from"./avatar-CGQRBTnB.js";import{I as f}from"./icon-button-CduNSha_.js";import{S as g}from"./svg-icon-C6hNb33s.js";import"./preload-helper-Bs85Y4nq.js";const t=m({tagName:"ui-indicator",elementClass:u,react:d}),y={title:"Components/Data display/Indicator",component:t,parameters:{layout:"padded"},argTypes:{color:{control:"select",options:["primary","secondary","error","warning","info","success"]},position:{control:"inline-radio",options:["top-end","top-start","bottom-end","bottom-start"]},size:{control:{type:"number",min:6,max:24,step:1}},label:{control:"text"},disabled:{control:"boolean"},offset:{control:{type:"number",min:0,max:20,step:1}}},args:{color:"error",position:"top-end",size:10,label:"",disabled:!1,offset:4}},e={render:o=>r.jsx(t,{...o,children:r.jsx(l,{initials:"AO",color:"primary",size:44})})},s={args:{label:"3"},render:e.render},a={render:()=>r.jsx(p,{spacing:3,children:["top-end","top-start","bottom-end","bottom-start"].map(o=>r.jsx(t,{position:o,label:"1",size:14,offset:2,children:r.jsx(l,{initials:o.startsWith("top")?"T":"B",size:44})},o))})},n={render:()=>r.jsx(t,{label:"5",size:16,offset:2,children:r.jsx(f,{children:r.jsx(g,{label:"Notifications",children:r.jsx("path",{d:"M12 3a5 5 0 0 0-5 5v3l-1.5 3h13L17 11V8a5 5 0 0 0-5-5zm0 18a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2z",fill:"currentColor"})})})})},i={render:()=>r.jsx(p,{spacing:3,children:["error","warning","success","info"].map((o,c)=>r.jsx(t,{color:o,size:10+c*2,offset:4,label:c>1?String(c):"",children:r.jsx(l,{initials:o[0].toUpperCase(),size:44})},o))})},A=["Default","WithCount","Positions","OnAnIconButton","ColorsAndSizes"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <Indicator {...args}>
      <Avatar initials="AO" color="primary" size={44} />
    </Indicator>
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: '3'
  },
  render: Default.render
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Group spacing={3}>
      {(['top-end', 'top-start', 'bottom-end', 'bottom-start'] as const).map(position => <Indicator key={position} position={position} label="1" size={14} offset={2}>
          <Avatar initials={position.startsWith('top') ? 'T' : 'B'} size={44} />
        </Indicator>)}
    </Group>
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Indicator label="5" size={16} offset={2}>
      <IconButton>
        <SvgIcon label="Notifications">
          <path d="M12 3a5 5 0 0 0-5 5v3l-1.5 3h13L17 11V8a5 5 0 0 0-5-5zm0 18a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2z" fill="currentColor" />
        </SvgIcon>
      </IconButton>
    </Indicator>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Group spacing={3}>
      {(['error', 'warning', 'success', 'info'] as const).map((color, index) => <Indicator key={color} color={color} size={10 + index * 2} offset={4} label={index > 1 ? String(index) : ''}>
          <Avatar initials={color[0].toUpperCase()} size={44} />
        </Indicator>)}
    </Group>
}`,...i.parameters?.docs?.source}}};export{i as ColorsAndSizes,e as Default,n as OnAnIconButton,a as Positions,s as WithCount,A as __namedExportsOrder,y as default};
