import{j as s}from"./iframe-jabNMnJM.js";import"./index-BSSMaTAd.js";import{I as o,a as n}from"./image-list-item-BSg4Xnzi.js";import"./preload-helper-Bs85Y4nq.js";const d={title:"Components/Data display/ImageList",component:o,parameters:{layout:"padded"},argTypes:{cols:{control:{type:"number",min:1,max:6}},rowHeight:{control:"text"},gap:{control:{type:"number",min:0,max:32}},variant:{control:"select",options:["standard","quilted","masonry","woven"]}},args:{cols:3,rowHeight:"160px",gap:4,variant:"standard"}},m=r=>`https://picsum.photos/seed/lit-ui-${r}/400/300`,a={render:r=>s.jsx(o,{...r,children:[1,2,3,4,5,6].map(e=>s.jsx(n,{children:s.jsx("img",{src:m(e),alt:`Tile ${e}`})},e))})},t={args:{cols:2,gap:8},render:r=>s.jsx(o,{...r,children:[1,2,3,4].map(e=>s.jsx(n,{children:s.jsx("img",{src:m(e),alt:`Tile ${e}`})},e))})},i={args:{cols:2,rowHeight:"200px"},render:r=>s.jsx(o,{...r,children:[1,2,3,4].map(e=>s.jsxs(n,{children:[s.jsx("img",{src:m(e),alt:`Tile ${e}`}),s.jsxs("div",{slot:"bar",children:["Photo ",e]})]},e))})},I=["Default","TwoCols","WithBars"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <ImageList {...args}>
      {[1, 2, 3, 4, 5, 6].map(i => <ImageListItem key={i}>
          <img src={tile(i)} alt={\`Tile \${i}\`} />
        </ImageListItem>)}
    </ImageList>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 2,
    gap: 8
  },
  render: args => <ImageList {...args}>
      {[1, 2, 3, 4].map(i => <ImageListItem key={i}>
          <img src={tile(i)} alt={\`Tile \${i}\`} />
        </ImageListItem>)}
    </ImageList>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 2,
    rowHeight: '200px'
  },
  render: args => <ImageList {...args}>
      {[1, 2, 3, 4].map(i => <ImageListItem key={i}>
          <img src={tile(i)} alt={\`Tile \${i}\`} />
          <div slot="bar">Photo {i}</div>
        </ImageListItem>)}
    </ImageList>
}`,...i.parameters?.docs?.source}}};export{a as Default,t as TwoCols,i as WithBars,I as __namedExportsOrder,d as default};
