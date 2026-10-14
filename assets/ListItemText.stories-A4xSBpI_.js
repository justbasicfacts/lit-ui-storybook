import{j as r}from"./iframe-Bwx-W2wi.js";import"./index-BSSMaTAd.js";import{a as o,L as c}from"./list-item-text-Cy-Wcum5.js";import{L as d}from"./list-item-NCjpcDyK.js";import"./preload-helper-Bs85Y4nq.js";const x={title:"Components/Data display/ListItemText",component:o,parameters:{layout:"padded"},argTypes:{primary:{control:"text"},secondary:{control:"text"},inset:{control:"boolean"}},args:{primary:"Primary text",secondary:"",inset:!1},decorators:[n=>r.jsx("div",{style:{width:320},children:r.jsx(n,{})})]},i=n=>r.jsx(c,{children:r.jsx(d,{children:r.jsx(o,{...n})})}),e={render:i},s={args:{secondary:"Supporting description"},render:i},t={args:{inset:!0,secondary:"Inset primary text"},render:i},a={render:()=>r.jsx(c,{children:r.jsx(d,{children:r.jsx(o,{primary:"Primary via prop",children:r.jsx("span",{slot:"secondary",children:"Secondary supplied through the slot"})})})})},h=["Default","PrimaryAndSecondary","Inset","WithSecondarySlot"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: inList
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    secondary: 'Supporting description'
  },
  render: inList
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    inset: true,
    secondary: 'Inset primary text'
  },
  render: inList
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem>
        <ListItemText primary="Primary via prop">
          <span slot="secondary">Secondary supplied through the slot</span>
        </ListItemText>
      </ListItem>
    </List>
}`,...a.parameters?.docs?.source}}};export{e as Default,t as Inset,s as PrimaryAndSecondary,a as WithSecondarySlot,h as __namedExportsOrder,x as default};
