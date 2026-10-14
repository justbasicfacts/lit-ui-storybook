import{j as e}from"./iframe-7KbjxAZ3.js";import"./index-3LxRijqB.js";import{A as a,T as l}from"./toolbar-BvgRTrVE.js";import"./preload-helper-Bs85Y4nq.js";const x={title:"Components/Navigation/AppBar",component:a,parameters:{layout:"fullscreen"},argTypes:{position:{control:"select",options:["fixed","absolute","sticky","static","relative"]},color:{control:"select",options:["primary","secondary","default","transparent","inherit"]},elevation:{control:{type:"number",min:0,max:24}},square:{control:"boolean"}},args:{position:"static",color:"primary",elevation:4,square:!1}},d=r=>e.jsx(a,{...r,children:e.jsxs(l,{children:[e.jsx("strong",{style:{fontSize:20},children:"News"}),e.jsx("span",{style:{flex:1}}),e.jsx("span",{children:"Login"})]})}),n={render:r=>d(r)},s={args:{position:"fixed"},render:r=>e.jsxs("div",{children:[d(r),e.jsx("div",{style:{padding:24},children:e.jsxs("p",{children:["The bar is ",e.jsx("code",{children:"position: fixed"})," at the top of the viewport (story iframe) with ",e.jsx("code",{children:"z-index"})," from the app-bar layer."]})})]})},t={parameters:{layout:"padded"},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:["primary","secondary","default","transparent"].map(r=>e.jsx(a,{color:r,position:"static",elevation:2,children:e.jsx(l,{children:e.jsx("strong",{children:r})})},r))})},i={parameters:{layout:"padded"},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[0,2,4,12].map(r=>e.jsx(a,{position:"static",elevation:r,square:r===0,children:e.jsx(l,{children:e.jsxs("strong",{children:["elevation ",r]})})},r))})},o={render:()=>e.jsx(a,{position:"static",color:"background.default",elevation:0,square:!0,children:e.jsx(l,{children:e.jsx("strong",{children:"Background tone"})})}),parameters:{layout:"fullscreen"}},g=["Default","Fixed","Colors","Elevations","PageTone"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => bar(args)
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'fixed'
  },
  render: args => <div>
      {bar(args)}
      <div style={{
      padding: 24
    }}>
        <p>
          The bar is <code>position: fixed</code> at the top of the viewport
          (story iframe) with <code>z-index</code> from the app-bar layer.
        </p>
      </div>
    </div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      {(['primary', 'secondary', 'default', 'transparent'] as const).map(color => <AppBar key={color} color={color} position="static" elevation={2}>
          <Toolbar>
            <strong>{color}</strong>
          </Toolbar>
        </AppBar>)}
    </div>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      {[0, 2, 4, 12].map(elevation => <AppBar key={elevation} position="static" elevation={elevation} square={elevation === 0}>
          <Toolbar>
            <strong>elevation {elevation}</strong>
          </Toolbar>
        </AppBar>)}
    </div>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <AppBar position="static" color="background.default" elevation={0} square>
      <Toolbar>
        <strong>Background tone</strong>
      </Toolbar>
    </AppBar>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...o.parameters?.docs?.source},description:{story:"Any palette key works, e.g. the page background tone with no shadow.",...o.parameters?.docs?.description}}};export{t as Colors,n as Default,i as Elevations,s as Fixed,o as PageTone,g as __namedExportsOrder,x as default};
