import{R as i,j as e}from"./iframe-BOtHSW94.js";import{o as l,aH as c}from"./index-BSSMaTAd.js";import{C as d}from"./card-HAj1jThK.js";import{C as o}from"./card-content-KILzrGcc.js";import"./preload-helper-Bs85Y4nq.js";const s=l({tagName:"ui-card-media",elementClass:c,react:i}),x={title:"Components/Surfaces/CardMedia",component:s,parameters:{layout:"centered"},decorators:[a=>e.jsx("div",{style:{width:360},children:e.jsx(a,{})})],argTypes:{image:{control:"text"},alt:{control:"text"},height:{control:"text"},component:{control:"select",options:["img","div"]}},args:{image:"https://picsum.photos/seed/lit-ui-media/600/300",alt:"Sample image",height:"140px",component:"img"}},r={render:a=>e.jsxs(d,{elevated:!0,children:[e.jsx(s,{...a}),e.jsx(o,{children:e.jsx("p",{style:{margin:0},children:"Media card body."})})]})},n={args:{height:"220px"},render:a=>e.jsxs(d,{elevated:!0,children:[e.jsx(s,{...a}),e.jsx(o,{children:e.jsx("p",{style:{margin:0},children:"A taller media area."})})]})},t={args:{image:"",component:"div",height:"160px"},render:a=>e.jsxs(d,{elevated:!0,children:[e.jsx(s,{...a,style:{background:"#37474f"},children:e.jsx("span",{style:{color:"#fff",padding:12,display:"block"},children:"Overlay content"})}),e.jsx(o,{children:e.jsx("p",{style:{margin:0},children:"The div variant slots its own content."})})]})},u=["Default","TallMedia","OverlayContent"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Card elevated>
      <CardMedia {...args} />
      <CardContent>
        <p style={{
        margin: 0
      }}>Media card body.</p>
      </CardContent>
    </Card>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    height: '220px'
  },
  render: args => <Card elevated>
      <CardMedia {...args} />
      <CardContent>
        <p style={{
        margin: 0
      }}>A taller media area.</p>
      </CardContent>
    </Card>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    image: '',
    component: 'div',
    height: '160px'
  },
  render: args => <Card elevated>
      <CardMedia {...args} style={{
      background: '#37474f'
    }}>
        <span style={{
        color: '#fff',
        padding: 12,
        display: 'block'
      }}>
          Overlay content
        </span>
      </CardMedia>
      <CardContent>
        <p style={{
        margin: 0
      }}>The div variant slots its own content.</p>
      </CardContent>
    </Card>
}`,...t.parameters?.docs?.source}}};export{r as Default,t as OverlayContent,n as TallMedia,u as __namedExportsOrder,x as default};
