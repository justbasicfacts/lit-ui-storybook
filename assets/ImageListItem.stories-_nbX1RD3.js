import{j as e}from"./iframe-BOtHSW94.js";import"./index-BSSMaTAd.js";import{a as s,I as l}from"./image-list-item-DwOUrg6l.js";import"./preload-helper-Bs85Y4nq.js";const I={title:"Components/Data display/ImageListItem",component:s,parameters:{layout:"padded"},argTypes:{cols:{control:{type:"number",min:1,max:6}},rows:{control:{type:"number",min:1,max:6}}},args:{cols:1,rows:1}},t=i=>`https://picsum.photos/seed/lit-ui-item-${i}/400/300`,r={render:i=>e.jsxs(l,{cols:3,gap:4,children:[e.jsx(s,{...i,children:e.jsx("img",{src:t(1),alt:"Tile 1"})}),e.jsx(s,{...i,children:e.jsx("img",{src:t(2),alt:"Tile 2"})}),e.jsx(s,{...i,children:e.jsx("img",{src:t(3),alt:"Tile 3"})})]})},a={render:()=>e.jsxs(l,{cols:2,rowHeight:"180px",children:[e.jsxs(s,{children:[e.jsx("img",{src:t(1),alt:"Tile 1"}),e.jsx("div",{slot:"bar",children:"Mountain view"})]}),e.jsxs(s,{children:[e.jsx("img",{src:t(2),alt:"Tile 2"}),e.jsx("div",{slot:"bar",children:"Coastline"})]})]})},m={render:()=>e.jsxs(l,{cols:4,rowHeight:"120px",children:[e.jsx(s,{cols:2,rows:2,children:e.jsx("img",{src:t(1),alt:"Tile 1"})}),e.jsx(s,{children:e.jsx("img",{src:t(2),alt:"Tile 2"})}),e.jsx(s,{children:e.jsx("img",{src:t(3),alt:"Tile 3"})}),e.jsx(s,{cols:2,children:e.jsx("img",{src:t(4),alt:"Tile 4"})})]})},d=["Default","WithBar","Spans"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <ImageList cols={3} gap={4}>
      <ImageListItem {...args}>
        <img src={tile(1)} alt="Tile 1" />
      </ImageListItem>
      <ImageListItem {...args}>
        <img src={tile(2)} alt="Tile 2" />
      </ImageListItem>
      <ImageListItem {...args}>
        <img src={tile(3)} alt="Tile 3" />
      </ImageListItem>
    </ImageList>
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <ImageList cols={2} rowHeight="180px">
      <ImageListItem>
        <img src={tile(1)} alt="Tile 1" />
        <div slot="bar">Mountain view</div>
      </ImageListItem>
      <ImageListItem>
        <img src={tile(2)} alt="Tile 2" />
        <div slot="bar">Coastline</div>
      </ImageListItem>
    </ImageList>
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <ImageList cols={4} rowHeight="120px">
      <ImageListItem cols={2} rows={2}>
        <img src={tile(1)} alt="Tile 1" />
      </ImageListItem>
      <ImageListItem>
        <img src={tile(2)} alt="Tile 2" />
      </ImageListItem>
      <ImageListItem>
        <img src={tile(3)} alt="Tile 3" />
      </ImageListItem>
      <ImageListItem cols={2}>
        <img src={tile(4)} alt="Tile 4" />
      </ImageListItem>
    </ImageList>
}`,...m.parameters?.docs?.source}}};export{r as Default,m as Spans,a as WithBar,d as __namedExportsOrder,I as default};
