import{j as e}from"./iframe-7KbjxAZ3.js";import"./index-3LxRijqB.js";import{a as r,b as c,T as v}from"./timeline-dot-CQUz-J98.js";import"./preload-helper-Bs85Y4nq.js";const T={title:"Components/Data display/TimelineItem",component:r,parameters:{layout:"padded"},argTypes:{position:{control:"select",options:["left","right"]},alternate:{control:"boolean"}},args:{position:"right",alternate:!1}},u={background:"var(--ui-color-bg-paper, #fff)",padding:8,maxWidth:560},m={display:"flex",gap:8,alignItems:"flex-start"},l={fontWeight:500},a={fontSize:14,color:"rgba(0, 0, 0, 0.6)"},p={fontSize:13,color:"rgba(0, 0, 0, 0.6)"},y=n=>e.jsx("div",{style:u,children:e.jsxs(r,{...n,children:[e.jsxs("div",{style:m,children:[e.jsx(c,{color:"primary"}),e.jsxs("div",{children:[e.jsx("div",{style:l,children:"Order placed"}),e.jsx("div",{style:a,children:"We received your order."})]})]}),e.jsx("div",{slot:"opposite",style:p,children:"09:30"})]})}),s={render:y},o={args:{position:"left"},render:y},d={args:{alternate:!0},render:y},t={render:()=>e.jsxs(v,{position:"alternate",children:[e.jsxs(r,{children:[e.jsxs("div",{style:m,children:[e.jsx(c,{color:"primary"}),e.jsxs("div",{children:[e.jsx("div",{style:l,children:"Order placed"}),e.jsx("div",{style:a,children:"We received your order."})]})]}),e.jsx("div",{slot:"opposite",style:p,children:"09:30"})]}),e.jsxs(r,{children:[e.jsxs("div",{style:m,children:[e.jsx(c,{color:"success"}),e.jsxs("div",{children:[e.jsx("div",{style:l,children:"Delivered"}),e.jsx("div",{style:a,children:"Handed to the recipient."})]})]}),e.jsx("div",{slot:"opposite",style:p,children:"14:05"})]})]})},i={render:()=>e.jsx(v,{children:[["2019 - 2021","Aurora Post","Subtitling and QC"],["2021 - 2023","Northwind Media","Localization lead"],["2023 - now","Freelance","Script translation"]].map(([n,x,h])=>e.jsxs(r,{style:{"--ui-timeline-opposite-width":"180px","--ui-timeline-opposite-padding":"20px 24px 12px 0","--ui-timeline-content-padding":"16px 0 16px 24px"},children:[e.jsxs("div",{children:[e.jsx("div",{style:l,children:x}),e.jsx("div",{style:a,children:h})]}),e.jsx("div",{slot:"opposite",style:{...p,textAlign:"right"},children:n})]},n))})},I=["Default","PositionLeft","Alternate","InsideTimeline","DateGutter"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: renderItem
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'left'
  },
  render: renderItem
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    alternate: true
  },
  render: renderItem
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Timeline position="alternate">
      <TimelineItem>
        <div style={rowStyle}>
          <TimelineDot color="primary" />
          <div>
            <div style={titleStyle}>Order placed</div>
            <div style={bodyStyle}>We received your order.</div>
          </div>
        </div>
        <div slot="opposite" style={oppositeStyle}>
          09:30
        </div>
      </TimelineItem>
      <TimelineItem>
        <div style={rowStyle}>
          <TimelineDot color="success" />
          <div>
            <div style={titleStyle}>Delivered</div>
            <div style={bodyStyle}>Handed to the recipient.</div>
          </div>
        </div>
        <div slot="opposite" style={oppositeStyle}>
          14:05
        </div>
      </TimelineItem>
    </Timeline>
}`,...t.parameters?.docs?.source},description:{story:"Inside its parent, which is what assigns position/alternate to the items.",...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Timeline>
      {[['2019 - 2021', 'Aurora Post', 'Subtitling and QC'], ['2021 - 2023', 'Northwind Media', 'Localization lead'], ['2023 - now', 'Freelance', 'Script translation']].map(([date, company, role]) => <TimelineItem key={date} style={{
      '--ui-timeline-opposite-width': '180px',
      '--ui-timeline-opposite-padding': '20px 24px 12px 0',
      '--ui-timeline-content-padding': '16px 0 16px 24px'
    } as React.CSSProperties}>
          <div>
            <div style={titleStyle}>{company}</div>
            <div style={bodyStyle}>{role}</div>
          </div>
          <div slot="opposite" style={{
        ...oppositeStyle,
        textAlign: 'right'
      }}>
            {date}
          </div>
        </TimelineItem>)}
    </Timeline>
}`,...i.parameters?.docs?.source},description:{story:"The two halves are symmetric by default. A fixed date gutter comes from\n`--ui-timeline-opposite-width` / `--ui-timeline-*-padding` on the item, so a\npage can shape the row without reaching into parts.",...i.parameters?.docs?.description}}};export{d as Alternate,i as DateGutter,s as Default,t as InsideTimeline,o as PositionLeft,I as __namedExportsOrder,T as default};
