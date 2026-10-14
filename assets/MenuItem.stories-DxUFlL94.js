import{j as e}from"./iframe-Bwx-W2wi.js";import"./index-BSSMaTAd.js";import{a as n,M as o}from"./menu-item-BKOjkaiX.js";import"./preload-helper-Bs85Y4nq.js";const c={title:"Components/Navigation/MenuItem",component:n,parameters:{layout:"fullscreen"},argTypes:{value:{control:"text"},disabled:{control:"boolean"},selected:{control:"boolean"},dense:{control:"boolean"}},args:{value:"item",disabled:!1,selected:!1,dense:!1}},t={render:a=>e.jsxs("div",{style:{padding:32},children:[e.jsx("button",{id:"menuitem-anchor",type:"button",children:"Actions"}),e.jsxs(o,{open:!0,anchorEl:"menuitem-anchor",placement:"bottom-start",children:[e.jsx(n,{...a,children:"Default item"}),e.jsx(n,{value:"selected",selected:!0,children:"Selected item"}),e.jsx(n,{value:"disabled",disabled:!0,children:"Disabled item"}),e.jsxs(n,{value:"with-start",children:[e.jsx("span",{slot:"start","aria-hidden":"true",children:"★"}),"Item with a start adornment"]})]})]})},s={render:()=>e.jsxs("div",{style:{padding:32},children:[e.jsx("button",{id:"menuitem-anchor-dense",type:"button",children:"Dense menu"}),e.jsxs(o,{open:!0,anchorEl:"menuitem-anchor-dense",placement:"bottom-start",children:[e.jsx(n,{value:"one",dense:!0,children:"Compact item"}),e.jsx(n,{value:"two",dense:!0,children:"Compact item"}),e.jsx(n,{value:"three",dense:!0,selected:!0,children:"Selected compact item"})]})]})},r={args:{value:"only",selected:!0},render:a=>e.jsxs("div",{style:{padding:32},children:[e.jsx("p",{children:"Unanchored menu: the panel sits at the viewport centre."}),e.jsx(o,{open:!0,anchorEl:"",children:e.jsx(n,{...a,children:"Only item"})})]})},u=["InsideMenu","Dense","Unanchored"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: 32
  }}>
      <button id="menuitem-anchor" type="button">
        Actions
      </button>
      <Menu open anchorEl="menuitem-anchor" placement="bottom-start">
        <MenuItem {...args}>Default item</MenuItem>
        <MenuItem value="selected" selected>
          Selected item
        </MenuItem>
        <MenuItem value="disabled" disabled>
          Disabled item
        </MenuItem>
        <MenuItem value="with-start">
          <span slot="start" aria-hidden="true">
            ★
          </span>
          Item with a start adornment
        </MenuItem>
      </Menu>
    </div>
}`,...t.parameters?.docs?.source},description:{story:"`ui-menu-item` is only meaningful inside a `ui-menu`, so every story composes\nit inside the Menu binding (positioned from the anchor button's rect).",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32
  }}>
      <button id="menuitem-anchor-dense" type="button">
        Dense menu
      </button>
      <Menu open anchorEl="menuitem-anchor-dense" placement="bottom-start">
        <MenuItem value="one" dense>
          Compact item
        </MenuItem>
        <MenuItem value="two" dense>
          Compact item
        </MenuItem>
        <MenuItem value="three" dense selected>
          Selected compact item
        </MenuItem>
      </Menu>
    </div>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'only',
    selected: true
  },
  render: args => <div style={{
    padding: 32
  }}>
      <p>Unanchored menu: the panel sits at the viewport centre.</p>
      <Menu open anchorEl="">
        <MenuItem {...args}>Only item</MenuItem>
      </Menu>
    </div>
}`,...r.parameters?.docs?.source}}};export{s as Dense,t as InsideMenu,r as Unanchored,u as __namedExportsOrder,c as default};
