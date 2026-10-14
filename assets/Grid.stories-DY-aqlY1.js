import{j as e}from"./jsx-runtime-D8h-jwK5.js";import{o as m,Z as t}from"./index-CKKzZn3u.js";import{R as x}from"./iframe-DP7DDnfB.js";import"./preload-helper-Bs85Y4nq.js";const r=m({tagName:"ui-grid",elementClass:t,react:x}),u={title:"Components/Grid",component:r,parameters:{layout:"padded"},argTypes:{container:{control:"boolean"},item:{control:"boolean"},spacing:{control:{type:"number",min:0,max:10}},rowSpacing:{control:{type:"number",min:-1,max:10}},columnSpacing:{control:{type:"number",min:-1,max:10}},xs:{control:{type:"number",min:0,max:12}},sm:{control:{type:"number",min:0,max:12}},md:{control:{type:"number",min:0,max:12}},lg:{control:{type:"number",min:0,max:12}},xl:{control:{type:"number",min:0,max:12}}},args:{container:!1,item:!1,spacing:0,xs:0,sm:0,md:0,lg:0,xl:0}},n=l=>e.jsx("div",{style:{background:"#e3f2fd",padding:16,textAlign:"center"},children:l.children}),i={render:()=>e.jsxs(r,{container:!0,spacing:2,children:[e.jsx(r,{item:!0,xs:12,sm:6,md:4,children:e.jsx(n,{children:"xs12 sm6 md4"})}),e.jsx(r,{item:!0,xs:12,sm:6,md:4,children:e.jsx(n,{children:"xs12 sm6 md4"})}),e.jsx(r,{item:!0,xs:12,sm:6,md:4,children:e.jsx(n,{children:"xs12 sm6 md4"})}),e.jsx(r,{item:!0,xs:6,md:3,children:e.jsx(n,{children:"xs6 md3"})}),e.jsx(r,{item:!0,xs:6,md:3,children:e.jsx(n,{children:"xs6 md3"})}),e.jsx(r,{item:!0,xs:6,md:3,children:e.jsx(n,{children:"xs6 md3"})}),e.jsx(r,{item:!0,xs:6,md:3,children:e.jsx(n,{children:"xs6 md3"})})]})},s={render:()=>e.jsxs(r,{container:!0,spacing:4,children:[e.jsx(r,{item:!0,xs:4,children:e.jsx(n,{children:"xs4"})}),e.jsx(r,{item:!0,xs:4,children:e.jsx(n,{children:"xs4"})}),e.jsx(r,{item:!0,xs:4,children:e.jsx(n,{children:"xs4"})})]})},d={render:()=>e.jsxs(r,{container:!0,rowSpacing:1,columnSpacing:4,children:[e.jsx(r,{item:!0,xs:3,children:e.jsx(n,{children:"1"})}),e.jsx(r,{item:!0,xs:3,children:e.jsx(n,{children:"2"})}),e.jsx(r,{item:!0,xs:3,children:e.jsx(n,{children:"3"})}),e.jsx(r,{item:!0,xs:3,children:e.jsx(n,{children:"4"})}),e.jsx(r,{item:!0,xs:3,children:e.jsx(n,{children:"5"})}),e.jsx(r,{item:!0,xs:3,children:e.jsx(n,{children:"6"})})]})},G=["Container","Spacing","RowAndColumnSpacing"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Cell>xs12 sm6 md4</Cell>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Cell>xs12 sm6 md4</Cell>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Cell>xs12 sm6 md4</Cell>
      </Grid>
      <Grid item xs={6} md={3}>
        <Cell>xs6 md3</Cell>
      </Grid>
      <Grid item xs={6} md={3}>
        <Cell>xs6 md3</Cell>
      </Grid>
      <Grid item xs={6} md={3}>
        <Cell>xs6 md3</Cell>
      </Grid>
      <Grid item xs={6} md={3}>
        <Cell>xs6 md3</Cell>
      </Grid>
    </Grid>
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Grid container spacing={4}>
      <Grid item xs={4}>
        <Cell>xs4</Cell>
      </Grid>
      <Grid item xs={4}>
        <Cell>xs4</Cell>
      </Grid>
      <Grid item xs={4}>
        <Cell>xs4</Cell>
      </Grid>
    </Grid>
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Grid container rowSpacing={1} columnSpacing={4}>
      <Grid item xs={3}>
        <Cell>1</Cell>
      </Grid>
      <Grid item xs={3}>
        <Cell>2</Cell>
      </Grid>
      <Grid item xs={3}>
        <Cell>3</Cell>
      </Grid>
      <Grid item xs={3}>
        <Cell>4</Cell>
      </Grid>
      <Grid item xs={3}>
        <Cell>5</Cell>
      </Grid>
      <Grid item xs={3}>
        <Cell>6</Cell>
      </Grid>
    </Grid>
}`,...d.parameters?.docs?.source}}};export{i as Container,d as RowAndColumnSpacing,s as Spacing,G as __namedExportsOrder,u as default};
