import{R as l,j as n}from"./iframe-7KbjxAZ3.js";import{o as c,M as u}from"./index-3LxRijqB.js";import"./preload-helper-Bs85Y4nq.js";const p=c({tagName:"ui-autocomplete",elementClass:u,react:l,events:{onInputChange:"input-change",onChange:"change"}}),g={title:"Components/Inputs/Autocomplete",component:p,parameters:{layout:"centered"},decorators:[s=>n.jsx("div",{style:{width:340},children:n.jsx(s,{})})],argTypes:{label:{control:"text"},value:{control:"text"},placeholder:{control:"text"},freeSolo:{control:"boolean"},openOnFocus:{control:"boolean"},disabled:{control:"boolean"},error:{control:"text"},helperText:{control:"text"},noOptionsText:{control:"text"},onInputChange:{action:"input-changed"},onChange:{action:"changed"}},args:{label:"Composer",placeholder:"Start typing…",options:["Mozart","Beethoven","Bach","Brahms","Debussy"]}},e={},o={args:{label:"Country",options:[{value:"us",label:"United States"},{value:"ca",label:"Canada"},{value:"mx",label:"Mexico",disabled:!0}],value:"us",openOnFocus:!0}},a={args:{label:"Tag",freeSolo:!0,options:["release","bugfix","docs"],helperText:"Type anything — free text is allowed"}},r={args:{disabled:!0,value:"Bach"}},t={args:{label:"Assignee",error:"Pick someone from the list",value:"nobody"}},b=["Default","ObjectOptions","FreeSolo","Disabled","WithError"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    value: 'us',
    openOnFocus: true
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Tag',
    freeSolo: true,
    options: ['release', 'bugfix', 'docs'],
    helperText: 'Type anything — free text is allowed'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'Bach'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Assignee',
    error: 'Pick someone from the list',
    value: 'nobody'
  }
}`,...t.parameters?.docs?.source}}};export{e as Default,r as Disabled,a as FreeSolo,o as ObjectOptions,t as WithError,b as __namedExportsOrder,g as default};
