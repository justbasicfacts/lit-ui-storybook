import{j as e}from"./iframe-D-jlcKf7.js";import"./index-A4XEOZPO.js";import{C as o}from"./card-content-Bf1UPm3O.js";import{C as a}from"./card-CAT1QohE.js";import{C as d}from"./card-actions-YtxxfC9G.js";import"./preload-helper-Bs85Y4nq.js";const u={title:"Components/CardContent",component:o,parameters:{layout:"centered"},decorators:[s=>e.jsx("div",{style:{width:360},children:e.jsx(s,{})})]},t={render:()=>e.jsx(a,{elevated:!0,children:e.jsx(o,{children:e.jsx("p",{style:{margin:0},children:"Card body content."})})})},n={render:()=>e.jsx(a,{elevated:!0,children:e.jsx(o,{children:e.jsx("p",{style:{margin:0},children:"This content is the last child, so it gets 24px bottom padding."})})})},r={render:()=>e.jsxs(a,{elevated:!0,children:[e.jsx(o,{children:e.jsx("p",{style:{margin:0},children:"Content above the actions row."})}),e.jsxs(d,{children:[e.jsx("button",{type:"button",children:"Share"}),e.jsx("button",{type:"button",children:"Learn more"})]})]})},h=["Default","LastChildInCard","FollowedByActions"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Card elevated>
      <CardContent>
        <p style={{
        margin: 0
      }}>Card body content.</p>
      </CardContent>
    </Card>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Card elevated>
      <CardContent>
        <p style={{
        margin: 0
      }}>
          This content is the last child, so it gets 24px bottom padding.
        </p>
      </CardContent>
    </Card>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Card elevated>
      <CardContent>
        <p style={{
        margin: 0
      }}>Content above the actions row.</p>
      </CardContent>
      <CardActions>
        <button type="button">Share</button>
        <button type="button">Learn more</button>
      </CardActions>
    </Card>
}`,...r.parameters?.docs?.source}}};export{t as Default,r as FollowedByActions,n as LastChildInCard,h as __namedExportsOrder,u as default};
