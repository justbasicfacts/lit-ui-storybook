import{R as l,j as e}from"./iframe-J_BAxJ5R.js";import{o as d,ao as p}from"./index-BSSMaTAd.js";import"./preload-helper-Bs85Y4nq.js";const n=d({tagName:"ui-breadcrumbs",elementClass:p,react:l,events:{onExpand:"expand"}}),x={title:"Components/Navigation/Breadcrumbs",component:n,parameters:{layout:"centered"},argTypes:{separator:{control:"text"},maxItems:{control:{type:"number",min:1,max:12}},itemsBeforeCollapse:{control:{type:"number",min:0,max:6}},itemsAfterCollapse:{control:{type:"number",min:0,max:6}},expandText:{control:"text"},onExpand:{action:"expanded"}},args:{separator:"/",maxItems:8,itemsBeforeCollapse:1,itemsAfterCollapse:1,expandText:"Show path"}},r={render:a=>e.jsxs(n,{...a,children:[e.jsx("a",{href:"#home",children:"Home"}),e.jsx("a",{href:"#catalog",children:"Catalog"}),e.jsx("a",{href:"#accessories",children:"Accessories"}),e.jsx("span",{children:"Belts"})]})},s={args:{separator:"›"},render:a=>e.jsxs(n,{...a,children:[e.jsx("a",{href:"#home",children:"Home"}),e.jsx("a",{href:"#catalog",children:"Catalog"}),e.jsx("span",{children:"Belts"})]})},o={args:{maxItems:4},render:a=>e.jsx(n,{...a,children:["Home","Catalog","Men","Shoes","Running","Trail","Marathon","Ultra"].map((t,m,c)=>e.jsx("a",{href:`#${t.toLowerCase()}`,"aria-current":m===c.length-1?"page":void 0,children:t},t))})},g=["Default","CustomSeparator","Collapsed"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Breadcrumbs {...args}>
      <a href="#home">Home</a>
      <a href="#catalog">Catalog</a>
      <a href="#accessories">Accessories</a>
      <span>Belts</span>
    </Breadcrumbs>
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    separator: '›'
  },
  render: args => <Breadcrumbs {...args}>
      <a href="#home">Home</a>
      <a href="#catalog">Catalog</a>
      <span>Belts</span>
    </Breadcrumbs>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    maxItems: 4
  },
  render: args => <Breadcrumbs {...args}>
      {['Home', 'Catalog', 'Men', 'Shoes', 'Running', 'Trail', 'Marathon', 'Ultra'].map((label, index, all) => <a key={label} href={\`#\${label.toLowerCase()}\`} aria-current={index === all.length - 1 ? 'page' : undefined}>
          {label}
        </a>)}
    </Breadcrumbs>
}`,...o.parameters?.docs?.source}}};export{o as Collapsed,s as CustomSeparator,r as Default,g as __namedExportsOrder,x as default};
