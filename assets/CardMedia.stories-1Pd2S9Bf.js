import{j as e}from"./jsx-runtime-D8h-jwK5.js";import{o as i,H as l}from"./index-CKKzZn3u.js";import{R as c}from"./iframe-DP7DDnfB.js";import{C as o}from"./card-BnkBwm4v.js";import{C as d}from"./card-content-hYUT8MGZ.js";import"./preload-helper-Bs85Y4nq.js";const s=i({tagName:"ui-card-media",elementClass:l,react:c}),u={title:"Components/CardMedia",component:s,parameters:{layout:"centered"},decorators:[r=>e.jsx("div",{style:{width:360},children:e.jsx(r,{})})],argTypes:{image:{control:"text"},alt:{control:"text"},height:{control:"text"},component:{control:"select",options:["img","div"]}},args:{image:"https://picsum.photos/seed/lit-ui-media/600/300",alt:"Sample image",height:"140px",component:"img"}},a={render:r=>e.jsxs(o,{elevated:!0,children:[e.jsx(s,{...r}),e.jsx(d,{children:e.jsx("p",{style:{margin:0},children:"Media card body."})})]})},n={args:{height:"220px"},render:r=>e.jsxs(o,{elevated:!0,children:[e.jsx(s,{...r}),e.jsx(d,{children:e.jsx("p",{style:{margin:0},children:"A taller media area."})})]})},t={args:{image:"",component:"div",height:"160px"},render:r=>e.jsxs(o,{elevated:!0,children:[e.jsx(s,{...r,style:{background:"#37474f"},children:e.jsx("span",{style:{color:"#fff",padding:12,display:"block"},children:"Overlay content"})}),e.jsx(d,{children:e.jsx("p",{style:{margin:0},children:"The div variant slots its own content."})})]})},y=["Default","TallMedia","OverlayContent"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Card elevated>
      <CardMedia {...args} />
      <CardContent>
        <p style={{
        margin: 0
      }}>Media card body.</p>
      </CardContent>
    </Card>
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};export{a as Default,t as OverlayContent,n as TallMedia,y as __namedExportsOrder,u as default};
