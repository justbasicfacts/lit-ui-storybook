import{j as s}from"./iframe-lGCTaxPj.js";import"./index-C-Hz80Os.js";import{S as l}from"./select-4sV3CQFr.js";import"./preload-helper-Bs85Y4nq.js";const u={title:"Components/Select",component:l,parameters:{layout:"centered"},decorators:[n=>s.jsx("div",{style:{width:320},children:s.jsx(n,{})})],argTypes:{label:{control:"text"},value:{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},error:{control:"text"},helperText:{control:"text"},onChange:{action:"changed"}},args:{label:"Team",options:["Design","Engineering","Product","Support"],value:"Engineering"}},e={},r={args:{label:"Country",options:[{value:"us",label:"United States"},{value:"ca",label:"Canada"},{value:"mx",label:"Mexico",disabled:!0}],value:"us"}},a={args:{placeholder:"Select a team…",value:""}},o={args:{error:"Please choose a team"}},t={args:{disabled:!0}},m=["StringOptions","ObjectOptions","WithPlaceholder","WithError","Disabled"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Country',
    options: [{
      value: 'us',
      label: 'United States'
    }, {
      value: 'ca',
      label: 'Canada'
    }, {
      value: 'mx',
      label: 'Mexico',
      disabled: true
    }],
    value: 'us'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select a team…',
    value: ''
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    error: 'Please choose a team'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};export{t as Disabled,r as ObjectOptions,e as StringOptions,o as WithError,a as WithPlaceholder,m as __namedExportsOrder,u as default};
