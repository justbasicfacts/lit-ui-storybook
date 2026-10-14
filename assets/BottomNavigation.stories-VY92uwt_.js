import{j as t}from"./iframe-CI8tjnlt.js";import"./index-C156ONKY.js";import{B as r,a as e}from"./bottom-navigation-action-BPj2od0k.js";import"./preload-helper-Bs85Y4nq.js";const u={title:"Components/BottomNavigation",component:r,parameters:{layout:"padded"},argTypes:{value:{control:"text"},showLabels:{control:"boolean"},onChange:{action:"changed"}},args:{value:"favorites",showLabels:!1}},o={render:a=>t.jsxs(r,{...a,style:{width:500},children:[t.jsx(e,{value:"recents",label:"Recents",children:"🕘"}),t.jsx(e,{value:"favorites",label:"Favorites",children:"⭐"}),t.jsx(e,{value:"nearby",label:"Nearby",children:"📍"})]})},n={args:{value:"nearby",showLabels:!0},render:a=>t.jsxs(r,{...a,style:{width:500},children:[t.jsx(e,{value:"recents",label:"Recents",children:"🕘"}),t.jsx(e,{value:"favorites",label:"Favorites",children:"⭐"}),t.jsx(e,{value:"nearby",label:"Nearby",children:"📍"})]})},i={args:{value:"folder"},render:a=>t.jsxs(r,{...a,style:{width:640},children:[t.jsx(e,{value:"recents",label:"Recents",children:"🕘"}),t.jsx(e,{value:"favorites",label:"Favorites",children:"⭐"}),t.jsx(e,{value:"folder",label:"Folder",children:"📁"}),t.jsx(e,{value:"settings",label:"Settings",children:"⚙️"})]})},m=["Default","WithLabels","FourActions"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <BottomNavigation {...args} style={{
    width: 500
  }}>
      <BottomNavigationAction value="recents" label="Recents">
        🕘
      </BottomNavigationAction>
      <BottomNavigationAction value="favorites" label="Favorites">
        ⭐
      </BottomNavigationAction>
      <BottomNavigationAction value="nearby" label="Nearby">
        📍
      </BottomNavigationAction>
    </BottomNavigation>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'nearby',
    showLabels: true
  },
  render: args => <BottomNavigation {...args} style={{
    width: 500
  }}>
      <BottomNavigationAction value="recents" label="Recents">
        🕘
      </BottomNavigationAction>
      <BottomNavigationAction value="favorites" label="Favorites">
        ⭐
      </BottomNavigationAction>
      <BottomNavigationAction value="nearby" label="Nearby">
        📍
      </BottomNavigationAction>
    </BottomNavigation>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'folder'
  },
  render: args => <BottomNavigation {...args} style={{
    width: 640
  }}>
      <BottomNavigationAction value="recents" label="Recents">
        🕘
      </BottomNavigationAction>
      <BottomNavigationAction value="favorites" label="Favorites">
        ⭐
      </BottomNavigationAction>
      <BottomNavigationAction value="folder" label="Folder">
        📁
      </BottomNavigationAction>
      <BottomNavigationAction value="settings" label="Settings">
        ⚙️
      </BottomNavigationAction>
    </BottomNavigation>
}`,...i.parameters?.docs?.source}}};export{o as Default,i as FourActions,n as WithLabels,m as __namedExportsOrder,u as default};
