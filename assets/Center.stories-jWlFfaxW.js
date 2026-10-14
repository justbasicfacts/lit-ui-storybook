import{R as i,j as e}from"./iframe-CwpzPtni.js";import{o as p,aA as c}from"./index-qmVU2qX3.js";import{C as d}from"./card-vAlztF3e.js";import{C as h}from"./card-content-DsyrSyTj.js";import{T as o}from"./typography-y7-43Q81.js";import{B as l}from"./button-CMr0n5vG.js";import"./preload-helper-Bs85Y4nq.js";const a=p({tagName:"ui-center",elementClass:c,react:i}),j={title:"Components/Layout/Center",component:a,parameters:{layout:"fullscreen"},argTypes:{inline:{control:"boolean"},height:{control:"text"}},args:{inline:!1,height:""}},n={render:s=>e.jsx(a,{...s,height:"320px",children:e.jsx(d,{children:e.jsx(h,{children:e.jsx(o,{variant:"h6",component:"p",children:"Centred in 320px"})})})})},t={render:()=>e.jsx(a,{height:"360px",children:e.jsxs("div",{style:{textAlign:"center",display:"grid",gap:12,justifyItems:"center"},children:[e.jsx(o,{variant:"h6",component:"p",children:"Nothing here yet"}),e.jsx(o,{variant:"body2",color:"text.secondary",component:"p",children:"Components you build will show up in this list."}),e.jsx(l,{size:"sm",children:"Create the first one"})]})})},r={args:{inline:!0},render:s=>e.jsxs(o,{variant:"body1",component:"p",children:["A badge sits ",e.jsx(a,{...s,style:{height:24,width:40},children:"here"})," in the middle of a sentence."]})},v=["Default","EmptyState","Inline"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Center {...args} height="320px">
      <Card>
        <CardContent>
          <Typography variant="h6" component="p">
            Centred in 320px
          </Typography>
        </CardContent>
      </Card>
    </Center>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Center height="360px">
      <div style={{
      textAlign: 'center',
      display: 'grid',
      gap: 12,
      justifyItems: 'center'
    }}>
        <Typography variant="h6" component="p">
          Nothing here yet
        </Typography>
        <Typography variant="body2" color="text.secondary" component="p">
          Components you build will show up in this list.
        </Typography>
        <Button size="sm">Create the first one</Button>
      </div>
    </Center>
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    inline: true
  },
  render: args => <Typography variant="body1" component="p">
      A badge sits <Center {...args} style={{
      height: 24,
      width: 40
    }}>here</Center> in the
      middle of a sentence.
    </Typography>
}`,...r.parameters?.docs?.source}}};export{n as Default,t as EmptyState,r as Inline,v as __namedExportsOrder,j as default};
