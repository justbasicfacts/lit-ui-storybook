import{R as d,j as e}from"./iframe-7KbjxAZ3.js";import{o as h,a8 as u}from"./index-3LxRijqB.js";import{G as l}from"./group-Z-IsLXGa.js";import{S as y}from"./simple-grid-CmqCt0bi.js";import{T as m}from"./typography-CCEeJc5Q.js";import{S as g}from"./svg-icon-z1R1uWPA.js";import"./preload-helper-Bs85Y4nq.js";const n=h({tagName:"ui-theme-icon",elementClass:u,react:d}),I={title:"Components/Data display/ThemeIcon",component:n,parameters:{layout:"padded"},argTypes:{variant:{control:"inline-radio",options:["filled","light","outline"]},color:{control:"select",options:["primary","secondary","error","warning","info","success"]},size:{control:{type:"number",min:24,max:80,step:4}},radius:{control:"inline-radio",options:["sm","md","lg","pill"]}},args:{variant:"filled",color:"primary",size:40,radius:"md"}},o=e.jsx(g,{label:"Done",children:e.jsx("path",{d:"M5 13l4 4L19 7",fill:"none",stroke:"currentColor","stroke-width":"2"})}),a={render:r=>e.jsx(n,{...r,children:o})},s={render:()=>e.jsx(l,{spacing:2,children:["filled","light","outline"].map(r=>e.jsx(n,{variant:r,size:44,children:o},r))})},i={render:()=>e.jsx(l,{spacing:2,wrap:!0,children:["primary","secondary","error","warning","info","success"].map(r=>e.jsx(n,{color:r,size:44,children:o},r))})},t={render:()=>e.jsx(l,{spacing:2,wrap:!0,children:["sm","md","lg","pill"].map((r,p)=>e.jsx(n,{radius:r,size:36+p*6,variant:"light",children:o},r))})},c={render:()=>e.jsx(y,{cols:2,spacing:3,style:{maxWidth:640},children:[["Themed","Every colour comes from the active theme."],["Framework free","Plain HTML, React, Vue or anything else."],["Token driven","One theme restyles the whole library."],["Tested","Contract tests run on every push."]].map(([r,p])=>e.jsxs(l,{spacing:2,align:"flex-start",wrap:!1,children:[e.jsx(n,{variant:"light",color:"primary",radius:"pill",size:32,children:o}),e.jsxs("div",{children:[e.jsx(m,{variant:"subtitle2",component:"p",children:r}),e.jsx(m,{variant:"body2",color:"text.secondary",component:"p",children:p})]})]},r))})},G=["Default","Variants","Colors","RadiusAndSize","FeatureList"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <ThemeIcon {...args}>{check}</ThemeIcon>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Group spacing={2}>
      {(['filled', 'light', 'outline'] as const).map(variant => <ThemeIcon key={variant} variant={variant} size={44}>
          {check}
        </ThemeIcon>)}
    </Group>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Group spacing={2} wrap>
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success'] as const).map(color => <ThemeIcon key={color} color={color} size={44}>
            {check}
          </ThemeIcon>)}
    </Group>
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Group spacing={2} wrap>
      {(['sm', 'md', 'lg', 'pill'] as const).map((radius, index) => <ThemeIcon key={radius} radius={radius} size={36 + index * 6} variant="light">
          {check}
        </ThemeIcon>)}
    </Group>
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <SimpleGrid cols={2} spacing={3} style={{
    maxWidth: 640
  }}>
      {[['Themed', 'Every colour comes from the active theme.'], ['Framework free', 'Plain HTML, React, Vue or anything else.'], ['Token driven', 'One theme restyles the whole library.'], ['Tested', 'Contract tests run on every push.']].map(([title, body]) => <Group key={title} spacing={2} align="flex-start" wrap={false}>
          <ThemeIcon variant="light" color="primary" radius="pill" size={32}>
            {check}
          </ThemeIcon>
          <div>
            <Typography variant="subtitle2" component="p">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="p">
              {body}
            </Typography>
          </div>
        </Group>)}
    </SimpleGrid>
}`,...c.parameters?.docs?.source}}};export{i as Colors,a as Default,c as FeatureList,t as RadiusAndSize,s as Variants,G as __namedExportsOrder,I as default};
