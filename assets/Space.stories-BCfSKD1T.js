import{R as c,j as e}from"./iframe-7KbjxAZ3.js";import{o as d,aF as l}from"./index-3LxRijqB.js";import{C as m}from"./card-DQaNZuYq.js";import{C as x}from"./card-content-BIWjcw17.js";import{T as r}from"./typography-CCEeJc5Q.js";import{B as s}from"./box-Ve276Sxv.js";import"./preload-helper-Bs85Y4nq.js";const a=d({tagName:"ui-space",elementClass:l,react:c}),b={title:"Components/Layout/Space",component:a,parameters:{layout:"padded"},argTypes:{size:{control:{type:"number",min:0,max:8,step:.5}},w:{control:"text"},h:{control:"text"}},args:{size:2,w:"",h:""}},i=n=>e.jsxs(s,{bgcolor:"background.muted",padding:"0",style:{display:"inline-block"},children:[e.jsx(s,{bgcolor:"primary",padding:"4px 8px",style:{color:"#fff"},children:e.jsx(r,{variant:"caption",component:"p",children:"above"})}),n,e.jsx(s,{bgcolor:"primary",padding:"4px 8px",style:{color:"#fff"},children:e.jsx(r,{variant:"caption",component:"p",children:"below"})})]}),t={render:n=>i(e.jsx(a,{...n}))},o={render:()=>e.jsx("div",{style:{display:"flex",gap:24,alignItems:"flex-start"},children:[1,2,4,6].map(n=>e.jsxs("div",{style:{display:"grid",gap:6,justifyItems:"center"},children:[i(e.jsx(a,{size:n})),e.jsxs(r,{variant:"caption",component:"p",children:[n," × 8px"]})]},n))})},p={render:()=>e.jsx(m,{children:e.jsxs(x,{children:[e.jsx(r,{variant:"body2",component:"p",children:"Between the lines"}),e.jsx(a,{h:"24px"}),e.jsx(r,{variant:"body2",component:"p",children:"and the next one there are 24px, and these are inline:"}),e.jsxs(r,{variant:"body2",component:"p",children:["left ",e.jsx(a,{inline:!0,w:"12px",h:"1px"})," right"]})]})})},C=["Default","Scale","ExplicitLengths"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => show(<Space {...args} />)
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'flex-start'
  }}>
      {[1, 2, 4, 6].map(size => <div key={size} style={{
      display: 'grid',
      gap: 6,
      justifyItems: 'center'
    }}>
          {show(<Space size={size} />)}
          <Typography variant="caption" component="p">
            {size} × 8px
          </Typography>
        </div>)}
    </div>
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Card>
      <CardContent>
        <Typography variant="body2" component="p">
          Between the lines
        </Typography>
        <Space h="24px" />
        <Typography variant="body2" component="p">
          and the next one there are 24px, and these are inline:
        </Typography>
        <Typography variant="body2" component="p">
          left <Space inline w="12px" h="1px" /> right
        </Typography>
      </CardContent>
    </Card>
}`,...p.parameters?.docs?.source}}};export{t as Default,p as ExplicitLengths,o as Scale,C as __namedExportsOrder,b as default};
