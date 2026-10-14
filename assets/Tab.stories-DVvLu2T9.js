import{j as e}from"./jsx-runtime-D8h-jwK5.js";import"./index-CKKzZn3u.js";import{T as a,a as r}from"./tab-BKlpWvc8.js";import"./iframe-DP7DDnfB.js";import"./preload-helper-Bs85Y4nq.js";const u={title:"Components/Tab",component:a,parameters:{layout:"padded"},argTypes:{value:{control:"text"},label:{control:"text"},selected:{control:"boolean"},disabled:{control:"boolean"},iconPosition:{control:"inline-radio",options:["top","bottom","start","end"]},wrapped:{control:"boolean"}},args:{value:"a",label:"Tab A",selected:!1,disabled:!1,iconPosition:"top",wrapped:!1}},s={render:t=>e.jsxs(r,{value:"a",children:[e.jsx(a,{...t,value:"a",label:"Tab A"}),e.jsx(a,{value:"b",label:"Tab B"}),e.jsx(a,{value:"c",label:"Tab C"})]})},l={render:()=>e.jsxs(r,{value:"selected",children:[e.jsx(a,{value:"default",label:"Default"}),e.jsx(a,{value:"selected",label:"Selected"}),e.jsx(a,{value:"disabled",label:"Disabled",disabled:!0})]})},n={render:()=>e.jsxs(r,{value:"star",children:[e.jsx(a,{value:"star",label:"Starred",children:e.jsx("span",{slot:"icon","aria-hidden":"true",children:"★"})}),e.jsx(a,{value:"clock",label:"Recent",iconPosition:"start",children:e.jsx("span",{slot:"icon","aria-hidden":"true",children:"⟳"})}),e.jsx(a,{value:"long",label:"A wrapped label that is quite long",wrapped:!0,children:e.jsx("span",{slot:"icon","aria-hidden":"true",children:"≡"})})]})},p=["InsideTabs","StateComparison","WithIcons"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Tabs value="a">
      <Tab {...args} value="a" label="Tab A" />
      <Tab value="b" label="Tab B" />
      <Tab value="c" label="Tab C" />
    </Tabs>
}`,...s.parameters?.docs?.source},description:{story:"`ui-tab` is designed to live inside `ui-tabs` (the parent assigns the slot\nnames and syncs `selected`), so the stories compose it inside Tabs.",...s.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs value="selected">
      <Tab value="default" label="Default" />
      <Tab value="selected" label="Selected" />
      <Tab value="disabled" label="Disabled" disabled />
    </Tabs>
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs value="star">
      <Tab value="star" label="Starred">
        <span slot="icon" aria-hidden="true">
          ★
        </span>
      </Tab>
      <Tab value="clock" label="Recent" iconPosition="start">
        <span slot="icon" aria-hidden="true">
          ⟳
        </span>
      </Tab>
      <Tab value="long" label="A wrapped label that is quite long" wrapped>
        <span slot="icon" aria-hidden="true">
          ≡
        </span>
      </Tab>
    </Tabs>
}`,...n.parameters?.docs?.source}}};export{s as InsideTabs,l as StateComparison,n as WithIcons,p as __namedExportsOrder,u as default};
