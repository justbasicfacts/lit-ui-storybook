import{j as r}from"./iframe-7KbjxAZ3.js";import"./index-3LxRijqB.js";import{T as o}from"./typography-CCEeJc5Q.js";import"./preload-helper-Bs85Y4nq.js";const p=["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","overline","button"],h={title:"Components/Data display/Typography",component:o,parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:p},component:{control:"text"},align:{control:"select",options:["","left","center","right","justify"]},color:{control:"text"},gutterBottom:{control:"boolean"},noWrap:{control:"boolean"},children:{control:"text"}},args:{variant:"body1",children:"Typography renders the semantic tag for the chosen variant."}},a={},n={render:()=>r.jsx("div",{children:["h1","h2","h3","h4","h5","h6"].map(e=>r.jsx(o,{variant:e,children:`Heading ${e.toUpperCase()}`},e))})},s={render:()=>r.jsxs("div",{children:[r.jsx(o,{variant:"subtitle1",children:"Subtitle 1"}),r.jsx(o,{variant:"subtitle2",children:"Subtitle 2"}),r.jsx(o,{variant:"body1",children:"Body 1 — 16px paragraph text."}),r.jsx(o,{variant:"body2",children:"Body 2 — 14px paragraph text."})]})},i={render:()=>r.jsxs("div",{children:[r.jsx(o,{variant:"overline",color:"text.secondary",gutterBottom:!0,children:"Overline"}),r.jsx(o,{variant:"caption",color:"text.secondary",children:"Caption text at 12px."}),r.jsx(o,{variant:"button",color:"primary",children:"Button text"})]})},t={render:()=>r.jsxs("div",{children:[["primary","secondary","error","text.secondary","text.disabled"].map(e=>r.jsxs(o,{variant:"body2",color:e,gutterBottom:!0,children:['color="',e,'"']},e)),r.jsx(o,{variant:"body2",color:"#0f766e",gutterBottom:!0,children:'color="#0f766e" (raw, via --ui-typography-color)'}),r.jsx("style",{children:"ui-typography.page-override { color: crimson; }"}),r.jsx(o,{className:"page-override",variant:"body2",color:"text.secondary",children:'A page rule on the host wins over color="text.secondary".'})]})},u=["Default","Headings","BodyAndSubtitles","OverlineCaptionButton","Colours"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      {(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const).map(variant => <Typography key={variant} variant={variant}>
          {\`Heading \${variant.toUpperCase()}\`}
        </Typography>)}
    </div>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography variant="body1">Body 1 — 16px paragraph text.</Typography>
      <Typography variant="body2">Body 2 — 14px paragraph text.</Typography>
    </div>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <Typography variant="overline" color="text.secondary" gutterBottom>
        Overline
      </Typography>
      <Typography variant="caption" color="text.secondary">
        Caption text at 12px.
      </Typography>
      <Typography variant="button" color="primary">
        Button text
      </Typography>
    </div>
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      {(['primary', 'secondary', 'error', 'text.secondary', 'text.disabled'] as const).map(color => <Typography key={color} variant="body2" color={color} gutterBottom>
          color=&quot;{color}&quot;
        </Typography>)}
      <Typography variant="body2" color="#0f766e" gutterBottom>
        color=&quot;#0f766e&quot; (raw, via --ui-typography-color)
      </Typography>
      <style>{'ui-typography.page-override { color: crimson; }'}</style>
      <Typography className="page-override" variant="body2" color="text.secondary">
        A page rule on the host wins over color=&quot;text.secondary&quot;.
      </Typography>
    </div>
}`,...t.parameters?.docs?.source},description:{story:"Palette keys resolve inside the component, so no inline style lands on the\nhost and a page rule can still win. A raw CSS colour has to be handed over as\n`--ui-typography-color`, which is what you see in devtools for those.",...t.parameters?.docs?.description}}};export{s as BodyAndSubtitles,t as Colours,a as Default,n as Headings,i as OverlineCaptionButton,u as __namedExportsOrder,h as default};
