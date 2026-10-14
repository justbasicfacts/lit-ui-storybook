import{j as t}from"./iframe-J_BAxJ5R.js";import"./index-BSSMaTAd.js";import{a as e,B as r}from"./bottom-navigation-action-BxQglfQ9.js";import"./preload-helper-Bs85Y4nq.js";const m={title:"Components/Navigation/BottomNavigationAction",component:e,parameters:{layout:"padded"},argTypes:{value:{control:"text"},label:{control:"text"},selected:{control:"boolean"},showLabel:{control:"boolean"},onBottomNavSelect:{action:"bottom-nav-select"}},args:{value:"favorites",label:"Favorites",selected:!1,showLabel:!0}},a={render:o=>t.jsxs(r,{value:"favorites",showLabels:!0,style:{width:400},children:[t.jsx(e,{value:"recents",label:"Recents",children:"🕘"}),t.jsx(e,{...o,children:"⭐"})]})},n={args:{selected:!0,showLabel:!1},render:o=>t.jsxs(r,{value:"favorites",style:{width:400},children:[t.jsx(e,{value:"recents",label:"Recents",children:"🕘"}),t.jsx(e,{...o,children:"⭐"})]})},s={render:o=>t.jsx(r,{value:"favorites",style:{width:400},children:t.jsxs(e,{...o,selected:!0,children:["⭐",t.jsx("span",{slot:"label",children:t.jsx("strong",{children:"Favs"})})]})})},v=["InsideBottomNavigation","SelectedOnly","CustomLabelSlot"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <BottomNavigation value="favorites" showLabels style={{
    width: 400
  }}>
      <BottomNavigationAction value="recents" label="Recents">
        🕘
      </BottomNavigationAction>
      <BottomNavigationAction {...args}>⭐</BottomNavigationAction>
    </BottomNavigation>
}`,...a.parameters?.docs?.source},description:{story:"A single action rendered inside its parent, as it is meant to be used.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true,
    showLabel: false
  },
  render: args => <BottomNavigation value="favorites" style={{
    width: 400
  }}>
      <BottomNavigationAction value="recents" label="Recents">
        🕘
      </BottomNavigationAction>
      <BottomNavigationAction {...args}>⭐</BottomNavigationAction>
    </BottomNavigation>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <BottomNavigation value="favorites" style={{
    width: 400
  }}>
      <BottomNavigationAction {...args} selected>
        ⭐
        <span slot="label">
          <strong>Favs</strong>
        </span>
      </BottomNavigationAction>
    </BottomNavigation>
}`,...s.parameters?.docs?.source}}};export{s as CustomLabelSlot,a as InsideBottomNavigation,n as SelectedOnly,v as __namedExportsOrder,m as default};
